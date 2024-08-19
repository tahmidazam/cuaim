import { CheckIcon, Cross1Icon, QuestionMarkIcon } from "@radix-ui/react-icons";

export const EVENT_STATUS_ICON_MAP = {
  confirmed: CheckIcon,
  tentative: QuestionMarkIcon,
  cancelled: Cross1Icon,
};

export const EVENT_STATUS_COLOR_MAP: {
  [key: string]: "green" | "yellow" | "red";
} = {
  confirmed: "green",
  tentative: "yellow",
  cancelled: "red",
};

export const EVENT_STATUS_LABEL_MAP: {
  [key: string]: string;
} = {
  confirmed: "Confirmed",
  tentative: "Tentative",
  cancelled: "Cancelled",
};
