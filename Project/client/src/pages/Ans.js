import React, { Component } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Ans() {
    const history = useNavigate();

    const submit = () => {
        history('/new');
    }
    const su = () => {
        history('/ans');
    }
    const s = () => {
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
                    <button onClick={s} >Admin</button>
                </div>
                <div className="hom" style={{ marginLeft: "940px", fontSize: "large", fontWeight: "inherit", marginTop: "-38px" }}>
                    <button onClick={submit}>User</button>
                </div>

            </div>
            <div style={{marginLeft:"300px",padding:"3%"}}>
                <img style={{width:"600px",borderRadius:"10px"}} src="images/expert.png"/>
            </div>
            <div>
                <div>
                    <p style={{ textAlign: "center",fontStyle:"oblique",fontWeight:"500" }}> <span style={{ fontSize: "x-large" ,fontWeight:"800"}}>Expert Hub </span>is an innovative platform that connects students with <span style={{ fontSize: "x-large" ,fontWeight:"800"}}> expert teachers</span> for online tutoring.</p><br />
                    <p style={{ textAlign: "center",fontStyle:"oblique",fontWeight:"500" }}>It offers a wide range of subject areas and a flexible scheduling</p>
                    <p style={{ textAlign: "center",fontStyle:"oblique",fontWeight:"500" }}> system to accommodate students' needs. In addition, Expert Hub</p>
                    <p style={{ textAlign: "center" ,fontStyle:"oblique",fontWeight:"500"}}> also arranges <span style={{ fontSize: "x-large" ,fontWeight:"800"}}>seminars</span> for students to attend, providing</p>
                    <p style={{ textAlign: "center",fontStyle:"oblique",fontWeight:"500" }}> opportunities for them to learn from industry leaders and network</p>
                    <p style={{ textAlign: "center",fontStyle:"oblique",fontWeight:"500" }}>with peers.</p>
                    <p style={{ textAlign: "center" ,fontStyle:"oblique",fontWeight:"500"}}>With its user-friendly interface Expert Hub is the go-to destination</p>
                    <p style={{ textAlign: "center" ,fontStyle:"oblique",fontWeight:"500"}}> for students seeking <span style={{ fontSize: "x-large" ,fontWeight:"800"}}>academic support and professional development.</span></p>

                </div>
            </div>

        </>

    )

}
