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
            gender: "Nam",
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

    const employeeFields = [
        { key: "fullname", label: "Tên nhân viên", type: "text" },
        { key: "gender", label: "Giới tính", type: "radio", options: ["Nam", "Nữ"] },
        { key: "dob", label: "Ngày sinh", type: "date" },
        { key: "address", label: "Địa chỉ", type: "text" },
        { key: "email", label: "Email", type: "text" },
        { key: "phonenumber", label: "Số điện thoại", type: "tel", pattern: "^\\+\\d{1,15}$" },
        { key: "position_id", label: "Mã chức vụ", type: "text" },
        { key: "department_id", label: "Mã phòng ban", type: "text" },
        { key: "salary", label: "Lương", type: "text" }
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Quản lý nhân viên</h1>
            <button onClick={handleAdd} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Thêm Nhân Viên</button>
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
                                {Object.keys(employee).map((key, i) => (
                                    <td key={i} className="px-4 py-3 text-center">{employee[key]}</td>
                                ))}
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
                            {employeeFields.map(({ key, label, type, options, pattern }) => (
                                <div key={key} className="relative">
                                    <label className="block text-gray-700 text-sm font-semibold mb-1">{label}</label>
                                    {type === "radio" ? (
                                        <div className="flex gap-4">
                                            {options.map(option => (
                                                <label key={option} className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        value={option}
                                                        checked={editingEmployee[key] === option}
                                                        onChange={(e) => setEditingEmployee(prev => ({ ...prev, [key]: e.target.value }))}
                                                        className="form-radio"
                                                    />
                                                    {option}
                                                </label>
                                            ))}
                                        </div>
                                    ) : (
                                        <input
                                            type={type}
                                            value={editingEmployee[key] || ""}
                                            pattern={pattern || undefined}
                                            onChange={(e) => setEditingEmployee(prev => ({ ...prev, [key]: e.target.value }))}
                                            className="w-full h-8 p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    )}
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
