import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const ExitModal = (props: { isOpen: boolean; toggle: () => void }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    props.toggle();
    navigate("/");
  };

  return (
    <>
      <Modal show={props.isOpen} onHide={props.toggle} size="sm">
        <Modal.Body>
          <Alert variant="warning">Are you sure you want to sign out?</Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggle}>
            Stay
          </Button>
          <Button
            variant="warning"
            onClick={handleLogout}
            style={{ backgroundColor: "#DC4C64" }}
          >
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExitModal;
