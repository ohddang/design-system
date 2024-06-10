import { Direction } from "./enum";

export const TOOLTIP_DIRECTION_STYLE = [
  { top: "50%", left: "0%", transform: "translate(-100%, -50%)" }, // LEFT
  { top: "50%", left: "100%", transform: "translate(0%, -50%)" }, // RIGHT
  { top: "100%", left: "50%", transform: "translate(-50%, 0%)" }, // BOTTOM
  { top: "0%", left: "50%", transform: "translate(-50%, -100%)" }, // TOP
  { top: "0%", left: "0%", transform: "translate(0%, -100%)" }, // TOP_LEFT
  { top: "0%", left: "100%", transform: "translate(-100%, -100%)" }, // TOP_RIGHT
  { top: "100%", left: "0%", transform: "translate(0%, 0%)" }, // BOTTOM_LEFT
  { top: "100%", left: "100%", transform: "translate(-100%, 0%)" }, // BOTTOM_RIGHT
  { top: "0%", left: "0%", transform: "translate(-100%, 0%)" }, // LEFT_TOP
  { top: "100%", left: "0%", transform: "translate(-100%, -100%)" }, // LEFT_BOTTOM
  { top: "0%", left: "100%", transform: "translate(0%, 0%)" }, // RIGHT_TOP
  { top: "100%", left: "100%", transform: "translate(0%, -100%)" }, // RIGHT_BOTTOM
];

export const CUSTOM_TOOLTIP_STYLE = [
  { title: "LEFT", direction: Direction.LEFT },
  { title: "TOP", direction: Direction.TOP },
  { title: "BOTTOM", direction: Direction.BOTTOM },
  { title: "RIGHT", direction: Direction.RIGHT },
];

export const LEFT_DIRECTION_DATA = [
  { desc: "LEFT_TOP LEFT_TOP LEFT_TOP", direction: Direction.LEFT_TOP },
  { desc: "LEFT LEFT LEFT", direction: Direction.LEFT },
  { desc: "LEFT_BOTTOM LEFT_BOTTOM LEFT_BOTTOM", direction: Direction.LEFT_BOTTOM },
];

export const RIGHT_DIRECTION_DATA = [
  { desc: "RIGHT_TOP RIGHT_TOP RIGHT_TOP", direction: Direction.RIGHT_TOP },
  { desc: "RIGHT RIGHT RIGHT", direction: Direction.RIGHT },
  { desc: "RIGHT_BOTTOM RIGHT_BOTTOM RIGHT_BOTTOM", direction: Direction.RIGHT_BOTTOM },
];

export const TOP_DIRECTION_DATA = [
  { desc: "TOP_LEFT TOP_LEFT TOP_LEFT", direction: Direction.TOP_LEFT },
  { desc: "TOP TOP TOP", direction: Direction.TOP },
  { desc: "TOP_RIGHT TOP_RIGHT TOP_RIGHT", direction: Direction.TOP_RIGHT },
];

export const BOTTOM_DIRECTION_DATA = [
  { desc: "BOTTOM_LEFT BOTTOM_LEFT BOTTOM_LEFT", direction: Direction.BOTTOM_LEFT },
  { desc: "BOTTOM BOTTOM BOTTOM", direction: Direction.BOTTOM },
  { desc: "BOTTOM_RIGHT BOTTOM_RIGHT BOTTOM_RIGHT", direction: Direction.BOTTOM_RIGHT },
];
