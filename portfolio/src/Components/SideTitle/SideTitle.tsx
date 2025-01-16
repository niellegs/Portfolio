import "./SideTitle.css"

type SideTitleProps = {
    text: string; // `text` deve ser uma string
    side?: string; // `side` é opcional e também uma string
};

function SideTitle({ text, side }: SideTitleProps): JSX.Element {
    return <p className={`text ${ side }`}>{text}</p>;
}

export default SideTitle;
