(function() {
  $(document).ready(function() {
    var APP_ID = 'ccc01bbde007761691f4';

    var pusher = new Pusher(APP_ID);

    var ractive = new Ractive({
      el: '#container',
      template: '#ractive',
      data: { name: 'World!' }
    });
  });
})();
