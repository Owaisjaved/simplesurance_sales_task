export const generateColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const hue = ((i * 360) / numColors) % 360;
    colors.push(`hsl(${hue}, 70%, 50%)`);
  }
  return colors;
};
