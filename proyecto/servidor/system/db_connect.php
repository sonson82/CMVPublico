<?php

require_once('config.php');
	
	$options = [
	  PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
	  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
	  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
	  PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES  \'UTF8\''
	];
	
	try {
		
		$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, $options);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);	
		
	} catch(PDOException $e){
		
		echo "No ha sido posible realizar la conexión con la base de datos. Por favor, inténtelo de nuevo.  (Error: " . $e->getMessage() . ").";
		
	}
?>