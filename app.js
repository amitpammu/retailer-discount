const http = require('http');
const User = require('./classes/User');
const Discount = require('./classes/Discount');
const { parse } = require('querystring');


const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
      collectRequestData(req, result => {
          res.end(`Please pay ${result}`);
      });
  } 
  else {
      res.end(`
          <!doctype html>
          <html>
          <body>
              <form action="/" method="post">
                  <input type="text" name="uname" placeholder="username" required /><br />
                  <input type="number" name="bill" placeholder="total amount" required /><br />
                  <select name="itemtype" required >
                  <option value="" default>Please select</option>
                  <option value="1">Grocery</option>
                  <option value="2">Other</option>
                  </select>
                  <button>Calculate Final bill</button>
              </form>
          </body>
          </html>
      `);
  }
});


/**
 * 
 * @param {object} request 
 * @param {object} callback 
 * @desc Get the post request and perforn the discoiunt calculation
 */
 const collectRequestData =  (request, callback)=> {
   
  const FORM_URLENCODED = 'application/x-www-form-urlencoded';
  if(request.headers['content-type'] === FORM_URLENCODED) {
    
      let body = '';
      let finalBill = '';
      request.on('data', chunk => {
        body += chunk.toString();
        let data = parse(body)
  
        let user = new User(data.uname);
        let userDetails = user.userDetails;
        // Calculate discount

        let discPercentage = new Discount( userDetails,data.itemtype,data.bill);
        

        finalBill = discPercentage.discount;
        // console.log(user.userDetails);
        
      });
      request.on('end', () => {
          callback(finalBill);
      });
  }
  else {
      callback(null);
  }
}

server.listen(3000);