import { Direction } from "../constant/enum";

export const convertDirectionType = (index: number, columns: number, length: number): Direction => {
  let dir = Direction.BOTTOM_LEFT;
  if (index % columns === 0) dir = Direction.LEFT;
  if (index % columns === columns - 1) dir = Direction.RIGHT;
  if (index < columns) dir = Direction.TOP;
  if (index >= length - columns) dir = Direction.BOTTOM;
  return dir;
};

export const AlignForDirection = (direction: Direction, delta: number): { top: number; left: number } => {
  const align = { top: 0, left: 0 };

  switch (direction) {
    case Direction.LEFT:
    case Direction.LEFT_TOP:
    case Direction.LEFT_BOTTOM:
      align.left -= delta;
      break;
    case Direction.RIGHT:
    case Direction.RIGHT_TOP:
    case Direction.RIGHT_BOTTOM:
      align.left += delta;
      break;
    case Direction.TOP:
    case Direction.TOP_LEFT:
    case Direction.TOP_RIGHT:
      align.top -= delta;
      break;
    case Direction.BOTTOM:
    case Direction.BOTTOM_LEFT:
    case Direction.BOTTOM_RIGHT:
      align.top += delta;
      break;
    default:
      return align;
  }
  return align;
};

export const convertArrowBorderColor = (direction: Direction, color: string): string => {
  switch (direction) {
    case Direction.LEFT:
    case Direction.LEFT_TOP:
    case Direction.LEFT_BOTTOM:
      return `transparent  transparent transparent ${color}`;
    case Direction.RIGHT:
    case Direction.RIGHT_TOP:
    case Direction.RIGHT_BOTTOM:
      return `transparent ${color} transparent transparent`;
    case Direction.TOP:
    case Direction.TOP_LEFT:
    case Direction.TOP_RIGHT:
      return `${color} transparent transparent transparent`;
    case Direction.BOTTOM:
    case Direction.BOTTOM_LEFT:
    case Direction.BOTTOM_RIGHT:
      return `transparent transparent ${color} transparent`;
    default:
      return `transparent transparent ${color} transparent`;
  }
};
