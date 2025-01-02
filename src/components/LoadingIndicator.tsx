
import React from 'react';

interface LoadingIndicatorProps {
  isVisible: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="loading-indicator">
      Loading...
    </div>
  );
};

export default LoadingIndicator;
