# Bond Market Fragility Index (BMFI) Methodology

**Version:** 1.0.0-beta

The BMFI measures stress in the US Treasury market by comparing survey-based consensus against real-time market structure and positioning.

## Components

### 1. Consensus Divergence (40% Weight)
- **Source:** Philadelphia Fed Survey of Professional Forecasters (SPF).
- **Metric:** Absolute difference between SPF median 10Y forecast and current market spot yield.
- **Logic:** Gaps > 50bps indicate the market has "lost the anchor."

### 2. Curve Structure Stress (30% Weight)
- **Metric:** 10Y minus 2Y Treasury spread.
- **Scoring:** Inversion (>0bps negative spread) increases fragility score linearly.

### 3. Positioning Stress (30% Weight)
- **Source:** CFTC T-Note Futures (Net Non-Commercial Shorts).
- **Logic:** Extreme short positioning (Z-score > 2.0) indicates high risk of a "short squeeze" rally.
