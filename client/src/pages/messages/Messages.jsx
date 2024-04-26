import React from 'react'
import './Messages.scss'
import { Link } from 'react-router-dom'

function Messages() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam porro at animi, rem distinctio eius, illo reiciendis neque laborum fuga officia! Enim error minima facere pariatur, repellendus esse ad."
  return (
    <div className='messages'>
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>  
        <table>
          <tr >
            <th>User</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td className='left'><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td> 
            <td>
              <button>Mark as read</button>
            </td>
          </tr>      
          <tr className='active'>
            <td>John Doe</td>
            <td className='left'><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td> 
            <td>
              <button>Mark as read</button>
            </td>
          </tr>   
          <tr>
            <td>John Doe</td>
            <td className='left'><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td> 
          </tr>   
          <tr>
            <td>John Doe</td>
            <td className='left'><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td> 
          </tr>   
          <tr>
            <td>John Doe</td>
            <td className='left'><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td> 
          </tr>   
        </table>
        </div>      
    </div>
  )
}

export default Messages
