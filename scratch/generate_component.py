import re
import json

def generate():
    svg_path = "/Users/vrishankpathak/Desktop/dashboard/india.svg"
    target_path = "/Users/vrishankpathak/Desktop/dashboard/src/components/StatePerformance/StatePerformance.js"

    with open(svg_path, "r") as f:
        content = f.read()

    # Find all path elements in the SVG
    matches = re.findall(r"<path\s+id=\"([^\"]+)\"\s+aria-label=\"([^\"]+)\"\s+d=\"([^\"]+)\"", content, re.DOTALL)
    
    if not matches:
        matches = re.findall(r"<path\s+id=\"([^\"]+)\"[^>]*aria-label=\"([^\"]+)\"[^>]*d=\"([^\"]+)\"", content, re.DOTALL)
        
    print(f"Parsed {len(matches)} state paths.")

    states_js = []
    for pid, label, d in matches:
        d_clean = d.replace("\n", " ").replace("\r", " ").strip()
        states_js.append({
            "id": pid,
            "label": label,
            "path": d_clean
        })

    states_json = json.dumps(states_js, indent=2)

    component_template = """"use client";

import React from "react";
import styles from "./StatePerformance.module.css";

const stateData = [
  { name: "Gujarat", value: 98.91, growth: 11.4, isUp: true },
  { name: "Maharashtra", value: 72.70, growth: 7.2, isUp: true },
  { name: "Tamil Nadu", value: 53.69, growth: 6.7, isUp: true },
  { name: "Karnataka", value: 38.95, growth: 9.8, isUp: true },
  { name: "Telangana", value: 34.34, growth: 8.1, isUp: true }
];

// Color mapping to match the uploaded screenshot
const getStateColor = (id) => {
  const colors = {
    tg: "#1d4ed8",  // Telangana (Dark blue)
    ka: "#3b82f6",  // Karnataka (Medium-dark blue)
    ap: "#3b82f6",  // Andhra Pradesh (Medium-dark blue)
    mh: "#60a5fa",  // Maharashtra (Medium blue)
    rj: "#60a5fa",  // Rajasthan (Medium blue)
    pb: "#60a5fa",  // Punjab (Medium blue)
    hr: "#60a5fa",  // Haryana (Medium blue)
    gj: "#93c5fd",  // Gujarat (Light blue)
    tn: "#93c5fd",  // Tamil Nadu (Light blue)
    kl: "#93c5fd",  // Kerala (Light blue)
    jk: "#bed8f7"   // Jammu & Kashmir / Ladakh (Very light blue)
  };
  return colors[id] || "#eff6ff"; // Default to very light blue/white for others
};

const statesPaths = STATES_JSON_PLACEHOLDER;

export default function StatePerformance() {
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>State Export Performance</span>
        <span className={styles.subtitle}>(Apr-Feb 23-24)</span>
      </div>

      <div className={styles.content}>
        {/* Complete India Map Vector */}
        <div className={styles.mapWrapper}>
          <svg viewBox="0 0 612 696" className={styles.svg} xmlns="http://www.w3.org/2000/svg">
            {statesPaths.map((state) => (
              <path
                key={state.id}
                id={state.id}
                d={state.path}
                fill={getStateColor(state.id)}
                stroke="#ffffff"
                strokeWidth="1.2"
                className={styles.mapState}
                title={state.label}
              />
            ))}
          </svg>
          <div className={styles.mapLegend}>
            <span>Low</span>
            <div className={styles.legendBar}></div>
            <span>High</span>
          </div>
        </div>

        {/* State Rankings Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>State</th>
                <th className={styles.th} style={{ textAlign: "right" }}>Exports (USD Bn)</th>
                <th className={styles.th} style={{ textAlign: "right" }}>Growth (YoY)</th>
              </tr>
            </thead>
            <tbody>
              {stateData.map((state, idx) => (
                <tr key={idx}>
                  <td className={`${styles.td} ${styles.stateName}`}>{state.name}</td>
                  <td className={styles.td} style={{ textAlign: "right" }}>
                    <span className={styles.value}>${state.value.toFixed(2)}</span>
                  </td>
                  <td className={styles.td} style={{ textAlign: "right" }}>
                    <span className={`${styles.trendBadge} ${state.isUp ? styles.trendUp : styles.trendDown}`}>
                      {state.isUp ? "▲" : "▼"} {state.growth.toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.footer}>
            <button className={styles.link}>
              View All States
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

    component_content = component_template.replace("STATES_JSON_PLACEHOLDER", states_json)

    with open(target_path, "w") as f:
        f.write(component_content)

    print("Successfully generated StatePerformance.js")

if __name__ == "__main__":
    generate()
