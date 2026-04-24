import React, { useRef, useCallback, useMemo } from 'react';
import HTMLFlipBook from 'react-pageflip';
import galleryData from '../../data/pages.json'; // Importing your JSON data

// 1. Page Component
interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="bg-white border border-gray-200 shadow-lg h-full p-4 flex flex-col justify-between" ref={ref}>
      <div className="flex-grow flex flex-col items-center justify-center overflow-hidden">
        {props.children}
      </div>
      <div className="text-[10px] md:text-xs text-gray-400 text-center mt-2 border-t pt-2">
        Page {props.pageNumber}
      </div>
    </div>
  );
});

// 2. Main Gallery Component
const BookGallery: React.FC = () => {
  const flipBookRef = useRef<any>(null);
  const audio = useMemo(() => new Audio('/sounds/page-flip(1).mp3'), []);

  const onFlip = useCallback(() => {
    audio.currentTime = 0;
    audio.play().catch(e => console.log("Audio play blocked:", e));
  }, [audio]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-2 md:p-8">
     <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
  THE ARCHIVE OF AGES
</h1>

      <div className="w-full max-w-2xl flex justify-center">
        <HTMLFlipBook 
          width={300} 
          height={400} 
          size="stretch" 
          minWidth={250}
          maxWidth={800}
          minHeight={350}
          maxHeight={600}
          usePortrait={true}
          showCover={true}
          mobileScrollSupport={true}
          ref={flipBookRef}
          onFlip={onFlip}
        >
          {/* Cover Page */}
          <Page pageNumber={0}>
            <div className="h-full w-full flex flex-col justify-center items-center bg-indigo-600 text-white rounded-lg p-4 text-center">
              <h2 className="text-2xl md:text-4xl font-bold">Art Gallery</h2>
              <p className="text-sm">Explore our collection</p>
            </div>
          </Page>

          {/* Mapping the JSON Data */}
          {galleryData.map((item, index) => (
            <Page key={item.id} pageNumber={index + 1}>
              <img src={item.image} alt={item.title} className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-lg md:text-xl font-bold text-gray-800 text-center">{item.title}</h2>
              <h3 className="text-[10px] md:text-sm font-semibold text-blue-500 uppercase">{item.subtitle}</h3>
              <p className="text-[10px] md:text-xs text-gray-500 mb-2">📍 {item.location}</p>
              <p className="text-gray-600 text-center text-xs md:text-sm px-2">{item.description}</p>
            </Page>
          ))}

          {/* Back Cover */}
          <Page pageNumber={galleryData.length + 1}>
            <div className="h-full w-full flex items-center justify-center bg-gray-800 text-white rounded-lg">
              <h2 className="text-xl">End of Gallery</h2>
            </div>
          </Page>
        </HTMLFlipBook>
      </div>

      <div className="mt-8 flex gap-4 w-full justify-center">
        <button onClick={() => flipBookRef.current?.pageFlip().flipPrev()} className="px-6 py-2 bg-white rounded shadow hover:bg-gray-200 transition">Previous</button>
        <button onClick={() => flipBookRef.current?.pageFlip().flipNext()} className="px-6 py-2 bg-white rounded shadow hover:bg-gray-200 transition">Next</button>
      </div>
    </div>
  );
};

export default BookGallery;