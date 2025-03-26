"use client";

import { useContext } from "react";
import { SignupContext } from "../context/SignupContext";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import FormStepper from "@/components/FormStepper";

function Page() {
  const signupCtx = useContext(SignupContext);
  if (!signupCtx) throw new Error("SignupContext Error");

  const { step } = signupCtx;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg sm:p-8">
        <FormStepper />
        <div className="mt-6">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
        </div>
      </div>
    </div>
  );
}

export default Page;
