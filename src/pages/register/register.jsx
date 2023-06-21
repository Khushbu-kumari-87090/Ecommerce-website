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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './register.css';

function MSRegister() {

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [role, setRole] = useState([]);
    const [responseMsg, setResponseMsg] = useState();
    const [open, setOpen] = useState(false);
    const [vendorId, setVendorId] = useState();
    let country = ["India", "USA", "Germany", "Russia", "UAE"];
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    const handleClickShowPassword = (val) => {
        if (val === "1")
            return (event) => { setShowPassword1((show) => !show); }
        if (val === "2")
            return (event) => { setShowPassword2((show) => !show); }

    }

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
                <div className='ms-register-sub-div ms-flex-col'>
                    <div className='ms-register-head'>
                        <h2 className='ms-login-head'>Create your profile</h2>
                        <h3 className='ms-login-logo'>
                            MyStore
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='ms-register-form'>
                        <div className='ms-register-head'>

                            <div className='ms-register-form-sub-div form-start' >
                                {errors.userName ?
                                    <TextField error className='ms-login-field ' sx={{ minWidth: '27ch' }} id="standard-required" label="*User Name" variant="standard" {...register('userName', { required: true })} helperText="User Name is required." /> :
                                    <TextField className='ms-login-field ms-field-margin-bottom' sx={{ minWidth: '27ch' }} id="standard-required" label="User Name" variant="standard" {...register('userName', { required: true })} />

                                }
                                {errors.email ?
                                    <TextField error className='ms-login-field ms-field-margin' sx={{ minWidth: '27ch' }} id="outlined-error-helper-text" label="Email" variant="standard"

                                        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                                        helperText="Enter valid email address."
                                    /> :
                                    <TextField className='ms-login-field ms-field-margin ms-field-margin-bottom' sx={{ minWidth: '27ch' }} id="outlined-basic" label="Email" variant="standard"
                                        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                                    />

                                }

                                <FormControl className='ms-login-field ms-field-margin ms-field-margin-bottom' variant="standard">
                                    {errors.password ? <InputLabel error htmlFor="standard-error-adornment-password">*Password</InputLabel> : <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>}
                                    <Input

                                        id="standard-adornment-password"
                                        type={showPassword1 ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onmsuseDown={handlemsuseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
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
                                <FormControl className='ms-login-field ms-field-margin' variant="standard">
                                    {errors.confirmPassword ? <InputLabel error htmlFor="standard-error-adornment-confirm-password">Confirm Password</InputLabel> : <InputLabel htmlFor="standard-adornment-confirm-password">Confirm Password</InputLabel>}
                                    <Input

                                        id="standard-adornment-confirm-password"
                                        type={showPassword2 ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword("2")}
                                                    onmsuseDown={handlemsuseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Confirm Password"
                                        {...register('confirmPassword', {
                                            required: true,
                                            validate: (val) => {
                                                if (watch('password') !== val) {
                                                    return "Your passwords does not match";
                                                }
                                            },
                                        })}
                                    />
                                    {errors.confirmPassword ? <FormHelperText error id="standard-weight-helper-text">Password does not matched!</FormHelperText> : ""}

                                </FormControl>

                            </div>

                            <div className='ms-register-form-sub-div form-end'>

                                {/* <TextField className='userName' sx={{ minWidth: '27ch' }} id="outlined-basic" label="User Name" variant="outlined" onChange={handleUserName} /> */}

                                <FormControl className='register-radio'>
                                    <FormLabel id="dems-controlled-radio-buttons-group">I'm a/an :</FormLabel>
                                    <RadioGroup
                                        defaultValue="client"
                                        aria-labelledby="dems-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        // value={value}
                                        // onChange={handleChange}
                                        {...register('role', { required: true })}
                                    >
                                        <FormControlLabel value="client" control={<Radio />} label="Client or Organisation" />
                                        <FormControlLabel value="agency" control={<Radio />} label="Agency or Provider" />
                                        <FormControlLabel value="freelancer" control={<Radio />} label="Freelancer or Contributor" />
                                    </RadioGroup>
                                </FormControl>

                                <FormControl className='ms-login-field register-select ms-field-margin-bottom' sx={{ minWidth: '27ch' }} variant="standard" >
                                    <InputLabel id="dems-simple-select-standard-label">Country</InputLabel>
                                    <Select
                                        labelId="dems-simple-select-standard-label"
                                        id="dems-simple-select-standard"
                                        defaultValue="India"
                                        // onChange={handleChange}
                                        {...register('country', { required: true })}
                                        label="Country"
                                    >
                                        {country.map((cntry) => { return (<MenuItem value={cntry}>{cntry}</MenuItem>); })}

                                    </Select>
                                </FormControl>
                                {errors.phone ?
                                    <TextField error className='ms-login-field' sx={{ minWidth: '27ch' }} id="outlined-error-helper-text" label="Phone" variant="standard"
                                        {...register('phone', { required: true, pattern: /^\d{10}$/ })}
                                        helperText="Enter valid phone number."
                                    /> :
                                    <TextField className='ms-login-field ms-field-margin' sx={{ minWidth: '27ch' }} id="outlined-basic" label="Phone" variant="standard"
                                        {...register('phone', { required: true, pattern: /^\d{10}$/ })}
                                    />

                                }
                            </div>

                            {open === true && <Alert className='loginAlert' onClose={handleClose} severity="error" >
                                {responseMsg}
                            </Alert>}

                            {/* <p className='SignUpFlip' onClick={handleCss}>SIGN UP</p> */}

                        </div>
                        <Button type='submit' className='ms-signin-button register-button-margin' variant='outlined' >Sign Up</Button>
                    </form>

                    <p className='ms-login-para'>Already a member? <span className='ms-login-signup-button' onClick={() => navigate('/login')} >Login!</span></p>
                </div>
            </div>
        </div>

    );
}

export default MSRegister;
