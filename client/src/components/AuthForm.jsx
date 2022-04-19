import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchData } from "../api/fetchFunctions";
import BackButton from "./BackButton";

const AuthForm = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  // form variables
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    username: false,
    password: false,
  });

  // server error message
  const errorMsg = React.useRef();
  const [error, setError] = React.useState(false);

  const checkValidity = () => {
    let isValid = true;
    let errors = {
      username: false,
      password: false,
    };

    if (username.length < 3) {
      isValid = false;
      errors.username = true;
    }

    if (password.length < 3) {
      isValid = false;
      errors.password = true;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkValidity()) {
      return;
    }

    setLoading(true);

    const data = { username, password };
    if (props.type === "login") signin(data);
    else signup(data);

    setLoading(false);
  };

  // signup
  const { mutate: signup } = useMutation(
    (info) => fetchData("post", "/api/auth/signup", info),
    {
      onSuccess: (data) => {
        if (!data || data.status !== 200) {
          setError(data ? data : "Error creating user");
        } else {
          Swal.fire({
            title: "Welcome!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            localStorage.setItem("token", data.data.token);
            navigate("/app");
          });
        }
      },
      onError: (data) => {
        let msg = data.text();
        setError(msg);
      },
    }
  );

  // signin
  const { mutate: signin } = useMutation(
    (info) => fetchData("post", "/api/auth/signin", info),
    {
      onSuccess: (data) => {
        if (!data || data.status !== 200) {
          setError(data ? data.data.message : "Error signing in");
        } else {
          Swal.fire({
            title: "Welcome!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            localStorage.setItem("token", data.data.token);
            navigate("/app");
          });
        }
      },
      onError: (data) => {
        let msg = data.text();
        setError(msg);
      },
    }
  );

  // Error display
  React.useEffect(() => {
    if (error) {
      errorMsg.current.style.display = "block";
    } else {
      errorMsg.current.style.display = "none";
    }
  }, [error]);

  return (
    <>
      <Alert
        variant="danger"
        ref={errorMsg}
        style={{ display: "none" }}
        className="text-center"
      >
        {error}
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Control
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isInvalid={errors.username}
            placeholder="Username"
            maxLength="20"
          />
          <Form.Control.Feedback type="invalid">
            Type valid username
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-2">
          <Form.Control
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={errors.password}
            placeholder="Password"
            maxLength="20"
          />
          <Form.Control.Feedback type="invalid">
            Type valid password
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" disabled={loading} className="w-100 mt-2">
          {props.type === "login" ? "Log in" : "Sign up"}
        </Button>
        {props.type === "login" ? (
          <Button
            onClick={() => navigate("/signup")}
            type="button"
            variant="secondary"
            className="w-100 mt-4"
          >
            Sign up
          </Button>
        ) : (
          <BackButton />
        )}
      </Form>
    </>
  );
};

export default AuthForm;
