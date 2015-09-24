module.exports = {
    isEmail: function (email) {
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    },
    isChinaMobile: function (mobile) {
        var re = /^1[0-9]{10}$/i;
        return re.test(mobile);

    },
    isIpV4: function (ip) {
        return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
    },
    isEmpty: function (obj) {
        if (obj == null) return true;
        var tp = typeof obj;
        if (tp == "string") return obj == "";
        if (tp == "number") return obj == 0;
        if (tp == 'object') return Object.keys(obj).length == 0;
        return false;
    }
};