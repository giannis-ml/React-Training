import { useEffect, useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customers</h2>
      <ul>
        {customers.map((c) => (
          <li key={c._id}>
            {c.firstName} – {c.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
