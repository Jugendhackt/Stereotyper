<?php

class Tools {


public function getApartmentWebcode($id) {
	return substr(str_shuffle(strtolower(sha1(rand() . time() . "Haus_System" . $id))),0, 8);
}


public function getHumanTimeFromMySQL($date) {
	return date("d.m.Y H:i:s", strtotime($date));
}

public function getHumanDateFromMySQL($date) {
	return date("d.m.Y", strtotime($date));
}

public function toMySQLTimestamp($date) {
	return date("Y-m-d H:i:s", strtotime($date));
}

}

?>