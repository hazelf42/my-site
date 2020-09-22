import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import "./Header.css";
export const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = "0px",
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    });
    const current = target.current;
    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  });
};

export const ProgImage = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <React.Fragment>
      <img
        style={{ ...props.style, visibility: isLoaded ? "hidden" : "visible" }}
        alt={props.alt}
        src={props.thumb}
        className="image thumb"
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        style={{ ...props.style, opacity: isLoaded ? 1 : 0 }}
        alt={props.alt}
        src={props.src}
        className={props.className}
      />
    </React.Fragment>
  );
};

export const ImageContainer = (props) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });
  return (
    <div
      ref={ref}
      style={props.style}
      className={"image-container " + props.className}
    >
      {isVisible && (
        <ProgImage
          src={props.src}
          thumb={props.thumb}
          alt={props.alt}
          className={props.className}
          style={{ ...props.style}}
        />
      )}
    </div>
  );
};
