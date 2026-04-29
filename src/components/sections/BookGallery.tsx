import React, { useRef, useCallback, useMemo, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import galleryData from '../../data/pages.json';

interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div ref={ref} className="h-full w-full">
      <div className="bg-white border border-gray-200 shadow-xl h-full relative overflow-hidden">
        <div className="p-3 sm:p-4 md:p-6 h-full flex flex-col items-center overflow-y-auto justify-start sm:justify-center">
          {props.children}
        </div>

        {props.pageNumber > 0 && (
          <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 text- sm:text- md:text-xs text-gray-400 text-center border-t pt-0.5 bg-white/90 z-10">
            {props.pageNumber}
          </div>
        )}
      </div>
    </div>
  );
});

Page.displayName = "Page";

const BookGallery: React.FC = () => {
  const flipBookRef = useRef<any>(null);
  const audio = useMemo(() => new Audio('/sounds/page-flip(1).mp3'), []);
  const containerRef = useRef<HTMLDivElement>(null);

  const [bookSize, setBookSize] = useState({ width: 280, height: 420 });

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const vh = window.innerHeight;

      // Keep 2:3 aspect ratio for book feel
      let width: number;
      let height: number;

      if (containerWidth < 640) {
        // Mobile: 80% width, max 55vh height - compact
        width = containerWidth * 0.8;
        height = Math.min(vh * 0.55, width * 1.5);
        if (height === vh * 0.55) width = height / 1.5;
      } else if (containerWidth < 1024) {
        // Tablet: 50% width, max 280px - compact
        width = Math.min(containerWidth * 0.5, 280);
        height = width * 1.5;
      } else {
        // Desktop: max 300px wide - compact
        width = Math.min(containerWidth * 0.25, 300);
        height = width * 1.5;
      }

      setBookSize({ width: Math.floor(width), height: Math.floor(height) });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const onFlip = useCallback(() => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, [audio]);

  return (
    <>
      <style>{`
    .stf__parent.page-flip__gradient {
          display: none!important;
        }
    .stf__parent.stf__wrapper {
          overflow: visible!important;
        }
    .stf__parent.page-flip__shadow {
          display: block!important;
        }
    .overflow-y-auto::-webkit-scrollbar {
          width: 3px;
        }
    .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
      `}</style>

      <div
        className="flex flex-col items-center justify-center py-4 sm:py-8 md:py-10 px-4 min-h-screen w-full"
        style={{ background: "linear-gradient(180deg, #FFF8F0, #FFE8D6)" }}
      >
        <h1 className="mb-4 sm:mb-6 md:mb-8 text-lg sm:text-2xl md:text-4xl font-bold font-playfair text-center px-2">
          THE ARCHIVE OF AGES
        </h1>

        <div ref={containerRef} className="w-full flex justify-center">
          <HTMLFlipBook
            width={bookSize.width}
            height={bookSize.height}
            size="stretch"
            minWidth={180}
            maxWidth={600}
            minHeight={270}
            maxHeight={900}
            usePortrait={true}
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            maxShadowOpacity={0.5}
            flippingTime={700}
            ref={flipBookRef}
            onFlip={onFlip}
            className="shadow-2xl"
          >
            {/* COVER */}
            <Page pageNumber={0}>
              <div
                className="h-full w-full flex flex-col justify-center items-center text-center text-white rounded-lg p-3 sm:p-5 md:p-8"
                style={{ background: "linear-gradient(135deg, #E85D04, #3A0CA3)" }}
              >
                <div className="text-4xl sm:text-5xl md:text-7xl mb-2 md:mb-4">🎨</div>
                <h2 className="text-lg sm:text-xl md:text-3xl font-bold">Mithila Art</h2>
                <p className="text-xs sm:text-sm opacity-80 mt-2">Ancient Wisdom in Colors</p>
                <p className="text- sm:text-xs opacity-60 mt-3 md:mt-5">Tap to open →</p>
              </div>
            </Page>

            {/* PAGES */}
            {galleryData.map((item, index) => (
              <Page key={item.id} pageNumber={index + 1}>
                <div className="w-full flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48
                               object-cover rounded-lg mb-2 md:mb-4 shadow-md flex-shrink-0"
                  />
                  <h2 className="text-xs sm:text-sm md:text-lg font-bold text-center leading-tight px-2">
                    {item.title}
                  </h2>
                  <h3 className="text- sm:text- md:text-xs text-blue-500 uppercase tracking-wide mt-1 md:mt-2">
                    {item.subtitle}
                  </h3>
                  <p className="text- sm:text- md:text-xs text-gray-500 mt-1">
                    📍 {item.location}
                  </p>
                  <p className="text- sm:text- md:text-xs text-gray-600 text-center px-2 md:px-4 mt-2 md:mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Page>
            ))}

            {/* BACK COVER */}
            <Page pageNumber={galleryData.length + 1}>
              <div className="h-full w-full flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg p-3 md:p-6">
                <h2 className="text-sm sm:text-lg md:text-2xl font-semibold">End of Gallery</h2>
                <p className="text- sm:text-xs md:text-sm opacity-70 mt-2 md:mt-3">Thank you for visiting</p>
              </div>
            </Page>
          </HTMLFlipBook>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-8 flex gap-3 md:gap-5 mb-4">
          <button
            onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
            className="px-4 md:px-6 py-2 text-xs md:text-sm bg-white rounded-lg shadow hover:bg-gray-100 active:scale-95 transition font-medium"
          >
            Prev
          </button>
          <button
            onClick={() => flipBookRef.current?.pageFlip().flipNext()}
            className="px-4 md:px-6 py-2 text-xs md:text-sm bg-white rounded-lg shadow hover:bg-gray-100 active:scale-95 transition font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default BookGallery;