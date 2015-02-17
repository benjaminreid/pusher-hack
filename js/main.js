(function() {
  $(document).ready(function() {
    var APP_KEY = 'ccc01bbde007761691f4';
    var pusher = new Pusher(APP_KEY);

    // channels
    var channels = {
      vote: pusher.subscribe('vote')
    };

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
      channels[channel].bind(event, function(data) {
        fn(data);
      });
    };

    // examples
    // when('vote', 'send-vote', function(data) {
    //   console.log(data);
    // });

    // send('vote', 'send-vote', { vote: 'yes' });

    var $voters = $('[data-voters]');

    if ($voters.length > 0) {
      var $vote_button = $voters.find('[data-vote]');

      $vote_button.on('click', function(e) {
        e.preventDefault();
        var vote = $(this).data('vote');
        // sends a vote
        send('vote', 'send-vote', { vote: vote });
      });
    }

    var $controller = $('[data-controller]');

    if ($controller.length > 0) {
      var $vote_els = {
        yes: $controller.find('[data-votes=yes]'),
        no: $controller.find('[data-votes=no]')
      };

      var vote = function(vote) {
        var $el = $vote_els[vote];
        var count = parseInt($el.text());
        $el.text(count + 1);
      };

      when('vote', 'send-vote', function(res) {
        vote(res.vote)
      });
    }
  });
})();
