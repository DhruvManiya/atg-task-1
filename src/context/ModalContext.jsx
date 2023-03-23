const { createContext } = require("react");

const ModalContext = createContext({
    isOpen: null,
    setIsOpen: () => {}
});

export default ModalContext;