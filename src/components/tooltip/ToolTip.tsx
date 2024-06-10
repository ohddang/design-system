import "./tooltip.scss";

import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import { Direction } from "../../constant/enum";
import { TOOLTIP_DIRECTION_STYLE } from "../../constant/common";
import { AlignForDirection, convertArrowBorderColor } from "../../utils/calculation";

interface ToolTipProps {
  isEnabled?: boolean;
  direction?: Direction;
  toolTipContent?: React.ReactNode;
  enterDelay?: number;
  leaveDelay?: number;
  hoverNotHidden?: boolean;
  backgroundColor?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function ToolTip({
  isEnabled = true,
  backgroundColor = "black",
  direction = Direction.BOTTOM_LEFT,
  toolTipContent,
  enterDelay = 0,
  leaveDelay = 0,
  hoverNotHidden = false,
  styles,
  children = "default",
}: ToolTipProps) {
  const [showToolTip, setShowToolTip] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const align = AlignForDirection(direction, 5);
  const arrowColor = convertArrowBorderColor(direction, backgroundColor);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).dataset.target === "wrapper" ? setIsHover(true) : setIsHover(hoverNotHidden);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowToolTip(isHover);
      },
      isHover ? enterDelay : leaveDelay
    );
    return () => clearTimeout(timer);
  }, [isHover]);

  useEffect(() => {
    if (tooltipRef.current && childRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const childRect = childRef.current.getBoundingClientRect();

      const top = rect.top + (parseInt(TOOLTIP_DIRECTION_STYLE[direction].top) / 100) * childRect.height;
      const left = rect.left + (parseInt(TOOLTIP_DIRECTION_STYLE[direction].left) / 100) * childRect.width;

      setPosition({ top: top, left: left });
    }
  }, [tooltipRef.current]);

  return (
    <div
      className="tooltip-wrapper"
      ref={tooltipRef}
      data-target="wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="item-wrapper" ref={childRef}>
        {children}
        {isEnabled &&
          showToolTip &&
          ReactDOM.createPortal(
            <div
              className="tooltip-contents"
              data-target="toolTip"
              onMouseEnter={handleMouseEnter}
              style={{
                ...TOOLTIP_DIRECTION_STYLE[direction],
                top: position.top + align.top,
                left: position.left + align.left,
                backgroundColor: backgroundColor,
                ...styles,
              }}>
              <div className="tooltip-arrow-wrapper" data-direction={direction}>
                <div className="tooltip-arrow" style={{ borderColor: `${arrowColor}` }}></div>
              </div>
              {toolTipContent}
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}
