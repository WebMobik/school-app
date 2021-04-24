import React from "react";
import ItemInfo from "../../components/ItemInfo";

const Info = (props) => {
  return (
    <div className="content">
      <ItemInfo {...props} />
    </div>
  );
};

export default Info;
