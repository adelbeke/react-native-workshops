import { Counter } from "@/features/re-renders/counter/Counter";
import {JSX} from 'react'
import {Input} from "@/features/re-renders/input/Input";

type ReRendersFeatures = {
  counter: JSX.Element;
  input: JSX.Element;
};

export const RE_RENDERS_FEATURES: ReRendersFeatures = {
  counter: <Counter />,
  input: <Input />
};
