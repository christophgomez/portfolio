import React from 'react';
import './styles.scss';
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import Slideshow from '../../Components/Slideshow/Slideshow';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">

        <Slideshow>
          <div className="content-grid">
            <h1>About</h1>
            <div className="wrapper">
              <div className="content">
                <p>
                  Computer Science is my background, Software Engineering is my process, Creating is my <span className="highlight">passion.</span>
                </p>
                <p>
                  I'm a believer of creative expression and thoughtful design in order to build a better, more accessible, personal, and most importantly, fun user experience.
                </p>
                <p>
                  I love <span className="highlight">JavaScript</span> and
                  everything web related because of the platform's <span className="highlight">openness</span>, <span className="highlight">interactive</span> affordances, and ability to reach and connect with <span className="highlight">broad audiences.</span> I'm particularly interested in the intersection between web development, human-computer interaction, and multimedia.
                </p>
                <p>
                  When my dev senses kick-in I build presumably{' '}
                  <span className="highlight"> awesome stuff</span>. I stay close to
                  the community and try to keep tabs with the pace at which the web is evolving.
                </p>
                <p>
                  React-Redux, Vue-Vuex, Angular, Express, Node.js, MongoDB, Git, Heroku, and
                  AWS are the main tricks up my sleeve. I'm also obsessed with making the web look pretty with SASS/CSS, and making fun, interactive graphics with the Canvas API and WebGL.
                </p>
                <p>
                  Never one to shy away from hard problems and difficult concepts I also enjoy hackathons, code challenges, analyzing big data, fine-tuning machine learning models, video game development, writing shaders, creative coding and generative art, and combining hardware and software to build innovative solutions, tools, and experiences.
                </p>
                <p>
                  <a style={{ marginRight: '.25em' }} href='mailto:c.gomez3644@gmail.com'>Contact</a>
                  <a style={{ marginLeft: '.25em' }} href='mailto:c.gomez3644@gmail.com'>Resume</a>
                </p>
              </div>
            </div>
          </div>
          <div className="content-grid">
            <h1>Skills</h1>
            <div className="wrapper">
              <div className="content skills">
                <div>
                  <h3>Languages</h3>
                  <p>JavaScript, Java, C#, C++, C, Python, R, Prolog, Bash, Swift.</p>
                </div>
                <div>
                  <h3>Tools & Technologies</h3>
                  <p>React/Redux, Vue/Vuex, Angular, Node.js, Express, Webpack, Babel, ES6, ES7, MongoDB, SQL, Karma, Mocha, Git, AWS, Docker, Heroku, Socket.io, WebGL, Three.js, SASS/SCSS, Bootstrap, OpenGL, Tensorflow, Unity, Blender, SolidWorks, CAD AutoDesk, Raspberry PI.</p>
                </div>
                <div>
                  <h3>Knowledge Industry</h3>
                  <p>Software Development Life Cycle, Agile, Software Documentation, Software Project Management, UI/UX Design, Multimedia Design and Development, Architecture, Data Analysis, Algorithms, Data Structures.</p>
                </div>
                <div>
                  <h3>Interpersonal Skills</h3>
                  <p>Teaching, Leadership, Teamwork, Verbal and Written Communication, Dependability, Responsibility.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-grid">
            <h1>Bio</h1>
            <div className="wrapper">
              <div className="content">
                <p>
                  Born and raised in Los Angeles, a California boy through and through.                  
                </p>
                <p>
                  I recently graduated from California State University Northridge with a B.S. in Computer Science, I even earned an A.S. in Mathematics along the way!
                </p>
                <p>
                  I started programming in my early teens, learning HTML, CSS, and JavaScript in an effort to create games. This effort most likely stemmed from my innate desire to build and design things. A builder at heart, my favorite toys growing up were Legos, one of my favorite games was Minecraft, and I took 3 years of architecture classes in highschool  before these interests led me into the wonderful world of Computer Science.
                </p>
                <p>
                  When I'm not programming or tutoring Computer Science, my two dogs take most of my time, but I also enjoy running cross country trails, traveling the world, going to the movies (MoviePass era, I miss you!), watching the NBA, reading about history, current events, and politics, and discovering new bands at my favorite LA hotspots. 
                </p>
              </div>
            </div>
          </div>
        </Slideshow>

        <p className="text-emoji">
          \(^◇^)/
        </p>
        <ScrollArrow to=".portfolio" />
      </div>
    );
  }
}