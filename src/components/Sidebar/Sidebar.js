"use client";

import React, { useState } from "react";
import styles from "./Sidebar.module.css";

const menuItems = [
  { id: "overview", name: "Executive Overview", active: true, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )},
  { id: "trade", name: "Trade Overview", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )},
  { id: "export", name: "Export Performance", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <path d="M2 20h20" />
    </svg>
  )},
  { id: "import", name: "Import Performance", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="20" x2="6" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="18" y1="20" x2="18" y2="14" />
      <path d="M2 20h20" />
    </svg>
  )},
  { id: "sector", name: "Sector Intelligence", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )},
  { id: "global", name: "Global Trade Position", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )},
  { id: "state", name: "State & District Analytics", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )},
  { id: "market", name: "Market Opportunities", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )},
  { id: "bilateral", name: "Bilateral Analytics", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )},
  { id: "fta", name: "FTA Analyzer", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )},
  { id: "risk", name: "Risk & Dependency", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )},
  { id: "logistics", name: "Logistics & Ports", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )},
  { id: "forecast", name: "Forecasting & Insights", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )},
  { id: "explorer", name: "Data Explorer", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )},
  { id: "reports", name: "Reports Center", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )},
  { id: "alerts", name: "Alerts & Notifications", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )}
];

const dataSources = [
  "DGCIS (India)",
  "UN Comtrade",
  "WTO",
  "IMF",
  "RBI",
  "DGFT"
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        {/* Stylized Emblem Vector SVG */}
        <svg className={styles.logo} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sarnath Lion Capital Stylized representation */}
          <path d="M50 15 C45 15, 41 22, 41 32 C41 42, 45 48, 50 48 C55 48, 59 42, 59 32 C59 22, 55 15, 50 15 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          <path d="M35 22 C30 25, 27 33, 27 43 C27 53, 32 58, 37 58 C42 58, 44 51, 42 43 C40 35, 38 23, 35 22 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          <path d="M65 22 C68 23, 70 35, 68 43 C66 51, 68 58, 73 58 C78 58, 83 53, 83 43 C83 33, 80 25, 75 22 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          {/* Wheel / Ashoka Chakra */}
          <circle cx="50" cy="75" r="16" stroke="#475569" strokeWidth="3" fill="#1e293b" />
          <circle cx="50" cy="75" r="4" fill="#E2E8F0" />
          <path d="M50 59 L50 91 M34 75 L66 75 M39 64 L61 86 M39 86 L61 64" stroke="#475569" strokeWidth="1.5" />
          {/* Base */}
          <path d="M20 95 L80 95 L75 105 L25 105 Z" fill="#475569" />
          <rect x="25" y="105" width="50" height="6" fill="#e2e8f0" rx="3" />
        </svg>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.navItem} ${
              activeTab === item.id ? styles.navItemActive : ""
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      <div className={styles.sourcesSection}>
        <div className={styles.sourcesTitle}>Data Sources</div>
        <div className={styles.sourcesList}>
          {dataSources.map((source, index) => (
            <div key={index} className={styles.sourceItem}>
              <span className={styles.sourceDot}></span>
              <span>{source}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
