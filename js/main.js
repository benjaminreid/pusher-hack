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

  var send = function(channel, event, data) {
    var payload = {
      channel: channel,
      event: event,
      data: data
    };

    $.ajax({
      url: '/send',
      type: 'POST',
      data: payload,
    }).success(function(res) {
      console.log(res);
    }).error(function(e) {
      console.log(e);
    });
  };
  send('foo-channel', 'foo-event', { foo: 'bar' });
})();
