import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  // Kiểm tra lỗi email khi người dùng nhập
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }
  };

  // Kiểm tra lỗi password khi người dùng nhập
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (passwordValue.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra lại lỗi khi nhấn Đăng nhập
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Email không hợp lệ");
    }
    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    }

    // Nếu không có lỗi thì tiếp tục đăng nhập
    if (!emailError && !passwordError) {
      try {
        const response = await axios.post("http://localhost/qlns/src/php/login.php", {
          email,
          password,
        });
        if (response.data.status === "success") {
          navigate("/dashboard");
          alert("Đăng nhập thành công!");
        } else {
          alert("Đăng nhập thất bại: " + response.data.message);
        }
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <div className="py-48">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            ĐĂNG NHẬP
          </h2>

          <div className="mt-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                emailError ? "border-red-500" : ""
              }`}
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="text-red-500 text-xs absolute mt-1 transform -translate-y-1">
                {emailError}
              </p>
            )}
          </div>

          <div className="mt-4 relative">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                passwordError ? "border-red-500" : ""
              }`}
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-500 text-xs absolute mt-1 transform -translate-y-1">
                {passwordError}
              </p>
            )}
          </div>

          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
            >
              Đăng Nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
