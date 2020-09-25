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
        title: "",
        description: ""
    })
    const [noteArray, setNoteArray] = useState([])
    const [titleExpand, setTitleExpand] = useState(false)
    const classes = useStyles();
    const createNoteInputHandler = (e) => {
        let notes = { ...note };
        notes[e.target.name] = e.target.value;
        setnote(notes)
    }
    const addNoteHandler = () => {
        let notesArray = [...noteArray, note];
        setNoteArray(notesArray);
        setnote({
            title: "",
            description: ""
        })
        setTitleExpand(false)
    }
    const deleteNote = (note) => {
        let newNotes=noteArray.filter((value,index)=>index!==note)
        setNoteArray(newNotes);
    }
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center pt-4">
                    <Col md={7}>
                        <div className="p-2 shadow">
                           {
                               titleExpand&& <InputGroup size="sm" className="mb-3">
                               <FormControl value={note.title} name="title" onChange={createNoteInputHandler} className="border-0 form-control px-2" placeholder="Title" />
                           </InputGroup>
                           }
                            <InputGroup size="lg">
                                <FormControl onClick={()=>setTitleExpand(true)} value={note.description} name="description" onChange={createNoteInputHandler} placeholder="Take a note..." className="border-0 px-2" as="textarea" />
                            </InputGroup>
                           {
                               titleExpand&& <div className="d-flex flex-row-reverse" onClick={addNoteHandler}>
                               <Tooltip title="Add" >
                                   <Fab color="primary" className={classes.fab} >
                                       <AddIcon />
                                   </Fab>
                               </Tooltip>
                           </div>
                           }
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm={12} xs={12} className="pt-5">

                        <Row className="justify-content-center">
                            {
                                noteArray.map((note,index) => <Note note={note} key={index} deleteNote={deleteNote} id={index}></Note>)
                            }
                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default CreateNote;