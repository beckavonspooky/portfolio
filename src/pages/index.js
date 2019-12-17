import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

// import ipad from '../assets/images/ipad.png';
import project3 from '../assets/pictures/gotta-go.png';
import project4 from '../assets/pictures/lol-dad.png';
import project1 from '../assets/pictures/match-the-card.png';
import project2 from '../assets/pictures/the-cocktail-index.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">I am a Software Engineer with a background in communications and marketing. I design and modify websites for clients, as well as code and test the functionality, for user friendly designs. My marketing background allows me to bring a creative flare while applying the technicality of software engineering.</h2>
            <h3 className="text-white mb-4">Technologies</h3>
            <h3 className="text-white mb-4">HTML5 | CSS3 | JavaScript Es6 | React | Python | Express | Node | MongoDB | jQuery | Mongoose | PostgresSQL | Flask | JSON | EJS | Postman | Terminal | GitHub |</h3>
            
          </div>
        </div>
        
      </div>
    </section>

    <h3 className="text-white mb-4">Projects</h3>
    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={project2} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <a href="https://thecocktailindex.herokuapp.com/">
                <h4>The Cocktail Index</h4>
                  <p className="text-black-50 mb-0">
                  An online community where bartenders can share their favorite or unique cocktail recipes.
                  </p>
              </a>
            </div>
          </div>
        </div>

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={project4} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
            <a href='https://lol-dad.web.app/'>
                <h4>LOL dad.</h4>
                  <p className="text-black-50 mb-0">
                  LOL dad is an application that allows users to get their favorite dad jokes in just ONE click! Need a way to break the ice? Just grab a dad joke!.
                  </p>
              </a>
            </div>
          </div>
        </div>

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={project1} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
            <a href='https://beckavonspooky.github.io/match-the-cards/'>
                <h4>Match-The-Card</h4>
                  <p className="text-black-50 mb-0">
                  My memory game is a single player game, and immerses the player in audio and visual designs from one of my favorite films Beetlejuice.
                  </p>
              </a>
            </div>
          </div>
        </div>
        

        {/* <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={project4} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <a href='https://lol-dad.web.app/'>
                    <h4 className="text-white">LOL Dad</h4>
                    <p className="mb-0 text-white-50">
                    LOL dad is an application that allows users to get their favorite dad jokes in just ONE click! Need a way to break the ice? Just grab a dad joke!.
                    </p>
                  </a>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={project1} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <a href='https://beckavonspooky.github.io/match-the-cards/'>
                  <h4 className="text-white">Match-The-Cards</h4>
                  <p className="mb-0 text-white-50">
                  My memory game is a single player game, and immerses the player in audio and visual designs from one of my favorite films Beetlejuice.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={project3} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <a href="https://gottagonow.herokuapp.com/">
                <h4>GottaGoNow</h4>
                  <p className="text-black-50 mb-0">
                  Gotta-Go-Now is an application which allows the LGBTQIA+ community find local restrooms that are identity accepting.
                  </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
