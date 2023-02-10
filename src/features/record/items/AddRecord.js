import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addRecord} from "../recordSlice";
import {newRecord} from "../recordSelector";

export function AddRecord() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [name, setName] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => setName(e.target.value);
    const handleClick = () => {
        if (name) {
            dispatch(addRecord(newRecord(name)));
            setName(null)
            setShow(false);
        }
    }

    return (
        <React.Fragment>
            <Button variant="success" onClick={handleShow}>
                Добавить
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="recordName">
                            <Form.Label>Введите запись</Form.Label>
                            <Form.Control type="text" placeholder="Наименование записи"
                                          onChange={handleChange} />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" className="me-2" onClick={handleClose}>
                                Отмена
                            </Button>
                            <Button variant="primary" onClick={handleClick}>
                                Ок
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}