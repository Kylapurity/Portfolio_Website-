import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/purity-kihiu-kyla/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Kylapurity" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/kyla_purity?igsh=MTFnNXZrZjVlNXJndQ==" target="_blank" rel="noreferrer" ><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials