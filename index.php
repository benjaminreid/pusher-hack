<?php

require 'bootstrap.php';

$app->get('/controller', function() {
  return require 'views/controller.php';
});

$app->get('/voter', function() {
  return require 'views/voter.php';
});

$app->run();
