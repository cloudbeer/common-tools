module.exports = {
    isEmail: function (email) {
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    },
    isChinaMobile: function (mobile) {
        var re = /^1[0-9]{10}$/i;
        return re.test(mobile);

    }
};