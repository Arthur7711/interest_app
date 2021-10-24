import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import EditIcon from "@material-ui/icons/Edit";
import { DialogActions, IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { edit } from "../../redux/actions/contacts.action";

export default function Modal({ contact }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: contact.email,
    first_name: contact.first_name,
    last_name: contact.last_name,
  });
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon style={{ color: "white" }} />
      </IconButton>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Edit contact</DialogTitle>
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          value={data.first_name}
          onChange={(e) => setData({ ...data, first_name: e.target.value })}
        />
        <input
          value={data.last_name}
          onChange={(e) => setData({ ...data, last_name: e.target.value })}
        />
        <DialogActions>
          <Button
            color={"primary"}
            variant={"outlined"}
            onClick={() => dispatch(edit(contact.id, data))}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
