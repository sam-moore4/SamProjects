import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export function SimpleDialog(props) {
    const { onClose, open } = props;


    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <List>
                        <ListItem>{props.sdescription}</ListItem>
                        <ListItem>{props.genre}</ListItem>
                        <ListItem>{props.publisher}</ListItem>
                        <ListItem>{props.developer}</ListItem>
                        <ListItem>{props.releasedate}</ListItem>
                    </List>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>Close</Button>
            </DialogActions>            
        </Dialog>
    );
}
