import React, { useContext, useState } from "react";
import ModalContext from "../context/ModalContext";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
const Modal = () => {
    const [signin, setSignin] = useState(false)
    const {isOpen,setIsOpen} = useContext(ModalContext);
    console.log(isOpen)
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex justify-center items-center z-[100]" onClick={() => setIsOpen(false)}>
        <div className="w-[50%]">
          {!signin ? <Signin /> : <Login />}
        </div>
      </div>
    </>
  );
};

export default Modal;
