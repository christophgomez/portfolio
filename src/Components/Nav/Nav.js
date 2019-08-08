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
      isSticky: false,
      color: null,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleColorClick();
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

  handleColorClick() {
    let themes = [
      { textColor: '#FF4136', bgColor: '#fff', altBg: '#FF4136', altText: '#fff' },
      { textColor: '#0074D9', bgColor: '#fff', altBg: '#0074D9', altText: '#fff' },
      { textColor: '#FF851B', bgColor: '#fff', altBg: '#FF851B', altText: '#fff' },
      { textColor: '#fff', bgColor: '#FF851B', altBg: '#ffa85c', altText: '#fff' },
      { textColor: '#fff', bgColor: '#FF4136', altBg: '#ca5f59', altText: '#fff' },
      { textColor: '#fff', bgColor: '#0074D9', altBg: '#6bbaff', altText: '#fff' }
    ];
    let color = themes[Math.floor(Math.random() * themes.length)];
    if (this.state.color !== null) {
      while (color.textColor === this.state.color.textColor && color.bgColor === this.state.color.bgColor) {
        color = themes[Math.floor(Math.random() * themes.length)];
      }
    }
    let root = document.documentElement;
    root.style.setProperty('--text-color', color.textColor);
    root.style.setProperty('--bg-color', color.bgColor);
    root.style.setProperty('--alt-bg', color.altBg);
    root.style.setProperty('--alt-text', color.altText);
    this.setState({ color: color });
    //root.style.setProperty('--highlight-color', highlightColor);
  }

  render() {
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: `var(--bg-color)`, color: 'var(--text-color)' }
      : { backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' };
    return (
      <header>
        <nav className={stickyClass}
          ref={(elem) => {
            this.nav = elem;
          }}
          style={stickyStyles}>
          <div className='magic-wand bounce-xy' onClick={() => this.handleColorClick()}>
            <FontAwesomeIcon style={{ color: 'var(--text-color)' }} icon={faPaintBrush} />
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