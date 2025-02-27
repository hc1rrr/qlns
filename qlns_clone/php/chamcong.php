<?php
require "connect.php"; // Kết nối đến database

// Truy vấn dữ liệu từ bảng chamcong
$sql = "SELECT * FROM chamcong";
$result = $conn->query($sql);

// Kiểm tra dữ liệu
if ($result->num_rows > 0) {
    // Chuyển dữ liệu thành mảng JSON
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode(["status" => "success", "data" => $data]);
} else {
    echo json_encode(["status" => "error", "message" => "Không có dữ liệu chấm công"]);
}

$conn->close();
?>
