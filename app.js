const http = require('http');
const User = require('./classes/User');
const Discount = require('./classes/Discount');
const { parse } = require('querystring');

// creating server
const server = http.createServer((req, res) => {
    
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(result));  
            res.end(); 
        });
    }
    else {
        // html response to the ckient
        res.end("Hello World!");
    }
});


/**
 * 
 * @param {object} request 
 * @param {object} callback 
 * @desc Get the post request and perforn the discoiunt calculation
 */
const collectRequestData = (request, callback) => {

    // POST request
    
        let finalBill = '';

        request.on('data', chunk => {
            let data = JSON.parse(chunk.toString());

            // Creating User Class object and fetching the details from the Json file.
            let user = new User(data.uname);

            // get User details by the username
            let userDetails = user.userDetails;

            // Calling Discount class to get the selected user discount.
            let discPercentage = new Discount(userDetails, data.itemtype, data.bill);

            // get the final bill by calculating all the conditions.
            finalBill = discPercentage.discount;

        });
        request.on('end', () => {
            // returning a call back with final amount
            callback(finalBill);
        });
    
}

// server listning at port 3000
server.listen(3000);