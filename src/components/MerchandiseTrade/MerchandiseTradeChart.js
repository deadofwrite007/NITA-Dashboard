"use client";

import React from "react";
import styles from "./MerchandiseTradeChart.module.css";

export default function MerchandiseTradeChart() {
  const radius = 48;
  const strokeWidth = 14;
  const center = 60;
  const circumference = 2 * Math.PI * radius; // 301.59

  const merchPercent = 73.9;
  const servPercent = 26.1;

  const merchStrokeLength = (merchPercent / 100) * circumference;
  const servStrokeLength = (servPercent / 100) * circumference;

  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>Merchandise vs Services Trade</span>
        <span className={styles.subtitle}>(USD Billion)</span>
      </div>

      <div className={styles.content}>
        {/* Left Side Label (Merchandise) */}
        <div className={`${styles.sideLabel} ${styles.leftLabel}`}>
          <span className={styles.labelCategory}>Merchandise</span>
          <span className={styles.labelValue}>$1,205.94 B</span>
          <span className={`${styles.labelPercent} ${styles.merchandiseColor}`}>{merchPercent}%</span>
        </div>

        {/* Center Donut Graph */}
        <div className={styles.donutWrapper}>
          <svg viewBox="0 0 120 120" className={styles.svg}>
            {/* Background track circle optional, let's keep it clean or add a light track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              className={styles.donutSegment}
              stroke="#e2e8f0"
            />
            {/* Merchandise (Blue) */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              className={`${styles.donutSegment} ${styles.merchandiseSeg}`}
              strokeDasharray={`${merchStrokeLength} ${circumference}`}
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* Services (Green) */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              className={`${styles.donutSegment} ${styles.servicesSeg}`}
              strokeDasharray={`${servStrokeLength} ${circumference}`}
              strokeDashoffset={-merchStrokeLength}
              strokeLinecap="round"
            />
          </svg>
          {/* Inner Center Text overlay */}
          <div className={styles.centerText}>
            <div className={styles.centerTitle}>Total Trade</div>
            <div className={styles.centerValue}>$1,631.41 B</div>
          </div>
        </div>

        {/* Right Side Label (Services) */}
        <div className={`${styles.sideLabel} ${styles.rightLabel}`}>
          <span className={styles.labelCategory}>Services</span>
          <span className={styles.labelValue}>$425.47 B</span>
          <span className={`${styles.labelPercent} ${styles.servicesColor}`}>{servPercent}%</span>
        </div>
      </div>
    </div>
  );
}
