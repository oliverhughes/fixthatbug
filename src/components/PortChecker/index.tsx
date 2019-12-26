import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PortCheckForm } from "./PortCheckForm";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(4)
  },
  button: {
    marginTop: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  section: {
    margin: theme.spacing(3, 2)
  }
}));

const PortChecker = () => {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.section}>
          <Typography variant="h5" gutterBottom={true}>
            PortChecker
          </Typography>
        </div>
        <Divider variant="middle" />
        <div className={classes.section}>
          <PortCheckForm />
        </div>
      </CardContent>
    </Card>
  );
};

export { PortChecker };
