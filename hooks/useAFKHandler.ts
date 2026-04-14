import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const useAFKHandler = (inactivityTime: number = 60000) => {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      router.push("/");
    }, inactivityTime);
  };

  useEffect(() => {
    resetTimer();

    const handleActivity = () => {
      resetTimer();
    };


    window.addEventListener("click", handleActivity);
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    // Limpieza
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, [inactivityTime, router]);
};
