module.exports = tools =  {

    randomString: function (howMany, chars) {
        chars = chars
            || "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        var rnd = require("crypto").randomBytes(howMany)
            , value = new Array(howMany)
            , len = chars.length;

        for (var i = 0; i < howMany; i++) {
            value[i] = chars[rnd[i] % len]
        }
        return value.join('');
    },
    captach: function () {
        return tools.randomString(6, "1234567890");
    },
    uuidNoSlash: function (noSlash) {
        var uuid = require("uuid");
        var rtn = uuid.v4();
        if (noSlash)
            rtn = rtn.replace(/-/gi, "");
        return rtn;
    },
    genPassword: function (password) {
        var salt = tools.randomString(12);
        var sha256Pwd = tools.sha256(password + salt);
        return {salt: salt, password: sha256Pwd};
    },

    jsonEncodeBase64: function (data) {
        return new Buffer(JSON.stringify(data)).toString('base64');
    },
    jsonDecodeBase64: function (data) {
        var str = new Buffer(data, 'base64').toString();
        return JSON.parse(str);
    },
    sha256: function (data, salt) {
        return require("sha256")(data + salt);
    },
};