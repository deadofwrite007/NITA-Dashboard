"use client";

import React from "react";
import styles from "./HorizontalBarChart.module.css";

export default function HorizontalBarChart({
  title,
  subtitle,
  data = [],
  colorType = "blue",
  linkText = "View All",
  onLinkClick
}) {
  // Find maximum value to normalize bar widths
  const maxValue = data.reduce((max, item) => (item.value > max ? item.value : max), 1);

  const barClass = colorType === "green" ? styles.greenBar : styles.blueBar;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
        <span className={styles.unit}>(USD Billion)</span>
      </div>

      <div className={styles.list}>
        {data.map((item, idx) => {
          const widthPercent = (item.value / maxValue) * 100;
          // Strip the " B" suffix to match the screenshot style
          const displayValue = item.formattedValue
            ? item.formattedValue.replace(" B", "")
            : `$${item.value}`;

          return (
            <div key={idx} className={styles.row}>
              <div className={styles.countryLabel}>
                {item.flag && <span className={styles.flag}>{item.flag}</span>}
                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                <span className={styles.countryName}>{item.label}</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.barArea}>
                <div
                  className={`${styles.progressBar} ${barClass}`}
                  style={{ width: `${widthPercent * 0.7}%` }}
                />
                <span className={styles.value}>{displayValue}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <button className={styles.link} onClick={onLinkClick}>
          {linkText}
        </button>
      </div>
    </div>
  );
}
