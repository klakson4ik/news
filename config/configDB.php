<?php

define('DB_HOST', 'docker_mariadb_1');
define('DB_LOGIN', 'maks');
define('DB_PASSWORD', '1');
define('DB_NAME', 'news');
define('CHARSET', 'utf8');

const DB_DSN = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . CHARSET;

const DB_OPT = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];


