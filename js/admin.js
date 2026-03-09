import { auth, provider } from "./firebase-config.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const ADMINS = ["TonPseudoGithub"];

document.getElementById("login").onclick = async () => {

 const result = await signInWithPopup(auth, provider);

 const username = result._tokenResponse.screenName;

 if(ADMINS.includes(username)){
   document.getElementById("adminPanel").style.display = "block";
 } else {
   alert("Tu n'es pas admin");
 }

};
