(function() {
  $(document).ready(function() {
    var APP_KEY = 'ccc01bbde007761691f4';
    var pusher = new Pusher(APP_KEY);

    // channels
    var channels = {
      vote: pusher.subscribe('vote')
    };

    var ractive = new Ractive({
      el: '#container',
      template: '#ractive',
      data: { name: 'World!' }
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

    var when = function(channel, event, fn) {
      console.log(channels[channel], channel, channels);
      channels[channel].bind(event, function(data) {
        fn(data);
      });
    };

    when('vote', 'send-vote', function(data) {
      console.log(data);
    });

    send('vote', 'send-vote', { vote: 'yes' });
  });
})();
