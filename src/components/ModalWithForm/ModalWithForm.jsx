import "./ModalWithForm.css";
import closeIcon from "../../assets/close.svg";

const ModalWithForm = ({
  title,
  name,
  buttonText = "Save",
  onClose,
  children,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className={`modal__content modal__content_type_${name}`}>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>

        <h3 className="modal__title">{title}</h3>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}

          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
