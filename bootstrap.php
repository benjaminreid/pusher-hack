<?php

// Spin up those decks

require_once __DIR__.'/vendor/autoload.php';
$app = new Silex\Application();

// Setup pusher connection

$pusher_id = '';
$pusher_key = '';
$pusher_secret = '';

$pusher = new Pusher($pusher_key, $pusher_secret, $pusher_id);
