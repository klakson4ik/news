<?php

namespace App\Web\User\Models\Category;

use App\Web\User\Models\AppModel;
use vendor\core\libs\DB;

class DBModel extends AppModel
{
	public static function getDataDB()
	{
		$db = DB::connector();
		$sql = ("SELECT `id`, `name`, `parent_id` FROM `categories`");
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$result = $stmt->fetchAll();
		return $result;
	}
}
