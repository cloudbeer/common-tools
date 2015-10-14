module.exports = {
    ipv4s: function () {
        var os = require('os');
        var ifaces = os.networkInterfaces();

        var ips = [];
        Object.keys(ifaces).forEach(function (ifname) {
            ifaces[ifname].forEach(function (iface) {
                if ('IPv4' === iface.family && iface.internal === false) {
                    ips.push(iface.address);
                }
            });
        });
        return ips;
    }
};