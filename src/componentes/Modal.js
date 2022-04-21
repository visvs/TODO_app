import ReactDOM from 'react-dom';
import '../css/modal.css'

function Modal ({children}) {
    return ReactDOM.createPortal(
        //Enviar lo que se requiera al modal
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal}