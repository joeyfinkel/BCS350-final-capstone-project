<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$sql = "SELECT * FROM users";
$conn = mysqli_connect('localhost', 'root', 'mysql', 'capstone_project');
$result = $conn->query($sql);
$method = $_SERVER['REQUEST_METHOD'];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

switch ($method) {
  case 'GET':
    $sql = "SELECT * FROM users";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $userData = [];

    if ($result->num_rows > 0) {
      // output data of each row
      while ($row = $result->fetch_assoc()) {
        $data = json_encode($row);

        array_push($userData, $data);
      }
      echo json_encode($userData);
    } else {
      echo "0 results";
    }
    break;

  default:
    # code...
    break;
}




$conn->close();
