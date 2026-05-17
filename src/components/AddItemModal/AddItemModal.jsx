import { useForm } from "../../hooks/useForm";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const defaultValues = { name: "", imageUrl: "", weatherType: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values, handleReset);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          className="modal__input"
          id="clothing-imageUrl"
          placeholder="Image URL"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label
          htmlFor="choiceHot"
          className="modal__label modal__label_type_radio"
        >
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceHot"
            name="weatherType"
            value="hot"
            onChange={handleChange}
            checked={values.weatherType === "hot"}
            required
          />
          Hot
        </label>

        <label
          htmlFor="choiceWarm"
          className="modal__label modal__label_type_radio"
        >
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceWarm"
            name="weatherType"
            value="warm"
            onChange={handleChange}
            checked={values.weatherType === "warm"}
          />
          Warm
        </label>

        <label
          htmlFor="choiceCold"
          className="modal__label modal__label_type_radio"
        >
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceCold"
            name="weatherType"
            value="cold"
            onChange={handleChange}
            checked={values.weatherType === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
