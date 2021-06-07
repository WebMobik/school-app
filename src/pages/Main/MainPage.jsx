import React from "react";
import { useHistory } from "react-router";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const history = useHistory();

  const handleGoToDirectory = () => {
    history.push('/html');
  }

  const handleGoToProfile = () => {
    history.push('/sign-in');
  }

  return (
    <div className={`${styles.mainContent} content`}>
      <div className={styles.content}>
        <h1>Справочник с тестом по HTML</h1>
        <p>
          HTML — стандартизированный язык разметки документов во Всемирной паутине.
          Большинство веб-страниц содержат описание разметки на языке HTML.
          Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст
          отображается на экране монитора компьютера или мобильного устройства.
        </p>
        <button
          onClick={handleGoToDirectory}
          className="btn btn-success me-3"
        >
          Справочник
        </button>
        <button
          onClick={handleGoToProfile}
          className="btn btn-success"
        >
          Профиль
        </button>
      </div>
    </div>
  );
};

export default MainPage;
