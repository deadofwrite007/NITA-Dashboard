"use client";

import React from "react";
import styles from "./FTAUtilization.module.css";

export default function FTAUtilization() {
  const radius = 50;
  const strokeWidth = 10;
  const center = 60; // center X
  const centerY = 65; // center Y
  const circumference = Math.PI * radius; // 157.08 (semicircle)

  const utilizationRate = 62.3;
  const strokeLength = (utilizationRate / 100) * circumference;

  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>FTA Utilization</span>
        <span className={styles.subtitle}>(Apr-Feb 23-24)</span>
      </div>

      <div className={styles.chartArea}>
        {/* Semicircular gauge */}
        <div className={styles.gaugeWrapper}>
          <svg viewBox="0 0 120 70" className={styles.svg}>
            {/* Background track (Semicircle arc) */}
            <path
              d={`M ${center - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${center + radius} ${centerY}`}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Value fill (Orange arc) */}
            <path
              d={`M ${center - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${center + radius} ${centerY}`}
              fill="none"
              stroke="var(--color-neutral)"
              strokeWidth={strokeWidth}
              strokeDasharray={`${strokeLength} ${circumference}`}
              strokeLinecap="round"
            />
          </svg>
          <div className={styles.centerText}>
            <div className={styles.centerValue}>{utilizationRate}%</div>
            <div className={styles.centerLabel}>Utilization Rate</div>
          </div>
        </div>

        {/* Savings Stats */}
        <div className={styles.statsList}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Potential Duty Savings</span>
            <span className={styles.statValue}>$9.64 B</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Utilized Savings</span>
            <span className={styles.statValue}>$6.01 B</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.link}>
          View FTA Analyzer
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
