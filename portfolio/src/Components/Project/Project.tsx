import "./Project.css"

interface Project {
    title: string;
    description: string;
    src: string;
}

function Project({ title, description, src }: Project) {
    return (
        <div className="container_project display-flex direction-column justify-center align-center">
            <div></div>
            <h2 className="title">{ title }</h2>
            <p>{ description }</p>

            <a href={src}>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    )
}

export default Project;