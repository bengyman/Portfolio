import React, { useRef } from 'react';
import { useScroll, animated } from '@react-spring/web';
import './CustomScrollBar.css';

const X_LINES = 40;
const INITIAL_WIDTH = 20;

const CustomScrollBar = ({ children }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div ref={containerRef} className="scroll-container">
      <div className="animated-layers">
        <animated.div className="bar-container">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="bar"
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = (i + 1) / X_LINES;
                  return (
                    INITIAL_WIDTH / 4 +
                    40 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5
                      ) **
                        32
                  );
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div className="bar-container-inverted">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="bar"
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = 1 - (i + 1) / X_LINES;
                  return (
                    INITIAL_WIDTH / 4 +
                    40 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5
                      ) **
                        32
                  );
                }),
              }}
            />
          ))}
        </animated.div>
      </div>
      {children}
    </div>
  );
};

export default CustomScrollBar;
