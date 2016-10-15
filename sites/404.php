<?php 
include("include/head.php");

$head = new Head();
$head->addMenuItem("Finde ein Match", "/matcher", false);
$head->printHead();

echo '</br></br></br><h1 class="no-margin-top">Sorry, 404</h1>';

include("include/footer.php");
?>