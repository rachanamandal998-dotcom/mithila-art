import React, { useRef, useCallback, useMemo } from 'react';
import HTMLFlipBook from 'react-pageflip';
import galleryData from '../../data/pages.json';

// PAGE COMPONENT
interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white border border-gray-200 shadow-lg h-full relative overflow-hidden"
    >
      {/* INNER CONTENT WRAPPER */}
      <div className="p-4 sm:p-5 md:p-7 h-full flex flex-col justify-center items-center">
        {props.children}
      </div>

      {props.pageNumber > 0 && (
        <div className="absolute bottom-2 left-0 right-0 text-xs text-gray-400 text-center border-t pt-1 bg-white">
          Page {props.pageNumber}
        </div>
      )}
    </div>
  );
});


Page.displayName = "Page";

// MAIN COMPONENT
const BookGallery: React.FC = () => {
  const flipBookRef = useRef<any>(null);
  const audio = useMemo(() => new Audio('/sounds/page-flip(1).mp3'), []);

  const onFlip = useCallback(() => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, [audio]);

  return (
    <div
      className="flex flex-col items-center justify-center 
                 py-6 sm:py-10 
                 px-3 sm:px-7 md:px-5"
      style={{ background: "linear-gradient(180deg, #FFF8F0, #FFE8D6)" }}
    >
      {/* TITLE */}
      <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-center">
        THE ARCHIVE OF AGES
      </h1>

      {/* BOOK */}
      <div className="w-full max-w-4xl flex justify-center mt-2 sm:mt-6 md:px-2 ">
        <HTMLFlipBook
          width={410}
          height={560}
          size="fixed"
          minWidth={320}
          maxWidth={900}
          minHeight={450}
          maxHeight={700}
          usePortrait={true}
          showCover={true}
          mobileScrollSupport={true}
          ref={flipBookRef}
          onFlip={onFlip}
        >
          {/* COVER */}
          <Page pageNumber={0}>
            <div
              className="h-full w-full flex flex-col justify-center items-center text-center text-white rounded-lg p-4 sm:p-6"
              style={{ background: "linear-gradient(135deg, #E85D04, #3A0CA3)" }}
            >
              <div className="text-5xl sm:text-6xl mb-3">🎨</div>
              <h2 className="text-xl sm:text-2xl font-bold">Mithila Art</h2>
              <p className="text-xs sm:text-sm opacity-80">Ancient Wisdom in Colors</p>
            </div>
          </Page>

          {/* PAGES */}
          {galleryData.map((item, index) => (
            <Page key={item.id} pageNumber={index + 1}>
              <img
                src={item.image}
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 
                           object-cover rounded-lg mb-3 sm:mb-4"
              />
              <h2 className="text-sm sm:text-base font-bold text-center">
                {item.title}
              </h2>
              <h3 className="text-xs text-blue-500 uppercase">
                {item.subtitle}
              </h3>
              <p className="text-xs text-gray-500">
                📍 {item.location}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 text-center px-2">
                {item.description}
              </p>
            </Page>
          ))}

          {/* BACK COVER */}
          <Page pageNumber={galleryData.length + 1}>
            <div className="h-full flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg p-4">
              <h2 className="text-lg sm:text-xl">End of Gallery</h2>
              <p className="text-xs opacity-70">Thank you for visiting</p>
            </div>
          </Page>
        </HTMLFlipBook>
      </div>

      {/* CONTROLS */}
      <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 mb-6 sm:mb-0">
        <button
          onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
          className="px-4 sm:px-5 py-2 bg-white rounded shadow hover:bg-gray-200"
        >
          Prev
        </button>

        <button
          onClick={() => flipBookRef.current?.pageFlip().flipNext()}
          className="px-4 sm:px-5 py-2 bg-white rounded shadow hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookGallery;
