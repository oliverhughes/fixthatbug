import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { portCheckFormSchema } from "./portCheckFormSchema";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1)
      // width: 200
    }
  },
  button: {
    marginTop: theme.spacing(1)
  }
}));

const INITIAL_STATE = {
  domain: "",
  port: ""
};

export interface PortCheckFormProps {
  onSubmit: () => Promise<any>;
}

const PortCheckForm = ({ onSubmit }: PortCheckFormProps) => {
  const classes = useStyles({});
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    fieldHasError,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, portCheckFormSchema, onSubmit);

  const errors = {
    domain: fieldHasError("domain"),
    port: fieldHasError("port")
  };

  return (
    <form
      className={classes.root}
      noValidate={true}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container={true} spacing={3}>
        <Grid item={true} sm={5}>
          <TextField
            name="domain"
            id="domain-input"
            value={values.domain}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.domain}
            label="IP or Domain"
            helperText="Enter an IP address or a domain name (without http:// or https://)"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} sm={3}>
          <TextField
            type="number"
            name="port"
            id="port-input"
            value={values.port}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.port}
            label="Port"
            helperText={
              errors.port
                ? "Enter a port between 0 and 65535"
                : "Port number to check"
            }
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} sm={2}>
          <Button
            className={classes.button}
            onClick={handleSubmit}
            disabled={isSubmitting}
            variant="outlined"
            color="primary"
            size="large"
          >
            {isSubmitting ? "Checking..." : "Check"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { PortCheckForm };
