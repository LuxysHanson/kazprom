import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {removeRecord} from "../recordSlice";

export function RemoveRecord(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        dispatch(removeRecord(props.record.id));
        setShow(false);
    }

    return (
        <React.Fragment>
            <Button variant="danger" onClick={handleShow}>
                Удалить
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <p className="mb-0 text-center">
                        Подтвердить удаление записи - "{props.record.name}"?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="me-2" onClick={handleClose}>
                        Нет
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Да
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}