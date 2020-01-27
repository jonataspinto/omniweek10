import React from "react";
import "./style.css";
import api from '../../services/api'

export default function DevItem({ onSubmit, dev }) {

  async function handleRemoveDev(user){
    const response = await api.delete(`/devs/${user}`)
    console.log(response)
    onSubmit(user)
  }

  return (
    <li className="dev-item">
      <header>
        <img alt={dev.github_username} src={dev.avatar_url} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
        <button id="remove" onClick={()=>handleRemoveDev(dev.github_username)}>X</button>
      </header>
      <p>{dev.bio}</p>
      <a
        href={`https://github.com/${dev.github_username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar perfil no Github
      </a>
    </li>
  );
}
