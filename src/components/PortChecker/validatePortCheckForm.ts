interface FormValues {
  [key: string]: string;
}

const ipAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

const hostnameRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

export const validatePortCheckForm = (values: FormValues) => {
  let errors: Partial<FormValues> = {};

  if (!values.domain) {
    errors.domain = "A domain or IP address is required";
  } else if (
    !ipAddressRegex.test(values.domain) &&
    !hostnameRegex.test(values.domain)
  ) {
    errors.domain = "Enter a valid domain (without 'https://') or IP Address";
  }

  return errors;
};
