import { useState, useEffect } from "react";
import { UsersResponse } from "./types";

function App() {
  const [data, setData] = useState<UsersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [newContact, setNewContact] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Fetch data from backend on component mount
  const fetchData = () => {
    fetch("/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: UsersResponse) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form submission to add new entry
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newName.trim() || !newContact.trim()) {
      alert("Please fill in both name and contact fields");
      return;
    }

    setSubmitting(true);

    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        contact: newContact,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create user");
        }
        return response.json();
      })
      .then(() => {
        // Clear form
        setNewName("");
        setNewContact("");
        setSubmitting(false);
        // Refresh data
        fetchData();
      })
      .catch((err) => {
        alert(err.message);
        setSubmitting(false);
      });
  };

  // Handle delete entry
  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this entry?")) {
      return;
    }

    fetch(`/api/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete entry");
        }
        // Refresh data
        fetchData();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}>
      {/* Main Hello World heading */}
      <h1
        style={{
          fontSize: "4rem",
          color: "#333",
          marginBottom: "30px",
        }}>
        Hello World
      </h1>

      {/* Loading state */}
      {loading && (
        <p style={{ fontSize: "1.2rem", color: "#666" }}>Loading...</p>
      )}

      {/* Error state */}
      {error && (
        <p style={{ fontSize: "1.2rem", color: "#ff0000" }}>Error: {error}</p>
      )}

      {/* Add new entry form */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          marginBottom: "30px",
        }}>
        <h2
          style={{
            color: "#0066cc",
            marginBottom: "20px",
            textAlign: "center",
          }}>
          Add New User
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#333",
              }}>
              Name:
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter name (e.g., John Doe)"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#333",
              }}>
              Contact:
            </label>
            <input
              type="text"
              value={newContact}
              onChange={(e) => setNewContact(e.target.value)}
              placeholder="Enter contact (e.g., +1234567890)"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: submitting ? "#999" : "#0066cc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: submitting ? "not-allowed" : "pointer",
              fontWeight: "bold",
            }}>
            {submitting ? "Adding..." : "Add User"}
          </button>
        </form>
      </div>

      {/* Data display */}
      {data && (
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            maxWidth: "600px",
            width: "100%",
          }}>
          {/* Backend message */}
          <h2
            style={{
              color: "#0066cc",
              marginBottom: "20px",
              textAlign: "center",
            }}>
            {data.message}
          </h2>

          {/* Table data from database */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}>
            <thead>
              <tr style={{ backgroundColor: "#0066cc", color: "white" }}>
                <th style={{ padding: "12px", textAlign: "left" }}>ID</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Contact</th>
                <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((row) => (
                <tr key={row.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "12px" }}>{row.id}</td>
                  <td style={{ padding: "12px" }}>{row.name}</td>
                  <td style={{ padding: "12px" }}>{row.contact}</td>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    <button
                      onClick={() => handleDelete(row.id)}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#ff4444",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                      }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
