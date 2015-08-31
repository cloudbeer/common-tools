var request = require("request");
var querystring = require("querystring");

module.exports = {
    get: function (url, data) {
        return function (callback) {
            console.log(url + "?" + querystring.stringify(data));
            request(url + "?" + querystring.stringify(data), function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    callback(error, body);
                }
                else {
                    console.log(error);
                    callback(error, {error: "remote server not response 200"});
                }
            });
        };
    },
    post: function (url, data) {
        console.log("POST:", url);
        if (data)
            console.log("Data:", data);
        return function (callback) {
            request.post({url: url, form: data}, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    callback(null, body);
                }
                else {
                    console.log(error);
                    callback(error, {error: "remote server not response 200"});
                }
            });

        };
    }
};