<?php

$hostname='localhost';
$user='root';
$password='';
$db='hrm';
$connect=mysqli_connect('localhost','root','','hrm');

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


?>