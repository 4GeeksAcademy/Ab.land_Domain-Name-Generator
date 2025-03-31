import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronoun = ['the', 'our', "my", "your"];
  let adj = ['great', 'big', "special", "random"];
  let noun = ['jogger', 'racoon', "rat", 'domain'];
  let extention = [".com", ".net", ".any", '.notExe']
  let domain = ""

  for (let p = 0; p< pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extention.length; e++) {
          console.log( pronoun[p]+ adj[a]+ noun[n]+extention[e])

        }
      }
    }
  }


  console.log("Hello Rigo from the console!");
};
