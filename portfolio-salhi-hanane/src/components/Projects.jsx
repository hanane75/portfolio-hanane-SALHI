import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section>
      <h2>Mes Projets</h2>
      <Slider {...settings}>
        <div>
          <h3>Projet 1</h3>
          <p>Description du projet 1</p>
        </div>
        <div>
          <h3>Projet 2</h3>
          <p>Description du projet 2</p>
        </div>
        {/* Ajoutez plus de projets ici */}
      </Slider>
    </section>
  );
};

export default Projects;
