import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Col } from 'react-bootstrap';
import { Fab, Tooltip } from '@material-ui/core';
import '../CreateNote/CreateNote.css'
const Note = () => {
    return (
        <div>
            <div>
                <Col md={4} className="">
                    <Card className="p-2 shadow" >
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                          </Typography>
                            <Typography variant="p" component="p">
                                belent
                             </Typography>

                        </CardContent>
                        <div className="d-flex flex-row-reverse">
                            <Tooltip title="Delete" aria-label="delete">
                                <Fab color="primary" >
                                    <DeleteIcon />
                                </Fab>
                            </Tooltip>
                        </div>
                    </Card>
                </Col>
            </div>
        </div>
    );
};
export default Note;