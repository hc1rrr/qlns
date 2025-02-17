// import { useState } from "react";

function TimeKeeping() {
  const timeKeepingData = [
    {
      employee_id: "NV00001",
      name: "Nguyễn Văn A",
      check_in: "08:02:32 AM 11/02/2025",
      check_out: "17:05:19 PM 11/02/2025",
    },
    {
      employee_id: "NV00002",
      name: "Trần Thị B",
      check_in: "07:45:00 AM 11/02/2025",
      check_out: "16:30:00 PM 11/02/2025",
    },
    {
      employee_id: "NV00003",
      name: "Nguyễn Thị C",
      check_in: "08:15:00 AM 11/02/2025",
      check_out: "17:30:00 PM 11/02/2025",
    },
  ];

  const calculateWorkHours = (checkIn: string, checkOut: string) => {
    const parseTime = (timeStr: string) => {
      const [time, modifier] = timeStr.split(" ");
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
              <td className="px-6 py-4 whitespace-nowrap">
                {calculateWorkHours(employee.check_in, employee.check_out)} giờ
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-2">
                <svg className="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimeKeeping;
