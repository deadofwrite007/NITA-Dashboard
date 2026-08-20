"use client";

import React from "react";
import styles from "./KPICards.module.css";

const kpiData = [
  {
    title: "Total Exports",
    value: "$778.21 B",
    trend: "▲ 8.19%",
    isUp: true,
    subtext: "vs Apr-Feb 22-23",
    iconClass: styles.exportsIcon,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    ),
  },
  {
    title: "Total Imports",
    value: "$853.20 B",
    trend: "▼ -6.71%",
    isUp: false,
    subtext: "vs Apr-Feb 22-23",
    iconClass: styles.importsIcon,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    ),
  },
  {
    title: "Total Trade",
    value: "$1,631.41 B",
    trend: "▲ 0.44%",
    isUp: true,
    subtext: "vs Apr-Feb 22-23",
    iconClass: styles.tradeIcon,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Trade Balance",
    value: "-$74.99 B",
    trend: "▲ -$191.98 B",
    isUp: true, // improved
    subtext: "Apr-Feb 22-23",
    iconClass: styles.balanceIcon,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <path d="M16 7l4 4-4 4M8 17l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Export Growth (YoY)",
    value: "8.19%",
    trend: "▲ 8.19%",
    isUp: true,
    subtext: "vs Apr-Feb 22-23",
    iconClass: styles.growthExpIcon,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Import Growth (YoY)",
    value: "-6.71%",
    trend: "▼ -6.71%",
    isUp: false,
    subtext: "vs Apr-Feb 22-23",
    iconClass: styles.growthImpIcon,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
        <polyline points="17 18 23 18 23 12" />
      </svg>
    ),
  },
  {
    title: "Trade to GDP Ratio",
    value: "43.2%",
    trend: "vs 42.3% (FY 22-23)",
    isUp: null, // neutral / subtext only
    subtext: "",
    iconClass: styles.gdpIcon,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
];

export default function KPICards() {
  return (
    <div className={styles.kpiGrid}>
      {kpiData.map((kpi, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.headerRow}>
            <div className={`${styles.iconWrapper} ${kpi.iconClass}`}>
              {kpi.icon}
            </div>
            <div className={styles.cardTitle}>{kpi.title}</div>
          </div>
          <div className={styles.value}>{kpi.value}</div>
          <div className={styles.footerRow}>
            {kpi.isUp !== null ? (
              <>
                <span className={`${styles.trendBadge} ${kpi.isUp ? styles.trendUp : styles.trendDown}`}>
                  {kpi.trend}
                </span>
                <span className={styles.trendLabel}>{kpi.subtext}</span>
              </>
            ) : (
              <span className={styles.trendLabel}>{kpi.trend}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
