import "./Project.css";

interface ProjectProps {
    title: string;
    description: string;
    src: string;
    img: string;
}

function Project({ img, title, description, src }: ProjectProps) {
    return (
        <div
            className="container_project display-flex direction-column justify-center align-center"
            
        >
            <div 
            className="img_bg_project"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

            </div>
            <h2>{title}</h2>
            <p>{description}</p>

            <a href={src} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    );
}

export default Project;
