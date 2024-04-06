import React from 'react'
import './add.scss'

const add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Skill</h1>
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='e.g. I can teach you guitar'/>
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="handycraft">Handycraft</option>
              <option value="sports">Sports</option>
              <option value="languages">Languages</option>
              <option value="photography">Photography</option>
              <option value="graphic">Graphic Design</option>
              <option value="video">Video & Animation</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="music">Music & Instruments</option>
              <option value="art">Art</option>
              <option value="cooking">Cooking</option>
              <option value="coding">Programming & Tech</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="16" placeholder='e.g. I can teach you how to play guitar in 3 months'/>
            <label htmlFor="">Lessons</label>
            <input type="number" placeholder='e.g. 10'/>
            <label htmlFor="">What do you want to learn?</label>
            <input type="text" placeholder='e.g. I want to learn guitar'/>
            <select name="cats" id="cats">
              <option value="handycraft">Handycraft</option>
              <option value="sports">Sports</option>
              <option value="languages">Languages</option>
              <option value="photography">Photography</option>
              <option value="graphic">Graphic Design</option>
              <option value="video">Video & Animation</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="music">Music & Instruments</option>
              <option value="art">Art</option>
              <option value="cooking">Cooking</option>
              <option value="coding">Programming & Tech</option>
              <option value="other">Other</option>
            </select>
            <button>Create</button>
          </div>
      </div>
    </div>
  )
}

export default add
