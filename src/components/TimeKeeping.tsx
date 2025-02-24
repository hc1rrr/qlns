import { useState } from "react";

function TimeKeeping() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [timeKeepingData, setTimeKeepingData] = useState([
    {
      employee_id: "NV00001",
      name: "Nguyễn Văn A",
      check_in: "08:02:32 AM",
      check_out: "17:05:19 PM",
      date: "11/02/2025",
    },
    {
      employee_id: "NV00002",
      name: "Trần Thị B",
      check_in: "08:15:00 AM",
      check_out: "17:10:30 PM",
      date: "11/02/2025",
    },
    {
      employee_id: "NV00003",
      name: "Lê Văn C",
      check_in: "08:50:45 AM",
      check_out: "12:30:20 PM",
      date: "11/02/2025",
    },
  ]);

  const openModal = (employee) => {
    setSelectedEmployee({ ...employee });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const handleSave = () => {
    const updatedData = timeKeepingData.map((employee) =>
      //Xử lý nv có id === nv đc chọn -> thay t2 từ selectedEmployee
      employee.employee_id === selectedEmployee.employee_id
        ? selectedEmployee
        : employee 
    );
    setTimeKeepingData(updatedData);
    closeModal();
  };

  const calculateWorkHours = (checkIn: string, checkOut: string) => {
    const parseTime = (timeStr: string) => {
      const [time] = timeStr.split(" ");
      let [hours, minutes, seconds] = time.split(":").map(Number);

      return hours + minutes / 60 + seconds / 3600; // Trả về tổng giờ dưới dạng số
    };

    const inHours = parseTime(checkIn);
    const outHours = parseTime(checkOut);

    let totalHours = outHours - inHours;

    if (inHours < 12 && outHours > 13) {
      totalHours -= 1;
    }

    return totalHours.toFixed(0);
  };

  return (
    <div>
      <h1 className="p-5 text-xl font-semibold">Danh sách</h1>
      <table className="min-w-full divide-y bg-gray-100">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Mã NV
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Tên NV
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Thời gian vào
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Thời gian ra
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Ngày tháng
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Tổng giờ làm
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {timeKeepingData.map((employee, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.employee_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.check_in}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.check_out}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {calculateWorkHours(employee.check_in, employee.check_out)} giờ
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-2" onClick={() => openModal(employee)}>
                  <svg
                    className="h-6 w-6 text-slate-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />{" "}
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Chấm công</h2>
            <tr>
              <td>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thời gian vào:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  className="ml-2 border rounded px-2 py-1"
                  value={selectedEmployee?.check_in}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      check_in: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thời gian ra:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  className="ml-2 border rounded px-2 py-1"
                  value={selectedEmployee?.check_out}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      check_out: e.target.value,
                    })
                  }
                />
              </td>
            </tr>

            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="px-4 py-2 mx-4 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-600"
                onClick={closeModal}
              >
                Hủy
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 rounded-md text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleSave}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TimeKeeping;
