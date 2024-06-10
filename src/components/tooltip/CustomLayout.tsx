interface TitleAndButtonProps {
  title: string;
  button?: string;
  onClick: (param: string) => void;
}

export const TitleAndButton = ({ title, button = "OK", onClick }: TitleAndButtonProps) => (
  <div className="flex-column" style={{ color: "black" }}>
    <span>{title}</span>
    <button className="tooltip-button" onClick={() => onClick(`${title} ${title} ${title}`)}>
      {button}
    </button>
  </div>
);

export const TitleDesc = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex-column">
    <strong>{title}</strong>
    <span>{desc}</span>
  </div>
);
