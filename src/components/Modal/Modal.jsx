import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/testsSlice";
import "./modal.css";

const portalContainer = document.getElementById("modal-container");

const ModalView = ({ title, content, btnSuccess }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal());
  };

  return createPortal(
    <div className="modal-block">
      <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}>
              </button>
            </div>
            <div className="modal-body">
              <p>{content}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Отмена
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={btnSuccess}
              >
                Начать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalContainer
  );
};
export default ModalView;
