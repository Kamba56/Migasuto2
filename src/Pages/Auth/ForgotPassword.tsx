import React, { useState } from "react";
import clsx from "clsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { FormInput } from "../../Components/base-components/Form";
import Logo from "/logo.svg";
import ValidationItem from "./ValidationItem";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [password, setPassword] = useState("");
  const [atLeastThreeRulesSatisfied, setAtLeastThreeRulesSatisfied] =
    useState(false);
  const [validation, setValidation] = useState({
    minLength: false,
    noNameOrEmail: true, // I will reconfigure this when I store user context
    containsLowercase: false,
    containsUppercase: false,
    containsNumberOrSymbol: false,
  });

  const schema = yup.object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    otp: yup
      .string()
      .required("OTP is required")
      .min(4, "OTP must be at least 4 characters"),
    newPassword: yup
      .string()
      .required("New password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  });

  // Fields relevant to the current step
  const currentSchema = yup.object(
    step === 1
      ? { email: schema.fields.email }
      : step === 2
      ? { otp: schema.fields.otp }
      : step === 3
      ? {
          newPassword: schema.fields.newPassword,
          confirmPassword: schema.fields.confirmPassword,
        }
      : {}
  );

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(currentSchema),
  });

  const validatePassword = (password: string) => {
    const rules = {
      minLength: password.length >= 8,
      noNameOrEmail: true, // Replace with logic if checking against user info
      containsLowercase: /[a-z]/.test(password),
      containsUppercase: /[A-Z]/.test(password),
      containsNumberOrSymbol: /[0-9!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setValidation(rules);

    // Check how many rules are satisfied
    const passedRules = Object.values(rules).filter(Boolean).length;
    setAtLeastThreeRulesSatisfied(passedRules >= 3);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleContinue = async (data: any) => {
    console.log(data);
    const isValid = await trigger();
    if (isValid) {
      if (step === 3) {
        setIsSuccess(true); // Final step
      } else {
        setStep(step + 1); // Move to next step
      }
    }
  };

  const StepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <FormInput
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Enter email address"
                className={`${clsx({
                  "border-danger": errors.email,
                })} block pb-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              Provide OTP sent to yoour email
            </label>
            <div className="mt-1">
              <FormInput
                id="otp"
                type="text"
                maxLength={6}
                placeholder="Enter OTP"
                className={`${clsx({
                  "border-danger": errors.otp,
                })} block pb-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                {...register("otp")}
              />

              {errors.otp && (
                <p className="text-red-500 text-sm">{errors.otp.message}</p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1">
                <FormInput
                  id="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  className={`${clsx({
                    "border-danger": errors.newPassword,
                  })} block pb-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  {...register("newPassword", {
                    onChange: (e) => {
                      handleChange(e); // Update validation rules
                    },
                  })}
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <FormInput
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                  className={`${clsx({
                    "border-danger": errors.confirmPassword,
                  })} block pb-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* <!-- Strong Password --> */}
            <div className="max-w-sm">
              <div id="hs-strong-password-hints" className="mb-3">
                <h4 className="my-2 text-sm font-semibold text-gray-500 dark:text-white">
                  Password Strength:{" "}
                  <span
                    className={`${
                      atLeastThreeRulesSatisfied
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {atLeastThreeRulesSatisfied ? "Strong" : "Weak"}
                  </span>
                </h4>

                <ul className="space-y-1 text-sm text-gray-500">
                  <ValidationItem
                    isValid={validation.minLength}
                    text="At least 8 characters"
                  />
                  <ValidationItem
                    isValid={validation.noNameOrEmail}
                    text="Cannot contain your name or email address"
                  />
                  <ValidationItem
                    isValid={validation.containsLowercase}
                    text="Contains at least one lowercase letter"
                  />
                  <ValidationItem
                    isValid={validation.containsUppercase}
                    text="Contains at least one uppercase letter"
                  />
                  <ValidationItem
                    isValid={validation.containsNumberOrSymbol}
                    text="Contains a number or symbol"
                  />
                </ul>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" h-full p-8 bg-secondary ">
      <div className=" min-h-full bg-white justify-center items-center py-12 sm:px-6 lg:px-8 space-y-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-xl text-center">
          <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
          <h2 className="mt-6 text-center text-2xl font-semi-bold text-gray-800">
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-lg text-gray-400">
            Please provide details below to recover your password
          </p>
        </div>

        {/* Stepper */}

        <ul className=" p-6 flex justify-center items-center flex-row  max-w-xs mx-auto">
          {/* <!-- Item --> */}
          {[1, 2, 3, 4].map((s) => (
            <li
              key={s}
              className="md:shrink md:basis-0 flex-1 group flex  md:block"
            >
              <div className=" min-w-7 min-h-7 flex flex-col items-center md:w-full md:flex md:flex-row text-xs align-middle">
                <span
                  className={clsx(
                    "ring-1  h-4 w-4   size-7 flex justify-center items-center shrink-0  font-medium rounded-full",
                    {
                      " bg-green-600 ring-green-600 border-4 border-white":
                        s == step,
                      "": s > step,
                      "bg-blue-600  text-white": s < step,
                    }
                  )}
                >
                  {s < step && s}
                </span>
                {s < 4 && (
                  <div
                    className={clsx(
                      "mt-2 w-px h-full md:mt-0  md:w-full md:h-px md:flex-1   dark:bg-neutral-700",
                      {
                        "bg-blue-600": s < step,
                        "bg-gray-400": s >= step,
                      }
                    )}
                  ></div>
                )}
              </div>
            </li>
          ))}
        </ul>

        {!isSuccess ? (
          <>
            {/* Step Content */}
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form
                  className="space-y-6 lg:flex-col justify-center items-center"
                  onSubmit={handleSubmit(handleContinue)}
                >
                  <StepContent />

                  <div className="flex items-center justify-center h-24">
                    <button
                      type="submit"
                      className="flex justify-center py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {step === 3 ? "Done" : "Continue"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-8 text center sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-green-600">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m-6 6h10m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl text-center font-medium text-gray-900">
                Password Reset Successful
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
