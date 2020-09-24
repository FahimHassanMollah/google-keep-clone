import React, { useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './CreateNote.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Note from '../Note/Note';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }));

    
const CreateNote = () => {
    const [note, setnote] = useState({
        title:"",
        description:""
    })
    const [noteArray, setNoteArray] = useState([])
    const classes = useStyles();
    const createNoteInputHandler = (e) => {
        let notes={...note};
        notes[e.target.name]=e.target.value;
        setnote(notes)
    }
    const addNoteHandler = () => {
        let notesArray=[...noteArray,note];
        setNoteArray(notesArray);
        setnote({
            title:"",
            description:""
        })
       
    }
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center pt-4">
                    <Col md={7}>
                        <div className="p-2 shadow">
                            <InputGroup size="sm" className="mb-3">
                                <FormControl value={note.title}  name="title" onChange={createNoteInputHandler} className="border-0 form-control px-2" placeholder="Title" />
                            </InputGroup>
                            <InputGroup size="lg">
                                <FormControl  value={note.description}  name="description" onChange={createNoteInputHandler} placeholder="Take a note..." className="border-0 px-2" as="textarea" />

                            </InputGroup>
                            <div className="d-flex flex-row-reverse">
                                <Tooltip title="Add" >
                                    <Fab color="primary" className={classes.fab} >
                                        <AddIcon  onClick={addNoteHandler} />
                                    </Fab>
                                     
                                </Tooltip>
                              
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="pt-5">
                        <Row>
                            <Col sm={12} className="">
                            <Note></Note>
                        
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default CreateNote;