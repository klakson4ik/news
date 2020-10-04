<?php

namespace vendor\core\libs\Console\Element;

class ResourceElement
{		  
	private const CONTROLLER_PATH = "./App/Controllers/Admins/";

	private static $nameController;

	public function resource($param)
	{
		self::$nameController = ucfirst($param[3]);
		self::createController();
	}

	private static function createController(){
		$fileName = self::$controllerName . 'Controller.php';
		$fullName = self::CONTROLLER_PATH . $fileName;
		$text = '<?php' . PHP_EOL;
		$text .= '' . PHP_EOL;
		$text .= 'namespace App\\Controllers\\Users;' . PHP_EOL;
		$text .= '' . PHP_EOL;
		$text .= 'use App\\Controllers\\AppControllers;' . PHP_EOL;
		$text .= 'use App\\Models\\' . self::$controllerName . '\\' . self$controllerName. 'Model;' . PHP_EOL;
		$text .= '' . PHP_EOL;
		$text .= 'class ' . $controllerName . 'Controller extends AppController' . PHP_EOL;
		$text .= '{' . PHP_EOL;
		$text .= '	public function ' . $actionName . '()' . PHP_EOL;
		$text .= '	{' . PHP_EOL;
		$text .= '		$data = ' . $controllerName . 'Model::getData();' . PHP_EOL;
		$text .= '		$title = "";' . PHP_EOL;
		$text .= '		$description = "";' . PHP_EOL;
		$text .= '		$keywords = "";' . PHP_EOL;
		$text .= '		$this->setMeta($title, $description, $keywords);' . PHP_EOL;
		$text .= '		$this->setData($data);' . PHP_EOL;
		$text .= '	}' . PHP_EOL;
		$text .= '}' . PHP_EOL;
	}
}
