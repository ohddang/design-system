import { useEffect, useState } from "react";
import { TitleAndButton, TitleDesc } from "./components/tooltip/CustomLayout";
import ToolTip from "./components/tooltip/ToolTip";
import { convertDirectionType } from "./utils/calculation";
import {
  BOTTOM_DIRECTION_DATA,
  CUSTOM_TOOLTIP_STYLE,
  LEFT_DIRECTION_DATA,
  RIGHT_DIRECTION_DATA,
  TOP_DIRECTION_DATA,
} from "./constant/common";

function App() {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const handleClickToolTip = (message: string) => {
    setShowToast(true);
    setToastMessage(message);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showToast, toastMessage]);

  return (
    <article className="container">
      <div className="flex-column">
        <section className="flex-column">
          <div className="flex-row">
            <div className="flex-column">
              {LEFT_DIRECTION_DATA.map((item, index) => (
                <ToolTip key={index} toolTipContent={<span>{item.desc}</span>} direction={item.direction}>
                  <span className="default-element">{item.desc.split(" ")[0]}</span>
                </ToolTip>
              ))}
            </div>
            <div className="flex-column">
              {RIGHT_DIRECTION_DATA.map((item, index) => (
                <ToolTip key={index} toolTipContent={<span>{item.desc}</span>} direction={item.direction}>
                  <span className="default-element">{item.desc.split(" ")[0]}</span>
                </ToolTip>
              ))}
            </div>
          </div>
          <div className="flex-column">
            <div className="flex-row">
              {TOP_DIRECTION_DATA.map((item, index) => (
                <ToolTip key={index} toolTipContent={<span>{item.desc}</span>} direction={item.direction}>
                  <span className="default-element">{item.desc.split(" ")[0]}</span>
                </ToolTip>
              ))}
            </div>
            <div className="flex-row">
              {BOTTOM_DIRECTION_DATA.map((item, index) => (
                <ToolTip key={index} toolTipContent={<span>{item.desc}</span>} direction={item.direction}>
                  <span className="default-element">{item.desc.split(" ")[0]}</span>
                </ToolTip>
              ))}
            </div>
          </div>
        </section>
        <section className="flex-row">
          <div className="flex-row">
            <ToolTip toolTipContent={<span>ENTER_DELAY ENTER_DELAY ENTER_DELAY</span>} enterDelay={1000}>
              <span className="default-element">enter delay 1s</span>
            </ToolTip>
            <ToolTip toolTipContent={<span>LEAVE_DELAY LEAVE_DELAY LEAVE_DELAY</span>} leaveDelay={1000}>
              <span className="default-element">leave delay 1s</span>
            </ToolTip>
            <ToolTip
              toolTipContent={<span>HOVER NOT HIDDEN HOVER NOT HIDDEN</span>}
              hoverNotHidden={true}
              leaveDelay={1000}>
              <span className="default-element">hover not hidden</span>
            </ToolTip>
          </div>
        </section>
        <section className="flex-row">
          <ToolTip toolTipContent={<span>DISABLED DISABLED DISABLED</span>} isEnabled={false}>
            <span className="default-element" style={{ backgroundColor: "gray", color: "white" }}>
              disabled
            </span>
          </ToolTip>
        </section>
      </div>
      <div className="flex-column">
        <section className="flex-row">
          <div className="scrollable">
            {Array(15)
              .fill(null)
              .map((_, index, array) => (
                <ToolTip
                  key={index}
                  direction={convertDirectionType(index, 3, array.length)}
                  toolTipContent={<span>{`TERRA ${index}`}</span>}>
                  <span className="default-element">{`TERRA ${index}`}</span>
                </ToolTip>
              ))}
          </div>
        </section>
        <section className="flex-row">
          <ToolTip
            toolTipContent={<TitleDesc title="ToolTip 타이틀" desc="TitleDesc 설명 TitleDesc 설명 TitleDesc 설명" />}
            backgroundColor="tomato">
            <span className="default-element">TitleDesc</span>
          </ToolTip>
          <ToolTip
            toolTipContent={<TitleDesc title="ToolTip 타이틀" desc="TitleDesc 설명 TitleDesc 설명 TitleDesc 설명" />}
            backgroundColor="orange">
            <span className="default-element">TitleDesc</span>
          </ToolTip>
        </section>
        <section className="flex-row">
          {CUSTOM_TOOLTIP_STYLE.map((item, index) => (
            <ToolTip
              key={index}
              direction={item.direction}
              hoverNotHidden={true}
              leaveDelay={500}
              backgroundColor="white"
              toolTipContent={<TitleAndButton title={`Pink ${item.title}`} onClick={handleClickToolTip} />}>
              <span className="default-element" style={{ backgroundColor: "pink" }}>
                {item.title}
              </span>
            </ToolTip>
          ))}
        </section>
        <section className="flex-row">
          <ToolTip toolTipContent={<span>PURPLE</span>} backgroundColor="green">
            <span className="default-element" style={{ backgroundColor: "purple", color: "white" }}>
              disabled
            </span>
          </ToolTip>
          <ToolTip toolTipContent={<span>GREEN</span>} backgroundColor="purple">
            <span className="default-element" style={{ backgroundColor: "green", color: "white" }}>
              disabled
            </span>
          </ToolTip>
        </section>
      </div>
      {showToast && <div className="toast">{toastMessage}</div>}
    </article>
  );
}

export default App;
