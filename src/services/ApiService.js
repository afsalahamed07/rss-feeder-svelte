// src/services/ApiService.js
export async function fetchFeedData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch feed');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching feed:', error);
      throw error;
    }
  }
  