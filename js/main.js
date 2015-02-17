(function() {
  $(document).ready(function() {
    var APP_KEY = 'ccc01bbde007761691f4';

    var pusher = new Pusher(APP_KEY);

    var ractive = new Ractive({
      el: '#container',
      template: '#ractive',
      data: { name: 'World!' }
    });
  });

  var send = function(channel, data) {
    var payload = data;

    payload.channel = channel;

    $.ajax({
      url: '/send',
      type: 'POST',
      data: data,
    }).success(function(res) {
      console.log(res);
    }).error(function(e) {
      console.log(e);
    });
  };
  window.send = send;
})();
