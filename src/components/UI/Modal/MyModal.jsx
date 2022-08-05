import React from 'react';
import './MyModal.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = ['modal'];
    if(visible) {
        rootClasses.push('active');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {setVisible(false)}}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    )
}

export default MyModal;