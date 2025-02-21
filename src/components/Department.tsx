function Department() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

  const departmentData = [
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
  ];

  return (
    <div>
      <h1 className="p-5 text-xl font-semibold">Danh sách</h1>
      <button
        type="button"
        className="mb-5 ml-5 px-4 py-2 bg-blue-500 rounded-md text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Thêm mới
      </button>

      <table className="min-w-full divide-y bg-gray-100">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Mã phòng ban
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Tên phòng ban
            </th>
            <th className=" w-1/2 truncate px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Mô tả
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
              Thao tác
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {departmentData.map((department, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {department.department_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {department.department_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-wrap">
                {department.departmet_description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-2">
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
    </div>
  );
}

export default Department;
