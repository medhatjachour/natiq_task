import React from "react";
import { Audio } from "react-loader-spinner";
const LoadingIndicator: React.FC = () => (
  <div className="items-center">
   <p> Loading...</p>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  </div>
);

export default LoadingIndicator;
