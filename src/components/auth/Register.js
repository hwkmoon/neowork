import { AlternateEmail } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import "../../assets/css/register.css";
import logo from "../../assets/img/neowork.png";
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { login, selectUser } from '../../store/userSlice';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  const register = (e) => {
    e.preventDefault();
    if(!name) {
      return alert("Please enter a full name!");
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic
          }))
        })
      }).catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <img src={logo} alt=""/>

      <form>
        <input placeholder='Full Name' type="text" value={name} onChange={(e) => (setName(e.target.value))} required/>
        <input placeholder='Photo url (optional)' type="text" value={profilePic} onChange={(e) => (setProfilePic(e.target.value))}/>
        <input placeholder='Email' type="email" value={email} onChange={(e) => (setEmail(e.target.value))} required/>
        <input placeholder='Password' type="password" value={password} onChange={(e) => (setPassword(e.target.value))} required/>
        <input placeholder='Confirm Password' type="password" value={passwordConfirm} onChange={(e) => (setPasswordConfirm(e.target.value))} required/>
        <button type="submit" onClick={register}>Register</button>
      </form>
      <Link to="/login">
        <p>Already a member?<span className="register__login" onClick={login}>Login Now</span></p>
      </Link>
    </div>
  )
}



