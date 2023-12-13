/* this jsx file contains the code that implements the single post component. */

import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
                <img src="https://m.media-amazon.com/images/M/MV5BZWExZWQ0ZmItM2VmZC00YjBhLTk2MzctNWRiNzhmZTEwNmYwXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" 
                     alt=""    
                     className="singlePostImg" />
                <h1 className="singlePostTitle">
                    The Raid 2: An action movie for the ages
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Hayden</b></span>
                    <span className="singlePostDate"> 12/11/23 3:01 pm</span>
                </div>
                <p className="singlePostDesc">
                The Raid 2 is a full-length Indonesian action thriller film written, directed and edited by Welsh filmmaker Gareth Evans. It is the sequal to the 2011 film The Raid and stars Iko Uwais, Arifin Putra, Oka Antara, Tio Pakusadewo, Alex Abbad, and many more. In this film, Rama is sent undercover to expose the corrupt police officials colluding with the crime families of Jakarta's criminal underworld.  The first thing to mention is the cinematography. Some of the shots used in this film are absolutely gorgeous, and for a movie with top-of-the-line fight choreography, the fighting is framed perfectly and never feels disorienting, despite the fast-paced action scenes. Shots do a great job framing the action and the information it wants the viewer to see. For instance, the scene when Rama is in the car heading towards Bangun’s penthouse, the camera is framed like we are looking in the rearview mirror at Rama, and we can barely see the mob of people run up to the car right before they attempt to kill Rama. We the audience get barely enough time to process what is about to happen, and the instance the mob starts to vandalize and destroy the car to get to Rama, the camera shifts to show a topview from inside the car, so we can see just how many people were sent to Rama. What I’m getting at is no frame of this movie is wasted, there is always some bit of information the shot is conveyed to the audience, and it’s simply fantastic to experience. 
	The most noteworthy aspect of this film is the action itself. Very few movies can hold a candle to the fight scenes in The Raid 2. Each scene is fastpaced and adrenaline pumping fights, where each punch and hit can be felt and heard. The actors do a great job selling these hits landing. In a lot of movies, slow motion is used to help the audience comprehend a set of moves that happens so fast the audience can’t process it in real time, and The Raid 2 uses slow motion to perfection. It only uses the slow motion when the hit is so fast that the viewer wouldn’t see it, so the fights are 95% in real time, which make each fight scene feel visceral. The combat in this movie must be experienced, as each scene keeps you on the edge of your seat till the battle is done.
	If I had to complain about anything, it would be the story progression. This movie is a sequel to The Raid 2, but most of the contents of this movie are entirely separate from the The Raid, with Rama, the police chief, Rama’s brother, and Rama’s family being the only recurring characters, and Rama’s brother dies in the first scene to set up the villain, Bejo. Rama’s family, his wife and daughter, have two whole scenes in the movie, and they exist to remind the viewer that yes, Rama is human and not some deity born in human flesh. Not to mention, you could watch this movie without seeing the previous Raid and you can follow it pretty easily, which isn’t necessarily a bad thing. It just makes the choice to include his family and brother bizarre, as ultimately they could easily be written out and give that time to other characters. 
	Overall, I can’t recommend The Raid 2 enough. Truly a movie that feels grounded, and has incredible fight scenes that are perfectly shot. Very few movies have me craving a rewatch after the credits role like The Raid 2 did. 

                </p>
        </div>
    </div>
  )
}
