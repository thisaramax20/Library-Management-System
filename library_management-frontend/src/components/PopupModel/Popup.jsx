import { useEffect } from "react";

const Popup = ({ closePopup, title, content, type }) => {
  useEffect(() => {
    // Automatically close the popup after 3 seconds for the user action
    const timer = setTimeout(() => {
      closePopup();
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [closePopup]);

  // Dynamic classes for different popup types (success, error, info)
  const popupStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`p-6 rounded-lg shadow-lg max-w-sm w-full ${popupStyles[type]}`}
      >
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{content}</p>
        <div className="flex justify-end">
          <button
            onClick={closePopup}
            className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
