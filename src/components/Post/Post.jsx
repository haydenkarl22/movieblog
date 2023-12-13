/* this jsx file contains the code that implements the Post component. */

import "./post.css"
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
            src="https://m.media-amazon.com/images/M/MV5BZWExZWQ0ZmItM2VmZC00YjBhLTk2MzctNWRiNzhmZTEwNmYwXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">ACTION</span>
                    <span className="postCat">THRILLER</span>
                    <span className="postCat">INTL</span>
                </div>
                <span className="postTitle">
                    <Link className="link" to="/post/123" >The Raid 2: An action movie for the ages</Link>
                </span>
                <hr/>
                <span className="postDate">12/10/2023 3:01 pm</span>
            </div>
            <p className="postDesc">
                The Raid 2 is a full-length Indonesian action thriller film written, directed and edited by Welsh filmmaker Gareth Evans. It is the sequal to the 2011 film The Raid and stars Iko Uwais, Arifin Putra, Oka Antara, Tio Pakusadewo, Alex Abbad, and many more. In this film, Rama is sent undercover to expose the corrupt police officials colluding with the crime families of Jakarta's criminal underworld. 
            </p>
    </div>
  )
}
