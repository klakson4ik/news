<?php

define('DB_HOST', '');
define('DB_LOGIN', '');
define('DB_PASSWORD', '');
define('DB_NAME', '');
define('CHARSET', 'utf8');

const DB_DSN = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . CHARSET;

const DB_OPT = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];


