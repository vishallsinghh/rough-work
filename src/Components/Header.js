import React from 'react';
import './Header.css';

const Header = () =>{
    return(
        <div className='Header'>
            <div className='Header1'>
            <ul className='list'>
            <i className="fas fa-shopping-bag"></i><li>Jobs@COER</li>
            <i className="fas fa-calendar-day"></i><li>Academic Calendar</li>
            <i className="fas fa-rupee-sign"></i><li>Payment Gateways</li>
            <i className="fas fa-user-friends"></i><li>Recruiter/Career Services</li>
            <i className="fas fa-envelope"></i><li className='last'>COER @ Email</li>
            </ul>
           
            </div>
            <div className='Logo'>
                <div className='Logo-pictures'>
                <img alt='' src='https://coer.ac.in/wp-content/uploads/2021/05/UETR-Logo.png' height='100px' width='auto'/>
                <img alt='' src='https://coer.ac.in/wp-content/uploads/2020/03/logo.png' height="100px" width='auto'/>       
                </div>
                <div className='Logo-college'>
                    <h2>College of Engineering Roorkee</h2>
                    <hr></hr>
                </div>    
                <div className='college-location'>
                    <div>
                        <p>College of Engineering Roorkee,</p>
                        <p>Roorkee,Uttarakhand-110004</p>
                    </div>
                    <i className="fas fa-map-marker-alt"></i>
                </div>
            </div>
        </div>
    )
}
export default Header;