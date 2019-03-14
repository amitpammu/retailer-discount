const fs = require('fs');
const path = require('path');
var jsonPath = path.join(__dirname, '..', 'utils','mock-user.json');
/**
 * @class User
 * @desc Fetching User details from the Json file. 
 */ 
class User {
    /**
     * 
     * @param {string} username application username 
     */
     constructor(username){
        this.username = username;
        this.data = fs.readFileSync(jsonPath);

    }
    /**
     * Getter method to fetch selected user details
     */
   get userDetails(){

    var userObj = JSON.parse(this.data.toString());

    return userObj[this.username];
    
    }


  }
  
  module.exports = User;