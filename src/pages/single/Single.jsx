/* this jsx file contains the code that implements the single post page. */

import SinglePost from "../../components/singlePost/SinglePost"
import Sidebar from "../../components/sidebar/Sidebar"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <Sidebar />
        </div>
  )
}
