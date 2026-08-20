"use client";

import React from "react";
import styles from "./AIInsights.module.css";

const insights = [
  {
    title: "Strong Growth",
    text: "Engineering exports grew 14.6% YoY driven by demand from USA & EU.",
    titleClass: styles.strongGrowth,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${styles.cardIcon} ${styles.strongGrowthIcon}`}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
  {
    title: "Rising Imports",
    text: "Crude oil imports increased 18.7% YoY due to higher energy prices.",
    titleClass: styles.risingImports,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${styles.cardIcon} ${styles.risingImportsIcon}`}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" style={{ transform: "rotate(90deg) translate(0px, -30px)" }} />
      </svg>
    )
  },
  {
    title: "Opportunity",
    text: "High potential in Africa markets for Pharma & Engineering goods.",
    titleClass: styles.opportunity,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${styles.cardIcon} ${styles.opportunityIcon}`}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: "Risk Alert",
    text: "High dependence on China for Electronic Components (74%).",
    titleClass: styles.riskAlert,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${styles.cardIcon} ${styles.riskAlertIcon}`}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    )
  },
  {
    title: "Policy Insight",
    text: "Improve FTA utilization with UK, EU & Canada for higher benefits.",
    titleClass: styles.policyInsight,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${styles.cardIcon} ${styles.policyInsightIcon}`}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    )
  },
  {
    title: "Data Quality",
    text: "98.7% data coverage achieved for Apr-Feb 23-24.",
    titleClass: styles.dataQuality,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${styles.cardIcon} ${styles.dataQualityIcon}`}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    )
  }
];

export default function AIInsights() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Brain/AI sparkle icon */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.icon}>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        </svg>
        <span className={styles.title}>AI Insights & Alerts</span>
      </div>

      <div className={styles.grid}>
        {insights.map((insight, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              {insight.icon}
              <span className={`${styles.cardTitle} ${insight.titleClass}`}>{insight.title}</span>
            </div>
            <p className={styles.cardText}>{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
