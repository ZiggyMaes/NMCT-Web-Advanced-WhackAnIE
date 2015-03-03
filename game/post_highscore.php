<?php
	header('Access-Control-Allow-Origin: *'); 
	
	if(isset($_POST["name"]) && isset($_POST["score"]))
	{
		$mysqli = new mysqli("mysqlstudent", "ziggymaesbahto7", "ookiefeesh4H", "ziggymaesbahto7");
		
		if ($mysqli->connect_errno)
		{
			die("Fout bij connectie: " . print_r(connect_errno));
		}
		
		if ($stmt = $mysqli->prepare("INSERT INTO game_highscores(name, score) VALUES(?, ?)"))
		{
			$stmt->bind_param("si", $name, $score);
			
			$name = $_POST["name"];
			$score = $_POST["score"];
			
			$stmt->execute();			
			$stmt->close();
		}	
		$mysqli->close();
	}	
?>