import ReactDOM from "react-dom";

const Modal = ({ children , isOpen , closeModal, className, ...props }) => {
    return ReactDOM.createPortal(<>
        {
            isOpen &&         
            <div className="fixed w-full h-full grid place-items-center z-40">
                <div className="w-full h-full bg-[rgba(0,0,0,0.5)]" onClick={closeModal}/>
                <div className={`fixed bg-main scale-up transition-all ${className}`} {...props} >
                    {children}
                </div>
            </div>
        }
    </>, document.getElementById("modal") )
};

export default Modal;