import HandPointDown from "./handpointdown.png"
import UserMale from "./UserMale.png"
import Default from './Default.png'


const getIcon = (name) => {
  switch (name) {
    case "UserMale":
      return UserMale;
    case "HandPointDown":
      return HandPointDown;
    default:
      return Default;
  }
}

export {
  HandPointDown,
  UserMale,
  getIcon
}