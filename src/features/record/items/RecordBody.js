import React from 'react';
import {RecordItem} from "./RecordItem";
import {Alert} from "react-bootstrap";

export function RecordBody(props) {

    const records = props.records;
    if (records.length) {
        return <RecordItem records={records} />;
    }

    return <Alert variant="warning">Записи отсутствуют</Alert>;
}