<?php
namespace vendor\core\base;

class View
{
   private $route;
   private $controller;
   private $view;
   private $layout;
   private $data = [];
   private $meta = [];

   public function __construct($route, $layout = '', $view = '', $meta , $data)
   {
      $this->route = $route;
      $this->controller = $route['controller'];
      $this->view = $view;
      $this->meta = $meta;
      $this->data = $data;
      if($layout === false)
         $this->layout = false;
      else
         $this->layout = $layout ?: LAYOUT;
   }

   public function render()
	{		
			$prefix = mb_strtoupper($this->route['prefix']);
			$viewFile = constant($prefix) . PAGES . "/{$this->controller}/{$this->view}.php";
      if(is_file($viewFile))
      {
         ob_start();
         require_once $viewFile;
         $content = ob_get_clean();
      }
      else
         throw new \Exception("{$viewFile} вид не найден", 404);
      if(false !== $this->layout)
		{
         $layoutFile = constant($prefix) . LAYOUTS . "/{$this->layout}/{$this->layout}.php";
         if(is_file($layoutFile))
            require_once $layoutFile;
         else
            throw new \Exception("{$layoutFile} шаблон не найден", 404);
      }

   }

   public function getMeta()
   {
      $output = '<title>' . $this->meta['title'] . '</title>' . PHP_EOL;
      $output .= '<meta name="description" content="' . $this->meta['description'] . '">' . PHP_EOL;
      $output .= '<meta name="keywords" content="' . $this->meta['keywords'] . '">' . PHP_EOL;
      return $output;
   }

   public function getData()
   {
      return $this->data;
   }
}
