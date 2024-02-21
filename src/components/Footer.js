import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                   <img src={logo} alt=''/>
                   <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                </div>
                <div>
                    <h3>Importan Links</h3>
                    <ul>
                        <li><a href='/Home'>Home</a></li>
                        <li><a href='/About'>About</a></li>
                        <li><a href='/Menu'>Menu</a></li>
                        <li><a href='/Reservation'>Reservations</a></li>
                        <li><a href='/Order Online'>Order Online</a></li>
                        <li><a href='/<Login'>Login</a></li>
                    </ul>
                </div>

                 <div>
                    <h3>Contact Us</h3> 
                    <ul>
                          <li>Address: <br/> 123 Pueblo, Spain</li>
                          <li>Phone: <br/> +123 456 789</li>
                          <li>Email: <br/> little@lemon.com</li>
                    </ul>
                 </div>

                 <div>
                    <h3>Social Media Links</h3> 
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>X</a></li>
                    </ul>
                 </div>

            </section>
        </footer>
    );
};

export default Footer;