import "./SideTitle.css"

type SideTitleProps = {
    text: string;
    side?: string;
    className?: string;
};

function SideTitle({ className, text, side }: SideTitleProps): JSX.Element {
    return <p className={`text ${ side } ${className}`}>{text}</p>;
}

export default SideTitle;
