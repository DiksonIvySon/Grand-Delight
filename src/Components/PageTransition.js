import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wraps page content in a div that fades + slides in on every route change.
 * No external libraries — pure CSS animation triggered by a key change.
 */
function PageTransition({ children }) {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    // Scroll to top on every navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div
      ref={ref}
      key={location.pathname}
      className="page-transition"
    >
      {children}
    </div>
  );
}

export default PageTransition;
