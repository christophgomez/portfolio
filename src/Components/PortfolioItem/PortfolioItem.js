import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class PortfolioItem extends React.Component {
  render() {
    const item = this.props.item ? this.props.item : {};

    return (
      <div className="portfolio-item">
        <div className="portfolio-item__title">{item.title ? item.title : 'Badass'}</div>
        <div className="portfolio-item__desc">
          {item.description ? item.description : 'I do badass things and kickass everyday! I do badass things and kickass everyday! I do badass things and kickass everyday!'}
        </div>
        {item.icons &&
          <div className="portfolio-item__icon">
            {this.props.item.icons.map((icon) => {
              return <FontAwesomeIcon icon={icon} />
            })}
          </div>
        }
        {item.links &&
          <div className="portfolio-item__links">
            {this.props.item.links.map((link) => {
              return <a href={link.href}>{link.title}</a>
            })}
          </div>
        }
      </div>
    );
  }
}