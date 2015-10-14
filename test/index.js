var stringTools = require("../lib/string-tools");
var validateTools = require("../lib/validate-tools");
var netTools = require("../lib/net-tools");
var should = require('should');


var assert = require("assert");

describe('String Tools', function () {
    describe('#randomString()', function () {
        it('should return random string', function () {
            assert.equal(6, stringTools.randomString(6).length);
        });
    });
    describe('#genPassword()', function () {
        it('应该返回出盐和加密之后的密码', function () {
            assert.equal(true, stringTools.genPassword().hasOwnProperty("salt"));
            assert.equal(true, stringTools.genPassword().hasOwnProperty("password"));
        });
    });
    describe('#jsonEncodeBase64() and decode', function () {
        it('json 对象的 base64的加密和解密', function () {
            var oText = {a:1, b:"中国 love 88"};
            var enText = stringTools.jsonEncodeBase64(oText);
            var deText = stringTools.jsonDecodeBase64(enText);

            assert.equal("string", typeof enText);
            assert.equal(true, oText.b == deText.b);

        });
    });
    describe('#uuidNoSlash()', function () {
        it('不带横杠的uuid', function () {
            var uuidSlash = stringTools.uuid();
            var uuidNoSlash = stringTools.uuid(true);
            uuidSlash.indexOf("-").should.above(1);
            uuidNoSlash.indexOf("-").should.eql(-1);
            //[ 1, 2, 3].should.containDeep([2, 1]);
            //uuidNoSlash.should.containDeep("-");

        });
    });
});


describe('Regex Tools', function () {
    describe('#isEmail()', function () {
        it('should be right email', function () {
            assert.equal(true, validateTools.isEmail("a@b.cm"));
            assert.equal(false, validateTools.isEmail("ab.c"));
            assert.equal(false, validateTools.isEmail("a@b.c"));
            assert.equal(false, validateTools.isEmail("ab@c"));
        });
    });
    describe('#isChinaMobile()', function () {
        it('中国的手机号码', function () {
            assert.equal(true, validateTools.isChinaMobile("10000000000"));
            assert.equal(false, validateTools.isChinaMobile("20000000000"));
            assert.equal(false, validateTools.isChinaMobile("abc"));
            assert.equal(false, validateTools.isChinaMobile("11111111"));
        });
    });
    describe('#jsonEncodeBase64() and decode', function () {
        it('json 对象的 base64的加密和解密', function () {
            var oText = {a:1, b:"中国 love 88"};
            var enText = stringTools.jsonEncodeBase64(oText);
            var deText = stringTools.jsonDecodeBase64(enText);

            assert.equal("string", typeof enText);
            assert.equal(true, oText.b == deText.b);

        });
    });
});


//describe('Net Tools', function () {
//    describe('#ipv4s()', function () {
//        it('should be an array', function(){
//
//        });
//        console.log(netTools.ipv4s());
//    });
//});
