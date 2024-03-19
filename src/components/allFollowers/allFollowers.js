import React from "react";
import Followers from "../followers/followers";

const AllFollowers = () => {
    return(
        <div className="allFollowers dark">
            <Followers social='facebook' user='@nathanf' total='1987' text='Followers' caret='up' today='12'/>
            <Followers social='twitter' user='@nathanf' total='1044' text='Followers' caret='up' today='99'/>
            <Followers social='instagram' user='@realnathanf' total='11k' text='Followers' caret='up' today='1099'/>
            <Followers social='youtube' user='Nathan F.' total='8239' text='Subscribers' caret='down' today='144'/>
        </div>
    )
}

export default AllFollowers