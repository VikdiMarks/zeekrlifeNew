import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useState } from "react";
import PopupModels from "../../components/PopupModels";
import xmark from "../../assets/img/x-mark.png";
import { submitOrder } from "../../api/api";

function AutoEditor() {
  const [sidebarView, setSidebarView] = useState(true);
  const [bgImg, setBgImg] = useState(null);
  const [showPopupModels, setShowPopupModels] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    surname: "",
    email: "",
  });
  const [errorFormFields, setErrorFormFields] = useState({
    firstName: false,
    lastName: false,
    surname: false,
    email: false,
  });

  const openPopupModels = () => {
    setShowPopupModels(true);
  };
  const closePopupModels = () => {
    setShowPopupModels(false);
  };

  const openModalSubmit = () => {
    setSubmitModal(true);
  };
  const closeModalSubmit = () => {
    setSubmitModal(false);
  };

  const validateEmail = (email) => {
    // Простая регулярка для проверки email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmitOrder = () => {
    const newErrorFields = {
      firstName: formFields.firstName.trim().length === 0,
      lastName: formFields.lastName.trim().length === 0,
      surname: formFields.surname.trim().length === 0,
      email:
        formFields.email.trim().length === 0 ||
        !validateEmail(formFields.email),
    };

    setErrorFormFields(newErrorFields);

    // Дополнительно можно проверять, если нет ошибок, то отправлять форму
    const formIsValid = Object.values(newErrorFields).every((field) => !field);

    if (formIsValid) {
      submitOrder(formFields);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="auto">
      <div className={"auto-view" + (sidebarView ? "" : " full")}>
        <PopupModels close={closePopupModels} show={showPopupModels} />
        <Header openPopupModels={openPopupModels} />
        <Main img={bgImg} />
      </div>
      <Sidebar
        sidebarSwitch={() => setSidebarView(!sidebarView)}
        sidebarView={sidebarView}
        switchBgImg={setBgImg}
        openModalSubmit={openModalSubmit}
      />

      <div className={"modal" + (submitModal ? " active" : "")}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Оформление заявки</h3>
            <div className="modal-btn__close" onClick={closeModalSubmit}>
              <img src={xmark} alt="" />
            </div>
          </div>
          <div className="modal-body">
            <div className="input-wrapper">
              <span className="input-label">Имя</span>
              <input
                type="text"
                className={
                  "input-text" + (errorFormFields.firstName ? " error" : "")
                }
                value={formFields.firstName}
                onChange={handleChange}
                name="firstName"
              />
              {errorFormFields.firstName && (
                <span className="input-error-message">
                  Please enter your first name
                </span>
              )}
            </div>
            <div className="input-wrapper">
              <span className="input-label">Фамилия</span>
              <input
                type="text"
                className={
                  "input-text" + (errorFormFields.surname ? " error" : "")
                }
                value={formFields.surname}
                onChange={handleChange}
                name="surname"
              />
              {errorFormFields.surname && (
                <span className="input-error-message">
                  Please enter your surname
                </span>
              )}
            </div>
            <div className="input-wrapper">
              <span className="input-label">Отчество</span>
              <input
                type="text"
                className={
                  "input-text" + (errorFormFields.lastName ? " error" : "")
                }
                value={formFields.lastName}
                onChange={handleChange}
                name="lastName"
              />
              {errorFormFields.lastName && (
                <span className="input-error-message">
                  Please enter your last name
                </span>
              )}
            </div>
            <div className="input-wrapper">
              <span className="input-label">E-mail</span>
              <input
                type="email"
                className={
                  "input-text" + (errorFormFields.email ? " error" : "")
                }
                value={formFields.email}
                onChange={handleChange}
                name="email"
              />
              {errorFormFields.email && (
                <span className="input-error-message">
                  Please enter a valid email
                </span>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal-btn__submit" onClick={handleSubmitOrder}>
              Оформить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoEditor;
