(function() {
  var a;

  require.config({
    path: {
      'jquery': 'js/lib/jquery.js'
    }
  });

  a = 5;

  require(['./main']);

}).call(this);