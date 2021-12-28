import React, {useContext, useState} from 'react';

const ContextWrapper = React.createContext()

const Context = ({children}) => {



	const [isOpen, setIsOpen] = useState("")
	const [modalIsOpen, setModalIsOpen] = useState("")
	const [modalContent, setModalContent] = useState(null)

	const handleClick = () => {
		if (isOpen) {
			setIsOpen("")
		} else {
			setIsOpen("is-open")
		}

	}

	const handleOpenModal = (e  , item  ) => {
		e.stopPropagation();
		if (modalIsOpen) {
			setModalIsOpen("")
			setModalContent(null)

		} else {
			setModalIsOpen("open-modal")
			setModalContent(item)
		}
	}
	console.log(modalContent , "<<==modalContent==>")


	return (
		<ContextWrapper.Provider
			value={{isOpen, setIsOpen, handleClick, handleOpenModal, modalIsOpen,setModalIsOpen , modalContent}}>
			{children}
		</ContextWrapper.Provider>
	);
}

export default Context


export const useGlobalContext = () => {
	return useContext(ContextWrapper)
}

