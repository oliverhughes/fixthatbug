import React, { useEffect, useState } from "react";

interface InitialState {
  [key: string]: string;
}

type Validate = (values: InitialState) => { [key: string]: string };

export const useFormValidation = (
  initialState: InitialState,
  validate: Validate
) => {
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({} as InitialState);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("SUBMITTED:", values);
        setIsSubmitting(false);
      } else {
        console.log("THERE WERE ERRORS:", errors);
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate(values);
    console.log("ERRORS:", validationErrors);
  };

  return {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting
  };
};
