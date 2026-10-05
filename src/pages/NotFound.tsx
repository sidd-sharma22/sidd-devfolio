import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="not-found-page">
      <div className="not-found-card glass-panel">
        <h1>404</h1>
        <p>Sorry, that page doesn&apos;t exist.</p>
        <a href="/" className="text-link">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
