"use client";

import React, { useContext } from "react";
import { SignupContext } from "../context/SignupContext";
import { useFormik } from "formik";
import { step3Validation } from "../utils/validations";
import { useRouter } from "next/navigation";

const Step3 = () => {
  const signupCtx = useContext(SignupContext);
  if (!signupCtx)
    throw new Error("SignupContext must be used within SignupProvider");

  const { formData, setFormData, setStep } = signupCtx;
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      street: formData.address?.street || "",
      city: formData.address?.city || "",
      state: formData.address?.state || "",
      zipCode: formData.address?.zipCode || "",
      country: formData.address?.country || "",
    },
    validationSchema: step3Validation,
    onSubmit: (values) => {
      const updatedFormData = { ...formData, address: values };
      setFormData(updatedFormData);
      console.log("All Form Data After Step 3:", updatedFormData);

      alert(
        `All Form Data After Step 3:\n${JSON.stringify(
          updatedFormData,
          null,
          2
        )}`
      );
      router.push("/login");
      //   setStep(4);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Step 3: Address Details</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Street */}
        <div>
          <label className="block text-sm font-medium">Street</label>
          <input
            type="text"
            name="street"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.street}
            className="w-full p-2 border rounded"
          />
          {formik.touched.street && formik.errors.street && (
            <p className="text-red-500 text-sm">{formik.errors.street}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            className="w-full p-2 border rounded"
          />
          {formik.touched.city && formik.errors.city && (
            <p className="text-red-500 text-sm">{formik.errors.city}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium">State</label>
          <input
            type="text"
            name="state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
            className="w-full p-2 border rounded"
          />
          {formik.touched.state && formik.errors.state && (
            <p className="text-red-500 text-sm">{formik.errors.state}</p>
          )}
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipCode}
            className="w-full p-2 border rounded"
          />
          {formik.touched.zipCode && formik.errors.zipCode && (
            <p className="text-red-500 text-sm">{formik.errors.zipCode}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
            className="w-full p-2 border rounded"
          />
          {formik.touched.country && formik.errors.country && (
            <p className="text-red-500 text-sm">{formik.errors.country}</p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {formik.isSubmitting ? "Submitting..." : "submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
