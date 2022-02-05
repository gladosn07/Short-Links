import React, { useState } from "react";
import "./home.css";
import { FiLink } from "react-icons/fi";

import api from "../services/api";
import { saveLinks } from '../services/storeLinks'

import Menu from "../Components/Menu";
import Modal from "../Components/Modal";

function Home() {
  const [link, setLink] = useState("");
  const [closeModal, setCloseModal] = useState(false);
  const [data, setData] = useState({})

  async function handleLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data)

      setCloseModal(true)

      saveLinks('@shotLink', response.data)

      setLink('')

    } catch (error) {
        setLink('')
        alert('Ops algo deu errado!' + {error})      
    }
  }

  return (
    <div className="home-container">
      <div className="logo-content">
        <img src="/images/logo.png" alt="Imagem simbólica de um link" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="input-content">
        <div className="input-links">
          <FiLink className="logo" size={24} color="#FFF" />

          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            placeholder="Cole seu link aqui ..."
          />
        </div>

        <button onClick={() => handleLink()}>Encurtar Link</button>
      </div>

      <Menu />

      {closeModal && <Modal 
      content={data}
      closemodal={() => setCloseModal(false)} />}
    </div>
  );
}

export default Home;
