<?php
require "connect.php";

if ($conn) {
    echo "✅ Kết nối thành công!";
} else {
    echo "❌ Lỗi kết nối: " . $conn->connect_error;
}
?>
