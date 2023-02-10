import React from 'react';
import {useSelector} from "react-redux";
import {RecordBody} from "./items/RecordBody";
import './Record.css'
import {AddRecord} from "./items/AddRecord";
import {getRecordState} from "./recordSelector";

export function Record() {
    const records = useSelector(getRecordState);

    return (
        <section className="container record-list">
            <div className="record-list-header">
                <h3 className="record-list-title">Список записей</h3>
                <AddRecord />
            </div>
            <div className="record-list-body">
                <RecordBody records={records} />
            </div>
        </section>
    );
}