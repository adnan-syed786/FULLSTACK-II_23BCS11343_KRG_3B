// Utility functions for testing purposes

// 1. Calculate total carbon footprint
export const calculateTotalCarbon = (logs) => {
  if (!Array.isArray(logs)) return 0;
  return logs.reduce((total, log) => total + (log.carbon || 0), 0);
};

// 2. Filter high carbon activities
export const filterHighCarbonActivities = (logs, threshold = 5) => {
  if (!Array.isArray(logs)) return [];
  return logs.filter(log => log.carbon > threshold);
};

// 3. Simulate an API call to fetch user data (Async function)
export const fetchUserData = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: "Eco Warrior", level: "Expert" });
      } else {
        reject(new Error("User not found"));
      }
    }, 500);
  });
};
