import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import { Card, Col } from 'react-bootstrap';
import { Fab, Tooltip } from '@material-ui/core';
import '../CreateNote/CreateNote.css'
const Note = (props) => {
    let { title, description } = props.note;

    return (
        <div>
            <div>
                <Col md={4} xs={12} className="py-2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>

                            <div className="d-flex flex-row-reverse" >
                                <Tooltip title="Delete" onClick={()=>props.deleteNote(props.id)} >
                                    <Fab color="primary" >
                                        <DeleteIcon />
                                    </Fab>
                                </Tooltip>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};
export default Note;