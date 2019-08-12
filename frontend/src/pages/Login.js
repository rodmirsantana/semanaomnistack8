import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername ] = useState('');

    async function handleSubmit(e) {
      e.preventDefault();
      
      const response = await api.post('/devs', {
          username,
      });
      
      const { _id } = response.data; //id deve ser passado para a rota main

      history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <img src={logo} alt="Tindev"/>
            <input placeholder="Digite seu usuário no Github"
                   value = {username}
                   onChange={e => setUsername(e.target.value)} //A função setUsername pega o valor digitado pelo usuario
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
        
    );
}
