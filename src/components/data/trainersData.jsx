import { useState, useEffect } from "react";

function useFetchTrainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("/data/trainers.json")
      .then((response) => response.json())
      .then((data) => setTrainers(data))
      .catch((error) => console.error("Error fetching trainers:", error));
  }, []);

  return trainers;
}

export default useFetchTrainers;
