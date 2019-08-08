import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'
import './styles.scss';
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import GlowingText from '../../Components/GlowingText/GlowingText';

export default class Landing extends React.Component {
  render() {
    const tagline = 'Creator | Engineer | Scientist'.split('');
    return (
      <div className='landing'>
        <main>
          <div className='wrapper'>
            <div className='intro'>Hi, I'm Christopher!</div>
            <div className='tagline'>
              <GlowingText delay={1000} letters={tagline}/>
            </div>
            <div className='social animate-icons'>
              <a target='_blank' rel='noopener noreferrer' href='https://github.com/christophgomez'>
                <FontAwesomeIcon style={{ color: 'var(--text-color)' }} icon={faGithub} />
              </a>
              <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/christopher-gomez-8489a7186/'>
                <FontAwesomeIcon style={{ color: 'var(--text-color)' }} icon={faLinkedin} />
              </a>
              <a target='_blank' rel='noopener noreferrer' href='https://codepen.io/christophergomez'>
                <FontAwesomeIcon style={{ color: 'var(--text-color)' }} icon={faCodepen} />
              </a>
            </div>
          </div>
        </main>
        <ScrollArrow to=".about"/>
        
      </div>
    );
  }
}