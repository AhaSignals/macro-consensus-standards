# DXY Consensus Divergence Index (DCDI) Methodology

**Version:** 1.0.0-beta

Since the US Dollar Index (DXY) is not directly forecasted by many institutions, the DCDI uses an "Implied DXY" approach derived from constituent currency pair forecasts.

## Implied DXY Calculation
We reverse-engineer the DXY value based on the ICE Dollar Index weighting vector:

$$ DXY \approx 50.14 \times (EURUSD)^{-0.576} \times (USDJPY)^{0.136} \times (GBPUSD)^{-0.119} \times (USDCAD)^{0.091} \times (USDSEK)^{0.042} \times (USDCHF)^{0.036} $$

*Note: For simplified consensus tracking, we use a reduced-form proxy based on EUR (57.6%), JPY (13.6%), and GBP (11.9%) which accounts for >83% of the index weight.*

## Components

### 1. Yield Spread Divergence (40% Weight)
- **Metric:** US 10Y Yield minus German Bund 10Y Yield.
- **Logic:** If spreads widen (USD bullish) but analysts forecast a lower DXY, divergence score increases.

### 2. Analyst Forecast Dispersion (35% Weight)
- **Metric:** Standard deviation of "Implied DXY" targets from top 10 investment banks.

### 3. Speculative Positioning (25% Weight)
- **Metric:** Net non-commercial positioning in USD Index futures (ICE).
