import React, { useEffect, useState } from "react";
import { ObjectSchema, Shape } from "yup";

interface InitialState {
  [key: string]: string;
}

type ValidationSchema = ObjectSchema<
  Shape<
    object,
    {
      [key: string]: any;
    }
  >
>;

type Validate = (values: InitialState) => { [key: string]: string };

export const useFormValidation = (
  initialState: InitialState,
  validationSchema: ValidationSchema
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
    // const validationErrors = validate(values);
    // setErrors(validationErrors);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await validationSchema.validate(values, {
        abortEarly: false
      });
      setIsSubmitting(false);
      try {
        console.log("SUBMITTED:", values);
      } catch (err) {
        console.log("API Fail....");
      }
    } catch (validationError) {
      setIsSubmitting(false);
      console.log("ERRORS:", validationError);
    }
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
