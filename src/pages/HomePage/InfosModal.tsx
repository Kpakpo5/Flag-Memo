import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type modalProps = {
    modalIsOpen: boolean,
    closeModal: Function      
}

const InfosModal: React.FC<modalProps> = ({modalIsOpen, closeModal}) => {

    return createPortal(
        (modalIsOpen && 
        <div className="fixed flex items-center justify-center inset-0 bg-black/75 px-6 py-12 z-0">
            <div className="relative bg-stone-100 p-4 overflow-y-auto max-w-2xl border-solid border-amber-500 bg-white border-4 rounded z-1 animate-scale-in">
                <button 
                    onClick={() => closeModal()}
                    className="absolute top-1 right-1 flex justify-center items-center border-solid border-amber-500 bg-white border-4 rounded-full w-5 h-5 p-3 z-50"
                >
                    <FontAwesomeIcon 
                            className="text-xl font-extrabold text-black italic "
                            icon={faXmark}
                    />
                </button>
                <p className="font-medium mt-8">
                    <strong>Bienvenue sur FLAG-MEMO !</strong><br /><br />
                    Les drapeaux ça te parle un peu ? Testes ta mémoire et améliore tes connaissances avec ce quiz .<br /><br />
                    &Agrave; chaque étape, tu disposes de 15 secondes pour faire ton choix.<br />
                    Un bon choix dans les 5 premières secondes te donne le maximum de points qui est de 10. Après ces 5 secondes, le nombre de points obtenus sera égal au nombre de secondes restantes au moment du choix.<br />
                    Bien évidemment, aucun point n'est obtenu en cas de mauvaise réponse ou lorsque le temps est écoulé. <br /><br />
                    Bon quiz !
                </p>
            </div>
        </div>
        ),
        document.getElementById("infos-modal")
    );
}


export default InfosModal;