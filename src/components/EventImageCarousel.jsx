import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_ROTATE_MS = 4000;

export default function EventImageCarousel({ images, alt }) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i) => {
      setIndex((i + images.length) % images.length);
    },
    [images.length]
  );

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Auto-rotates on a timer, and restarts that timer every time the index changes — whether from the timer itself or a manual click, so a manual click always buys a full interval before it moves again.

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [index, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="event-carousel">
      <img
        src={images[index]}
        alt={alt ? `${alt} photo ${index + 1}` : `Photo ${index + 1}`}
        loading="lazy"
        className="event-carousel-img"
      />
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="event-carousel-arrow left"
            onClick={prev}
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="event-carousel-arrow right"
            onClick={next}
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </button>
          <div className="event-carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`event-carousel-dot${i === index ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}