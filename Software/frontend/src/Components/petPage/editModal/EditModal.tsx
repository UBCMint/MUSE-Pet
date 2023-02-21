import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditModal = (props: {
    isOpen: boolean;
    toggle: () => void;
}) => {

    useEffect(() => {
        console.log(props.isOpen);
    }, [props.isOpen]);

    return (
        <Modal show={props.isOpen}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Pet Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="pet name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name="dob" placeholder='birthday'
                            onChange={
                                (e) => {
                                    console.log(e.target.value);
                                }
                            } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" className="me-sm-2" id="inlineFormCustomSelect"
                            onChange={
                                (e) => {
                                    console.log(e.target.value);
                                }
                            }>
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
                <Button variant="info" onClick={props.toggle}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;