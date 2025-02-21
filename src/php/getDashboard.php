<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    require("connect.php");
    
    // Truy vấn số lượng nhân viên
    $sql = "SELECT COUNT(*) as employee_count FROM nhan_vien";
    $result = $conn->query($sql);
    $employee_count = $result->fetch_assoc()['employee_count'];
    
    // Truy vấn số lượng chức vụ
    $sql = "SELECT COUNT(*) as position_count FROM chuc_vu";
    $result = $conn->query($sql);
    $position_count = $result->fetch_assoc()['position_count'];
    
    // Truy vấn số lượng phòng ban
    $sql = "SELECT COUNT(*) as department_count FROM phong_ban";
    $result = $conn->query($sql);
    $department_count = $result->fetch_assoc()['department_count'];
    
    // Truy vấn số lượng nhân viên theo chức vụ
    $sql = "SELECT chuc_vu, COUNT(*) as count FROM nhan_vien GROUP BY chuc_vu";
    $result = $conn->query($sql);
    $positions = array();
    while ($row = $result->fetch_assoc()) {
        $positions[$row['chuc_vu']] = $row['count'];
    }
    
    // Truy vấn số lượng nhân viên theo phòng ban
    $sql = "SELECT phong_ban, COUNT(*) as count FROM nhan_vien GROUP BY phong_ban";
    $result = $conn->query($sql);
    $departments = array();
    while ($row = $result->fetch_assoc()) {
        $departments[$row['phong_ban']] = $row['count'];
    }
    
    echo json_encode([
        "employee_count" => $employee_count,
        "position_count" => $position_count,
        "department_count" => $department_count,
        "positions" => $positions,
        "departments" => $departments
    ]);
    
    $conn->close();
?>