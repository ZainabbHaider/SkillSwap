import React from 'react'
import './MySkills.scss'
import { Link } from 'react-router-dom'

function MySkills() {
  return (
    <div className='mySkills'>
        <div className="container">
          <div className="title">
            <h1>My Skills</h1>
            <Link to='/add'>
              <button>Add New Skill</button>
            </Link>
          </div>  
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Lessons</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Graphics Design</td>
            <td>10</td> 
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Graphics Design</td>
            <td>10</td> 
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Graphics Design</td>
            <td>10</td> 
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Graphics Design</td>
            <td>10</td> 
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Graphics Design</td>
            <td>10</td> 
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
        </table>
        </div>      
    </div>
  )
}

export default MySkills
