import { useState } from "react";

function Salary() {
    const initialData = [
        {
            employee_id: "NV00001",
            fullname: "Nguyễn Văn A",
            pay_period: "11/2025",
            workday: 22,
            salary_rate: 500000,
            total_solary: 11000000,
        },
        {
            employee_id: "NV00002",
            fullname: "Trần Thị B",
            pay_period: "11/2025",
            workday: 20,
            salary_rate: 450000,
            total_solary: 9000000,
        }
    ];

    const [timeKeepingData, setTimeKeepingData] = useState(initialData);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = (employee) => {
        setEditingEmployee({ ...employee });
        setShowModal(true);
    };

    const handleSave = () => {
        setTimeKeepingData((prevData) => {
            return prevData.map((emp) =>
                emp.employee_id === editingEmployee.employee_id
                    ? { ...editingEmployee, total_solary: editingEmployee.workday * editingEmployee.salary_rate }
                    : emp
            );
        });
        setShowModal(false);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Danh sách nhân viên</h1>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-black text-sm uppercase">
                    <tr>
                        <th className="px-4 py-3 text-center">Mã NV</th>
                        <th className="px-4 py-3 text-center">Tên NV</th>
                        <th className="px-4 py-3 text-center">Kỳ trả lương</th>
                        <th className="px-4 py-3 text-center">Số ngày công</th>
                        <th className="px-4 py-3 text-center">Mức lương</th>
                        <th className="px-4 py-3 text-center">Lương thực nhận</th>
                        <th className="px-4 py-3 text-center">Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody className="text-sm divide-y">
                    {timeKeepingData.map((employee, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-3 text-center">{employee.employee_id}</td>
                            <td className="px-4 py-3 text-center">{employee.fullname}</td>
                            <td className="px-4 py-3 text-center">{employee.pay_period}</td>
                            <td className="px-4 py-3 text-center">{employee.workday}</td>
                            <td className="px-4 py-3 text-center">{employee.salary_rate.toLocaleString()} VND</td>
                            <td className="px-4 py-3 text-center">{employee.total_solary.toLocaleString()} VND</td>
                            <td className="px-4 py-3 text-center">
                                <button className="text-pink-600 hover:text-pink-800" onClick={() => handleEdit(employee)}>
                                    ✏️ 
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full transition-all duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Chỉnh sửa nhân viên</h2>

                        {/* Input Tên Nhân Viên */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Tên nhân viên</label>
                            <input
                                type="text"
                                value={editingEmployee.fullname}
                                onChange={(e) => setEditingEmployee({ ...editingEmployee, fullname: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Input Số ngày công */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Số ngày công</label>
                            <input
                                type="number"
                                value={editingEmployee.workday}
                                onChange={(e) => setEditingEmployee({ ...editingEmployee, workday: parseInt(e.target.value) || 0 })}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Input Mức lương */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Mức lương</label>
                            <input
                                type="number"
                                value={editingEmployee.salary_rate}
                                onChange={(e) => setEditingEmployee({ ...editingEmployee, salary_rate: parseInt(e.target.value) || 0 })}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Button */}
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition"
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

export default Salary;
