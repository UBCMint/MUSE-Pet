import { SetStateAction, useState, useRef, useEffect } from 'react';
import {
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import './Login.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const LoginPane: React.FC<{}> = () => {

  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>(null);
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    if (UserName == '') {
      setUserName('');
    }

  }, [UserName]);

  useEffect(() => {
    if (Password == '') {
      setPassword('');
    }
  }, [Password]);

  const submitLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(UserName, Password);
    navigate('/pets');

    // try {
    //   await axios.post('http://localhost:9000/user',
    //     { UserName, Password })
    //     .then((res) => {
    //       if (res.data.message === 'user already exists') {
    //         navigate('/');
    //       }
    //       else if (res.data.message === 'user does not exist') {
    //         alert('username is not registered');
    //       }
    //     });
    // } catch (e) {
    //   alert("no details entered");
    //   console.log(e);
    // }

    // clear the form
    setUserName('');
    setPassword('');
  }

  return (
    <>
      <div className="header">
        <h1>Sign In</h1>
      </div>
      <form>
        <label htmlFor='login-username' className="input-label">Username</label>
        <MDBInput 
        wrapperClass='mb-4' 
        id='login-username' 
        type='text' 
        placeholder='enter username'
        ref={userRef}
        value={UserName}
        required
        onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor='login-password' className="input-label">Password</label>
        <MDBInput 
        wrapperClass='mb-4' 
        id='login-password'
        type='password' 
        placeholder='enter password'
        ref={userRef}
        value={Password}
        required
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="mb-4 w-100 btn btn-lg"
          disabled={!UserName || !Password}
          onClick={submitLogin}>
          Sign in
        </Button>
      </form>
    </>
  );
}

export default LoginPane;