<?php

namespace vendor\core\libs;

class DB
{

    public static function connector()
    {
			require_once CONFIG . '/configDB.php';
			try {
				return new \PDO(DB_DSN, DB_LOGIN, DB_PASSWORD, DB_OPT);
			}
			catch(PDOException $e) {
				$e->getMessage();
			}
    }

}


