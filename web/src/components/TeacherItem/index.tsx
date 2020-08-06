import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/p960x960/71514120_1419697394849502_7688030041531219968_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=gXogzvYi1HYAX9gnYr9&_nc_ht=scontent-gru2-1.xx&_nc_tp=6&oh=0731af6e3d94cf5fd94ae6099380279f&oe=5F4FECCB" alt="Natan facebook"/>
        <div>
          <strong>Natan Borba Boos</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas atráves de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;