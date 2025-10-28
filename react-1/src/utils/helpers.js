

/**
 * Truncates a string to a specified length and adds an ellipsis if needed
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum length before truncating
 * @returns {string} - Truncated string
 */
export const truncateText = (str, maxLength = 100) => {
  if (!str || typeof str !== 'string') return '';
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};

/**
 * Formats a date string to a readable format
 * @param {string} isoDateString - ISO date string
 * @returns {string} - Formatted date (e.g., "Oct 21, 2025")
 */
export const formatDate = (isoDateString) => {
  if (!isoDateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(isoDateString).toLocaleDateString(undefined, options);
};

/**
 * Debounces a function to limit how often it can be called
 * Useful for search inputs or resize handlers
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};