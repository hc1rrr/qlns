import { useState } from "react";

function Employee() {
    const initialEmployees = [
        {
            employee_id: "NV00001",
            fullname: "Nguyễn Văn A",
            gender: "Nam",
            dob: "1990-01-01",
            address: "Hà Nội",
            email: "nguyenvana@example.com",
            phonenumber: "0123456789",
            position_id: "P001",
            department_id: "D001",
            salary: 10000000,
        },
    ];

    const [employees, setEmployees] = useState(initialEmployees);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = (employee) => {
        setEditingEmployee({ ...employee });
        setShowModal(true);
    };

    const handleAdd = () => {
        setEditingEmployee({
            employee_id: "",
            fullname: "",
            gender: "",
            dob: "",
            address: "",
            email: "",
            phonenumber: "",
            position_id: "",
            department_id: "",
            salary: "",
        });
        setShowModal(true);
    };

    const handleSave = () => {
        setEmployees((prevEmployees) => {
            if (editingEmployee.employee_id) {
                return prevEmployees.map((emp) =>
                    emp.employee_id === editingEmployee.employee_id ? editingEmployee : emp
                );
            }
            return [...prevEmployees, { ...editingEmployee, employee_id: `NV${prevEmployees.length + 1}` }];
        });
        setShowModal(false);
    };

    const handleDelete = (employee_id) => {
        setEmployees((prevEmployees) => prevEmployees.filter(emp => emp.employee_id !== employee_id));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Quản lý nhân viên</h1>
            <button onClick={handleAdd} className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Thêm Nhân Viên</button>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-black text-sm uppercase">
                        <tr className="border-b">
                            {["Mã NV", "Tên NV", "Giới tính", "Ngày sinh", "Địa chỉ", "Email", "SĐT", "Chức vụ", "Phòng ban", "Lương", "Hành động"].map((header, index) => (
                                <th key={index} className="px-4 py-3 text-center">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y">
                        {employees.map((employee, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-4 py-3 text-center">{employee.employee_id}</td>
                                <td className="px-4 py-3">{employee.fullname}</td>
                                <td className="px-4 py-3 text-center">{employee.gender}</td>
                                <td className="px-4 py-3 text-center">{employee.dob}</td>
                                <td className="px-4 py-3">{employee.address}</td>
                                <td className="px-4 py-3">{employee.email}</td>
                                <td className="px-4 py-3 text-center">{employee.phonenumber}</td>
                                <td className="px-4 py-3 text-center">{employee.position_id}</td>
                                <td className="px-4 py-3 text-center">{employee.department_id}</td>
                                <td className="px-4 py-3 text-center">{employee.salary.toLocaleString()} VND</td>
                                <td className="px-4 py-3 flex justify-center gap-3">
                                    <button className="text-blue-600 hover:text-blue-800" onClick={() => handleEdit(employee)}>✏️</button>
                                    <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(employee.employee_id)}>🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{editingEmployee.employee_id ? "Chỉnh sửa nhân viên" : "Thêm nhân viên mới"}</h2>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { key: "fullname", label: "Tên nhân viên" },
                                { key: "gender", label: "Giới tính" },
                                { key: "dob", label: "Ngày sinh" },
                                { key: "address", label: "Địa chỉ" },
                                { key: "email", label: "Email" },
                                { key: "phonenumber", label: "Số điện thoại" },
                                { key: "position_id", label: "Mã chức vụ" },
                                { key: "department_id", label: "Mã phòng ban" },
                                { key: "salary", label: "Lương" }
                            ].map(({ key, label }) => (
                                <div key={key} className="relative">
                                    <label className="block text-gray-700 text-sm font-semibold mb-1">{label}</label>
                                    <input
                                        type="text"
                                        value={editingEmployee[key]}
                                        onChange={(e) => setEditingEmployee({ ...editingEmployee, [key]: e.target.value })}
                                        className="w-full h-8 p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default Employee;
