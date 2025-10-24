import React from "react"
import Logo from "@/../public/images/Logo_Musslle_Perfil.png"
import Image from "next/image"
import styles from "./styles.module.scss"

const Login = () => {
  return (
    <div className={styles.loginMainContainer}>
      <Image
        src={Logo}
        alt="logo musslle perfil"
        className={styles.loginLogo}
      />
      <div className={styles.loginFormContainer} id="loginFormContainer">
        <form className={styles.loginForm}>
          <div className={styles.loginInputContainer}>
            <label htmlFor="loginFormContainer">Usuário:</label>
            <input type="text" className={styles.loginInputBox} />
          </div>

          <div className={styles.loginInputContainer}>
            <label htmlFor="loginFormContainer">Senha:</label>
            <input type="password" className={styles.loginInputBox} />
          </div>
          <button type="submit" className={styles.loginButtonBox}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
