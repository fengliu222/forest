(function() {
  define(function(require) {
    var $, ctx, one, person;
    $ = require('jquery');
    person = require('./person');
    one = new person('../img/run.png');
    ctx = document.querySelector("#person").getContext("2d");
    ctx.font = "30px";
    ctx.fillStyle = "#000";
    ctx.fillText("啊2啊", 60, 10);
    ctx.save();
    ctx.font = "30px";
    ctx.fillStyle = "#000";
    ctx.fillText("啊啊啊", 10, 10);
    return ctx.restore();
  });

}).call(this);
