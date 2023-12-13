/* this jsx file contains the code that implements the header component. */

import "./header.css"

export default function Header() {
  return (
    <div className="header"> 
        <div className="headerTitles">
            <span className="headerTitleLg">Karl's Korner</span>
            <span className="headerTitleSm">Premier Movie Blog</span>
            </div> 
            <img className="headerImg" src="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg" alt=""  />
    </div>
  )
}
