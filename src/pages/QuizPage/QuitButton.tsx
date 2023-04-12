import { createPortal } from "react-dom";
import { useState } from "react";
import { useNavigate } from "react-router";

const QuitButton: React.FC = () => {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <button 
            onClick={() => setModalIsOpen(true)}
            className="bg-red-600 px-4 py-2 m-4 rounded-2xl text-white font-bold outline outline-1 outline-white outline-offset-1">
            Abandonner
        </button>
        {modalIsOpen && 
            createPortal( 
                <div className="fixed flex items-center justify-center inset-0 bg-black/75">
                    <div className="flex flex-col items-center bg-white px-12 py-8">
                        <p className="m-4 font-bold">Confirmer l'abandon ?</p>
                        <div className ="flex items-center">
                            <button 
                                onClick={() => navigate("/")}
                                className="m-4 p-3 rounded border-solid border-[1px] border-slate-400 hover:bg-amber-400"
                            >
                                confirmer
                            </button>
                            <button
                                onClick={() => setModalIsOpen(false)}
                                className="m-4 p-3 rounded border-solid border-[1px] border-slate-400 hover:bg-amber-400"
                            >
                                annuler
                            </button>
                        </div>
                    </div>
                </div>,
                document.getElementById("confirm-modal")
            )
        }   
        </>
    )
}


export default QuitButton;