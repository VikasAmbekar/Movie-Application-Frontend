import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Admin.module.css';

const Admin = () => {
    let navigate = useNavigate();
    return (
        <>
        <header className={classes.headerTop}>
                <div className={classes.logo}>
                    <a className={classes.logolink} href='/'>Movie App</a>
                    
                </div>
                
            </header>
        
           <div className={classes.loginForm}>
                    <form className={classes.adminForm}>
                        <br />
                        <h3>Admin Login</h3>
                        <label>
                            Mobile Number
                            <br/>
                            <input

                                type="number"
                                name='mobileNumber'
                                placeholder="Enter registered mobile Number"
                                autoComplete='off'
                            />
                        </label>
                        <br />
                        <label>
                            Password
                            <br/>
                            <input
                                type="password"
                                name='password'
                                placeholder='Enter Password'
                                autoComplete='off'
                            />
                        </label>
                        <br />
                        <br />
                        <button onClick={() => navigate("/admin-home")} className={classes.loginbutton}>Login</button>
                        <br />
                        <br />
                    </form>
                </div>

                <footer className={classes.bottom}>
                <p>Copyright</p>
            </footer>
            
        </>
    );
};

export default Admin;