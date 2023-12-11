import React from "react";
import Social from "../../Components/SocialCard/Social";
import "./Contact.scss";

import git from '../../assets/git.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import telegram from "../../assets/telegram.png";
import whatsapp from '../../assets/whatsapp.png';
import gmail from "../../assets/gmail.png";
import mail from '../../assets/mail.png';
import discord from '../../assets/discord.png';



const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <span>
      Кроме удобства, MaxText обеспечивает гибкость в выборе тем и стилей. 
      В частности, можно заказать текст по описанию, детализировать требования и даже указать ключевые слова для SEO. 
      Просто подробно распишите какой материал нужно написать, какие ключевые слова заголовки использовать. 
      Это обеспечивает высокую адаптивность контента под конкретные нужд
      </span>

      <div className="socials">
        <Social logo={git} value="GitHub" />
        <Social logo={instagram} value="Linkedin" />
        <Social logo={telegram} value="Twitter" />
        <Social logo={whatsapp} value="Discord" />
        <Social logo={linkedin} value="Whatsapp" />
        <Social logo={discord} value="Twitch" />
        <Social logo={mail} value="Deviantart" />
        <Social logo={gmail} value="Vimeo" />
      </div>

      
    </div>
  );
};

export default Contact;
