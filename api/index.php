<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'DBConnect.php';

$db = new DbConnect;
$conn = $db->connect();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    $sql = "SELECT * FROM users";
    $path = explode('/', $_SERVER['REQUEST_URI']);

    if (isset($path[3]) && is_numeric($path[3])) {
      $sql .= " WHERE id = :id";
      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':id', $path[3]);
      $stmt->execute();
      $users = $stmt->fetch(PDO::FETCH_ASSOC);
    } else {
      $stmt = $conn->prepare($sql);
      $stmt->execute();
      $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    echo json_encode($users);
    break;
  case 'POST':
    $user = json_decode(file_get_contents('php://input'));
    $sql = "INSERT INTO users(id, email, username, password, first_name, last_name) VALUES(null, :email, :username, :password, :first_name, :last_name)";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':email', $user->email);
    $stmt->bindParam(':username', $user->username);
    $stmt->bindParam(':password', $user->password);
    $stmt->bindParam(':first_name', $user->first_name);
    $stmt->bindParam(':last_name', $user->last_name);

    try {
      $stmt->execute();

      $response = ['message' => 'Record created successfully.'];
      echo json_encode($response);
    } catch (\Throwable $th) {
      echo ($th);
    }

    break;
  case 'DELETE':

    break;
}
