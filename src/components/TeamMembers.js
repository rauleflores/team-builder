import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    height: "100vh",
    width: "700px",
    position: "fixed",
    left: "0",
    top: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: "auto",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "400px",
  },
  cardCont: {
    margin: "auto",
  },
  card: {
    width: "500px",
    margin: "10px",
    backgroundColor: "dodgerblue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "24px",
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    border: "1px solid dodgerblue",
    backgroundColor: "dodgerblue",
  },
  anchor: {
    textDecoration: "none",
    color: "green",
    fontSize: "16px",
    fontWeight: "bold",
  },
  spanEl: {
    margin: "50px",
  },
});

const TeamMembers = (props) => {
  console.log("TeamMembers props:", props);
  const classes = useStyles();
  const [teamMembers, setTeam] = useState(props.teamList);
  console.log(teamMembers);

  const addTeamMember = (newMember) => {
    setTeam([...teamMembers, newMember]);
  };

  return (
    /* map through data here to return a Post and pass data as props to Post */
    <>
      <div className={classes.form}>
        <Form team={teamMembers} addTeamMember={addTeamMember} />
      </div>
      <div className={classes.root}>
        <div className={classes.column}>
          <Container className={classes.cardCont}>
            <h1 className={classes.header}>{"Lambda School Team"}</h1>
            <h2 className={classes.header}>{"Matthew's Group"}</h2>
          </Container>
          <div className={classes.cardCont}>
            {teamMembers.map((item, index) => {
              console.log("item:", item);
              console.log("index:", index);

              return (
                <Card className={classes.card}>
                  <CardContent>
                    <CardContent className={classes.title}>
                      <span className={classes.spanEl}>Name:</span> <br />
                      {item.name}
                    </CardContent>
                    <CardContent className={classes.role}>
                      <span className={classes.spanEl}>Role:</span> <br />
                      {item.role}
                    </CardContent>
                    <CardContent>
                      <span className={classes.spanEl}>School</span> <br />
                      {item.school}
                    </CardContent>
                    <Button className={classes.button}>
                      <a className={classes.anchor} href={item.url}>
                        More Info.
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
