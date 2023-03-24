import React, { useState, useRef, useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "../ui/Button";
import CloseIcon from "@mui/icons-material/Close";
import ModalContext from "../context/ModalContext";

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setIsOpen } = useContext(ModalContext);


  const submitHandler = (e) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <main className="md:h-[34rem] h-[36rem] w-full bg-primary rounded-md">
      <section className="md:flex hidden justify-center items-center h-[3.125rem] rounded-t-md w-full bg-dropdown_bg text-createAccount_desc font-[600]">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </section>
      <section className="flex justify-evenly items-center mx-8">
        <div className="xl:w-[35%] sm:w-[65%] w-full">
          <h1 className="md:hidden my-6 text-[1.75rem] font-[900] flex justify-between items-center">Welcome Back !! <div onClick={() => setIsOpen(false)}><CloseIcon /></div></h1>
          <h1 className=" md:block hidden my-6 text-[1.75rem] font-[900]">Sign In</h1>
          {error && (
            <p className={`${error && " text-red-400"}`}>
              Please input valid input
            </p>
          )}
          <form onSubmit={submitHandler} className="flex flex-col w-[100%]">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className=" outline-none h-[3rem] border-[1px] border-gray-300 p-3 w-[100%]"
            />
            <div className=" h-[3rem] border-x-[1px] border-b-[1px] border-gray-300 p-3 flex justify-between w-[100%]">
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
            <Button name="Create Account" type="submit" />
          </form>
          <div className="mb-3 py-2 flex justify-center items-center border-[1px] border-gray-300 gap-3 cursor-pointer">
            <FacebookIcon className=" text-button_bg" />
            <span> Sign up with Facebook </span>
          </div>
          <div className="my-3 py-2 flex justify-center items-center border-[1px] border-gray-300 gap-3 cursor-pointer">
            <GoogleIcon className="text-gray-400" />
            <span> Sign up with Google </span>
          </div>
          <div className="my-3 py-2 flex justify-center items-center cursor-pointer font-[700] text-[1.15rem]">
            <p>Forgot Passwod?</p>
          </div>
          <div className="font-[600] text-[1.15rem] md:hidden flex justify-center items-center mb-8">
            <span>Don’t have an account yet?</span>
            <span
              className=" mx-2 text-button_bg cursor-pointer"
              onClick={() => onClose()}
            >
              Create new for free!
            </span>
          </div>
        </div>
        <div className=" md:flex hidden justify-center items-center flex-col pt-8 ml-8">
          <div className="font-[600] text-[1.15rem]">
            <span>Don’t have an account yet?</span>
            <span
              className=" mx-2 text-button_bg cursor-pointer"
              onClick={() => onClose()}
            >
              Create new for free!
            </span>
          </div>
          <img src="./illu.PNG" alt="" className="h-[23rem]" />
        </div>
      </section>
    </main>
  );
};

export default Login;
