# 🏛️ AhaSignals: Macro Consensus Logic & Fragility Framework

[![Methodology: AFI v1.0](https://img.shields.io/badge/Methodology-AFI_v1.0-blue.svg)](https://ahasignals.com)
[![Market: Global Macro](https://img.shields.io/badge/Market-Global_Macro-gold.svg)](https://ahasignals.com)

> **"The most dangerous market state is not high volatility, but a fragile consensus."**

This repository documents the quantitative logic, data protocols, and methodology behind the **AhaSignals Fragility Index (AFI)**. We bridge the gap between institutional "Wall Street" targets and live "Prediction Market" reality.

---

## 🔍 Overview
AhaSignals specializes in **Consensus Divergence Analysis**. We monitor where the world's most influential analysts and the market's real-time capital flows disagree. When this "gap" widens, fragility increases—creating the "Aha!" moments of market reversals.

### Core Assets Tracked:
* **USD Index (DXY):** Implied DXY calculation based on G10 currency weighting divergence.
* **Fed Rate (FRFI):** FOMC Dot Plot dispersion vs. Fed Funds Futures pricing.
* **U.S. Treasury:** Yield curve consensus vs. MOVE Index volatility Z-scores.
* **Bitcoin (BTC):** Institutional ETF AUM flows vs. Short-Term Holder Realized Price (STH-RP).
* **Gold/Silver:** LBMA survey consensus vs. Real Yield (TIPS) correlation gaps.

---

## 📈 Methodology: The AFI Protocol
The **AhaSignals Fragility Index (AFI)** is a composite score (0-100) derived from three pillars of divergence:

1.  **Institutional Dispersion:** The standard deviation of year-end targets from top-tier investment banks (GS, JPM, MS, etc.).
2.  **Market Realism Gap:** The delta between the "Consensus Mean" and live spot/futures pricing.
3.  **Sentiment Skew:** Measuring "Crowded Trades" via CFTC Commitment of Traders (COT) and Prediction Market volumes.


---

## 🛠️ Implementation Logic (Public Documentation)

### DXY Implied Calculation
We derive the **Aha Implied DXY** using the following geometric weighting protocol:
$$DXY_{Implied} = 50.14348112 \times EURUSD^{-0.576} \times USDJPY^{0.136} \times GBPUSD^{-0.119} \dots$$
*This allows us to detect when the DXY is being driven by a single-currency anomaly rather than broad dollar strength.*

### Bitcoin On-Chain Integration
We utilize **Realized Price** data as the psychological floor for consensus. 
* **Provider:** Glassnode / Institutional Flow Data.
* **Logic:** When $Price_{Spot}$ approaches $Price_{STH-RP}$ while ETF flows remain negative, the Fragility Index triggers a "Exhaustion" signal.

---

## 📡 Data Integrity & Sources
To ensure institutional-grade accuracy, AhaSignals aggregates data from:
* **Official Sources:** Federal Reserve Board, CFTC, LBMA.
* **On-chain Providers:** Glassnode, Farside Investors.
* **Institutional Research:** Aggregated via Bloomberg/Reuters terminal verification.

---

## ⚖️ License & Usage
The methodology documented here is open for academic and research purposes. For commercial API access or raw data feeds, please visit [ahasignals.com](https://ahasignals.com).

**Disclaimer:** *AhaSignals provides research and quantitative tools only. No content in this repository constitutes financial advice.*

---
Copyright © 2026 AhaSignals Research. All rights reserved.
