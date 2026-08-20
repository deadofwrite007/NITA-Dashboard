"use client";

import React from "react";
import styles from "./MarketOpportunities.module.css";

export default function MarketOpportunities() {
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>Market Opportunities</span>
      </div>

      <div className={styles.layout}>
        {/* Y Axis (Export Potential) */}
        <div className={styles.yAxis}>
          <span className={styles.xAxisLeftRight}>High</span>
          <div className={styles.yAxisText}>Export Potential</div>
          <svg className={styles.yAxisArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className={styles.xAxisLeftRight}>Low</span>
        </div>

        <div className={styles.mainArea}>
          {/* 2x2 Matrix */}
          <div className={styles.matrix}>
            {/* Top Left: High Potential */}
            <div className={`${styles.quadrant} ${styles.highPotential}`}>
              <div>
                <div className={styles.quadTitle}>High Potential</div>
                <div className={styles.quadSubtitle}>New Markets</div>
              </div>
              <div className={styles.quadValue}>$120.6 B</div>
            </div>

            {/* Top Right: Defend & Grow */}
            <div className={`${styles.quadrant} ${styles.defendGrow}`}>
              <div>
                <div className={styles.quadTitle}>Defend & Grow</div>
                <div className={styles.quadSubtitle}>Existing Markets</div>
              </div>
              <div className={styles.quadValue}>$423.8 B</div>
            </div>

            {/* Bottom Left: Product Diversification */}
            <div className={`${styles.quadrant} ${styles.diversification}`}>
              <div>
                <div className={styles.quadTitle}>Product Diversification</div>
                <div className={styles.quadSubtitle}>New Products</div>
              </div>
              <div className={styles.quadValue}>$98.7 B</div>
            </div>

            {/* Bottom Right: Low Priority */}
            <div className={`${styles.quadrant} ${styles.lowPriority}`}>
              <div>
                <div className={styles.quadTitle}>Low Priority</div>
                <div className={styles.quadSubtitle}>Low Potential</div>
              </div>
              <div className={styles.quadValue}>$45.1 B</div>
            </div>
          </div>

          {/* X Axis (Current Export) */}
          <div className={styles.xAxis}>
            <span className={styles.xAxisLeftRight}>Low</span>
            <div className={styles.xAxisLabel}>
              <span>Current Export</span>
              <svg className={styles.xAxisArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: "rotate(90deg)", width: "10px", height: "10px" }}>
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </div>
            <span className={styles.xAxisLeftRight}>High</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.link}>
          View Opportunity Explorer
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
