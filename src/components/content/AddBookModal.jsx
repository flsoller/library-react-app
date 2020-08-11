import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

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
    key: Math.random(),
  });

  // Update state from text field inputs
  const handleChange = (e) => {
    setBook({ ...book, [e.target.id]: e.target.value });
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
            onChange={handleChange}
            value={book.title}
          />
          <TextField
            autoFocus
            margin="dense"
            id="pages"
            label="# Pages"
            type="text"
            fullWidth
            onChange={handleChange}
            value={book.pages}
          />
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
