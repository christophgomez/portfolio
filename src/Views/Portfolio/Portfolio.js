import React from 'react';
import './styles.css';
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import PortfolioItem from '../../Components/PortfolioItem/PortfolioItem';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="content-grid">
          <h1>Portfolio</h1>
          <div className="portfolio-wrapper">
            <PortfolioItem/>
          </div>
        </div>
        <ScrollArrow to=".about" />
      </div>
    )
  }
}