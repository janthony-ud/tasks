import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editState, setEditState] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditState(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is_edit_mode_check"
                    label="Edit Mode"
                    checked={editState}
                    onChange={updateEditMode}
                ></Form.Check>
                {editState ? (
                    <>
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="is_student_check"
                                label="Student?"
                                checked={student}
                                onChange={updateStudent}
                            ></Form.Check>
                        </div>
                        <div>
                            <Form.Group controlId="formEditMode"></Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={updateName}
                            ></Form.Control>
                        </div>
                    </>
                ) : (
                    <div></div>
                )}
            </div>
            <div>
                {student ? (
                    <div>{name} is a student</div>
                ) : (
                    <div>{name} is not a student</div>
                )}
            </div>
        </>
    );
}
