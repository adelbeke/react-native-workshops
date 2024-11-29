import { useRef } from "react";

export const useWarnReRender = () => {
  const countReRenders = useRef<number>(0);
  const initialRender = useRef<boolean>(true);

  if (initialRender.current && countReRenders.current > 1) {
    initialRender.current = false;
  }

  if (!initialRender.current) {
    console.warn("Re-rendered");
  }


  countReRenders.current += 1;
};
