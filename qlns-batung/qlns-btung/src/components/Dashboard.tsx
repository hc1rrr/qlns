function Dashboard() {
  return (
    <main className="p-4">
      {/* Nhân viên */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 card">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div className="text-gray-500">
              <h4 className="text-2xl font-semibold">41</h4>
              <p className="text-sm">Nhân viên</p>
              
            </div>
          </div>

          {/* Chức vụ */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div className="text-gray-500">
              <h4 className="text-2xl font-semibold">9</h4>
              <p className="text-sm">Chức vụụ
              </p>
            </div>
          </div>

          {/* Phòng ban */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div className="text-gray-500">
              <h4 className="text-2xl font-semibold">3</h4>
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
                <tr>
                  <td className="px-4 py-2">Giám đốc</td>
                  <td className="px-4 py-2">1</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Phó giám đốc</td>
                  <td className="px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Trưởng phòng</td>
                  <td className="px-4 py-2">5</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Nhân viên</td>
                  <td className="px-4 py-2">30</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Thực tập sinh</td>
                  <td className="px-4 py-2">10</td>
                </tr>
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
                <tr>
                  <td className="px-4 py-2">Phòng Nhân sự</td>
                  <td className="px-4 py-2">9</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Phòng kế toán</td>
                  <td className="px-4 py-2">6</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Phòng Kinh doanh</td>
                  <td className="px-4 py-2">10</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Phòng Marketing</td>
                  <td className="px-4 py-2">10</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Phòng IT</td>
                  <td className="px-4 py-2">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
