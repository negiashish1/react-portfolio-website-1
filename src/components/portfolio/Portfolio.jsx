import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_1.jpg'
import IMG2 from '../../assets/portfolio_2.jpg'
import IMG3 from '../../assets/portfolio_3.jpg'
import IMG4 from '../../assets/portfolio_4.jpg'
import IMG5 from '../../assets/portfolio_5.jpg'
import IMG6 from '../../assets/portfolio_6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'SOUL Collection',
    github: 'https://dribbble.com/',
    demo: 'https://dribbble.com/shots/14080997-Makeup-portfolio'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Wedding Collection',
    github: 'https://dribbble.com/',
    demo: 'https://dribbble.com/shots/14802694-Wedding-Store'
  },
  {
    id: 3,
    Image: IMG3,
    title: 'Your Name',
    github: 'https://dribbble.com/',
    demo: 'https://dribbble.com/shots/16947731-Portfolio-Layout'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Dubai Fashion',
    github: 'https://dribbble.com/',
    demo: 'https://dribbble.com/shots/19365158-dubai-fashion-logo-fashion-brand-logo-design'
  },
  {
    id: 5,
    image: IMG5,
    title: 'TeesTime',
    github: 'https://dribbble.com/',
    demo: 'https://dribbble.com/shots/19100164-Tees-Time-Logo-Clothing-Brand-Logo'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Heron Preston',
    github: 'https://dribbble.com/',
    demo: 'https://dribbble.com/shots/17504090-Heron-Preston-Designer-Clothing-App-Concept'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo}) => {
            return (

            <article key={id} className='portfolio__items'>
          <div className="portfolio__item-image">
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='__blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>)
          })
        }

      </div>
    </section>
  )
}

export default Portfolio