<?php

class Head {

  private $menu = array();
  private $slidemenu = array();

  public function addMenuItem($name, $link, $selected) {
    array_push($this->menu, array($name, $link, $selected));
  }

  public function addSideMenuItem($code) {
    array_push($this->slidemenu, $code);
  }

  public function printHead() {
    echo '<!DOCTYPE html>
    <html>
    <head>
     <script src="http://code.jquery.com/jquery.min.js"></script>
     <!--<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
     <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">-->
     <link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />
     <script src="http://getbootstrap.com/dist/js/bootstrap.js"></script>
     <link href="/style.css" rel="stylesheet" type="text/css" />
     <script src="/main.js"></script>
     <meta charset=utf-8 />
     <meta name="viewport" content="width=device-width, initial-scale=0.6">
     <title>Stereotyper</title>

   </head>
   <body>';

   echo '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">
      <div class="container">
       <div class="navbar-header">
        <a class="navbar-toggle"> 
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
        <a class="navbar-brand" href="/">Stereotyper</a>
      </div>
      <div id="slidemenu">';

        foreach ($this->slidemenu as $arr) {
          echo $arr;
        }

        
       echo '<ul class="nav navbar-nav">';

        foreach ($this->menu as $arr) {
          if($arr[2] == true) {
            echo '<li class="active"><a href="'. $arr[1] .'">'. $arr[0] .'</a></li>';
          } else {
            echo '<li><a href="'. $arr[1] .'">'. $arr[0] .'</a></li>';
          }
        }

        
       echo '</ul>

     </div>
   </div>
 </div>

 <div id="page-content">

  <div class="container" >';

/*

<form class="navbar-form navbar-right" role="form">
          <div class="form-group">
            <input type="search" placeholder="search" class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Search</button>
        </form>


<li><a href="#contact">Contact</a></li>
     <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
      <ul class="dropdown-menu">
       <li><a href="#">Action</a></li>
       <li><a href="#">Another action</a></li>
       <li><a href="#">Something else here</a></li>
       <li class="divider"></li>
       <li class="dropdown-header">Nav header</li>
       <li><a href="#">Separated link</a></li>
       <li><a href="#">One more separated link</a></li>
       <li><a href="#">Action</a></li>
       <li><a href="#">Another action</a></li>
       <li><a href="#">Something else here</a></li>
       <li class="divider"></li>
       <li class="dropdown-header">Nav header</li>
       <li><a href="#">Separated link</a></li>
       <li><a href="#">One more separated link</a></li>
       <li><a href="#">Action</a></li>
       <li><a href="#">Another action</a></li>
       <li><a href="#">Something else here</a></li>
       <li class="divider"></li>
       <li class="dropdown-header">Nav header</li>
       <li><a href="#">Separated link test long title goes here</a></li>
       <li><a href="#">One more separated link</a></li>
      </ul>
     </li>
*/
   }

 }

 ?>

