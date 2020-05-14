import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
  },
  input: {
    width: "200px",
  },
});

const Form = (props) => {
  console.log("Form.js props:", props);

  const [formState, setFormState] = useState({
    name: "",
    role: "",
    school: "",
    url: "",
    id: Date.now(),
  });

  const changeHandler = (ev) => {
    setFormState({
      ...formState,
      [ev.target.name]: ev.target.value,
    });
    console.log(ev.target.name, ev.target.value);
  };

  const classes = useStyles();

  return (
    <form
      className={classes.root}
      onSubmit={(ev) => {
        ev.preventDefault();
        props.addTeamMember(formState);
        setFormState({
          name: "",
          role: "",
          school: "",
          url: "",
          id: Date.now(),
        });
      }}
    >
      <h2>Add a team member!</h2>
      <label htmlFor="name" className={classes.label}>
        Name
      </label>
      <input
        className={classes.input}
        id="name"
        type="name"
        name="name"
        placeholder="Enter your name"
        value={formState.name}
        onChange={changeHandler}
      />
      <label htmlFor="role" className={classes.label}>
        {" "}
        Role
      </label>
      <input
        className={classes.input}
        id="role"
        type="text"
        name="role"
        placeholder="What is your role"
        value={formState.role}
        onChange={changeHandler}
      ></input>
      <label htmlFor="school" className={classes.label}>
        School
      </label>
      <input
        className={classes.input}
        id="school"
        type="school"
        name="school"
        placeholder="Enter your school name"
        value={formState.school}
        onChange={changeHandler}
      ></input>
      <label htmlFor="url" className={classes.label}>
        {" "}
        Github Url
      </label>
      <input
        className={classes.input}
        type="url"
        name="url"
        placeholder="https://github.com/yourUsername"
        value={formState.url}
        onChange={changeHandler}
      ></input>
      <button type="submit" className={classes.button}>
        Submit!
      </button>
    </form>
  );
};

export default Form;
