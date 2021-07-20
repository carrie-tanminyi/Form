import optionLibraries from "./optionLibraries";

export type OptionKey = keyof typeof optionLibraries;

export interface Flow {
  title: string;
  options: OptionKey[] | Record<any, OptionKey[]>;
}
