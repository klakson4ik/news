<?php

namespace App\Web\User\Controllers;

use vendor\core\base\Controller;
use App\Web\User\Models\AppModel;

class AppController extends Controller
{
   public function __construct($route)
   {
      parent::__construct($route);
      new AppModel();
   }
}
