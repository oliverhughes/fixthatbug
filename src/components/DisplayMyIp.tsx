import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RefreshIcon from "@material-ui/icons/Refresh";
import React from "react";

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

type Props = { ipv4: string; ipv6: string; handleRefresh: Function };

const DisplayMyIp = ({ ipv4, ipv6, handleRefresh }: Props) => {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.section}>
          <Typography variant="h5" gutterBottom={true}>
            Your IP Addresses:
          </Typography>
        </div>
        <Divider variant="middle" />
        <div className={classes.section}>
          <Typography color="textSecondary">IPv4 Address:</Typography>
          <Typography variant="h6" gutterBottom={true}>
            {ipv4}
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography color="textSecondary">IPv6 Address:</Typography>
          <Typography variant="h6" gutterBottom={true}>
            {ipv6}
          </Typography>
          <Button
            className={classes.button}
            onClick={() => handleRefresh()}
            variant="outlined"
            color="primary"
            size="small"
          >
            <RefreshIcon className={classes.icon} />
            Refresh
          </Button>
        </div>
        <Typography color="textSecondary" variant="body2">
          This is your public facing IP assigned by your ISP. You will share the
          same Public IP with devices connected to the same router.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DisplayMyIp;
