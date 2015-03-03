<?php
	header('Access-Control-Allow-Origin: *'); 

	$mysqli = new mysqli("mysqlstudent", "ziggymaesbahto7", "ookiefeesh4H", "ziggymaesbahto7");

    if ($mysqli->connect_errno)
    {
        die("Fout bij connectie: " . print_r(connect_errno));
    }


	if ($stmt = $mysqli->prepare("SELECT name, score FROM game_highscores ORDER BY score DESC LIMIT 10"))
	{		
		$stmt->execute();
		
		$stmt->bind_result($name, $score);
		
		$json = array();
		while($stmt->fetch())
		{
			$jsonrow = array();
			
			$jsonrow['name'] = $name;
			$jsonrow['score'] = $score;
			
			$json[] = $jsonrow;
		
		}
		echo json_encode($json);
		
		
		$stmt->close();
	}


    $mysqli->close();
?>