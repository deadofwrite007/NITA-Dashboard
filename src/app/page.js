"use client";

import React from "react";
import styles from "./page.module.css";

// Component imports
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import KPICards from "../components/KPICards/KPICards";
import MiniMetrics from "../components/MiniMetrics/MiniMetrics";
import TradeTrendChart from "../components/TradeTrend/TradeTrendChart";
import MerchandiseTradeChart from "../components/MerchandiseTrade/MerchandiseTradeChart";
import HorizontalBarChart from "../components/HorizontalBarChart/HorizontalBarChart";
import SectorTradeBalance from "../components/SectorTradeBalance/SectorTradeBalance";
import ExportGrowthRegion from "../components/ExportGrowthRegion/ExportGrowthRegion";
import StatePerformance from "../components/StatePerformance/StatePerformance";
import MarketOpportunities from "../components/MarketOpportunities/MarketOpportunities";
import TradeRiskDependency from "../components/RiskDependency/TradeRiskDependency";
import LogisticsPerformance from "../components/LogisticsPerformance/LogisticsPerformance";
import FTAUtilization from "../components/FTAUtilization/FTAUtilization";
import AIInsights from "../components/AIInsights/AIInsights";

// Datasets for Horizontal Bar Charts
const exportDestinations = [
  { label: "USA", value: 118.72, formattedValue: "$118.72 B", flag: "🇺🇸" },
  { label: "UAE", value: 78.36, formattedValue: "$78.36 B", flag: "🇦🇪" },
  { label: "Netherlands", value: 45.05, formattedValue: "$45.05 B", flag: "🇳🇱" },
  { label: "UK", value: 37.12, formattedValue: "$37.12 B", flag: "🇬🇧" },
  { label: "Singapore", value: 29.77, formattedValue: "$29.77 B", flag: "🇸🇬" }
];

const importSources = [
  { label: "China", value: 101.74, formattedValue: "$101.74 B", flag: "🇨🇳" },
  { label: "UAE", value: 61.91, formattedValue: "$61.91 B", flag: "🇦🇪" },
  { label: "Russia", value: 52.27, formattedValue: "$52.27 B", flag: "🇷🇺" },
  { label: "Saudi Arabia", value: 41.46, formattedValue: "$41.46 B", flag: "🇸🇦" },
  { label: "USA", value: 31.32, formattedValue: "$31.32 B", flag: "🇺🇸" }
];

// Icons for Sectors (SVG custom inline paths)
const gearIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const fuelIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
  </svg>
);

const gemIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M11 3L8 9l4 12 4-12-3-6" />
    <path d="M2 9h20" />
  </svg>
);

const pillIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4.5" y1="19.5" x2="19.5" y2="4.5" />
    <path d="M10.5 5.5l8 8a5.3 5.3 0 0 1-7.5 7.5l-8-8a5.3 5.3 0 0 1 7.5-7.5z" />
  </svg>
);

const chipIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const exportSectors = [
  { label: "Engineering Goods", value: 109.73, formattedValue: "$109.73 B", icon: gearIcon },
  { label: "Petroleum Products", value: 80.52, formattedValue: "$80.52 B", icon: fuelIcon },
  { label: "Gems & Jewellery", value: 32.24, formattedValue: "$32.24 B", icon: gemIcon },
  { label: "Pharmaceuticals", value: 25.50, formattedValue: "$25.50 B", icon: pillIcon },
  { label: "Electronics", value: 23.86, formattedValue: "$23.86 B", icon: chipIcon }
];

// Icons for Imported Products (SVG custom inline paths)
const oilBarrelIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const deviceIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const goldIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 18h20L18 6H6L2 18z" />
    <line x1="6" y1="12" x2="18" y2="12" />
  </svg>
);

const factoryIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M7 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M22 14l-3-3h-4l-3 3v4h10v-4z" />
    <path d="M12 6L9 3H5L2 6v4h10V6z" />
  </svg>
);

const beakerIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 2v7.586a1 1 0 0 1-.293.707l-6.414 6.414A2 2 0 0 0 4.707 20h14.586a2 2 0 0 0 1.414-3.414l-6.414-6.414A1 1 0 0 1 14 9.586V2h-4z" />
    <line x1="8" y1="2" x2="16" y2="2" />
    <line x1="6" y1="14" x2="18" y2="14" />
  </svg>
);

const importedProducts = [
  { label: "Crude Oil", value: 105.08, formattedValue: "$105.08 B", icon: oilBarrelIcon },
  { label: "Electronics Goods", value: 60.61, formattedValue: "$60.61 B", icon: deviceIcon },
  { label: "Gold", value: 34.16, formattedValue: "$34.16 B", icon: goldIcon },
  { label: "Machinery", value: 28.79, formattedValue: "$28.79 B", icon: factoryIcon },
  { label: "Chemicals", value: 24.35, formattedValue: "$24.35 B", icon: beakerIcon }
];

export default function Home() {
  return (
    <div className={styles.pageLayout}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        {/* Header */}
        <Header />

        <div className={styles.contentBody}>
          {/* Row 1: KPI Summary Cards */}
          <KPICards />

          {/* Row 2: Secondary stats / rankings */}
          <MiniMetrics />

          {/* Row 3: Trade Trend, Merchandise vs Services, Top 5 Export Dest, Top 5 Import Source */}
          <div className={styles.row3}>
            <TradeTrendChart />
            <MerchandiseTradeChart />
            <HorizontalBarChart
              title="Top 5 Export Destinations"
              subtitle="(Apr-Feb 23-24)"
              data={exportDestinations}
              colorType="blue"
              linkText="View All"
            />
            <HorizontalBarChart
              title="Top 5 Import Sources"
              subtitle="(Apr-Feb 23-24)"
              data={importSources}
              colorType="green"
              linkText="View All"
            />
          </div>

          {/* Row 4: Top Export Sectors, Top Imported Products, Sector Trade Balance, Export Growth Region */}
          <div className={styles.row4}>
            <HorizontalBarChart
              title="Top Export Sectors"
              subtitle="(Apr-Feb 23-24)"
              data={exportSectors}
              colorType="blue"
              linkText="View All"
            />
            <HorizontalBarChart
              title="Top Imported Products"
              subtitle="(Apr-Feb 23-24)"
              data={importedProducts}
              colorType="green"
              linkText="View All"
            />
            <SectorTradeBalance />
            <ExportGrowthRegion />
          </div>

          {/* Row 5: States Performance, Market Opportunities, Trade Risk, Logistics, FTA Utilization */}
          <div className={styles.row5}>
            <StatePerformance />
            <MarketOpportunities />
            <TradeRiskDependency />
            <LogisticsPerformance />
            <FTAUtilization />
          </div>

          {/* Row 6: AI Insights Footer banner */}
          <AIInsights />
        </div>
      </main>
    </div>
  );
}
