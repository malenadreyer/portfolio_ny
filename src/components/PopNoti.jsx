
import React from "react";

const PopupNotification = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <p className="text-gray-900 text-lg">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
        >
          Luk
        </button>
      </div>
    </div>
  );
};

export default PopupNotification;