import { number, object, string } from "yup";

const regex = {
  domain: /^([a-z\d]([a-z\d\-]{0,61}[a-z\d])?(\.[a-z\d]([a-z\d\-]{0,61}[a-z])[.]?))+$/i,
  ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
};

const domainMessage = "A valid domain name or IP address is required";

export const portCheckFormSchema = object().shape({
  domain: string()
    .trim()
    .max(256)
    .matches(
      new RegExp(regex.domain.source + "|" + regex.ip.source),
      domainMessage
    ),
  port: number()
    .moreThan(0)
    .lessThan(65535)
});
