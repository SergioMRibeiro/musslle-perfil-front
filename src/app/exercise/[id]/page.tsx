"use client"

import ExerciseRow from "@/components/ExerciseRow"
import { useUserDetails } from "@/utils/UserDetailsContext"
import style from "./exercises.module.css"
import React from "react"
interface ExerciseProps {
  params: { id: string }
}

const Exercise = ({ params }: ExerciseProps) => {
  const { myProfile, technicalSheets, loading } = useUserDetails()

  if (loading) return <div>Carregando...</div>

  if (!myProfile) return <div>Usuário não encontrado.</div>

  const exerciseName =
    myProfile?.technicalSheets[parseInt(params.id) - 1].name ||
    "Ficha não encontrada"
  const exerciseList = technicalSheets[parseInt(params.id) - 1].exercises || []

  console.log("Exercise page params:", technicalSheets)

  return (
    <div className={style.exercisePageContainer}>
      <h2>Ficha: {exerciseName}</h2>

      <div className={style.exerciseHeaderContainer}>
        <div className={style.exerciseHeaderTitle}>Exercício</div>
        <div className={style.exerciseHeaderTitle}>Peso/Quantidade</div>
        <div className={style.exerciseHeaderTitle}>Séries</div>
      </div>

      <div className={style.exerciseRowList}>
        {exerciseList.map((exercise) => (
          <div className={style.exerciseRowContainer} key={exercise.id}>
            <ExerciseRow
              name={exercise.name}
              exerciseValue={exercise.exerciseValue}
              exerciseSeries={exercise.series}
            />
          </div>
        ))}
        <button className={style.firstAddButton}>+</button>
      </div>
    </div>
  )
}

export default Exercise
