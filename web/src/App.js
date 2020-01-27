import React, { useEffect, useState } from "react";
import "./global.css";
import "./App.css";
import api from "./services/api";
import DevForm from "./components/DevForm";
import DevItem from "./components/DevItem";

export default function App() {
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    setLoading(true);
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
    setLoading(false);
  }

  async function handleRemoveDev(user){
    let orDevs = devs.filter(dev=> dev.github_username !== user)
    setDevs([...orDevs]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadatrar</strong>
        <DevForm onSubmit={handleAddDev} loading={loading} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} onSubmit={handleRemoveDev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}
