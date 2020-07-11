import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';


export default function EditDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  const handleOkayClick = () => {
    props.editMessage(message, props.id);
    setOpen(false);
  }
  return (
    <>
          <Link component="button" variant="body2" onClick={handleClickOpen} 
          style={{
                  position: "absolute",
                  bottom: "4px",
                  right: "16px",
                  color: "#0e0000"
              }}
          > Edit </Link>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change Text</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Edit your message in the below text-area and click okay.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edit Message"
            type="email"
            fullWidth
            name="message"
            value={message}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOkayClick} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}