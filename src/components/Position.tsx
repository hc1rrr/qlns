import { useState } from "react";

function Position() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const [positions, setPositions] = useState([
    {
      position_id: "CV01",
      position_name: "Giám đốc",
      created_at: "22/02/2025",
    },
    {
      position_id: "CV02",
      position_name: "Phó giám đốc",
      created_at: "22/02/2025",
    },
    {
      position_id: "CV03",
      position_name: "Trưởng phòng hành chính nhân sự",
      created_at: "22/02/2025",
    },
    {
      position_id: "CV04",
      position_name: "Trưởng phòng hành IT",
      created_at: "22/02/2025",
    },
    {
      position_id: "CV05",
      position_name: "Trưởng phòng hành kinh doanh",
      created_at: "22/02/2025",
    },
    {
      position_id: "CV06",
      position_name: "Nhân viên",
      created_at: "22/02/2025",
    },
    {
      position_id: "CV07",
      position_name: "Thực tập sinh",
      created_at: "22/02/2025",
    },
  ]);

  const openModal = (position) => {
    let formattedDate = "";
  
    if (position.created_at.includes("/")) {
      const [day, month, year] = position.created_at.split("/");
      formattedDate = `${year}-${month}-${day}`;
    } else {
      formattedDate = position.created_at;
    }
  
    setSelectedPosition({ ...position, created_at: formattedDate });
    setShowModal(true);
  };
  

  const closeModal = () => {
    setShowModal(false);
    setSelectedPosition(null);
  };

  const handleDelete = (position_id: string) => {
    setPositions((prevPositions) => {
      const updatedPositions = prevPositions
        .filter((position) => position.position_id !== position_id)
        .map((position, index) => ({
          ...position,
          position_id: `CV${String(index + 1).padStart(2, "0")}`,
        }));

      return updatedPositions;
    });
  };

  const handleAdd = () => {
    setSelectedPosition({
      position_id: "",
      position_name: "",
    });
    setShowModal(true);
  };

  const handleSave = () => {
    let formattedDate = selectedPosition.created_at;
    
    //Chuyển định dạng ngày
    if (formattedDate && formattedDate.includes("-")) {
      const [year, month, day] = formattedDate.split("-");
      formattedDate = `${day}/${month}/${year}`;
    }
  
    if (selectedPosition.position_id) {
      const updatedData = positions.map((position) =>
        position.position_id === selectedPosition.position_id
          ? { ...selectedPosition, created_at: formattedDate }
          : position
      );
      setPositions(updatedData);
    } else {
      const newId = `CV${String(positions.length + 1).padStart(2, "0")}`;
      const newPosition = { 
        ...selectedPosition, 
        position_id: newId, 
        created_at: formattedDate 
      };
      setPositions([...positions, newPosition]);
    }
  
    closeModal();
  };
  
  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-semibold">Danh sách chức vụ</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAdd}
      >
        Thêm Chức Vụ
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-black text-sm uppercase">
            <tr className="border-b">
              <th className="px-4 py-3 text-center">Mã chức vụ</th>
              <th className="px-4 py-3 text-center">Tên chức vụ</th>
              <th className="px-4 py-3 text-center">Ngày tạo</th>
              <th className="px-4 py-3 text-center">Thao tác</th>
            </tr>
          </thead>

          <tbody className="text-sm divide-y">
            {positions.map((position, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-center">
                  {position.position_id}
                </td>
                <td className="px-4 py-4">{position.position_name}</td>
                <td className="px-4 py-4 text-center">{position.created_at}</td>
                <td className="px-4 py-3 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => openModal(position)}
                  >
                    ✏️
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(position.position_id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedPosition && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-lg font-bold mb-4 text-center">
              {selectedPosition?.position_id
                ? "Chỉnh sửa chức vụ"
                : "Thêm chức vụ"}
            </h2>
            <label className="block text-sm font-medium text-gray-700">
              Tên chức vụ
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedPosition.position_name}
              onChange={(e) =>
                setSelectedPosition({
                  ...selectedPosition,
                  position_name: e.target.value,
                })
              }
            />

            <label className="block text-sm font-medium text-gray-700">
              Ngày tạo
            </label>
            <input type="date" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedPosition.created_at}
            onChange={(e) =>
              setSelectedPosition({
                ...selectedPosition,
                created_at: e.target.value,
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

export default Position;
