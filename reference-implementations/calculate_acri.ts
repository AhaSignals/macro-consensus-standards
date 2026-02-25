/**
 * Reference implementation of AI Concentration Risk Index (ACRI).
 */

interface ConcentrationInput {
  top10Weight: number;     // e.g., 35.5 for 35.5%
  effectiveN: number;      // Inverse Simpson Index
}

export function calculateACRI(input: ConcentrationInput) {
  // Historical mean Top 10 weight is ~20%
  // 35% is considered critical level
  const concentrationScore = Math.min(100, 
    Math.round(((input.top10Weight - 20) / (35 - 20)) * 100)
  );

  // Effective N scoring (lower N = higher risk)
  // N < 50 is critical for S&P 500
  const breadthScore = input.effectiveN < 50 ? 100 : 
    Math.max(0, Math.round((100 - input.effectiveN)));

  // Simplified composite for example
  const composite = Math.round(
    concentrationScore * 0.6 + 
    breadthScore * 0.4
  );

  return composite;
}
