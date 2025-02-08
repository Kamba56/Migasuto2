import logo from "../../../assets/images/logo.svg";
import microsoft from "../../../assets/images/microsoft.svg";
import { BsCheck2 } from "react-icons/bs";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import TextField from "../../../Components/Common/TextField";
import BlueButton from "../../../Components/Common/BlueButton";

const SignUp = () => {
  return (
    <section className="bg-white p-2 xl:p-6 flex justify-center items-center h-screen">
      <section className="bg-transparent h-full w-full lg:max-h-[1024px] max-w-[1440px] flex flex-col lg:flex-row">
        <article className="bg-authbg bg-center bg-cover rounded-2xl py-28 px-[5%] flex flex-col gap-20 justify-between text-center lg:w-1/2 text-white">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black">Welcome to migasuto</h1>
            <p className="font-medium text-2xl">We are dedicated to providing high-quality research and analysis to help our clients make informed decisions. We put our clients first in every decision we make, which is why we will always succeed in delivering first- class solutions to all our client&apos;s challenges.</p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold">Brand Equity Report</h2>
            <p className="text-base w-[70%] self-center">Effortlessly work together with your team in real-time.</p>
          </div>
        </article>

        <article className="lg:w-1/2 flex flex-col gap-20 justify-between px-[12%] pt-20">
          <div className="flex flex-col gap-4">
            <figure>
              <img src={logo} alt="" />
            </figure>


            <div className="flex flex-row gap-0 p-1 bg-grey-10 rounded-lg">
              <div className="w-1/2">
                <Link to='/signup' className="flex justify-center w-full items-center gap-3 px-8 py-2 text-base font-medium cursor-pointer text-white bg-blue-10 rounded-lg">Signup</Link>
              </div>
              <div className="w-1/2">
                <Link to='/login' className="flex justify-center w-full items-center gap-3 px-8 py-2 text-base font-medium cursor-pointer text-grey-20 bg-grey-10 rounded-lg">Login</Link>
              </div>
            </div>

            <form action="">
              <div className="w-full">
                <TextField required={false} fieldName={'Email Address'} placeholder={'Enter Email'} type={'email'} />
              </div>
              <div className="w-full flex flex-col gap-2 relative">
                <TextField required={false} fieldName={'Password'} placeholder={'Enter Password'} type={'password'} />
                <div className="flex gap-2 items-center">
                  <div className="text-grey-20">
                    <BsCheck2 />
                  </div>
                  <p className="text-xs">Password Strength : Weak</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-grey-20">
                    <BsCheck2 />
                  </div>
                  <p className="text-xs">Cannot contain your name or email address</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-grey-20">
                    <BsCheck2 />
                  </div>
                  <p className="text-xs">At least 8 characters</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-grey-20">
                    <BsCheck2 />
                  </div>
                  <p className="text-xs">Contains a number or symbol</p>
                </div>

                <div>
                  <Link to="" className="text-grey-20 text-xs absolute underline capitalize top-1 right-0">forgot password?</Link>
                </div>
              </div>

              <BlueButton btnName={"Create Account"} />

              <div className="flex items-center justify-center text-grey-20 before:absolute relative after:absolute before:w-1/3 before:h-[1px] before:bg-grey-20  font-medium before:right-8 after:w-1/3 after:h-[1px] after:bg-grey-20 after:left-8 opacity-30">OR</div>

              <div className=" flex gap-3 justify-center items-center">
                <div className="border border-blue-30 rounded-lg px-5 py-2">
                  <FcGoogle size='1.4rem' />
                </div>
                <div className="border border-blue-30 rounded-lg px-5 py-2">
                  <FaApple size='1.5rem' />
                </div>
                <div className="border border-blue-30 rounded-lg px-5 py-2">
                  <img src={microsoft} alt="Microsoft logo" />
                </div>
              </div>
            </form>
          </div>

          <div className="self-center text-center text-grey-20">
          By signing up to create an account I accept Company’s <span className="font-medium text-blue-100">Terms of use & Privacy Policy</span>.
          </div>
        </article>
      </section>
    </section>
  )
}

export default SignUp;
