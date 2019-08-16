import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(4)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  }
}));

export default function ToolCupboard() {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom={true}
        >
          Tool Cupboard
        </Typography>
        <Link href="/what-is-my-ip">
          <Typography>
            _> <Button size="small">What is my IP</Button>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
