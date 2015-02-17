(function() {
  $(document).ready(function() {
    var APP_ID = '107543';

    var pusher = new Pusher(APP_ID);

    var ractive = new Ractive({
      el: '#container',
      template: '#ractive',
      data: { name: 'World!' }
    });
  });
})();
