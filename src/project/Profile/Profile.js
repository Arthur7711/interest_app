import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import "./style.css";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../redux/actions/auth.action";
import { AppBar } from "./Header";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  addItem,
  getContacts,
  removeItem,
} from "../../redux/actions/contacts.action";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function MyContacts() {
  const { currentUser } = useSelector((state) => state.auth);
  const { contacts } = useSelector((state) => state.contacts);
  const [addData, setAddData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    !localStorage.token && history.push("/");
    dispatch(getContacts());
    dispatch(verifyUser(localStorage.token, history));
  }, []);

  function addingNewElem() {
    setAddData({ first_name: "", last_name: "", email: "" });
    dispatch(addItem(addData, contacts));
    console.log(addData);
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {currentUser?.login}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="data-table">
        <div className="table-inputs">
          <input
            value={addData.first_name}
            onChange={(e) =>
              setAddData({ ...addData, first_name: e.target.value })
            }
            placeholder="First name"
          />
          <input
            value={addData.last_name}
            onChange={(e) =>
              setAddData({ ...addData, last_name: e.target.value })
            }
            placeholder="Last name"
          />
          <input
            value={addData.email}
            onChange={(e) => setAddData({ ...addData, email: e.target.value })}
            placeholder="Email"
          />
          <IconButton onClick={addingNewElem}>
            <AddIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Remove</th>
              <th>Edit</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {contacts &&
              contacts.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>
                      <IconButton
                        onClick={() => dispatch(removeItem(item.id, i))}
                      >
                        <DeleteIcon style={{ color: "white" }} />
                      </IconButton>
                    </td>
                    <td>
                      <Modal contact={item} />
                    </td>
                    <td>
                      <IconButton
                        onClick={() => history.push(`/item/${item.id}`)}
                      >
                        <VisibilityIcon style={{ color: "white" }} />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
