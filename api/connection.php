<?php function connection()
{
  try {
    $conn = new PDO('mysql:host=localhost;dbname=' . $this->dbname, $this->user, $this->pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return new mysqli('localhost', 'root', 'mysql');
  } catch (\Exception $e) {
    echo "Database error" . $e->getMessage();
  }
}
