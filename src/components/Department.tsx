import { useState } from "react";

function Department() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const [departments, setDepartments] = useState([
    {
      department_id: "PB01",
      department_name: "Phòng Nhân sự",
      departmet_description:
        "Phòng nhân sự là một bộ phận trong doanh nghiệp có nhiệm vụ quản lý và phát triển tài nguyên con người của tổ chức đó.",
    },
    {
      department_id: "PB02",
      department_name: "Phòng Kế toán",
      departmet_description:
        "Phòng kế toán là bộ phận quản lý tất cả các hoạt động liên quan đến kế toán & tài chính trong doanh nghiệp.",
    },
    {
      department_id: "PB03",
      department_name: "Phòng Kinh doanh",
      departmet_description:
        "Phòng kinh doanh là bộ phận trong một công ty chịu trách nhiệm quản lý và thực hiện các hoạt động liên quan đến việc tạo ra doanh số bán hàng và lợi nhuận.",
    },
    {
      department_id: "PB04",
      department_name: "Phòng Marketing",
      departmet_description:
        "Phòng marketing là cầu nối giữa công ty và thị trường bên ngoài, giữa sản phẩm và người tiêu dùng, giữa thuộc tính sản phẩm với nhu cầu người tiêu dùng.",
    },
    {
      department_id: "PB05",
      department_name: "Phòng IT",
      departmet_description:
        "Phòng IT là phòng ban đảm bảo hệ thống công nghệ thông tin của doanh nghiệp hoạt động ổn định, chính xác, từ đó hỗ trợ hoạt động sản xuất, kinh doanh, quản trị,... của doanh nghiệp dễ dàng và hiệu quả.",
    },
  ]);

  const openModal = (department) => {
    setSelectedDepartment({ ...department });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDepartment(null);
  };

  const handleDelete = (department_id) => {
    setDepartments((prevDepartments) => {
      const updatedDepartments = prevDepartments
        .filter((department) => department.department_id !== department_id)
        .map((department, index) => ({
          ...department,
          department_id: `PB${String(index + 1).padStart(2, "0")}`, // Đánh lại số từ 1
        }));

      return updatedDepartments;
    });
  };

  const handleAdd = () => {
    setSelectedDepartment({
      department_id: "",
      department_name: "",
      departmet_description: "",
    });
    setShowModal(true);
  };

  const handleSave = () => {
    if (selectedDepartment.department_id) {
      const updatedData = departments.map((department) =>
        department.department_id === selectedDepartment.department_id
          ? selectedDepartment
          : department
      );
      setDepartments(updatedData);
    } else {
      const newId = `PB${String(departments.length + 1).padStart(2, "0")}`; // Tạo mã PB mới
      const newDepartment = { ...selectedDepartment, department_id: newId };
      setDepartments([...departments, newDepartment]); // Thêm vào cuối danh sách
    }

    closeModal();
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-semibold">Danh sách phòng ban</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAdd}
      >
        Thêm Phòng Ban
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-black text-sm uppercase">
            <tr className="border-b">
              <th className="px-4 py-3 text-center">Mã phòng ban</th>
              <th className="px-4 py-3 text-center">Tên phòng ban</th>
              <th className="px-4 py-3 text-center">Mô tả</th>
              <th className="px-4 py-3 text-center">Thao tác</th>
            </tr>
          </thead>

          <tbody className="text-sm divide-y">
            {departments.map((department, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-center">
                  {department.department_id}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {department.department_name}
                </td>
                <td className="w-2/3 px-4 py-4 whitespace-nowrap text-wrap">
                  {department.departmet_description}
                </td>
                <td className="px-4 py-3 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => openModal(department)}
                  >
                    ✏️
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(department.department_id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedDepartment && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-lg font-bold mb-4 text-center">
              {selectedDepartment?.department_id
                ? "Chỉnh sửa phòng ban"
                : "Thêm phòng ban"}
            </h2>
            <label className="block text-sm font-medium text-gray-700">
              Tên phòng ban
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedDepartment.department_name}
              onChange={(e) =>
                setSelectedDepartment({
                  ...selectedDepartment,
                  department_name: e.target.value,
                })
              }
            />

            <label className="block text-sm font-medium text-gray-700 mt-3">
              Mô tả
            </label>
            <textarea
              className="w-full h-32 mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedDepartment.departmet_description}
              onChange={(e) =>
                setSelectedDepartment({
                  ...selectedDepartment,
                  departmet_description: e.target.value,
                })
              }
            />

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

export default Department;
