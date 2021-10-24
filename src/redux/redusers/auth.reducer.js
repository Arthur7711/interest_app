const data = {
  currentUser: null,
};

export default function authReducer(state = data, action) {
  const temp = { ...state };

  switch (action.type) {
    case "setUser":
      temp.currentUser = action.data;
      return temp;
    default:
      return temp;
  }
}
