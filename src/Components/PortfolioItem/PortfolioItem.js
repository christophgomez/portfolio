import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class PortfolioItem extends React.Component {
  render() {
    const item = this.props.item ? this.props.item : {};
    return (
      <div className="portfolio-item">
        {item.img &&
          <div className='portfolio-item__img' style={{
            backgroundImage: `url(${item.img})`
          }}/>
        }

        <div className="portfolio-item__title">{item.title ? item.title : 'Title'}</div>
        <div className="portfolio-item__desc">
          {item.description ? item.description : 'Project Description'}
        </div>
        {item.icons &&
          <div className="portfolio-item__icon">
          {this.props.item.icons.map((icon) => {
            if (icon.type === 'font-awesome')
              return <FontAwesomeIcon icon={icon.icon} />
            else
              return <i className={`${icon.icon}`}/>
            })}
          </div>
        }
        {item.links &&
          <div className="portfolio-item__links">
            {this.props.item.links.map((link) => {
              return <a target='_blank' rel='noopener noreferrer' href={link.href}>{link.title}</a>
            })}
          </div>
        }
      </div>
    );
  }
}