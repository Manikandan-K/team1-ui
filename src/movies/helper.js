export const baseUrl = () => {
  const url = process.env.REACT_APP_API_URL || "localhost:9090"
  return `http://${url}`
};