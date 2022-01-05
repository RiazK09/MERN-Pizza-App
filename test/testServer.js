const chai = require("chai");
const expect = chai.expect;
// Requiring fetch from Node Fetch.
const fetch = require("node-fetch");

/*
• I utilised Mocha's describe function to state what I am testing.
• The it function describes the actual test.
• I expect the network status code to equal 200 which means that it
is okay and working. If this is the case, both tests will pass!
*/

// Test to determine whether the backend(server) communicates with the frontend(client).
describe("Status Code", function (done) {
  it("Server communicates with client/frontend", function () {
    fetch("http://localhost:3000", function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

// Test to determine whether the server gets all the pizzas
describe("Status Code", function (done) {
  it("Server gets all the pizzas.", function () {
    fetch("http://localhost:8080/api/pizzas/getallpizzas", function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
