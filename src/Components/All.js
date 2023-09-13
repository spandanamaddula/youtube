import React from 'react'
import { Outlet, Link } from 'react-router-dom';
 function All() {
  return (
    <div>
        <h1>All youtube channel</h1>
        return (
    <div>
        <ul>
            <li>
                <Link to='/All'> All youtube videos</Link>
                <Link to='/Dancepractice'> Dancepractice youtube videos</Link>
                <Link to='/Fashionbeauty'> Fashionbeauty products</Link>
                <Link to='/Gaming'> Gaming videos</Link>
                <Link to='/Javascript'> Javascript tutorials</Link>
                <Link to='/Music'> Music from youtube </Link>
                <Link to='/Shopping'> Shopping:Trendy</Link>
                <Link to='/Youtube'> All youtube videos</Link>
                
            </li>
        </ul>
        <Outlet/>
    </div>
  )

        </div>
  )
}
export default All;