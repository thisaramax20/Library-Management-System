const Popup = ({ closePopup, title, content }) => {
  return (
    <div className="fixed inset-0 z-50">
      <div>
        <h1>{content}</h1>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
