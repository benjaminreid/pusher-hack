<?php

use Symfony\Component\HttpFoundation\Response;

require 'bootstrap.php';

$app->get('/controller', function() {

    include 'views/controller.php';

    // Return 200
    return new Response();
});

$app->get('/', function() {
    include 'views/voter.php';

    return new Response();
});

$app->run();
