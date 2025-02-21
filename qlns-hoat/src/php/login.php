<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require ("connect.php");

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

// Truy vấn cơ sở dữ liệu để kiểm tra tài khoản
$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(["status" => "success", "message" => "Login successful"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
}

$conn->close();
?>