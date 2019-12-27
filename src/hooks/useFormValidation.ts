import React, { useEffect, useState } from "react";
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

interface Errors {
  errorFields?: string[];
  messages?: string[];
}

export const useFormValidation = (
  initialState: InitialState,
  validationSchema: ValidationSchema
) => {
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({} as Partial<ValidationError>);
  const [touchedFields, setTouchedFields] = useState({
    ALL_FIELDS: false
  } as TouchedFields);

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
        setIsSubmitting(false);
        console.log("SUBMITTED:", values);
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
    console.log(touchedFields, errors.inner);
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
