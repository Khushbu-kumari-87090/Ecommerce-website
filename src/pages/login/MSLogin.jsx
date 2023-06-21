import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
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
import './MSLogin.css';

function MSLogin() {

    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState([]);
    const [responseMsg, setResponseMsg] = useState();
    const [open, setOpen] = useState(false);
    const [vendorId, setVendorId] = useState();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handlemsuseDownPassword = (event) => {
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
        <div className='ms-main-page'>
            <div className='ms-main-page-coat ms-flex-col'>
                <div className='ms-sub-div ms-flex-col'>
                    <h3 className='ms-login-logo'>
                        MyStore
                    </h3>
                    <h2 className='ms-login-head'>WELCOME!</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='ms-form ms-flex-col'>

                        {errors.userName ?
                            <TextField error className='ms-login-field ms-field-margin' sx={{ minWidth: '27ch' }} id="standard-required" label="*User Name" variant="standard" {...register('userName', { required: true })} helperText="User Name is required." /> :
                            <TextField className='ms-login-field ms-field-margin' sx={{ minWidth: '27ch' }} id="standard-required" label="User Name" variant="standard" {...register('userName', { required: true })} />

                        }
                        {/* <TextField className='userName' sx={{ minWidth: '27ch' }} id="outlined-basic" label="User Name" variant="outlined" onChange={handleUserName} /> */}
                        <FormControl className='ms-login-field ms-field-margin' variant="standard">
                            {errors.password ? <InputLabel error htmlFor="standard-error-adornment-password">*Password</InputLabel> : <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>}
                            <Input
                                
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onmsuseDown={handlemsuseDownPassword}
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

                        <Button type='submit' className='ms-signin-button ms-field-margin' variant='outlined' >SIGN IN</Button>

                        {/* <p className='SignUpFlip' onClick={handleCss}>SIGN UP</p> */}

                    </form>
                    <p className='ms-login-para'>New here? <span className='ms-login-signup-button' onClick={()=>navigate('/register')} >SignUp!</span></p>
                </div>
            </div>
        </div>

    );
}

export default MSLogin;
