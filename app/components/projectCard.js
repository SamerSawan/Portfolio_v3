const ProjectCard = ({job, point1, point2, point3}) => {
    return (
        <div className="mb-10 relative transition hover:bg-[#2E485C]/50 
        hover:bg-opacity-10 hover:backdrop-blur-sm hover:bg-clip-padding 
        backdrop-filter hover:shadow-xl rounded-lg p-6 mx-auto">
            <h2 className="text-slate-200 font-semibold mb-2">{job}</h2>
            <div className="flex flex-col space-y-2">
            <p>{point1}</p>
            <p>{point2}</p>
            <p>{point3}</p>
            </div>
        </div>
    )
}