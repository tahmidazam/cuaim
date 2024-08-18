import { CheckIcon, Cross1Icon, QuestionMarkIcon } from "@radix-ui/react-icons";

export const eventStatusIconMap = {
  confirmed: CheckIcon,
  tentative: QuestionMarkIcon,
  cancelled: Cross1Icon,
};

export const eventStatusColorMap: {
  [key: string]: "green" | "yellow" | "red";
} = {
  confirmed: "green",
  tentative: "yellow",
  cancelled: "red",
};

export const eventStatusLabelMap: {
  [key: string]: string;
} = {
  confirmed: "Confirmed",
  tentative: "Tentative",
  cancelled: "Cancelled",
};
