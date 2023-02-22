import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './EditModal.css';

const EditModal = (props: {
    isOpen: boolean;
    toggle: () => void;
    changePetData: (name: string, status: boolean) => void;
}) => {

    const [name, setName] = useState<string>('');
    const [isDead, setIsDead] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (name == '') {
            alert('Please enter a name');
            return;
        }
        props.changePetData(name, isDead);
        props.toggle();
    }

    return (
        <Modal show={props.isOpen} className="modal">
            <Modal.Header closeButton
                onHide={props.toggle}
            >
                <Modal.Title className="title">Change Pet Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="pet name"
                            autoFocus
                            required
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" className="me-sm-2"
                            onChange={(e) => {setIsDead(e.target.value == '1' ? true : false)}}>
                            <option value="0">Alive</option>
                            <option value="1">Dead</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.toggle}>
                    Close
                </Button>
                <Button className="save-btn" variant="info" onClick={handleSubmit}>
                    Save Change
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;