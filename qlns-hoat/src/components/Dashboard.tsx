import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState({
    employee_count: 0,
    position_count: 0,
    department_count: 0,
    positions: {},
    departments: {}
  });

  useEffect(() => {
    // Gọi API PHP để lấy dữ liệu về số lượng nhân viên, chức vụ và phòng ban
    axios.get("http://localhost/qlns/src/php/getDashboardData.php")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <main className="p-4">
      {/* Nhân viên */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 card">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div className="text-gray-500">
              <h4 className="text-2xl font-semibold">{data.employee_count}</h4>
              <p className="text-sm">Nhân viên</p>
            </div>
          </div>

          {/* Chức vụ */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div className="text-gray-500">
              <h4 className="text-2xl font-semibold">{data.position_count}</h4>
              <p className="text-sm">Chức vụ</p>
            </div>
          </div>

          {/* Phòng ban */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div className="text-gray-500">
              <h4 className="text-2xl font-semibold">{data.department_count}</h4>
              <p className="text-sm">Phòng ban</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
          {/* Bảng chức vụ */}
          <div className="bg-white rounded-lg shadow">
            <h3 className="p-4 text-lg font-semibold text-gray-700">Chức vụ</h3>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Chức vụ</th>
                  <th className="px-4 py-2">Số lượng nhân viên</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data.positions).map((position, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{position}</td>
                    <td className="px-4 py-2">{data.positions[position]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bảng phòng ban */}
          <div className="bg-white rounded-lg shadow">
            <h3 className="p-4 text-lg font-semibold text-gray-700">
              Phòng ban
            </h3>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Phòng ban</th>
                  <th className="px-4 py-2">Số lượng nhân viên</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data.departments).map((department, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{department}</td>
                    <td className="px-4 py-2">{data.departments[department]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;