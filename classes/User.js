
const fs = require('fs');
const path = require('path');
var jsonPath = path.join(__dirname, '..', 'utils','mock-user.json');
 
class User {
    
     constructor(username){
        this.username = username;
        this.data = fs.readFileSync(jsonPath);

    }

   get userDetails(){

    var userObj = JSON.parse(this.data.toString());

    return userObj[this.username];
    
    }


  }
  
  module.exports = User;