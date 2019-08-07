import React from 'react';
import './styles.css';
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
                  Creating is my passion, software engineering is my process, and computer science is my background.
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
                <a style={{ color: 'var(--text-color)' }} href='mailto:c.gomez3644@gmail.com'>Contact</a>
                <a style={{ color: 'var(--text-color)' }} href='mailto:c.gomez3644@gmail.com'>Resume</a>
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
                  <p>React/Redux, Vue/Vuex, Angular, Node.js, Express, Webpack, Babel, ES6, ES7, MongoDB, SQL, Karma, Mocha, Git, AWS, Docker, Heroku, Socket.io, WebGL, Three.js, SASS/SCSS, Bootstrap, OpenGL, Unity, Tensorflow, Raspberry PI.</p>
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
                  <span className='highlight'>LA Native.</span>
                  <br />
                  Recent Graduate - California State University Northridge, <span className='highlight'>B.S. Computer Science</span> / <span className='highlight'>A.S. Mathematics.</span>
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