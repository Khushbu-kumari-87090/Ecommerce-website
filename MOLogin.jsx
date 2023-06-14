import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, useNavigate } from 'react-router-dom';
// import {useRouterHistory} from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './MOLogin.css';

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//     props,
//     ref,
// ) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

function MOLogin() {

    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState([]);
    const [responseMsg, setResponseMsg] = useState();
    const [open, setOpen] = useState(false);
    const [vendorId, setVendorId] = useState();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    // const value = useContext(AuthContext);
    // console.log(navigate);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const onSubmit = (data) => {
        // navigate("");
        // api call
    }

    useEffect(() => {


    }, []);



    return (
        <div className='mo-main-page'>
            <div className='mo-main-page-coat mo-flex-col'>
                <div className='mo-sub-div mo-flex-col'>
                    <h3 className='mo-login-logo'>
                        TheMO
                    </h3>
                    <h2 className='mo-login-head'>WELCOME!</h2>
                    {/* <h4 className='mo-login-signin'>SIGNIN</h4> */}

                    <form onSubmit={handleSubmit(onSubmit)} className='mo-form mo-flex-col'>

                        {errors.userName ?
                            <TextField error className='mo-login-field mo-field-margin' sx={{ minWidth: '27ch' }} id="standard-required" label="*User Name" variant="standard" {...register('userName', { required: true })} helperText="User Name is required." /> :
                            <TextField className='mo-login-field mo-field-margin' sx={{ minWidth: '27ch' }} id="standard-required" label="User Name" variant="standard" {...register('userName', { required: true })} />

                        }
                        {/* <TextField className='userName' sx={{ minWidth: '27ch' }} id="outlined-basic" label="User Name" variant="outlined" onChange={handleUserName} /> */}
                        <FormControl className='mo-login-field mo-field-margin' variant="standard">
                            {errors.password ? <InputLabel error htmlFor="standard-error-adornment-password">*Password</InputLabel> : <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>}
                            <Input
                                
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                {...register('password', {
                                    required: true,
                                    validate: (val) => {
                                        if (val.length < 8) {
                                            console.log(watch('password'));
                                            return "Password should be of length 8 or above.";
                                        }
                                    },
                                })}
                            />
                            {errors.password ? <FormHelperText error id="outlined-weight-helper-text">Password should be of length 8 or above.</FormHelperText> : ""}
                        </FormControl>
                        {open === true && <Alert className='loginAlert' onClose={handleClose} severity="error" >
                            {responseMsg}
                        </Alert>}

                        <Button type='submit' className='mo-signin-button mo-field-margin' variant='outlined' >SIGN IN</Button>

                        {/* <p className='SignUpFlip' onClick={handleCss}>SIGN UP</p> */}

                    </form>
                    <p className='mo-login-para'>New here? <span className='mo-login-signup-button' onClick={()=>navigate('/register')} >SignUp!</span></p>
                </div>
            </div>
        </div>

    );
}

export default MOLogin;



{/* <div className='loginPage'>
            <div
                // className='circularDiv transitions b'
                className={bool ? 'rectangularDiv transitions ' : 'rectangularDiv transitions b'}
            >
                <div>
                <h3>Welcome Back!</h3>
        <p>To keep connected with us please login with your personal info.</p>
                </div>
                <div className='formDiv front'>
                    <span>Member Login</span>
                    <TextField className='userName' sx={{ minWidth: '27ch' }} id="outlined-basic" label="User Name" variant="outlined" onChange={handleUserName} />
                    <FormControl className='password' variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            onChange={handlePassword}
                        />
                    </FormControl>
                    
                    <Button className='signInButton' variant='contained' >LogIn</Button>

                    <p className='SignUpFlip' onClick={handleCss}>SIGN UP</p>

                </div>

                <div className='back'>efeefce
                    <button onClick={handleCssClose}>gfd</button>
                    <p className='SignUpFlip' onClick={handleCssClose}>SIGN IN</p>
                </div>
                //  <div className='loginButton'>Login</div> 
            </div>


        </div> */}
