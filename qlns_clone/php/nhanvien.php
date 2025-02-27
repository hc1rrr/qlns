<?php
require "connect.php"; // Kết nối CSDL

$sql = "SELECT nv.MaNV, nv.TenNV, tt.ChucVu, tt.Luong 
        FROM nhanvien nv 
        JOIN thongtinnhanvien tt ON nv.MaNV = tt.MaNV";

$result = $conn->query($sql);

$employees = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $employees[] = $row;
    }
}

// Trả dữ liệu dưới dạng JSON
header("Content-Type: application/json");
echo json_encode($employees);

$conn->close();
?>
