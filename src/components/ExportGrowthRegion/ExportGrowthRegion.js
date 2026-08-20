"use client";

import React from "react";
import styles from "./ExportGrowthRegion.module.css";

const regionalData = [
  { region: "North America", growth: 16.3, color: "#3b82f6" },
  { region: "Latin America", growth: 11.2, color: "#10b981" },
  { region: "EU", growth: 7.8, color: "#f97316" },
  { region: "Asia (Excl. West Asia)", growth: 5.6, color: "#eab308" },
  { region: "West Asia", growth: 6.1, color: "#a855f7" },
  { region: "Africa", growth: 12.4, color: "#ec4899" },
  { region: "Others", growth: 9.7, color: "#64748b" }
];

export default function ExportGrowthRegion() {
  const radius = 48;
  const strokeWidth = 12;
  const center = 60;
  const circumference = 2 * Math.PI * radius; // 301.59

  // Sum of all values to normalize segments
  const totalGrowthVal = regionalData.reduce((sum, item) => sum + item.growth, 0);

  let currentOffset = 0;

  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>Export Growth by Region</span>
        <span className={styles.subtitle}>(YoY %)</span>
      </div>

      <div className={styles.content}>
        {/* Donut Chart */}
        <div className={styles.donutWrapper}>
          <svg viewBox="0 0 120 120" className={styles.svg}>
            {/* Background base track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              className={styles.donutSegment}
              stroke="#e2e8f0"
              strokeWidth={strokeWidth}
            />

            {regionalData.map((d, idx) => {
              const share = d.growth / totalGrowthVal;
              const strokeLength = share * circumference;
              const offset = currentOffset;
              currentOffset -= strokeLength; // Subtract because SVG offsets go clockwise or counter-clockwise depending on sign

              return (
                <circle
                  key={idx}
                  cx={center}
                  cy={center}
                  r={radius}
                  className={styles.donutSegment}
                  stroke={d.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${strokeLength} ${circumference}`}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
          <div className={styles.centerText}>
            <div className={styles.centerValue}>8.19%</div>
            <div className={styles.centerLabel}>Total</div>
          </div>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          {regionalData.map((d, idx) => (
            <div key={idx} className={styles.legendItem}>
              <div className={styles.legendLeft}>
                <span className={styles.legendDot} style={{ backgroundColor: d.color }} />
                <span className={styles.regionName}>{d.region}</span>
              </div>
              <span className={styles.regionValue}>{d.growth.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
