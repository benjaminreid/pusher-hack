<?php

use Symfony\Component\HttpFoundation\Request;
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

$app->get('/get/{name}', function($name}) use ($cache) {
    if ($cache->exists($name)) {
        return $cache->get('test.cache');
    }

    return null;
});

$app->post('/send', function(Request $request) use ($pusher, $cache) {

    $channel = $request->get('channel');
    $event = $request->get('event');

    $pusher->trigger(
        $channel,
        $event,
        $request->get('data')
    );

    $cache->set("{$channel}-{$event}", json_encode($data));

    return new Response();
});

$app->run();
