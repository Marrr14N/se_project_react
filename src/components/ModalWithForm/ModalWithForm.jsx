import "./ModalWithForm.css";
import closeIcon from "../../assets/close.svg";

function ModalWithForm({ children, buttonText, title, name, isOpen, onClose }) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className={`modal__content modal__content_type_${name}`}>
        <h2 className="modal__title">{title}</h2>

        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>

        <form className="modal__form" name={name}>
          {children}

          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
