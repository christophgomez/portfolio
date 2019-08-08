import React from 'react';
import './styles.scss';
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import PortfolioItem from '../../Components/PortfolioItem/PortfolioItem';
import PortfolioItems from './PortfolioItems';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="content-grid">
          <h1>Portfolio</h1>
          <div className="portfolio-wrapper">
            {PortfolioItems.map((item) => {
              return <PortfolioItem item={item}/>
            })}
          </div>
        </div>
        <ScrollArrow prev={true} to=".about" />
      </div>
    )
  }
}