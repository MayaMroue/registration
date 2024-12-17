import React from "react";
import "./TextLine.scss";

const TextLine = () => {
  const word = "PORCELAINE ";
  const repeatCount = 20; //times to repeat

  return (
    <div className="text-line border-t">
      <div className="carousel">
        {Array(repeatCount)
          .fill(word)
          .map((text, index) => (
            <span className="font-AItalic CarouselSpan" key={index}>
              {text}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TextLine;
