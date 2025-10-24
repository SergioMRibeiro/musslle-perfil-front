import style from './ExerciseRowStyle.module.css';

interface ExerciseRowProps {
  name: string;
  exerciseValue: string;
  exerciseSeries: number;
}

const ExerciseRow = ({name, exerciseValue, exerciseSeries}: ExerciseRowProps) => {
  return (
    <button className={style.exerciseRow}>
      <div className={style.exerciseName}>{name}</div>
      <div className={style.exerciseExerciseValue}>{exerciseValue}</div>
      <div className={style.exerciseSeries}>{exerciseSeries}</div>
    </button>
  );
}

export default ExerciseRow;