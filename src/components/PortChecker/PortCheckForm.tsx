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
      margin: theme.spacing(1)
      // width: 200
    }
  },
  button: {
    marginTop: theme.spacing(1)
  }
}));

const INITIAL_STATE = {
  domain: ""
};

const PortCheckForm = () => {
  const classes = useStyles({});
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    fieldHasError,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, portCheckFormSchema);

  return (
    <form
      className={classes.root}
      noValidate={true}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container={true} spacing={3}>
        <Grid item={true} sm={9}>
          <TextField
            name="domain"
            id="domain-input"
            value={values.domain}
            onChange={handleChange}
            onBlur={handleBlur}
            error={fieldHasError("domain")}
            label="IP or Domain"
            helperText="Enter an IP address or a domain name (without http:// or https://)"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item={true} sm={3}>
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
