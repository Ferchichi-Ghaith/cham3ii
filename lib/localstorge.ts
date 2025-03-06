// A shared utility file for localStorage operations

// Function to notify components about localStorage changes
export const notifyLocalStorageChange = () => {
    window.dispatchEvent(new Event("localStorageChange"))
  }
  
  // Helper function to set activeTeam and notify components
  export const setActiveTeam = (teamName: string) => {
    localStorage.setItem("activeTeam", teamName)
    notifyLocalStorageChange()
  }
  
  // Helper function to get activeTeam
  export const getActiveTeam = () => {
    return localStorage.getItem("activeTeam") || ""
  }
  
  