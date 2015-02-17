<?php

// Spin up those decks

require_once __DIR__.'/vendor/autoload.php';
$app = new Silex\Application();

$app_id = '107543';
$app_key = 'ccc01bbde007761691f4';
$app_secret = '95a0d4af6cb2d5f418be';

$pusher = new Pusher($app_key, $app_secret, $app_id);

$cache = new Gregwar\Cache\Cache();
$cache->setCacheDirectory('cache');
