import "./DeleteConfirmationModal.css";
import closeIcon from "../../assets/close.svg";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button onClick={onClose} type="button" className="modal__close-delete">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>

        <p className="modal__confirm-text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>

        <button
          type="button"
          className="modal__confirm-delete"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>

        <button
          type="button"
          className="modal__confirm-cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
