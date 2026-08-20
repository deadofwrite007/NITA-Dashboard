"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [frequency, setFrequency] = useState("Monthly");
  const [finYear, setFinYear] = useState("2023-24 (Apr-Feb)");
  const [compareYear, setCompareYear] = useState("2022-23 (Apr-Feb)");

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>NATIONAL TRADE DASHBOARD – INDIA</h1>
          <span className={styles.flag} role="img" aria-label="India Flag">🇮🇳</span>
        </div>
        <p className={styles.subtitle}>360° View of India's Export, Import & Trade Performance</p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.controlsRow}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Data Frequency</label>
            <select
              className={styles.select}
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Financial Year</label>
            <select
              className={styles.select}
              value={finYear}
              onChange={(e) => setFinYear(e.target.value)}
            >
              <option value="2023-24 (Apr-Feb)">2023-24 (Apr-Feb)</option>
              <option value="2022-23 (Apr-Feb)">2022-23 (Apr-Feb)</option>
              <option value="2021-22 (Apr-Feb)">2021-22 (Apr-Feb)</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Compare With</label>
            <select
              className={styles.select}
              value={compareYear}
              onChange={(e) => setCompareYear(e.target.value)}
            >
              <option value="2022-23 (Apr-Feb)">2022-23 (Apr-Feb)</option>
              <option value="2021-22 (Apr-Feb)">2021-22 (Apr-Feb)</option>
              <option value="2020-21 (Apr-Feb)">2020-21 (Apr-Feb)</option>
            </select>
          </div>

          <button className={styles.downloadButton}>
            <svg
              className={styles.downloadIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Report
          </button>
        </div>
        <div className={styles.lastUpdated}>
          Last Updated: 15 May 2024
        </div>
      </div>
    </header>
  );
}
