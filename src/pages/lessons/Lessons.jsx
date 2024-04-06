import React from 'react'
import './Lessons.scss'
import { Link } from 'react-router-dom'

function Lessons() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  
  return (
    <div className='lessons'>
        <div className="container">
          <div className="title">
            <h1>Lessons</h1>
          </div>  
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Pending Lessons</th>
            <th>Mark as Done</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Graphic Design - Lesson 5</td>
            <td>5</td> 
            <td>
              <img className="delete" src="/imgs/correct.png" alt=''/>
            </td>
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Guitar - Lesson 2</td>
            <td>8</td> 
            <td>
              <img className="delete" src="/imgs/correct.png" alt=''/>
            </td>
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Cooking - Lesson 8</td>
            <td>2</td> 
            <td>
              <img className="delete" src="/imgs/correct.png" alt=''/>
            </td>
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Sewing - Lesson 1</td>
            <td>9</td> 
            <td>
              <img className="delete" src="/imgs/correct.png" alt=''/>
            </td>
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="skill" />
            </td>
            <td>Video Editing - Lesson 2</td>
            <td>8</td> 
            <td>
              <img className="delete" src="/imgs/correct.png" alt=''/>
            </td>
            <td>
              <img className="delete" src="/imgs/delete.png" alt=''/>
            </td>
          </tr>      
        </table>
        </div>      
    </div>
  )
}

export default Lessons
