"use client";

import React from "react";
import styles from "./LogisticsPerformance.module.css";

const shipIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.kpiIcon}>
    <path d="M3 16h18l-1.5-4H4.5L3 16z" fill="rgba(37, 99, 235, 0.1)" />
    <path d="M6 12V9h3v3M10 12V7h3v5M14 12V8h3v4" />
    <line x1="1" y1="19" x2="23" y2="19" />
  </svg>
);

const buildingIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.kpiIcon}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" fill="rgba(37, 99, 235, 0.1)" />
    <line x1="9" y1="22" x2="9" y2="16" />
    <line x1="15" y1="22" x2="15" y2="16" />
    <line x1="9" y1="16" x2="15" y2="16" />
    <line x1="8" y1="6" x2="10" y2="6" />
    <line x1="14" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="10" y2="10" />
    <line x1="14" y1="10" x2="16" y2="10" />
  </svg>
);

const clockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.kpiIcon}>
    <circle cx="12" cy="12" r="10" fill="rgba(37, 99, 235, 0.1)" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const kpis = [
  {
    title: "Major Ports Throughput (MT)",
    value: "1,482.6",
    icon: shipIcon
  },
  {
    title: "Avg. Customs Clearance (hrs)",
    value: "26.4",
    icon: buildingIcon
  },
  {
    title: "Freight Cost Index (Base 100)",
    value: "132.6",
    icon: shipIcon
  },
  {
    title: "Avg. Transit Time (Days)",
    value: "18.7",
    icon: clockIcon
  }
];

const portsData = [
  { name: "JNPT, Mumbai", value: 121.8, formatted: "$121.8" },
  { name: "Mundra", value: 81.6, formatted: "$81.6" },
  { name: "Nhava Sheva", value: 45.7, formatted: "$45.7" },
  { name: "Chennai", value: 37.2, formatted: "$37.2" }
];

export default function LogisticsPerformance() {
  const maxPortValue = portsData.reduce((max, item) => (item.value > max ? item.value : max), 1);

  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>Logistics & Port Performance</span>
        <span className={styles.subtitle}>(Apr-Feb 23-24)</span>
      </div>

      {/* 4 KPI cards without borders */}
      <div className={styles.kpiRow}>
        {kpis.map((kpi, idx) => (
          <div key={idx} className={styles.kpiCard}>
            {kpi.icon}
            <span className={styles.kpiTitle}>{kpi.title}</span>
            <span className={styles.kpiValue}>{kpi.value}</span>
          </div>
        ))}
      </div>

      {/* Ports Header */}
      <div className={styles.portsHeader}>Top Ports by Trade Value (USD Billion)</div>

      {/* Ports Progress Bars in 3 columns */}
      <div className={styles.portsList}>
        {portsData.map((port, idx) => {
          const widthPercent = (port.value / maxPortValue) * 100;
          return (
            <div key={idx} className={styles.portRow}>
              <span className={styles.portName}>{port.name}</span>
              <div className={styles.progressContainer}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
              <span className={styles.portValue}>{port.formatted}</span>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <button className={styles.link}>
          View All Ports
        </button>
      </div>
    </div>
  );
}
