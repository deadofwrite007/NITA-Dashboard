"use client";

import React from "react";
import styles from "./TradeRiskDependency.module.css";

const riskData = [
  { label: "Crude Oil", percent: 88, level: "High" },
  { label: "Electronic Components", percent: 74, level: "High" },
  { label: "Gold", percent: 65, level: "Medium" },
  { label: "Fertilizers", percent: 58, level: "Medium" },
  { label: "Active Pharma Ingredients", percent: 46, level: "Medium" },
  { label: "Pulses & Edible Oils", percent: 28, level: "Low" }
];

export default function TradeRiskDependency() {
  const getRiskStyles = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return { barClass: styles.highBar, textClass: styles.highText };
      case "medium":
        return { barClass: styles.mediumBar, textClass: styles.mediumText };
      case "low":
        return { barClass: styles.lowBar, textClass: styles.lowText };
      default:
        return { barClass: "", textClass: "" };
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>Trade Risk & Dependency</span>
      </div>

      <div className={styles.list}>
        {riskData.map((d, idx) => {
          const { barClass, textClass } = getRiskStyles(d.level);
          return (
            <div key={idx} className={styles.row}>
              <span className={styles.label}>{d.label}</span>
              <span className={styles.percent}>{d.percent}%</span>
              <div className={styles.meterContainer}>
                <div
                  className={`${styles.meterBar} ${barClass}`}
                  style={{ width: `${d.percent}%` }}
                />
              </div>
              <span className={`${styles.riskLevel} ${textClass}`}>{d.level}</span>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <button className={styles.link}>
          View Risk Dashboard
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
