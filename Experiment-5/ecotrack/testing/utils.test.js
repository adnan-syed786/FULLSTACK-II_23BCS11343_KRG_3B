import { calculateTotalCarbon, filterHighCarbonActivities, fetchUserData } from './utils';

describe('Utility Functions Tests', () => {
  const sampleLogs = [
    { id: 1, activity: "Car Travel", carbon: 4 },
    { id: 2, activity: "Electricity Usage", carbon: 6 },
    { id: 3, activity: "Cycling", carbon: 0 },
  ];

  // Objective 2 & 3: Unit tests using Jest matchers
  test('calculateTotalCarbon should return the sum of carbon values', () => {
    expect(calculateTotalCarbon(sampleLogs)).toBe(10);
    expect(calculateTotalCarbon([])).toBe(0);
    expect(calculateTotalCarbon(null)).toBe(0);
  });

  test('filterHighCarbonActivities should return activities above threshold', () => {
    const highCarbon = filterHighCarbonActivities(sampleLogs, 5);
    expect(highCarbon).toHaveLength(1);
    expect(highCarbon[0].activity).toEqual("Electricity Usage");
    expect(highCarbon).toContainEqual({ id: 2, activity: "Electricity Usage", carbon: 6 });
  });

  // Objective 6: Asynchronous testing
  test('fetchUserData should return user data for valid ID', async () => {
    const data = await fetchUserData(1);
    expect(data).toBeDefined();
    expect(data.name).toBe("Eco Warrior");
  });

  test('fetchUserData should throw an error for invalid ID', async () => {
    await expect(fetchUserData(99)).rejects.toThrow("User not found");
  });
});
