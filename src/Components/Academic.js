import React from 'react';
import './Academic.css';
import TextLoop from "react-text-loop";

const Academic = () =>{
    return(
        <div className='Academic'>
            <div className='inventory-box'>

                <div className='inventory first'>
                    <div>
                        <h1>Research</h1>
                        <i className="fas fa-search"></i>
                        <p>Mapping the innovations</p>
                    </div>
                </div>
                <div className='inventory second'>
                    <div>
                        <h1>Startups</h1>
                        <i className="fas fa-rocket"></i>
                        <p>Success stories of entrepreneurs</p>
                    </div>
                </div>
                <div className='inventory third'>
                    <div>
                        <h1>News</h1>
                        <i className="fas fa-newspaper"></i>
                        <p>Panaroma of Events and News</p>
                    </div>
                </div>
                <div className='inventory fourth'>
                    <div>
                        <h1>Campus </h1>
                        <i className="fas fa-graduation-cap"></i>
                        <p>Explore Beyond the Classrooms</p>
                    </div>
                </div>
            </div>
            <div className='news'>
                <h2>Bulletin News</h2>           
                <TextLoop className='TextLoop' springConfig={{ stiffness: 180, damping: 11 }} interval={4000}
                children={[
                    "18 June - PLACEMENT NOTICE SOLO CAMPUS PLACEMENT DRIVE BY Mechlin Software Technology Pvt. Ltd, Chandigarh",
                    "18 June - PLACEMENT NOTICE VIRTUAL RECRUITMENT DRIVE BY LG SOFT",
                    "19 June - PLACEMENT NOTICE VIRTUAL RECRUITMENT DRIVE BY PRATISHTHAN SOFTWARE VENTURES PVT. LTD",
                    "19 June - PLACEMENT NOTICE SOLO CAMPUS PLACEMENT DRIVE BY ATTRA INFOTECH ELECTRONIC CITY, BANGALORE FOR B TECH(CSE/IT/ET)-2021 STUDENTS",
                         
                ]}/>
                
                <p><b>Download here</b></p>
            </div>
            <div className='Academic-Unit'>
                <h1>
                    Academic Units
                    <hr></hr>
                    <hr></hr>
                </h1>
                <div className='academic-boxes'>
                    <div>
                        <i className="fas fa-atom"></i>
                        <h2>Centers</h2>
                    </div>
                    {/* <div>
                        <i className="fas fa-flask"></i>
                        <h2>DIY (Do It Yourself) Laboratory</h2>
                    </div> */}
                    <div>
                        <i className="fas fa-robot"></i>
                        <h2>Robotics Laboratory</h2>
                    </div>
                    <div>
                        <i className="far fa-building"></i>
                        <h2>Departments</h2>
                    </div>
                    <div>
                        <i className="fas fa-school"></i>
                        <h2>School</h2>
                    </div>
                </div>
            </div>
            <div className='two-centers'>
                <img alt='' src='https://coer.ac.in/wp-content/uploads/2020/03/Centre-of-Excellence.jpg'/>
                <img alt='' src='https://coer.ac.in/wp-content/uploads/2020/03/DIY-Lab.jpg'/>
            </div>
        </div>
    )
}
export default Academic;