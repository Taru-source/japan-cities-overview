const roughlyCoefficient = 35;

export const rentForSingle = (rentPerSqm: number) => {
  return (rentPerSqm * roughlyCoefficient).toLocaleString();
};
