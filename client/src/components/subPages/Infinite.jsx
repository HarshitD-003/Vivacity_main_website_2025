
import React from 'react';

const Infinite = (props) => {
  const { text } = props;
  const repeatedText = `${text} \u00A0`.repeat(500); // Add space between repetitions

  return (
    <div
      className="relative w-full h-16 overflow-hidden py-4"
      style={{ background: 'rgba(33, 173, 243, 1)' }}
    >
      <div className="flex whitespace-nowrap animate-scroll">
        <span className="text-2xl font-bold">{repeatedText}</span>
        <span className="text-2xl font-bold">{repeatedText}</span>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 2350s linear infinite;
          display: inline-flex;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Infinite;