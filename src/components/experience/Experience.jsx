import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Design Experience</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Sketching/ Marketing Designs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Fabrics/ Embellishments/ Supplies selection</h4>
                <small className='text-light'>Basic</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Hosting Model Fittings</h4>
                <small className='text-light'>Basic</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Fashion Shows</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Client/ Media Communication</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          
          </div>
        </div>

        <div className="experience__backend">
          <h3>Field Experience</h3>
          <div className="experience__content">

          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Costume Design</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Footwear Design</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Accessory Design</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Oversee Production</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Designs Promotion</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience