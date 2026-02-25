# Gold Fragility Index (GFI) Methodology

**Version:** 1.0.0-beta

The GFI is a composite indicator designed to measure the risk of a consensus reversal in the gold market. It operates on the premise that maximum financial fragility occurs when consensus is unanimous, positioning is crowded, and price momentum is extended.

## Components

### 1. Analyst Forecast Dispersion (45% Weight)
Measures the disagreement among LBMA and Wall Street analysts.
- **Formula:** `Score = min(100, (CV / Benchmark_CV) * 100)`
- **Input:** Coefficient of Variation (CV) of 12-month forward price targets.
- **Benchmark:** Historical max dispersion during 2013 and 2020 peaks.

### 2. Price Momentum Divergence (25% Weight)
Measures how far the current spot price has deviated from the consensus mean.
- **Formula:** `Score = min(100, (|Spot - Consensus| / Consensus) * 500)`
- **Logic:** Prices 20% above consensus indicate extreme stretching.

### 3. Smart Money Positioning (30% Weight)
Tracks speculative crowding in COMEX gold futures.
- **Source:** CFTC Commitments of Traders (COT) report.
- **Formula:** `Score = (Net Speculative Longs / 5-Year Max) * 100`
- **Logic:** High scores indicate a "crowded trade" vulnerable to liquidation.

## Scoring Interpretation
- **0-30:** Low Fragility (Consensus is loose, positioning is light)
- **31-50:** Moderate
- **51-75:** Elevated
- **76-100:** Critical (High risk of reversal)
