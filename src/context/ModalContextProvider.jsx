import React,{useState} from 'react'
import ModalContext from './ModalContext';

const ModalContextProvider = (props) => {
     const [showModal, setShowModal] = useState(false);

    const setIsOpen = (data) => {
        setShowModal(data)
    }

    const initialData = {
        isOpen:showModal,
        setIsOpen
    }

    return(
        <ModalContext.Provider value={initialData}>{props.children}</ModalContext.Provider>
    )
}

export default ModalContextProvider