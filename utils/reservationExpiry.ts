export const calculateTimeLeft = (expiry: string): string => {
  const now = new Date().getTime(); // Get timestamp in milliseconds
  const expiryDate = new Date(expiry).getTime(); // Get timestamp in milliseconds

  const diff = expiryDate - now;

  if (diff <= 0) {
    return "Expired";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let timeLeftString = "";
  if (days > 0) {
    timeLeftString += `${days} day${days > 1 ? "s" : ""} `;
  }
  if (hours > 0) {
    timeLeftString += `${hours} hour${hours > 1 ? "s" : ""} `;
  }
  if (minutes > 0) {
    timeLeftString += `${minutes} minute${minutes > 1 ? "s" : ""} `;
  }

  return timeLeftString.trim();
};
