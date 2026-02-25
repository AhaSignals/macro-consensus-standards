# AI Concentration Risk Index (ACRI) Methodology

**Version:** 1.0.0-beta

The ACRI quantifies the structural fragility of the S&P 500 index due to the over-weighting of a small number of mega-cap technology stocks ("Magnificent 7").

## Components

### 1. Top 10 Weighting (40% Weight)
- **Formula:** `(Current Top 10 Weight % / Historical Mean 20%) * 50`
- **Threshold:** Weight > 35% triggers "Critical" status.

### 2. Effective N (Inverse Simpson Index) (30% Weight)
- **Metric:** Measures the "effective" number of stocks driving the index.
- **Logic:** Lower Effective N means higher fragility.
- **Formula:** $N_{eff} = 1 / \sum w_i^2$

### 3. Valuation Gap (30% Weight)
- **Metric:** PEG Ratio of Top 7 stocks minus PEG Ratio of the remaining 493 stocks.
- **Logic:** A widening gap suggests the index rally is narrowing to valuation expansion rather than broad earnings growth.
