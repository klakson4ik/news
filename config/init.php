<?php

define('PHPINI', 0);
define('DEBUG', 1);
define('LAYOUT', 'default');

define('ROOT', dirname(__DIR__));
define('APP', ROOT . '/App');

define('ADMIN', APP . '/Web/Admin');
define('USER', APP . '/Web/User');

define('CONTROLLERS', '/Controllers');
define('MODELS', '/Models');
define('VIEWS',  '/Views');
		  
define('PARTIALS', VIEWS . '/partials');
define('PAGES', VIEWS . '/Pages');
define('LAYOUTS', VIEWS . '/Layouts');

define('CORE', ROOT . '/vendor/core');
define('LIBS', ROOT . '/vendor/core/libs');
define('WWW', ROOT . '/public');
define('CACHE', ROOT . '/tmp/cache');
define('CONFIG', ROOT . '/config');
define('HELPERS', LIBS . '/Helpers');
define('ROUTES', ROOT . '/routes');

define('RESOURCES', APP . '/resources');
define('CSS', RESOURCES . '/css');
define('JS', RESOURCES . '/js');
define('CSS_LIBS', CSS . '/libs');
define('CSS_STYLE', CSS . '/styles');
define('JS_LIBS', JS . '/libs');
define('JS_SCRIPT', JS . '/scripts');

if(isset($_SERVER['REQUEST_URI']))
	$uri = rtrim($_SERVER['REQUEST_URI'], '/');


