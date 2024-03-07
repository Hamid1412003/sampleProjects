import React, { useState } from 'react'
import './Table.css'
import Delete from '../images/delete.png'
import Edit from '../images/edit.png'
function Table(props) {

    const [editIndex, setEditIndex] = useState(-1);
    const [editedText, setEditedText] = useState('');


    function deleteHandler(index) {
        const deletedTask = props.pass.filter((_, i) => i !== index);
        props.onDelete(deletedTask);
        setEditIndex(-1);
    }

    function editHandler(index) {
        setEditIndex(index);
        setEditedText(props.pass[index]);
    }

    function saveEditHandler(index) {
        const updatedTasks = [...props.pass];
        updatedTasks[index] = editedText;
        props.onEdit(updatedTasks);
        setEditIndex(-1); // Reset editIndex after saving edit
    }

    function cancelEditHandler() {
        setEditIndex(-1); // Reset editIndex without saving edit
    }

    return (
        <div>
            {/* {props.pass.map(item => */}
            <table>
                <tbody>
                    {props.pass.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            {/* <td>{item}</td> */}
                            <td>
                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedText}
                                        onChange={(e) => setEditedText(e.target.value)}
                                    />
                                ) : (
                                    item
                                )}
                            </td>
                            <td>
                                <img
                                    id='edt-icon'
                                    src={Edit}
                                    alt=""
                                    onClick={() => editHandler(index)}
                                />
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <>
                                        <button onClick={() => saveEditHandler(index)}>Save</button>
                                        <button onClick={cancelEditHandler}>Cancel</button>
                                    </>
                                ) : (
                                    <img
                                        id='dlt-icon'
                                        onClick={() => deleteHandler(index)}
                                        src={Delete}
                                        alt=""
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table


