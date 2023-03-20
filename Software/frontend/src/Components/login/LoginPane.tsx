import { useState, useRef, useEffect } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import "./Login.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPane: React.FC<{}> = () => {
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>(null);
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const [showPwdAlert, setShowPwdAlert] = useState(false);
  const [showUserAlert, setShowUserAlert] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    if (UserName == "") {
      setUserName("");
    }
  }, [UserName]);

  useEffect(() => {
    if (Password == "") {
      setPassword("");
    }
  }, [Password]);

  const submitLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios
        .post("http://localhost:9000/user/login", {
          username: UserName,
          password: Password,
        })
        .then((res) => {
          if (res.data.message === "Incorrect password") {
            setShowPwdAlert(true);
          } else if (res.data.message === "User does not exist") {
            setShowUserAlert(true);
          } else if (res.data.message === "Login successful") {
            setUserName("");
            setPassword("");
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("isLoggedIn", "true");
            navigate("/pets");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Alert
        variant="danger"
        onClose={() => setShowPwdAlert(false)}
        dismissible
        show={showPwdAlert}
      >
        Wrong password.
      </Alert>
      <Alert
        variant="danger"
        onClose={() => setShowUserAlert(false)}
        dismissible
        show={showUserAlert}
      >
        Username does not exist. Please register.
      </Alert>
      <div className="header">
        <h1>Sign In</h1>
      </div>
      <form>
        <label htmlFor="login-username" className="input-label">
          Username
        </label>
        <MDBInput
          wrapperClass="mb-4"
          id="login-username"
          type="text"
          placeholder="enter username"
          ref={userRef}
          value={UserName}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="login-password" className="input-label">
          Password
        </label>
        <MDBInput
          wrapperClass="mb-4"
          id="login-password"
          type="password"
          placeholder="enter password"
          value={Password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="mb-4 w-100 btn btn-lg"
          disabled={!UserName || !Password}
          onClick={submitLogin}
        >
          Sign in
        </Button>
      </form>
    </>
  );
};

export default LoginPane;
