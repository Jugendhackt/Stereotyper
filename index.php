<?php 
include("sites/include/head.php");

$head = new Head();
$head->addMenuItem("Finde ein Match", "/matcher", false);
$head->printHead();

?>
</br>
</br>
    <h1 class="no-margin-top">Stereotyper</h1>

<p style="text-align: center; color: #868686; font-size: 15px; font-family: avenir; font-weight: 200;">&nbsp;</p> <p style="text-align: center;">Herzlich willkommen auf&nbsp;unserer Seite&nbsp;:)</p> <p style="text-align: center;">&nbsp;</p> <p style="text-align: center;">&nbsp;</p> <p style="text-align: center;">&nbsp;</p> <p>&nbsp;</p>

<form action="/matcher" method="post">
 <p>Nickname: <input type="text" class="form-control"  name="name" /></p>
 <p>
<button type="button" style="font-size: 40px;" class="btn btn-success">Go</button></p>
</form>


    
    
<?php 
include("sites/include/footer.php");
?>
