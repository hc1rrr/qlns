import { useState } from "react";

function Salary() {
    const initialData = [
        {
            employee_id: "NV00001",
            name: "Nguyễn Văn A",
            pay_period: "11/2025",
            work_days: 22,
            salary_rate: 500000,
            total_salary: 11000000,
        },
        {
            employee_id: "NV00002",
            name: "Trần Thị B",
            pay_period: "11/2025",
            work_days: 20,
            salary_rate: 450000,
            total_salary: 9000000,
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
            const updatedData = prevData.map((emp) =>
                emp.employee_id === editingEmployee.employee_id ? { ...editingEmployee, total_salary: editingEmployee.work_days * editingEmployee.salary_rate } : emp
            );
            return updatedData;
        });
        setShowModal(false);
    };

    return (
        <div>
            <h1 className="p-5 text-xl font-semibold">Danh sách</h1>
            <table className="min-w-full divide-y bg-gray-100">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Mã NV</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Tên NV</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Kỳ trả lương</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Số ngày công</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Mức lương</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Lương thực nhận</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Thao tác</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {timeKeepingData.map((employee, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.employee_id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.pay_period}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.work_days}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.salary_rate.toLocaleString()} VND</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.total_salary.toLocaleString()} VND</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="px-2" onClick={() => handleEdit(employee)}>
                                    <svg className="h-6 w-6 text-slate-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full transition-all duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Chỉnh sửa nhân viên</h2>
                        
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="floating_name"
                                id="floating_name"
                                className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out"
                                value={editingEmployee.name}
                                onChange={(e) => setEditingEmployee({ ...editingEmployee, name: e.target.value })}
                                required
                            />
                            <label
                                htmlFor="floating_name"
                                className="peer-focus:font-semibold text-lg absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 transition-all duration-300 ease-in-out"
                            >
                                Tên nhân viên
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="floating_pay_period"
                                id="floating_pay_period"
                                className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out"
                                value={editingEmployee.pay_period}
                                onChange={(e) => setEditingEmployee({ ...editingEmployee, pay_period: e.target.value })}
                                required
                            />
                            <label
                                htmlFor="floating_pay_period"
                                className="peer-focus:font-semibold text-lg absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 transition-all duration-300 ease-in-out"
                            >
                                Kỳ trả lương
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="number"
                                name="floating_work_days"
                                id="floating_work_days"
                                className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out"
                                value={editingEmployee.work_days}
                                onChange={(e) => setEditingEmployee({ ...editingEmployee, work_days: parseInt(e.target.value) || 0 })}
                                required
                            />
                            <label
                                htmlFor="floating_work_days"
                                className="peer-focus:font-semibold text-lg absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 transition-all duration-300 ease-in-out"
                            >
                                Số ngày công
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="number"
                                name="floating_salary_rate"
                                id="floating_salary_rate"
                                className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out"
                                value={editingEmployee.salary_rate}
                                onChange={(e) => setEditingEmployee({ ...editingEmployee, salary_rate: parseInt(e.target.value) || 0 })}
                                required
                            />
                            <label
                                htmlFor="floating_salary_rate"
                                className="peer-focus:font-semibold text-lg absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 transition-all duration-300 ease-in-out"
                            >
                                Mức lương
                            </label>
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-600"
                                onClick={() => setShowModal(false)}
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

export default Salary;
