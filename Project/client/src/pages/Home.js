import React, { Component } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const history = useNavigate();

    const submit = () => {
        history('/new');
    }
    const su = () => {
        history('/ans');
    }
    const ad = () => {
        history('/loginad');
    }
    return (
        <>
            <div className='home' style={{ height: "100px", width: "1320px", backgroundColor: "#FAF9F6" }}>

                <div style={{ marginLeft: "200px", paddingTop: "23px", fontSize: "xx-large" }}>
                    <h4>Expert Hub</h4>
                </div>
                <div style={{ marginLeft: "230px", fontSize: "small", fontWeight: "600" }}>
                    <p>Teacher Provider</p>
                </div>
                <div className="fg" style={{ marginLeft: "425px", fontSize: "large", fontWeight: "inherit", marginTop: "-40px" }}>
                    <p onClick={su}>What Is Expert Hub?</p>
                </div>

                <div className="hom" style={{ marginLeft: "1100px", fontSize: "large", fontWeight: "inherit", marginTop: "-30px" }}>
                    <button onClick={ad}>Admin</button>
                </div>
                <div className="hom" style={{ marginLeft: "940px", fontSize: "large", fontWeight: "inherit", marginTop: "-38px" }}>
                    <button onClick={submit}>User</button>
                </div>

            </div>

            {/* <div style={{marginLeft:"300px",padding:"3%"}}>
                <img style={{width:"700px",borderRadius:"10px"}} src="images/expert.png"/>
            </div> */}
            <div id="cf" style={{ marginLeft: "300px", padding: "3%" }}>
                <img style={{ height: "483px", width: "680px", borderRadius: "10px" }} class="bottom" src="images/e.png" />
                <img style={{ width: "680px", borderRadius: "10px" }} class="top" src="images/expert.png" />
            </div>
            <div className='home' style={{ marginTop: "270px", height: "100px", width: "1320px", backgroundColor: "#FAF9F6" }}>
            <div style={{ marginLeft: "550px", fontSize: "small", fontWeight: "800" }}>
                    <p style={{paddingTop:"50px"}}>Expert Hub system 2023</p>
                </div>
            </div>

        </>


    )

}
