import React from 'react';
import styles from './TechnicalSheetStyles.module.css';

interface TechnicalSheetCardProps {
  title: string;
}

const TechnicalSheetCard = ({ title }: TechnicalSheetCardProps) => {
  return (
    <div className={styles.technicalSheetCard}>
      <h2>{title}</h2>
      <p>&rarr;</p>
    </div>
  );
};

export default TechnicalSheetCard;