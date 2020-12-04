<?php

namespace vendor\core\libs;

use vendor\core\libs\Helpers\Timer;

class FrameRoute
{
      public static function start()
      {
			require_once '/var/www/config/init.php';
			 
			require LIBS . '/AutoLoadClasses.php';

			AutoLoadClasses::load();

			PHPSettings::set();

         require HELPERS . '/Functions.php';
			require ROUTES . '/user.php';
			require ROUTES . '/admin.php';

         new ErrorHandler();
			Router::dispatch($uri);

			if(TIMER == true)
				echo Timer::finish() . ' сек.';
      }
}

