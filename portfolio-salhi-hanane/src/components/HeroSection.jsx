import React from 'react';


function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="subheading">Tu me connais ?</p>
        <h1>👋 Je suis Hanane SALHI </h1>
        <p className="hero-description">
          DEVELOPPEUSE WEB !
        </p>
        <button className="contact-button">Contactez-moi</button>
      </div>

      <div className="hero-image-container">
        <img src="photoProfil.jpg" alt="SALHI Hanane" className="profile-image" />
        
        {/* Icônes flottantes */}
        <div className="icon angular">A</div>
        <div className="icon bootstrap">B</div>
        <div className="icon vscode">V</div>
        <div className="icon jquery">J</div>
      </div>
    </div>
  );
}

export default HeroSection;
