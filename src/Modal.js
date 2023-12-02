import "./Modal.css"; // Add your modal styling in a separate CSS file

const Modal = ({ children, closeModal, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
