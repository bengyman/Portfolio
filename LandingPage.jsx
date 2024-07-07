import React, { useState } from 'react';
import { useTrail, animated as a } from '@react-spring/web';
import './LandingPage.css';

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const LandingPage = () => {
  const [open, set] = useState(true);
  return (
    <div className="container" onClick={() => set(state => !state)}>
      <Trail open={open}>
        <span>Welcome</span>
        <span>to</span>
        <span>my</span>
        <span>portfolio</span>
      </Trail>
    </div>
  );
};

export default LandingPage;
