import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { doTranslations } from '../../services/translationService';


// Slices
import { openModal } from "../../store/slices/modalSlice";
import { Modal } from "../../components/common/Modal/Modal";





const TestPage: React.FC = () => {

  const dispatch = useDispatch();
  const openModalType = useSelector(
    (state: RootState) => state.modal.openModal
  );

  const openLoginModal = () => {
    dispatch(openModal("Login"));
  };



  const [translations, setTranslations] = useState<Record<string, string>>({});

  const currentLocale = useSelector(
    (state: RootState) => state.locales.locale
  );


  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const data = await doTranslations(['welcome_message', 'good_message', 'test.msg'], false);
        setTranslations(data);
      } catch (err) {
        console.log('Error fetching translations');
      } 
    };

    loadTranslations();

    

  }, [currentLocale]);


  return (
    <div className="basic-page">
      Test Page
      <h1 style={{ fontSize: "20px" }}>{translations['test.msg']}</h1>
      <h1>{translations['welcome_message']}</h1>
      <p>{translations['good_message']}</p>

      <button onClick={openLoginModal}>Click</button>

      {openModalType === "Login" ? <Modal styleType="base" title={"Test Modal"} content={"Test text"} buttons={null} /> : null}
      
    </div>
  );
};

export { TestPage };