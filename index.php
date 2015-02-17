<?php

require 'bootstrap.php';

$app->get('/controller', function() {
  return require 'views/controller.php';
});

$app->run();
