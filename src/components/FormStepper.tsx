"use client";
import { SignupContext } from "@/app/context/SignupContext";
import React, { useContext } from "react";

export default function FormStepper() {
  const signupCtx = useContext(SignupContext);
  if (!signupCtx)
    throw new Error("SignupContext must be used within SignupProvider");

  const { step, setStep, formData } = signupCtx;

  // Function to check if a step is completed
  const isStepCompleted = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return (
          formData.username &&
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phoneNumber
        );
      case 2:
        return formData.password && formData.role;
      case 3:
        return (
          formData.address?.street &&
          formData.address?.city &&
          formData.address?.state &&
          formData.address?.zipCode &&
          formData.address?.country
        );
      default:
        return false;
    }
  };

  // Function to handle step click
  const handleStepClick = (stepNumber: number) => {
    // Only allow navigation if:
    // 1. Clicking on current step
    // 2. Clicking on previous step
    // 3. Clicking on next step that is completed
    if (stepNumber <= step || isStepCompleted(stepNumber - 1)) {
      setStep(stepNumber);
    }
  };

  return (
    <div className="w-full py-4 px-8">
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center cursor-pointer ${
            step >= 1 ? "text-blue-500" : "text-gray-400"
          }`}
          onClick={() => handleStepClick(1)}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              step >= 1 ? "border-blue-500" : "border-gray-300"
            }`}
          >
            1
          </div>
        </div>
        <div
          className={`flex-1 h-0.5 ${
            isStepCompleted(1) ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
        <div
          className={`flex items-center ${
            isStepCompleted(1)
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          } ${step >= 2 ? "text-blue-500" : "text-gray-400"}`}
          onClick={() => handleStepClick(2)}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              step >= 2 ? "border-blue-500" : "border-gray-300"
            }`}
          >
            2
          </div>
        </div>
        <div
          className={`flex-1 h-0.5 ${
            isStepCompleted(2) ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
        <div
          className={`flex items-center ${
            isStepCompleted(2)
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          } ${step >= 3 ? "text-blue-500" : "text-gray-400"}`}
          onClick={() => handleStepClick(3)}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              step >= 3 ? "border-blue-500" : "border-gray-300"
            }`}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
}
