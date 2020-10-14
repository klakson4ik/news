<?php 

namespace App\Web\User\Models\Home;

use App\Web\User\Models\AppModel;
use vendor\core\libs\DB;

class DBModel extends AppModel
{
	public static function getDataDB()
	{  
		$db = DB::connector();
	}
}
