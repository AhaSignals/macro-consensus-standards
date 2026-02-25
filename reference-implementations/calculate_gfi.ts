/**
 * Reference implementation of Gold Fragility Index (GFI) calculation.
 * 
 * Usage:
 *   import { calculateGFI } from './calculate_gfi';
 *   const score = calculateGFI({ cv: 0.15, spot: 2650, consensus: 2400, netLongs: 200000 });
 */

interface GFIInput {
  cv: number;              // Coefficient of Variation from LBMA forecasts
  spot: number;            // Current spot price
  consensus: number;       // Mean consensus price
  netLongs: number;        // CFTC Net Speculative Longs
}

export function calculateGFI(input: GFIInput) {
  // 1. Dispersion Component
  // Benchmark CV derived from 2020 peak dispersion
  const BENCHMARK_CV = 0.25; 
  const dispersionScore = Math.min(100, Math.round((input.cv / BENCHMARK_CV) * 100));

  // 2. Momentum Component
  const deviation = Math.abs((input.spot - input.consensus) / input.consensus);
  // 20% deviation is considered extreme
  const momentumScore = Math.min(100, Math.round((deviation / 0.20) * 100));

  // 3. Positioning Component
  // 5-year rolling max net longs
  const FIVE_YEAR_MAX = 350000;
  const positionScore = Math.min(100, Math.round((input.netLongs / FIVE_YEAR_MAX) * 100));

  // Composite Calculation (Weighted Average)
  const composite = Math.round(
    dispersionScore * 0.45 + 
    momentumScore * 0.25 + 
    positionScore * 0.30
  );

  return {
    composite,
    components: {
      dispersion: dispersionScore,
      momentum: momentumScore,
      positioning: positionScore
    }
  };
}
