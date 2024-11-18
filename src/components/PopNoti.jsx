
import React from "react";

const PopupNotification = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FEFEF2] p-4 rounded shadow-lg">
        <p className="text-[#343067] text-lg">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#E8B3A9] text-white rounded hover:bg-[#343067] transition"
        >
          Luk
        </button>
      </div>
    </div>
  );
};

export default PopupNotification;