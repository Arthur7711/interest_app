import axios from "axios";

export const getContacts = () => {
  return (dispatch) => {
    axios.get("http://localhost:8001/contacts").then((r) => {
      dispatch(setData(r.data));
    });
  };
};

export const setData = (data) => {
  return { type: "setData", data };
};

export const addItem = (addData, data) => {
  return (dispatch) => {
    const errors = {};
    for (let key in addData) {
      if (!addData[key]) {
        errors[key] = `${key} is empty`;
      }
    }
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(addData.email)) {
      errors["email"] = "Enter a valid mail format";
    }

    if (Object.keys(errors).length < 1) {
      axios.post("http://localhost:8001/contacts", addData).then((r) => {
        dispatch(setData([...data, r.data]));
      });
    }
  };
};

export const removeItem = (id, index) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8001/contacts/${id}`).then((r) => {
      dispatch(setRemove(index));
    });
  };
};

const setRemove = (index) => {
  return { type: "setRemove", index };
};

export const getDetails = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:8001/contacts/${id}`).then((r) => {
      dispatch(setDetails(r.data));
    });
  };
};

const setDetails = (data) => {
  return { type: "setDetails", data };
};

export const edit = (id, data) => {
  return (dispatch) => {
    axios.put(`http://localhost:8001/contacts/${id}`, data).then(() => {
      window.location.reload();
    });
  };
};
