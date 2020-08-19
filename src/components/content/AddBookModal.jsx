import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const AddBookModal = ({ handleInputDialog }) => {
  // Open/Close for dialog.
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // State hook that contains dialog input
  const [book, setBook] = useState({
    title: '',
    author: '',
    pages: '',
    isFav: false,
    isLoaned: false,
    isReading: false,
    key: Math.random(),
  });

  // Update state from text field inputs
  const handleChange = (e) => {
    setBook({ ...book, [e.target.id]: e.target.value });
  };

  const handleSwitch = (e) => {
    setBook({ ...book, [e.target.name]: e.target.checked });
  };

  // Combine handleClose and handleInputDialog. Two actions needed for onClick.
  const dialogHandler = () => {
    handleClose();
    handleInputDialog(book);
    setBook({
      title: '',
      author: '',
      pages: '',
      isFav: false,
      isLoaned: false,
      isReading: false,
      key: Math.random(),
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Book
        <LibraryAddIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Book</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter book details below:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="author"
            label="Book Author"
            type="text"
            fullWidth
            autoComplete="off"
            onChange={handleChange}
            value={book.author}
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Book Title"
            type="text"
            fullWidth
            autoComplete="off"
            onChange={handleChange}
            value={book.title}
          />
          <TextField
            autoFocus
            margin="dense"
            id="pages"
            label="# Pages"
            type="number"
            inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }}
            fullWidth
            autoComplete="off"
            onChange={handleChange}
            value={book.pages}
          />
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={book.isFav}
                  onChange={handleSwitch}
                  name="isFav"
                  color="primary"
                  size="small"
                />
              }
              label="Favourite:"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={book.isLoaned}
                  onChange={handleSwitch}
                  name="isLoaned"
                  color="primary"
                  size="small"
                />
              }
              label="Loaned Out:"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={book.isReading}
                  onChange={handleSwitch}
                  name="isReading"
                  color="primary"
                  size="small"
                />
              }
              label="Currently Reading:"
              labelPlacement="start"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={dialogHandler} color="primary">
            Add Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddBookModal;
