var request = require("request");

var tableau = {};

tableau.getTicket = function (serverUrl, site, username, ip, callback) {
  if (!serverUrl) {
    callback({
      result: "error",
      error: "Missing Server URL",
    });
    return;
  }
  if (!username) {
    callback({
      result: "error",
      error: "Missing Username",
    });
    return;
  }
  var reqBody = { username: username };
  if (site) {
    reqBody["target_site"] = site;
  }
  if (ip) {
    reqBody["client_ip"] = ip;
  }
  var options = {
    method: "POST",
    url: serverUrl + "/trusted",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    form: reqBody,
  };

  request(options, function (error, response, body) {
    if (error) {
      callback({
        result: "error",
        error: error,
      });
    } else if (body == "-1") {
      callback({
        result: "error",
        error:
          "Error -1 returned. Info to debug can be found here https://onlinehelp.tableau.com/current/server/en-us/trusted_auth_trouble_1return.htm",
        test: "testing",
        output: reqBody,
      });
    } else {
      callback({
        result: "success",
        ticket: body,
      });
    }
  });
};

module.exports = tableau;
