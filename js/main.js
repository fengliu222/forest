(function() {
  require(function(require) {
    var $, a, sprites;
    $ = require('jquery');
    /*
    		Css sprites工厂
    		config = [
    			src
    			frameWidth
    			frameHeigh
    			startX
    			startY
    			startIndex
    			endIndex
    			frameCount
    		]
    */

    sprites = function(config) {
      var key, _i, _len, _results;
      this.curIndex = 0;
      if (config) {
        _results = [];
        for (_i = 0, _len = config.length; _i < _len; _i++) {
          key = config[_i];
          _results.push(this[key] = config[key] ? config[key] : 0);
        }
        return _results;
      }
    };
    return a = 5;
  });

}).call(this);
