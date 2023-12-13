/* this jsx file contains the code that implements the Sidebar component. */

import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://y.yarn.co/f176578c-09fe-4b97-a9db-9a98680fbd9e_screenshot.jpg"
                 alt=""
            />   
            <p> Just A dean-pilled dude lainmaxxing in my bedroom.
                
                </p>     
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span> 
        <ul className="sidebarList">
            <li className="sidebarListItem">ACTION</li>
            <li className="sidebarListItem">THRILLER</li>
            <li className="sidebarListItem">HORROR</li>
            <li className="sidebarListItem">COMEDY</li>
            <li className="sidebarListItem">CHILDREN</li>
            <li className="sidebarListItem">HISTORICAL</li>
            <li className="sidebarListItem">SCI-FI</li>
            <li className="sidebarListItem">WESTERN</li>
            <li className="sidebarListItem">DRAMA</li>
            <li className="sidebarListItem">ROMANCE</li>

            </ul> 
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
