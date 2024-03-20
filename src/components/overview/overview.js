import React from "react";
import Card from "../card/card";

import './overview.css'

const Overview = () =>{
    return (
        <section className="overview light">
            <h2 className="title">Overview - Today</h2>

            <div className="cards">
                <Card cardTitle='Page Views' social='facebook' value='87' caret='up' today='3%'/>
                <Card cardTitle='Likes' social='facebook' value='52' caret='down' today='2%'/>
                <Card cardTitle='Likes' social='instagram' value='5462' caret='up' today='2257%'/>
                <Card cardTitle='Profile Views' social='instagram' value='52k' caret='up' today='1375%'/>
                <Card cardTitle='Retweets' social='twitter' value='117' caret='up' today='303%'/>
                <Card cardTitle='Likes' social='twitter' value='507' caret='up' today='553%'/>
                <Card cardTitle='Likes' social='youtube' value='107' caret='down' today='19%'/>
                <Card cardTitle='Total Views' social='youtube' value='1407' caret='down' today='12%'/>
            </div>
        </section>
    )
}

export default Overview