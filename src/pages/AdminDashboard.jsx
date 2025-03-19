import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [trainers, setTrainers] = useState([]);
  const [newTrainer, setNewTrainer] = useState({
    name: "",
    role: "",
    image: "",
  });

  // ✅ Check if user is logged in
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin-login"); // ✅ Redirect if not logged in
    }
  }, [navigate]);

  // ✅ Fetch Trainers from Backend
  useEffect(() => {
    fetch("http://localhost:5000/api/trainers")
      .then((res) => res.json())
      .then((data) => setTrainers(data))
      .catch((error) => console.error("Error loading trainers:", error));
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setNewTrainer({ ...newTrainer, [e.target.name]: e.target.value });
  };

  // ✅ Add a new trainer
  const addTrainer = () => {
    if (!newTrainer.name || !newTrainer.role || !newTrainer.image) {
      alert("Please fill in all fields.");
      return;
    }

    fetch("http://localhost:5000/api/trainers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTrainer),
    })
      .then((res) => res.json())
      .then((data) => setTrainers(data.trainers))
      .catch((error) => console.error("Error saving trainer:", error));

    setNewTrainer({ name: "", role: "", image: "" }); // Reset form
  };

  // ✅ Delete trainer
  const deleteTrainer = (index) => {
    fetch(`http://localhost:5000/api/trainers/${index}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => setTrainers(data.trainers))
      .catch((error) => console.error("Error deleting trainer:", error));
  };

  return (
    <div className="min-h-screen p-10 text-white bg-[#121212]">
      <h1 className="text-4xl font-bold mb-6 text-[#c79b53]">
        Admin Dashboard - Manage Trainers
      </h1>

      {/* ✅ Logout Button */}
      <button
        onClick={() => {
          localStorage.removeItem("isAdmin"); // ✅ Remove login state
          window.location.href = "/admin-login"; // ✅ Redirect to login page
        }}
        className="bg-red-600 px-4 py-2 rounded mt-4"
      >
        Logout
      </button>

      {/* Table: Display Trainers */}
      <table className="w-full text-left border-collapse border border-[#c79b53] mt-6">
        <thead>
          <tr className="bg-[#c79b53] text-black">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Image</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer, index) => (
            <tr key={index} className="border border-[#c79b53]">
              <td className="p-3">{trainer.name}</td>
              <td className="p-3">{trainer.role}</td>
              <td className="p-3">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-16 h-16 rounded-full"
                />
              </td>
              <td className="p-3">
                <button
                  onClick={() => deleteTrainer(index)}
                  className="bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form: Add New Trainer */}
      <div className="mt-8 p-6 bg-[#292929] border border-[#c79b53] rounded-lg">
        <h2 className="text-2xl mb-4 text-[#c79b53]">Add New Trainer</h2>
        <input
          type="text"
          name="name"
          placeholder="Trainer Name"
          value={newTrainer.name}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border border-gray-500 rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="Trainer Role"
          value={newTrainer.role}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border border-gray-500 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newTrainer.image}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border border-gray-500 rounded"
        />
        <button
          onClick={addTrainer}
          className="bg-green-600 px-4 py-2 rounded mt-3"
        >
          Add Trainer
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
