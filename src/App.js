import "./App.css";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/feed/Feed";
import Login from "./components/auth/Login";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./store/userSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoute from "./components/auth/UserRoute";
import Register from "./components/auth/Register";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";

export default function App() {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.displayName,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }));
      } else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={
          <UserRoute>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </UserRoute>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>

      {/* {!user ? (
        <Login />
      ) : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
        </>
      )
      } */}
    </div>
    </BrowserRouter>
  );
}