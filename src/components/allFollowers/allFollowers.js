import React from "react";
import Followers from "../followers/followers";

import './allFollowers.css'

const followersData = [
    {
        social: "facebook",
        user: "@nathanf",
        total: "1987",
        text: "Followers",
        caret: "up",
        today: "12",
    },
    {
        social: "twitter",
        user: "@nathanf",
        total: "1044",
        text: "Followers",
        caret: "up",
        today: "99",
    },
    {
        social: "instagram",
        user: "@realnathanf",
        total: "11k",
        text: "Followers",
        caret: "up",
        today: "1099",
    },
    {
        social: "youtube",
        user: "Nathan F.",
        total: "8239",
        text: "Subscribers",
        caret: "down",
        today: "144",
    },
]

const AllFollowers = () => {
    return (
        <div className="allFollowers dark theme">
            {
                followersData.map((item, index) => {
                    return (
                        <Followers
                            key={index}
                            social={item.social}
                            user={item.user}
                            total={item.total}
                            text={item.text}
                            caret={item.caret}
                            today={item.today}
                        />
                    )
                })
            }
        </div>
    )
}

export default AllFollowers