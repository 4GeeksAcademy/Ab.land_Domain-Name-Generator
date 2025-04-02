let pronoun = ['the', 'our', "my", "your"];
  let adj = ['great', 'juicy', "special", "random"];
  let noun = ['kitty', 'grapes', "rat", 'domain'];
  let extention = [".com", ".net", ".any", '.notExe']
  

  for (let p = 0; p< pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extention.length; e++) {
          console.log( pronoun[p]+ adj[a]+ noun[n]+extention[e])

        }
      }
    }
  }