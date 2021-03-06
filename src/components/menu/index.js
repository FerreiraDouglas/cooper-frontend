import React, {useState,useEffect} from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './styles';
import api from '../../services/api'
import {getToken} from '../../services/auth'

const Menu = ({ open }) => {
  const [user, setUser] = useState([])

  async function getUserLoged() {
    if(getToken()){
    await api.get(`/user`).then(response => {
      setUser("Usuario: "+response.data);
    }).catch(error =>{
      setUser("Usuario não autenticado");
  })
  }
  }

  useEffect(() => {
    getUserLoged()
  }, [])

  return (
    <StyledMenu open={open}>

      <label>{user}</label>
      <a href="/lista"> 
        <span role="img" aria-label="about us"></span>
        Lista de Clientes
      </a>
      
      <a href="/signup">
        <span role="img" aria-label="client"></span>
        Cadastrar Cliente
      </a>

      <a href="/">
        <span role="img" aria-label="price"></span>
        Login
      </a>
      
      <a href="/logout">
        <span role="img" aria-label="contact"></span>
        Log out
      </a>
      
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;