import { Link } from "react-router-dom";

type tagType = "blue" | "yellow" | "orange" | "green"| "white"| "gray"| "red"| "lightblue" ;

interface Props {
    type?: tagType,
    link?: string,
    onClick?: any,
    children: React.ReactNode
}

const Tag = ({ type = "orange", link, onClick, children }: Props) => {
    return (
        <Link className={`tag tag_${type}`} onClick={() => onClick} to={link ? link : "#"}>{children}</Link>
    )
}

export default Tag
