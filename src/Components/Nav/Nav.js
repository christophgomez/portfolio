import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { toElement as scrollToElement } from '../../util/scroll';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }
  
  render() {
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: this.props.navAlpha ? `rgba(255,255,255,${this.props.navAlpha}` : `rgba(255,255,255,1)`, color: 'var(--text-color)' }
      : { backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' };
    return (
      <header>
        <nav className={stickyClass}
          ref={(elem) => {
            this.nav = elem;
          }}
          style={stickyStyles}>
          <div className='magic-wand bounce-xy'>
            <FontAwesomeIcon style={{ color: 'var(--text-color)' }} icon={faPaintBrush}/>
            <div className='magic-text'>Color Me!</div>
          </div>
          <div className='menu'>
            <div className='menu__item' onClick={(e) => this.scrollToPage('.about')}>About</div>
            <div className='menu__item' onClick={(e) => this.scrollToPage('.portfolio')}>Portfolio</div>
          </div>
        </nav>
      </header>
    );
  }
}