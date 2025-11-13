export const formatPrice = (amount) => {
  const formatted = new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
  }).format(amount);

  return formatted.replace("NPR", "रू");
};
