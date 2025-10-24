"use client"

import { useEffect, useState } from "react"
import { fetchFromMussllePerfilApi } from "../helpers/api"
import styles from "./page.module.css"
import { User } from "../helpers/interfaces"
import TechnicalSheetCard from "../components/TechnicalSheetCard"

export default function Home() {
  const [myProfile, setMyProfile] = useState<User>()
  const [technicalSheets, setTechnicalSheets] = useState<
    User["technicalSheets"]
  >([])

  async function getUserInfo() {
    try {
      const response = await fetchFromMussllePerfilApi("/me", {
        method: "GET",
      })
      const userData = await response.json()
      setMyProfile(userData || [])
      setTechnicalSheets(userData.technicalSheets || [])
      return userData
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error)
      return null
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  useEffect(() => {
    console.log("Dados do usuário atualizados:", myProfile)
  }, [myProfile])

  return (
    <div className={styles.mainPage}>
      <h1>Bem vindo, {myProfile?.firstName}</h1>
      <div className={styles.technicalSheetsContainer}>
        {technicalSheets?.map((sheet) => (
          <div key={sheet.id} className={styles.technicalSheetCard}>
            <a href={`/exercise/${sheet.id}`}>
            <TechnicalSheetCard title={sheet.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
