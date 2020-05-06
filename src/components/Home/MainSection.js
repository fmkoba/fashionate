import React from 'react';
import Nameless from './Nameless';
import { Link } from 'gatsby';
import hero from '../../images/hero.jpg';
import altLogo from '../../images/alt-logo.png';

import './Main.scss';

const MainSection = (props) => {
  const style = {
    backgroundImage: `url(${hero})`
  }

  return (
    <>
      <div className="hero" style={style}>
        <div className="container">
          <div className="hero__content">
            <span>PAIXÃO POR MODA TRANSFORMADA EM RESULTADOS</span>
          </div>
        </div>
      </div>
      <section className="cta">
        <div className="container">
          <h1 className="fancy-border">WE ARE FASHIONATE!</h1>
          <p>Somos uma empresa que temos como equipe pessoas especialistas em marketing digital, design gráfico, fotografia, desenvolvimento web,  entre outras áreas, com as mais diversas habilidades. <br/>
          Mas, o mais importante, somos apaixonados por moda. <br/>
          Nascemos para impulsionar os resultados e a transformação nas empresas. <br/>
          Ajudamos seu negócio de moda a crescer!</p>
          <a href="/" className="button">veja mais</a>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2>nosso trabalho abrange todas as <br/> etapas do seu negócio de moda!</h2>
          <div className="feature-list">
            <div className="feature">
              <img src="" alt=""/>
              <h4>marketing digital</h4>
              <p>Ações sob medida para seu negócio de moda através de estratégias práticas, captação de leads,  e-mail marketing, SEO, Ads patrocinados.</p>
            </div>
            <div className="feature">
              <img src="" alt=""/>
              <h4>produção criativa</h4>
              <p>Conteúdo específico de moda, design gráfico de peças para mídias on/offline, fotografia de produtos, lookbook, Website, E-commerce, audiovisual, organização de eventos.</p>
            </div>
            <div className="feature">
              <img src="" alt=""/>
              <h4>branding 360</h4>
              <p>Desenvolvimento de  identidade visual, estratégias para o share of mind da marca, inbound marketing, além de planejamento estratégico e posicionamento da sua marca.</p>
            </div>
            <div className="feature">
              <img src="" alt=""/>
              <h4>performance</h4>
              <p>Mentoria para gestão interna e externa do seu negócio, análise de ROI,  planejamento e acompanhamento de atividades com relatórios mensais, diagnósticos, análise competitiva.</p>
            </div>
          </div>
          <div>
            <Link to="/about" className="button">veja mais</Link>
          </div>
        </div>
      </section>
      <section className="contact-cta container">
        <div className="wrapper">
          <img src={altLogo} alt="logo fashionate"/>
          <p>O que podemos fazer por você hoje? ;) <br/>
          Fale com a gente no <a href="mailto:hello@fashionate.com.br">hello@fashionate.com.br</a></p>
        </div>
      </section>
      <section className="home__posts">
        <div className="container">
          <h2>fashionate news</h2>
          <Nameless/>
        </div>
      </section>
    </>
  );
};

export default MainSection;