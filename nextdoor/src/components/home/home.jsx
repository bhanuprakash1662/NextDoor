import React from "react";
import NavbarComp from "./navbar";
import Back_pic from "../../assests/images/back_pic.png"

function Home(){
    return(
        <div><NavbarComp></NavbarComp>
        <img style={{height:"50%", width:"80%"}} src={Back_pic} alt="pic" />
        </div>

    )
}
export default Home;