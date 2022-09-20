import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Creative Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Color Direction</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Trend/ Mood Boards</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full Collection Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Trim/ Finding/ Hangtag/ Label Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Merchandising</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Catalog Layout</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photoshoot Art Direction/ Management</p>
            </li>
          </ul>

        </article>
        {/* --------------------------------------------------------------- */}
        <article className='service'>
          <div className="service__head">
            <h3>Technical Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Tech Sketches</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Spec/ Grading</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Pattern Drafting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proto/ Sample Review/ Commenting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fittings</p>
            </li>
          </ul>

        </article>

        {/* ------------------------------------------------------ */}
        <article className='service'>
          <div className="service__head">
            <h3>Consulting Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collection/ Merchandising Review/ Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sales Analysis/ Reporting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Market analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Untapped Opportunities/ Market Segments</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Distribution Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Marketing/ Sales/ Promotion</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>And beyond…</p>
            </li>
          </ul>

        </article>
        
      </div>


    </section>
  )
}

export default Services