var supertest = require("supertest");
var should = require('should');
// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("Retailer Discount unit test cases", function () {

    // #1 should return home page
    it("should return home page", function (done) {

        // calling home page api
        server
            .get("/")
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                if (err) throw err
                done();
            });
    });

    // #2 should return final bill  "test": {"is_employee": false,"is_affiliated": true,"joining_year": 2009}
    it("should return final bill 855", function (done) {

        // calling home page api
        server
            .post("/")
            .send({ uname: 'test', itemtype: 2, bill: "1000" })
            .expect(200) // THis is HTTP response
            .end(function (err, res) {

                if (err) throw err;
                should(res.body).equal(855);
                console.log(res.body);
                done();
            });
    });
    it("should return final bill 950", function (done) {

        // calling home page api
        server
            .post("/")
            .send({ uname: 'test', itemtype: 1, bill: "1000" })
            .expect(200) // THis is HTTP response
            .end(function (err, res) {

                if (err) throw err;
                should(res.body).equal(950);
                console.log(res.body);
                done();
            });
    });
    it("should return final bill 665", function (done) {

        // calling home page api
        server
            .post("/")
            .send({ uname: 'test1', itemtype: 2, bill: "1000" })
            .expect(200) // THis is HTTP response
            .end(function (err, res) {

                if (err) throw err;
                should(res.body).equal(665);
                console.log(res.body);
                done();
            });
    });
    it("should return final bill 902.5", function (done) {

        // calling home page api
        server
            .post("/")
            .send({ uname: 'test2', itemtype: 2, bill: "1000" })
            .expect(200) // THis is HTTP response
            .end(function (err, res) {

                if (err) throw err;
                should(res.body).equal(902.5);
                console.log(res.body);
                done();
            });
    });
    it("should return final bill 1330", function (done) {

        // calling home page api
        server
            .post("/")
            .send({ uname: 'test3', itemtype: 2, bill: "2000" })
            .expect(200) // THis is HTTP response
            .end(function (err, res) {

                if (err) throw err;
                should(res.body).equal(1330);
                console.log(res.body);
                done();
            });
    });


});