import { SetStateAction, useState, useRef, useEffect } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import LoginPane from './LoginPane';
import RegisterPane from './RegisterPane';
import './Login.css';

const LoginPage: React.FC<{}> = () => {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: SetStateAction<string>) => {
    if (value === justifyActive)
      return;

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50" style={{maxWidth: '600px'}}>

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick('tab1')}
            active={justifyActive === 'tab1'}
            style={justifyActive === 'tab1' ? { backgroundColor: '#32cec6' } : { color: 'rgb(77, 77, 77)', backgroundColor: '#eaf5f4' }}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick('tab2')}
            active={justifyActive === 'tab2'}
            style={justifyActive === 'tab2' ? { backgroundColor: '#32cec6' } : { color: 'rgb(77, 77, 77)', backgroundColor: '#eaf5f4' }}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <LoginPane />
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          <RegisterPane />
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default LoginPage;