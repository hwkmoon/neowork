import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export default function LoadingToRedirect() {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((curentCount) => --curentCount)
      }, 1000)
      count === 0 && navigate("/login");
      return () => clearInterval(interval);
    },[count, navigate])

    return (
      <div>
        <p>Redirection you in {count} seconds</p>
      </div>
    )
};