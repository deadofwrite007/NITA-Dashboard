"use client";

import React, { useState } from "react";
import styles from "./TradeTrendChart.module.css";

const years = [
  "2014-15",
  "2015-16",
  "2016-17",
  "2017-18",
  "2018-19",
  "2019-20",
  "2020-21",
  "2021-22",
  "2022-23",
  "2023-24*"
];

// Replicating dataset (Exports, Imports, Balance) matching graph visual
const data = [
  { export: 310, import: 448, balance: -138 },
  { export: 262, import: 380, balance: -118 },
  { export: 275, import: 384, balance: -109 },
  { export: 303, import: 465, balance: -162 },
  { export: 330, import: 514, balance: -184 },
  { export: 313, import: 474, balance: -161 },
  { export: 291, import: 394, balance: -103 },
  { export: 422, import: 613, balance: -191 },
  { export: 450, import: 714, balance: -264 },
  { export: 778.21, import: 853.20, balance: -74.99 }
];

export default function TradeTrendChart() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // SVG parameters
  const svgWidth = 460;
  const svgHeight = 220;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  // Range
  const minVal = -300;
  const maxVal = 1200;
  const valRange = maxVal - minVal;

  // Helper coordinate functions
  const getX = (index) => paddingLeft + (index * (chartWidth / (years.length - 1)));
  const getY = (val) => paddingTop + (1 - (val - minVal) / valRange) * chartHeight;

  // Grid line values
  const gridValues = [-300, 0, 300, 600, 900, 1200];

  // Path generators
  const exportsPoints = data.map((d, idx) => `${getX(idx)},${getY(d.export)}`).join(" ");
  const importsPoints = data.map((d, idx) => `${getX(idx)},${getY(d.import)}`).join(" ");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>Trade Trend</span>
          <span className={styles.subtitle}>(USD Billion)</span>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendLine} ${styles.exportsColor}`} />
            <span>Exports</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendLine} ${styles.importsColor}`} />
            <span>Imports</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.balanceColor}`} />
            <span>Trade Balance</span>
          </div>
        </div>
      </div>

      <div className={styles.chartWrapper}>
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className={styles.svg}>
          {/* Y Axis Gridlines & Text */}
          {gridValues.map((val) => {
            const y = getY(val);
            return (
              <g key={val}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={svgWidth - paddingRight}
                  y2={y}
                  className={val === 0 ? styles.zeroLine : styles.gridLine}
                />
                <text x={paddingLeft - 8} y={y + 3} textAnchor="end" className={styles.axisText}>
                  {val === 0 ? "0" : val > 0 ? `${val}` : `-${Math.abs(val)}`}
                </text>
              </g>
            );
          })}

          {/* X Axis Labels */}
          {years.map((year, idx) => (
            <text
              key={idx}
              x={getX(idx)}
              y={svgHeight - paddingBottom + 16}
              textAnchor="middle"
              className={styles.axisText}
              style={{ fontSize: "8px" }}
            >
              {year}
            </text>
          ))}

          {/* Trade Balance Bars (Orange) */}
          {data.map((d, idx) => {
            const x = getX(idx);
            const yZero = getY(0);
            const yVal = getY(d.balance);
            const barW = 12;
            const barH = Math.max(2, yVal - yZero);

            return (
              <rect
                key={idx}
                x={x - barW / 2}
                y={yZero}
                width={barW}
                height={barH}
                className={styles.bar}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            );
          })}

          {/* Lines */}
          <polyline points={exportsPoints} className={styles.exportsPath} />
          <polyline points={importsPoints} className={styles.importsPath} />

          {/* Interaction Dots */}
          {data.map((d, idx) => {
            const x = getX(idx);
            const yExp = getY(d.export);
            const yImp = getY(d.import);

            return (
              <g key={idx}>
                {/* Invisible vertical hover line */}
                <line
                  x1={x}
                  y1={paddingTop}
                  x2={x}
                  y2={svgHeight - paddingBottom}
                  stroke="#cbd5e1"
                  strokeWidth={hoveredIdx === idx ? 1.5 : 0}
                  strokeDasharray="3 3"
                />

                <circle
                  cx={x}
                  cy={yExp}
                  r={hoveredIdx === idx ? 5.5 : 3.5}
                  className={styles.dotExports}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
                <circle
                  cx={x}
                  cy={yImp}
                  r={hoveredIdx === idx ? 5.5 : 3.5}
                  className={styles.dotImports}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              </g>
            );
          })}

          {/* Active tooltip text overlays in top left */}
          {hoveredIdx !== null && (
            <g transform="translate(45, 15)">
              <rect width="180" height="36" fill="rgba(15, 23, 42, 0.95)" rx="4" />
              <text x="8" y="15" fill="#f8fafc" fontSize="9" fontWeight="bold">
                {years[hoveredIdx]}
              </text>
              <text x="8" y="27" fill="#60a5fa" fontSize="9">
                Exp: ${data[hoveredIdx].export.toFixed(1)}B
              </text>
              <text x="75" y="27" fill="#34d399" fontSize="9">
                Imp: ${data[hoveredIdx].import.toFixed(1)}B
              </text>
              <text x="140" y="27" fill="#fb923c" fontSize="9">
                Bal: ${data[hoveredIdx].balance.toFixed(1)}B
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
