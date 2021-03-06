import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchData } from "../../api/fetchFunctions";
import BackButton from "../global/BackButton";

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

    const info = { username, password };
    mutate(info);
  };

  // login & signup
  const { mutate } = useMutation(
    (info) => {
      const route =
        props.type === "login" ? "/api/auth/signin" : "/api/auth/signup";
      return fetchData("post", route, info);
    },
    {
      onSuccess: (data) => {
        setLoading(false);

        if (!data || data.status !== 200) {
          //validation error
          if (data.data?.err?.errors[0]?.message)
            setError(data.data.err.errors[0].message);
          //server error
          else setError(data ? data.data.message : "Error");
        } else {
          Swal.fire({
            title: "Welcome!",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            localStorage.setItem("token", data.data.token);
            navigate("/");
          });
        }
      },
      onError: (data) => {
        setLoading(false);

        if (data.data.message) {
          setError(data.data.message);
        } else {
          let msg = data.text();
          setError(msg);
        }
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
            onClick={() => {
              setError(null);
              navigate("/signup");
            }}
            type="button"
            variant="secondary"
            className="w-100 mt-4"
          >
            Sign up
          </Button>
        ) : (
          <BackButton setError={setError} />
        )}
      </Form>
    </>
  );
};

export default AuthForm;
