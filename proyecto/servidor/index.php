<?php
require_once('system/headers.php'); // Get Headers

# Connect to BBDD
require_once('system/db_connect.php');


$tools = [];


try {
	$sentencia  = $conn->prepare("SELECT * FROM tool");
	$sentencia -> execute();
	
	$result = $sentencia->fetchAll();
	$sentencia = null;

	
	foreach ($result as $item) {

		$tool = (object) [];

		$tool->id = $item['id'];
		$tool->name = $item['name'];
		$tool->png = $item['png'];
		$tool->webp = $item['webp'];

		$id= $item['id'];

		//Tool tags
		try {
			$sentencia  = $conn->prepare("SELECT tag FROM has_tag WHERE tool = '$id'");
			$sentencia -> execute();
	
			$resultTag = $sentencia->fetchAll();
			$sentencia = null;

			$tagsArray = [];

			foreach ($resultTag as $tagTag) {

				$tagId = $tagTag['tag'];

				try {
					$sentencia  = $conn->prepare("SELECT * FROM tag_type WHERE id = '$tagId'");
					$sentencia -> execute();
			
					$resultTagName = $sentencia->fetchAll();
					$sentencia = null;

					array_push($tagsArray, $resultTagName[0]['name']);

				} catch (Exception $e){
					$error = $e->getMessage();
					$conn->rollback();
				}

				$tool->tags = $tagsArray;
			
			}

		} catch (Exception $e){
			$error = $e->getMessage();
			$conn->rollback();
		}


		//OficialPage
		try {
			$sentencia  = $conn->prepare("SELECT * FROM has_url WHERE tool = '$id' AND type = '1'");
			$sentencia -> execute();

			$rows = $sentencia->rowCount();
			$resultPO = $sentencia->fetchAll();
			$sentencia = null;

			if($rows > 0){

				$url = (object) [];

				$url->name = $resultPO[0]['name'];
				$url->url = $resultPO[0]['url'];

				$tool->oficialPage = $url;
			} else {
				$tool->oficialPage = null;
			}
			

		} catch (Exception $e){
			$error = $e->getMessage();
			$conn->rollback();
		}



		//tutorialsPages
		try {
			$sentencia  = $conn->prepare("SELECT * FROM has_url WHERE tool = '$id' AND type = '2'");
			$sentencia -> execute();

			$rowsTut = $sentencia->rowCount();
			$resultTut = $sentencia->fetchAll();
			$sentencia = null;

			$tutorialArray = [];

			if($rowsTut> 0){
	
				foreach ($resultTut as $tutorial) {

					$url = (object) [];

					$url->name = $tutorial['name'];
					$url->url = $tutorial['url'];
					
					array_push($tutorialArray, $url);
				}
			} 

			$tool->tutorialsPages =  $tutorialArray;

		} catch (Exception $e){
			$error = $e->getMessage();
			$conn->rollback();
		}


		//analisisPages
		try {
			$sentencia  = $conn->prepare("SELECT * FROM has_url WHERE tool = '$id' AND type = '3'");
			$sentencia -> execute();

			$rowsAn = $sentencia->rowCount();
			$resultAn = $sentencia->fetchAll();
			$sentencia = null;

			$analisisArray = [];

			if($rowsAn> 0){
	
				foreach ($resultAn as $analisis) {

					$url = (object) [];

					$url->name = $analisis['name'];
					$url->url = $analisis['url'];
					
					array_push($analisisArray, $url);
				}
			} 

			$tool->analisisPages =  $analisisArray;

		} catch (Exception $e){
			$error = $e->getMessage();
			$conn->rollback();
		}

		array_push($tools, $tool);
	}

	
} catch (Exception $e){
	$error = $e->getMessage();
	$conn->rollback();
}



//tagList
try {
	$sentencia  = $conn->prepare("SELECT * FROM tag_type");
	$sentencia -> execute();

	$resultTagList = $sentencia->fetchAll();
	$sentencia = null;

	$tagsArray = [];

	foreach ($resultTagList as $tagR) {
		
		array_push($tagsArray, $tagR['name']);
	}

} catch (Exception $e){
	$error = $e->getMessage();
	$conn->rollback();
}


echo json_encode([$tools, $tagsArray]);

?>


