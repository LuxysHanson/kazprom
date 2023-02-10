import React from 'react';
import {RemoveRecord} from "./RemoveRecord";

export function RecordItem(props) {
    return (
        <ul className="list-group">
            {props.records && props.records.map((item) =>
                <li key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center">
                    {item.name}
                    <RemoveRecord record={item} />
                </li>
            )}
        </ul>
    );
}