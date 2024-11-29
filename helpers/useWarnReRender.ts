import { useRef } from "react";

export const useWarnReRender = (component: string) => {
  const countReRenders = useRef<number>(0);
  const initialRender = useRef<boolean>(true);

  if (initialRender.current && countReRenders.current > 0) {
    initialRender.current = false;
  }

  if (!initialRender.current) {
    console.warn(`${component} re-rendered`);
  }

  countReRenders.current += 1;
};
