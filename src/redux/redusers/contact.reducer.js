const data = {
  contacts: null,
  details: null,
};

export default function contactReducer(state = data, action) {
  const temp = { ...state };

  switch (action.type) {
    case "setData":
      temp.contacts = action.data;
      return temp;
    case "setRemove":
      temp.contacts.splice(action.index, 1);
      return temp;
    case "setDetails":
      temp.details = action.data;
      return temp;
    default:
      return temp;
  }
}
