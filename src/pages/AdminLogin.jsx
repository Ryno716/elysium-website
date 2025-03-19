import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Hardcoded password for now (change this later!)
  const ADMIN_PASSWORD = "ElysiumAdmin123";

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true"); // ✅ Store login state
      navigate("/admin"); // ✅ Redirect to Admin Dashboard
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#121212] text-white">
      <h1 className="text-4xl font-bold mb-6 text-[#c79b53]">Admin Login</h1>
      <div className="bg-[#292929] p-6 rounded-lg shadow-lg border border-[#c79b53]">
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-500 bg-[#181818] text-white"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 px-4 py-2 mt-4 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
