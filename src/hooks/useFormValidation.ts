import React, { useState } from "react";
import { ObjectSchema, Shape, ValidationError } from "yup";

interface InitialState {
  [key: string]: string;
}

interface TouchedFields {
  [key: string]: boolean;
  ALL_FIELDS: boolean;
}

type ValidationSchema = ObjectSchema<
  Shape<
    object,
    {
      [key: string]: any;
    }
  >
>;

export const useFormValidation = (
  initialState: InitialState,
  validationSchema: ValidationSchema,
  onSubmit: () => Promise<any>
) => {
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({} as Partial<ValidationError>);
  const [touchedFields, setTouchedFields] = useState({
    ALL_FIELDS: false
  } as TouchedFields);

  const handleBlur = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setTouchedFields({
      ...touchedFields,
      [event.target.name]: true
    });
    try {
      await validationSchema.validate(values, {
        abortEarly: false
      });
      setErrors({});
    } catch (validationError) {
      setErrors(validationError);
    }
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
    setTouchedFields({ ALL_FIELDS: true });
    try {
      await validationSchema.validate(values, {
        abortEarly: false
      });
      setErrors({});
      try {
        console.log("SUBMITTED:", values);
        await onSubmit();
        setIsSubmitting(false);
      } catch (err) {
        setIsSubmitting(false);
        console.log("API Fail....");
      }
    } catch (validationError) {
      setIsSubmitting(false);
      setErrors(validationError);
      console.log("ERRORS:", validationError);
    }
  };

  const fieldHasError = (fieldName: string) => {
    if (errors.inner) {
      return (
        errors.inner.some(({ path }) => path === fieldName) &&
        (touchedFields[fieldName] || touchedFields.ALL_FIELDS)
      );
    }
    return false;
  };

  return {
    handleBlur,
    handleChange,
    handleSubmit,
    fieldHasError,
    values,
    errors,
    isSubmitting
  };
};
