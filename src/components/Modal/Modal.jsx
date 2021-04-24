import React from 'react';
import { createPortal } from 'react-dom';

const portalContainer = document.getElementById('modal-container')

const ModalView = ({ title, content, btnSuccess, btnCancel }) => createPortal(
    <div className="modal" tabindex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close"></button>
                </div>
                <div className="modal-body">
                    <p>{content}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={btnCancel}>Выйти</button>
                    <button type="button" className="btn btn-primary" onClick={btnSuccess}>Oк</button>
                </div>
            </div>
        </div>
    </div>
, portalContainer)

export default ModalView
