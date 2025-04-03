"use client";
import React from "react";

interface StepperProps<T> {
  steps: number[];
  step: number;
  setStep: (step: number) => void;
  isStepCompleted: (stepNumber: number, formData: T) => boolean;
  formData: T;
}

export default function FormStepper<T>({
  steps,
  step,
  setStep,
  isStepCompleted,
  formData,
}: StepperProps<T>) {
  const handleStepClick = (stepNumber: number) => {
    if (stepNumber <= step || isStepCompleted(stepNumber - 1, formData)) {
      setStep(stepNumber);
    }
  };

  return (
    <div className="w-full py-4 px-8">
      <div className="flex justify-between items-center">
        {steps.map((stepNumber, index) => (
          <React.Fragment key={stepNumber}>
            <div
              className={`flex items-center ${
                index === 0 || isStepCompleted(stepNumber - 1, formData)
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              } ${step >= stepNumber ? "text-blue-500" : "text-gray-400"}`}
              onClick={() => handleStepClick(stepNumber)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step >= stepNumber ? "border-blue-500" : "border-gray-300"
                }`}
              >
                {stepNumber}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 ${
                  isStepCompleted(stepNumber, formData)
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
