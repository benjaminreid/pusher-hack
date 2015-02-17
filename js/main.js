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
})();
