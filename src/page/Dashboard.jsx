import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ ip: "", port: "", banner: null });
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ ip: "", port: "", banner: null });
  const [editSubmitting, setEditSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await user.token;
        const res = await fetch(`http://localhost:3000/api/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user data");
        const data = await res.json();
        setServers(data.servers || []);
      } catch (err) {
        console.error(err);
        alert("Fout bij het laden van gegevens.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAddServer = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { ip, port, banner } = formData;
    if (!ip || !port || !banner) {
      alert("All fields are required.");
      setSubmitting(false);
      return;
    }

    const form = new FormData();
    form.append("ip", ip);
    form.append("port", port);
    form.append("banner", banner);

    try {
      const token = await user.token;
      const res = await fetch(`http://localhost:3000/api/users/${user.id}/servers`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Could not add server");

      setServers(result.servers);
      setFormData({ ip: "", port: "", banner: null });
    } catch (err) {
      console.error(err);
      alert("Error adding server: " + (err.message || "Unknown error"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (index) => {
    if (!window.confirm("Are you sure you want to delete this server?")) return;
    try {
      const token = await user.token;
      const res = await fetch(`http://localhost:3000/api/users/${user.id}/servers/${index}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to delete server");

      setServers(result.servers);
    } catch (err) {
      console.error(err);
      alert("Error deleting server: " + (err.message || "Unknown error"));
    }
  };

  const startEdit = (index) => {
    const server = servers[index];
    setEditIndex(index);
    setEditData({ ip: server.ip, port: server.port, banner: null });
  };

  const handleEditInputChange = (e) => {
    const { name, value, files } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditSubmitting(true);

    const { ip, port, banner } = editData;
    if (!ip || !port) {
      alert("IP en port are required.");
      setEditSubmitting(false);
      return;
    }

    const form = new FormData();
    form.append("ip", ip);
    form.append("port", port);
    if (banner) form.append("banner", banner);

    try {
      const token = await user.token;
      const res = await fetch(`http://localhost:3000/api/users/${user.id}/servers/${editIndex}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Edit failed");

      setServers(result.servers);
      setEditIndex(null);
      setEditData({ ip: "", port: "", banner: null });
    } catch (err) {
      console.error(err);
      alert("Error editing server: " + (err.message || "Unknown error"));
    } finally {
      setEditSubmitting(false);
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditData({ ip: "", port: "", banner: null });
  };

  return (
    <div className="min-h-screen bg-color-default flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto p-8 mt-8 bg-white rounded-xl shadow-lg">
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Your featured servers
          </h2>
          {loading ? (
            <p className="text-gray-600 italic">Loading...</p>
          ) : servers.length === 0 ? (
            <p className="text-gray-700">You did not add a server yet.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servers.map((server, idx) => (
                <li
                  key={idx}
                  className="border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
                >
                  <div className="overflow-hidden rounded-t-lg h-40">
                    <img
                      src={server.banner}
                      alt="Server banner"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    {editIndex === idx ? (
                      <form onSubmit={handleEditSubmit} className="space-y-3">
                        <input
                          type="text"
                          name="ip"
                          value={editData.ip}
                          onChange={handleEditInputChange}
                          placeholder="IP-address"
                          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                          required
                        />
                        <input
                          type="text"
                          name="port"
                          value={editData.port}
                          onChange={handleEditInputChange}
                          placeholder="Port"
                          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                          required
                        />
                        <input
                          type="file"
                          name="banner"
                          accept="image/*"
                          onChange={handleEditInputChange}
                          className="w-full"
                        />
                        <div className="flex space-x-3 justify-end">
                          <button
                            type="submit"
                            disabled={editSubmitting}
                            className={`bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-color-default focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                              editSubmitting ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                          >
                            {editSubmitting ? "Saving..." : "Save changes"}
                          </button>
                          <button
                            type="button"
                            onClick={cancelEdit}
                            className="bg-gray-300 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <p className="font-semibold text-gray-800 text-lg">
                          {server.ip}:{server.port}
                        </p>
                        <div className="mt-4 flex space-x-3">
                          <button
                            onClick={() => startEdit(idx)}
                            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(idx)}
                            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Add new server
          </h2>
          <form onSubmit={handleAddServer} className="space-y-6 max-w-md">
            <input
              type="text"
              name="ip"
              value={formData.ip}
              onChange={handleInputChange}
              placeholder="IP-adres"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="text"
              name="port"
              value={formData.port}
              onChange={handleInputChange}
              placeholder="Port"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="file"
              name="banner"
              accept="image/*"
              onChange={handleInputChange}
              className="w-full"
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                submitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Adding..." : "Add server"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
