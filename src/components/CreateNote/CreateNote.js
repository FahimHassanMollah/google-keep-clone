import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './CreateNote.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
const CreateNote = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center pt-4">
                    <Col md={7}>
                        <div  className="p-3 shadow">
                            <InputGroup size="sm" className="mb-3">
                                <FormControl className="border-0 form-control px-2" placeholder="Title" />
                            </InputGroup>
                            <InputGroup size="lg">
                                <FormControl placeholder="Take a note..." className="border-0 px-2" as="textarea" />

                            </InputGroup>
                           <div className="d-flex flex-row-reverse">
                           <Tooltip title="Add" aria-label="add">
                                <Fab color="primary" >
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                           </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default CreateNote;