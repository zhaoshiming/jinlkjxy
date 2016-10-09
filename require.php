<?php 
	@ $db=new mysqli('localhost','root','root','book');
	if (mysqli_connect()) {
		echo "failed to connect";
	}
	else{
		echo "success";
	}
 ?>