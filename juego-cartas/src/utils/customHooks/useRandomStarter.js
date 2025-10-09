import { useState, useEffect, useCallback } from "react";

export function useRandomStarter(initial = null) {
  const [starter, setStarter] = useState(initial);

  const choose = useCallback(() => {
    const who = Math.random() < 0.5 ? "player" : "cpu";
    setStarter(who);
    return who;
  }, []);

  useEffect(() => {
    if (starter === null) choose();
  }, []);

  return { starter, choose };
}