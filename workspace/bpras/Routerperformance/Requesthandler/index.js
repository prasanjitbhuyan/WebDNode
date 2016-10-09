var server = require("./server.js");
var router  = require("./router.js");
var Reqhandler = require("./requesthandlers.js");

var handle = {};

handle["/"] = Reqhandler.start;
handle["/start"] = Reqhandler.start;
handle["/upload"] = Reqhandler.upload;


server.startp(router.route,handle);
