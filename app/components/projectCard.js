import TechnicalPoint from "./technicalPoint";

const ProjectCard = ({title, point1, point2, point3, point4, techPoints}) => {
    return (
        <div className="mb-10 relative transition hover:bg-[#2E485C]/50 
        hover:bg-opacity-10 hover:backdrop-blur-sm hover:bg-clip-padding 
        backdrop-filter hover:shadow-xl rounded-lg p-6 mx-auto">
            <h2 className="text-slate-200 font-semibold mb-2">{title}</h2>
            <div className="flex flex-col space-y-2">
                <p>{point1}</p>
                <p>{point2}</p>
                <p>{point3}</p>
                <p>{point4}</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
            {techPoints.map((tech, index) => (
                    <TechnicalPoint key={index} tech={tech} />
                ))}
            </div>
        </div>
    )
}
export default ProjectCard;