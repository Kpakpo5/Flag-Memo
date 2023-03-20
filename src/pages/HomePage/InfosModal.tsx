import ReactDOM from "react-dom"

type modalProps = {
    modalIsOpen: boolean,
    closeModal: Function      
}


const InfosModal = ({modalIsOpen, closeModal}: modalProps) => {

    return ReactDOM.createPortal(
        (modalIsOpen && 
        <div className="fixed inset-0 bg-black/75">
            <div className="fixed">
                <button 
                    onClick={() => closeModal()}
                    className="text-white"
                >
                    close Modal
                </button>

            </div>
        </div>
        ),
        document.getElementById("infos-modal")
    );
}


export default InfosModal;