import React from 'react';
import './styles.scss';

export default class GlowingText extends React.Component {
  render() {
    return (
      <div className='glowing-text'>
        {this.props.letters.constructor === Array ? this.props.letters.map((letter, index) => {
          return (<span key={letter + index} style={{ animationDelay: this.props.delay ? `${this.props.delay+(index*100)}ms` : `${(index * 100)}ms` }}>{letter}</span>)
        }) : <span style={{ animationDelay: `${this.props.delay ? this.props.delay : 2000}ms` }}>{this.props.letters}</span>}
      </div>
    );
  }
}