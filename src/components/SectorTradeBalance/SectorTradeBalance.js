"use client";

import React from "react";
import styles from "./SectorTradeBalance.module.css";

const sectorData = [
  { label: "Engineering Goods", shortLabel: ["Engineering", "Goods"], value: 26.32 },
  { label: "Pharma", shortLabel: ["Pharma", ""], value: 24.10 },
  { label: "Agriculture", shortLabel: ["Agriculture", ""], value: 13.45 },
  { label: "Gems & Jewellery", shortLabel: ["Gems &", "Jewellery"], value: 6.21 },
  { label: "Petroleum", shortLabel: ["Petroleum", ""], value: -24.56 },
  { label: "Electronics", shortLabel: ["Electronics", ""], value: -35.75 },
  { label: "Chemicals", shortLabel: ["Chemicals", ""], value: -18.55 }
];

export default function SectorTradeBalance() {
  const svgWidth = 460;
  const svgHeight = 220;
  const paddingLeft = 30;
  const paddingRight = 15;
  const paddingTop = 20;
  const paddingBottom = 35;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  const minVal = -40;
  const maxVal = 30;
  const valRange = maxVal - minVal;

  const getX = (idx) => paddingLeft + (idx * (chartWidth / (sectorData.length - 1)));
  const getY = (val) => paddingTop + (1 - (val - minVal) / valRange) * chartHeight;

  const gridValues = [-40, -20, 0, 20, 40]; // Wait, maxVal is 30, so let's show -40, -20, 0, 20, 40 (or 30)
  // Let's use standard grids: -40, -20, 0, 20, 40
  const zeroY = getY(0);

  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>Sector Trade Balance</span>
        <span className={styles.subtitle}>(USD Billion)</span>
      </div>

      <div className={styles.chartWrapper}>
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className={styles.svg}>
          {/* Grid lines */}
          {[-40, -20, 20, 40].map((val) => {
            const y = getY(val);
            return (
              <g key={val}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={svgWidth - paddingRight}
                  y2={y}
                  className={styles.gridLine}
                />
                <text x={paddingLeft - 6} y={y + 3} textAnchor="end" className={styles.axisText}>
                  {val > 0 ? `+${val}` : `${val}`}
                </text>
              </g>
            );
          })}

          {/* Zero Line */}
          <line
            x1={paddingLeft}
            y1={zeroY}
            x2={svgWidth - paddingRight}
            y2={zeroY}
            className={styles.zeroLine}
          />
          <text x={paddingLeft - 6} y={zeroY + 3} textAnchor="end" className={styles.axisText}>
            0
          </text>

          {/* Bars */}
          {sectorData.map((d, idx) => {
            const x = getX(idx);
            const yVal = getY(d.value);
            const barW = 16;
            let barY, barH, fill;

            if (d.value >= 0) {
              barY = yVal;
              barH = zeroY - yVal;
              fill = "var(--color-up)"; // Green
            } else {
              barY = zeroY;
              barH = yVal - zeroY;
              fill = "var(--color-down)"; // Red/Orange
            }

            // Fallback height for tiny values
            barH = Math.max(1, barH);

            return (
              <g key={idx}>
                {/* Bar Rect */}
                <rect
                  x={x - barW / 2}
                  y={barY}
                  width={barW}
                  height={barH}
                  fill={fill}
                  className={styles.bar}
                />

                {/* Value Text label above/below bar */}
                <text
                  x={x}
                  y={d.value >= 0 ? barY - 4 : barY + barH + 8}
                  className={`${styles.valueText} ${d.value >= 0 ? styles.posText : styles.negText}`}
                >
                  {d.value >= 0 ? `+${d.value.toFixed(1)}` : `${d.value.toFixed(1)}`}
                </text>

                {/* X Axis Wrapped Text Labels */}
                <text x={x} y={svgHeight - paddingBottom + 16} textAnchor="middle" className={styles.labelText}>
                  <tspan x={x} dy="0">{d.shortLabel[0]}</tspan>
                  {d.shortLabel[1] && <tspan x={x} dy="8">{d.shortLabel[1]}</tspan>}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
