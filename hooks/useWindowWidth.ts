import { useState, useEffect } from 'react';

// Custom hook to track window width
const useWindowWidth = () => {
  const [width, setWidth] = useState(0); // Initial state set to 0

  // Function to update the width state with the current window innerWidth
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", updateWidth);

    // Call updateWidth initially to set the width state to the current window width
    updateWidth();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []); // Empty dependency array means this effect runs only once on mount

  return width; // Return the current width
};

export default useWindowWidth;