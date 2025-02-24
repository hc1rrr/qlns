<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require("connect.php");

// Truy vấn dữ liệu từ bảng chamcong
$sql = "SELECT * FROM chamcong";
$result = $conn->query($sql);

$timeKeepingData = array();
while ($row = $result->fetch_assoc()) {
    $timeKeepingData[] = $row;
}

echo json_encode($timeKeepingData);

$conn->close();
?>