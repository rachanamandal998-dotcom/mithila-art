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
      className="bg-white border border-gray-200 shadow-lg h-full p-3 flex flex-col justify-center"
    >
      <div className="flex flex-col items-center justify-center h-full overflow-hidden">
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
      className="flex flex-col items-center justify-center py-10 px-4"
      style={{ background: "linear-gradient(180deg, #FFF8F0, #FFE8D6)" }}
    >
      {/* TITLE */}
      <h1 className="mb-6 text-3xl md:text-4xl font-bold font-playfair">
        THE ARCHIVE OF AGES
      </h1>

      {/* BOOK (BIG SIZE FIXED HERE) */}
      <div className="w-full max-w-4xl flex justify-center">
        <HTMLFlipBook
          width={420}     // 🔥 increased from 280
          height={560}    // 🔥 increased from 380
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
              className="h-full w-full flex flex-col justify-center items-center text-center text-white rounded-lg p-6"
              style={{ background: "linear-gradient(135deg, #E85D04, #3A0CA3)" }}
            >
              <div className="text-6xl mb-3">🎨</div>
              <h2 className="text-2xl font-bold">Mithila Art</h2>
              <p className="text-sm opacity-80">Ancient Wisdom in Colors</p>
            </div>
          </Page>

          {/* PAGES */}
          {galleryData.map((item, index) => (
            <Page key={item.id} pageNumber={index + 1}>
              <img
                src={item.image}
                className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-lg mb-4"
              />
              <h2 className="text-base font-bold text-center">{item.title}</h2>
              <h3 className="text-xs text-blue-500 uppercase">{item.subtitle}</h3>
              <p className="text-xs text-gray-500">📍 {item.location}</p>
              <p className="text-sm text-gray-600 text-center px-2">
                {item.description}
              </p>
            </Page>
          ))}

          {/* BACK COVER */}
          <Page pageNumber={galleryData.length + 1}>
            <div className="h-full flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg">
              <h2 className="text-xl">End of Gallery</h2>
              <p className="text-xs opacity-70">Thank you for visiting</p>
            </div>
          </Page>
        </HTMLFlipBook>
      </div>

      {/* CONTROLS */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
          className="px-5 py-2 bg-white rounded shadow hover:bg-gray-200"
        >
          Prev
        </button>

        <button
          onClick={() => flipBookRef.current?.pageFlip().flipNext()}
          className="px-5 py-2 bg-white rounded shadow hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookGallery;
