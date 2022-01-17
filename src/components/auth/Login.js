import React, {useState, useEffect} from 'react';
import "../../assets/css/login.css";
import logo from "../../assets/img/neowork.png"
import { auth } from '../../firebase';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../store/userSlice';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      (userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL
          })
        )
      }
    ).catch(error => error.message)
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])


  return (
    <div className='login'>
      <img src={logo} alt=""/>

      <form>
        <input placeholder='Email' type="email" value={email} onChange={(e) => (setEmail(e.target.value))} required/>
        <input placeholder='Password' type="password" value={password} onChange={(e) => (setPassword(e.target.value))} required/>
        <button type="submit" onClick={loginToApp}>Login</button>
      </form>
      <Link to="/register">
        <p>Not a member?<span className="login__register">Register Now</span></p>
        </Link>
    </div>
  )
}
