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
        console.log(employee);

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
<<<<<<< HEAD
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Quản lý lương nhân viên</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-black text-sm uppercase">
                        <tr className="border-b">
                            {["Mã NV", "Tên NV", "Kỳ trả lương", "Số ngày công", "Mức lương", "Lương thực nhận", "Hành động"].map((header, index) => (
                                <th key={index} className="px-4 py-3 text-center">{header}</th>
                            ))}
=======
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
>>>>>>> e9788e765087e77a3149266f4b266dcb417b1a32
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y">
                        {timeKeepingData.map((employee, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-4 py-3 text-center">{employee.employee_id}</td>
                                <td className="px-4 py-3">{employee.fullname}</td>
                                <td className="px-4 py-3 text-center">{employee.pay_period}</td>
                                <td className="px-4 py-3 text-center">{employee.workday}</td>
                                <td className="px-4 py-3 text-center">{employee.salary_rate.toLocaleString()} VND</td>
                                <td className="px-4 py-3 text-center">{employee.total_solary.toLocaleString()} VND</td>
                                <td className="px-4 py-3 flex justify-center gap-3">
                                    <button className="text-blue-600 hover:text-blue-800" onClick={() => handleEdit(employee)}>✏️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Chỉnh sửa lương nhân viên</h2>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { key: "fullname", label: "Tên nhân viên" },
                                { key: "pay_period", label: "Kỳ trả lương" },
                                { key: "workday", label: "Số ngày công" },
                                { key: "salary_rate", label: "Mức lương" }
                            ].map(({ key, label }) => (
                                <div key={key} className="relative">
                                    <label className="block text-gray-700 text-sm font-semibold mb-1">{label}</label>
                                    <input
                                        type="text"
                                        value={editingEmployee[key]}
                                        onChange={(e) => setEditingEmployee({ ...editingEmployee, [key]: e.target.value })}
                                        className="w-full h-10 p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300">Hủy</button>
                            <button onClick={handleSave} className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Lưu</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Salary;
