import firebase from "firebase";
import { LoginFnType } from "../types";
const loginFn: LoginFnType = function (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then();
};

export default loginFn;
