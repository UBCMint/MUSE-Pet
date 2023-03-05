import { SetStateAction, useState, useRef, useEffect } from 'react';
import {
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './Login.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FcOk, FcCancel, FcInfo } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterPane: React.FC<{}> = () => {

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef();
  const navigate = useNavigate();

  const [UserName, setUserName] = useState('');
  const [UserNameValid, setUserNameValid] = useState(false);
  const [userNamefocus, setUserNameFocus] = useState(false);

  const [Password, setPassword] = useState('');
  const [PasswordValid, setPasswordValid] = useState(false);
  const [passwordfocus, setPasswordFocus] = useState(false);

  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [ConfirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [confirmPasswordfocus, setConfirmPasswordFocus] = useState(false);

  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    if (UserName == '') {
      setUserName('');
    }
    setUserNameValid(USER_REGEX.test(UserName));
  }, [UserName]);

  useEffect(() => {
    if (Password == '') {
      setPassword('');
    }
    if (ConfirmPassword == '') {
      setConfirmPassword('');
    }
    setPasswordValid(PASSWORD_REGEX.test(Password));
    setConfirmPasswordValid(Password === ConfirmPassword);
  }, [Password, ConfirmPassword]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const check1 = USER_REGEX.test(UserName);
    const check2 = PASSWORD_REGEX.test(Password);
    if (!check1 || !check2) {
      alert("invalid username or password");
      return;
    }

    const user = {
      username: UserName,
      password: Password
    }

    // try {
    //   const response = await axios.post('http://localhost:9000/user/signup',
    //     user)
    //     .then((res) => {
    //       if (res.data.message === 'user already exists') {
    //         alert('user already exists');
    //       }
    //       else if (res.data.message === 'new user created') {
    //         navigate('/');
    //       }
    //     });
    //   // clear the form
    //   setUserName('');
    //   setPassword('');
    //   console.log(response);
    // } catch (e) {
    //   console.log(e);
    // }

    console.log(user.username, user.password);
    // clear the form
    setUserName('');
    setPassword('');
    setConfirmPassword('');
    navigate('/pets');
  }

  return (
    <>
      <div className="header">
        <h1>Register</h1>
      </div>
      <form>
        <label htmlFor='username' className="input-label">
          Username
          <span className={UserNameValid ? "valid" : "hide"}><FcOk /> </span>
          <span className={UserNameValid || !UserName ? "hide" : "invalid"}><FcCancel /></span>
        </label>
        <MDBInput
          wrapperClass='mb-4'
          id='username'
          type='text'
          ref={userRef}
          autoComplete='off'
          placeholder='new username'
          onChange={(e) => setUserName(e.target.value)}
          required
          aria-invalid={UserNameValid ? 'false' : 'true'}
          aria-describedby="uidnote"
          onFocus={() => setUserNameFocus(true)}
          onBlur={() => setUserNameFocus(false)}
        />
        <p id="uidnote" className={userNamefocus && UserName && !UserNameValid ? "instructions" : "offscreen"}>
          <FcInfo />
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor='password' className="input-label">Password</label>
        <MDBInput
          wrapperClass='mb-4'
          id='password'
          type='password'
          value={Password}
          required
          placeholder='type password'
          onChange={(e) => setPassword(e.target.value)}
          aria-invalid={PasswordValid ? 'false' : 'true'}
          aria-describedby="pwdnote"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <p id="pwdnote" className={passwordfocus && Password && !PasswordValid ? "instructions" : "offscreen"}>
          <FcInfo />
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, a number and a special character.<br />
          Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
        </p>

        <label htmlFor='confirm_pwd' className="input-label">Confirm Password</label>
        <MDBInput
          wrapperClass='mb-4'
          id='confirm_pwd'
          type='password'
          value={ConfirmPassword}
          required
          placeholder='re-type password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          aria-invalid={ConfirmPasswordValid ? 'false' : 'true'}
          aria-describedby="confirmpwdnote"
          onFocus={() => setConfirmPasswordFocus(true)}
          onBlur={() => setConfirmPasswordFocus(false)}
        />
        <p id="confirmnote" className={confirmPasswordfocus && !ConfirmPasswordValid ? "instructions" : "offscreen"}>
          <FcInfo />
          Must match the first password input field.
        </p>

        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox
            name='flexCheck'
            id='flexCheckDefault'
            label='I have read and agree to the terms'
            onChange={() => setCheckbox(!checkbox)}
          />
        </div>

        <Button
          className="mb-4 w-100 btn btn-lg"
          disabled={!UserNameValid || !PasswordValid || !ConfirmPasswordValid || !checkbox}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </form>
    </>
  );
}

export default RegisterPane;