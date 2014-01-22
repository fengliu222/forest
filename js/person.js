(function() {
  define(function(require) {
    var $, person, personCtx, sprite;
    $ = require('jquery');
    sprite = require('./sprites');
    personCtx = document.querySelector("#person").getContext("2d");
    person = function(src) {
      this.ui = new sprite({
        src: "../img/run.png",
        frameWidth: 35,
        frameHeight: 35
      });
      this.update = function() {
        console.log(this.ui.next().x);
        return personCtx.drawImage(this.ui.next().obj, this.ui.next().x, this.ui.next().y, 35, 35);
      };
    };
    return person;
  });

}).call(this);
