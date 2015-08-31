# common-tools
nodejs common tools collection

## Install

npm i common-tools --save

## Example

    var stringTools = require("common-tools").stringTools;
    var validateTools = require("common-tools").validateTools;

    console.log(stringTools.randomString(10));
    console.log(stringTools.genPassword("mypassword"));

    console.log(validateTools.isEmail("abc"));




## string tools

randomString: function (howMany, chars)

captach: function ()

uuidNoSlash: function (noSlash)

genPassword: function (password)

jsonEncodeBase64: function (data)

jsonDecodeBase64: function (data)

sha256: function (data, salt)


## validate tools

isEmail: function (email)

isChinaMobile: function (mobile)


## http client

http client for yield invoke

get: function (url, data)

post: function (url, data)
