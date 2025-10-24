"use client";

import React from "react"
import Logo from "../../assets/images/Musslle-Perfil-removebg-preview.png"
import styles from "./login.module.css"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { fetchFromMussllePerfilApi } from "../../helpers/api";

const Login = () => {
  const router = useRouter()

  //login validation 
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const username = form.username.value
    const password = form.password.value

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": username,
      "password": password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: 'follow' as RequestRedirect
    };

    try {
      const response = await fetchFromMussllePerfilApi("/login", requestOptions);
      const result = await response.text();
      console.log(result);
      router.push('/')
    } catch (error) {
      console.error("Usuário ou senha inválidos", error);
    }
  }

  return (
    <div className={styles.loginMainContainer}>
      <div className={styles.loginContent}>
        <Image className={styles.loginLogo} src={Logo} alt="logo Musslle Perfil" />
        <h2 className={styles.loginTitle}>Login</h2>

        <form className={styles.formLogin} onSubmit={handleLogin}>
          <div className={styles.formLoginContent}>
            <label className={styles.labelFormLogin} htmlFor="username">Username:</label>
            <input className={styles.inputFormLogin} type="text" id="username" name="username" required />

            <label className={styles.labelFormLogin} htmlFor="password">Password:</label>
            <input className={styles.inputFormLogin} type="password" id="password" name="password" required />

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
