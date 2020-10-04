<?php

namespace vendor\core\libs;

use vendor\core\base\Controller;

   class Router
   {
      protected static $routes = [];
      public static $route = [];

		private const MAIN_CONTROLLER = 'Main';
		private const USER_CONTROLLER = 'App\\Web\\User\\Controllers\\';
		private const ADMIN_CONTROLLER = 'App\\Web\\Admin\\Controllers\\';

      public static function user($regexp, $route = [])
		{	
				  self::$routes[$regexp] = $route;
      }

      public static function admin($regexp, $route = [])
      {
				  self::$routes['/admin' . $regexp] = $route;
      }

      private static function matchRoute($url)
      {
			$uri = self::urlCutParam($url);
         foreach (self::$routes as $pattern => $value)
         {
            if(preg_match("#^{$pattern}$#i", $uri, $matches))
            {
					$array = explode('/', substr($matches[0], 1), 4);
					if(empty($array[0])){
						self::$route = ['prefix' => 'user',
										 	 'controller' => self::MAIN_CONTROLLER,
								 		    'action' => 'index'];
					}
					elseif($array[0] == 'admin'){
						self::$route = ['prefix' => 'admin',
										 	 'controller' => ucfirst($array[1]),
										 	 'action' => lcfirst($array[2])];
					}else{
						self::$route = ['prefix' => 'user',
										 	 'controller' => ucfirst($array[0]),
								  		    'action' => lcfirst($array[1])];
					}
					if(isset($array[3])){
						self::$route['nest'] = $array[3];	  
					}
            	return true;
				}
			}
            
         return false;
      }

      public static function dispatch($url)
      {
			if(self::matchRoute($url)){
				if(self::$route['prefix'] == 'admin')
					$controller = self::ADMIN_CONTROLLER  . self::$route['controller'] . 'Controller';
				else
					$controller = self::USER_CONTROLLER  . self::$route['controller'] . 'Controller';
			}
         else
            throw new \Exception("Введенный адрес {$url} не совпадает с шаблоном", 404);
         if(class_exists($controller))
            $action = self::$route['action'];
         else
            throw new \Exception("Контроллер {$controller} не найден", 404);
         if(method_exists($controller, $action))
         {
            $controllerObject = new $controller(self::$route);
            $controllerObject->$action();
            $controllerObject->getView();
         }
         else
            throw new \Exception("Метод  {$controller::$action} не найден", 404);

      }

		private static function urlCutParam($url){
			$uri = explode('?' , $url);
			return (substr($uri[0], -1) == '/') ? substr($uri[0], 0, -1) : $uri[0];
		}		  
   }

 ?>
