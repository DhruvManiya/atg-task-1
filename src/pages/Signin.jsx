import React, { useContext, useRef, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "../ui/Button";
import ModalContext from "../context/ModalContext";
import CloseIcon from "@mui/icons-material/Close";

const Signin = ({ onClose }) => {
  const { setIsOpen } = useContext(ModalContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ConfirmPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      firstNameRef.current.value &&
      lastNameRef.current.value &&
      emailRef.current.value &&
      ConfirmPasswordRef.current.value &&
      passwordRef.current.value === ConfirmPasswordRef.current.value
    ) {
      sessionStorage.setItem("firstName", firstNameRef.current.value);
      sessionStorage.setItem("lastName", lastNameRef.current.value);
      sessionStorage.setItem("email", emailRef.current.value);

      setIsOpen(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <main className="h-[38rem] w-full bg-primary rounded-md">
      <section className="md:flex hidden justify-center items-center h-[3.125rem] rounded-t-md w-full bg-dropdown_bg text-createAccount_desc font-[600]">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </section>
      <section className="flex justify-evenly items-center mx-8">
        <div className="sm:w-[70%] w-full">
          <h1 className="my-6 text-[1.75rem] font-[900] flex justify-between items-center">
            Create Account{" "}
            <div onClick={() => setIsOpen(false)} className="md:hidden block">
              <CloseIcon />
            </div>
          </h1>
          {error && (
            <p className={`${error && " text-red-400"}`}>
              Please input valid input
            </p>
          )}
          <form onSubmit={submitHandler} className="flex flex-col w-full">
            <div className="flex w-full">
              <input
                ref={firstNameRef}
                type="text"
                placeholder="First Name"
                className=" outline-none h-[3rem] border-y-[1px] border-l-[1px] border-gray-300 p-3 w-[50%]"
              />
              <input
                ref={lastNameRef}
                type="text"
                placeholder="Last Name"
                className=" outline-none h-[3rem] border-[1px] border-gray-300 p-3 w-[50%]"
              />
            </div>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className=" outline-none h-[3rem] border-x-[1px] border-b-[1px] border-gray-300 p-3"
            />
            <div className=" h-[3rem] border-x-[1px] border-gray-300 p-3 flex justify-between">
              <input
                ref={passwordRef}
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                className=" outline-none h-full "
              />
              <div
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <VisibilityIcon />
              </div>
            </div>
            <input
              ref={ConfirmPasswordRef}
              type="password"
              placeholder="Confirm Passeord"
              className=" outline-none h-[3rem] border-[1px] border-gray-300 p-3"
            />
            <div className=" flex justify-between items-center w-full">
              <div className="md:w-full w-[50%]">
                <Button name="Create Account" type="submit" />
              </div>
              <span onClick={() => onClose()} className="md:hidden border-black underline cursor-pointer text-[0.9rem]">or, Sign In</span>
            </div>
          </form>
          <div className="mb-3 py-2 flex justify-center items-center border-[1px] border-gray-300 gap-3 cursor-pointer">
            <FacebookIcon className=" text-button_bg" />
            <span> Sign up with Facebook </span>
          </div>
          <div className="my-3 py-2 flex justify-center items-center border-[1px] border-gray-300 gap-3 cursor-pointer">
            <GoogleIcon className="text-gray-400" />
            <span> Sign up with Google </span>
          </div>
          <p className="md:hidden">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
        <div className=" md:flex hidden justify-center items-center flex-col ml-8">
          <div className="font-[600] text-[1.15rem]">
            <span>Already have an account?</span>
            <span
              className=" mx-2 text-button_bg cursor-pointer"
              onClick={() => onClose()}
            >
              Sign In
            </span>
          </div>
          <img src="./illu.PNG" alt="" className="h-[23rem]" />
          <p>
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signin;
