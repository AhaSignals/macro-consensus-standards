# Open Standard for Macro Consensus Divergence Analysis

This repository contains the open-source methodology, JSON schemas, and reference implementations for the consensus divergence indices used by [AhaSignals.com](https://ahasignals.com).

We believe financial transparency is paramount. By open-sourcing our scoring logic, we allow institutional researchers and quantitative analysts to verify the integrity of our fragility signals.

## 📊 Methodology & Live Trackers

### 1. Gold Fragility Index (GFI)
The GFI quantifies the risk of a consensus reversal in the gold market by synthesizing analyst dispersion, momentum, and positioning.
- **Methodology:** [Read the math](./methodology/gold-fragility-index.md)
- **Live Data:** [View Gold Forecast Tracker](https://ahasignals.com/gold-forecast-tracker/) 🟢 *(Deep Link)*

### 2. Silver Structural Tension Index (SSTI)
Measures the identity crisis between silver's industrial and monetary roles.
- **Methodology:** [Read the math](./methodology/silver-structural-tension.md)
- **Live Data:** [View Silver Forecast Tracker](https://ahasignals.com/silver-forecast-tracker/) 🟢

### 3. Fed Rate Fragility Index (FRFI)
Tracks the divergence between CME FedWatch futures and prediction markets (Kalshi/Polymarket).
- **Methodology:** [Read the math](./methodology/fed-rate-fragility.md)
- **Live Data:** [View Fed Rate Fragility Index](https://ahasignals.com/fed-rate-fragility-index/) 🟢

### 4. US Dollar Index Forecast (DCDI)
Tracks the divergence between Wall Street currency forecasts and real-time interest rate differentials.

- **Methodology: See Implied DXY calculation
- **Live Data: View DXY Forecast Tracker 🟢
Core signal: Measures the gap between EUR/USD analyst targets and the US-German yield spread.

### 5. S&P 500 Concentration Risk (ACRI)
Quantifies the crowding risk of the "Magnificent 7" stocks versus the broader market.

- **Methodology: Read concentration metrics
- **Live Data: View S&P 500 Concentration Risk 🟢
Core signal: Tracks Top 10 weighting vs historical means and earnings contribution gaps.

### 6. US Treasury Yield Fragility (BMFI)
Monitoring stress in the bond market through survey divergence and positioning crowding.

- **Methodology: Bond market fragility logic
- **Live Data: View 10Y Treasury Yield Tracker 🟢
- **Core signal: Combines SPF forecast errors with CFTC hedge fund net-short positioning extremes.

### 7. Bitcoin Prediction Gap (BSPG)
Measuring the sentiment disconnect between institutional ETF flows and retail prediction markets.

- **Methodology: Bitcoin sentiment analysis
- **Live Data: View Bitcoin Prediction Tracker 🟢
Core signal: Detects when ETF inflows (Smart Money) diverge from Polymarket odds (Speculative Sentiment).

## 🛠️ Data Schemas
To ensure data integrity, all snapshots adhere to strict [JSON Schemas](./schemas/).
