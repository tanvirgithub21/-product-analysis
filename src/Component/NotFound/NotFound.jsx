import React from "react";
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <div className="spinner">

        <div class=" flex justify-center items-center">
          <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>

      </div>
      <div className="img">
          <img src="" alt="404" />
      </div>
    </div>
  );
};

export default NotFound;
