import React from "react";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={`${styles.mainContent} content`}>
      <div className={styles.content}>
        <h1>Wellcome to HTML-keys app</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          fugit voluptatibus inventore dolorem. Quos tenetur minima repellat,
          animi enim nihil reprehenderit asperiores illo rerum sequi aperiam
          voluptate ullam est velit?
        </p>
        <button className="btn btn-success me-3">View HTML</button>
        <button className="btn btn-success">Go to test</button>
      </div>
    </div>
  );
};

export default MainPage;
