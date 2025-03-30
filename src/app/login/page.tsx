"use client";

import React from "react"
import Logo from "../../app/assets/images/Musslle-Perfil.png"
import "./styles.css"
import Image from "next/image"
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()

  //login validation 
  function handleLogin(event: React.FormEvent) {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const username = form.username.value
    const password = form.password.value

    if (username === "admin" && password === "admin") {
      router.push('/')
    } else {
      alert("Invalid username or password")
    }
  }

  return (
    <div className="loginMainContainer">
      <div className="loginContent">
        <Image className="loginLogo" src={Logo} alt="logo Musslle Perfil" />
        <h2 className="loginTitle">Login</h2>

        <form className="formLogin" onSubmit={handleLogin}>
          <div className="formLoginContent">
            <label className="labelFormLogin" htmlFor="username">Username:</label>
            <input className="inputFormLogin" type="text" id="username" name="username" required />

            <label className="labelFormLogin" htmlFor="password">Password:</label>
            <input className="inputFormLogin" type="password" id="password" name="password" required />

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
