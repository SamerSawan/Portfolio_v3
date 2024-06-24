import ExperienceCard from "./components/experienceCard";
import ProjectCard from "./components/projectCard";
import TechnicalPoint from "./components/technicalPoint";

export default function Home() {
  return (
    <div className="bg-[#182734] text-slate-400">
      <div className="flex mx-auto min-h-screen max-w-screen-xl">
        <div className="py-24 w-1/2 flex flex-col justify-between items-center text-center sticky top-0 h-screen">
          <div>
            <h1 className="text-4xl text-slate-200 font-bold">Samer Sawan</h1>
            <h2 className="mt-3 text-lg">Software Developer</h2>
            <p className="mt-4 max-w-xs">I bring innovative ideas to life</p>
            <div className="mt-16">Navigation</div>
          </div>
          <div className="mt-96">
            Socials
          </div>
        </div>
        <div className="py-24 w-1/2 flex flex-col justify-center items-center overflow-auto">
          <div className="mb-16">
            <p className="mb-4">
              For my high school graduation project in 2017, I decided I wanted to learn how to make video games, so I made a simple brick breaker game. Since then, I’ve switched out of health sciences and graduated from McGill University with a bachelor’s degree in Software Engineering. I’ve had the privilege of participating in various hackathons, game jams and working at a start-up.
            </p>
            <p className="mb-4">
              My main focus as a new grad is continuing my learning journey and building good programming habits. I’ve recently been enjoying game development a lot, but I also like to make mobile apps and web apps. In my free time, I participate in Game Jams so that I can meet new people and learn new skills.
            </p>
            <p className="mb-4">
              When I’m not doing software related activities, I like to rock climb with my friends, read and play video games.
            </p>
          </div>
          <div className="mb-16">
            <h3>Experience</h3>
            <ol class="group/list">
              <li>
                <ExperienceCard job={"Specialist @ Apple"} 
                point1={"Consistently achieved top performance amongst peers by exceeding Trade-In targets by 20% and exceeding the 20% Activation target for three consecutive quarters"}
                point2={"Demonstrated strong problem-solving skills by assessing customer needs and providing personalized solutions, resulting in a 95% customer satisfaction rate for five consecutive quarters"}
                point3={"Organized and presented multiple store-wide trainings to help with onboarding new, seasonal and veteran specialists alike, ensuring best practices for various store initiatives and goals"}/>
              </li>
              <li>
                <ExperienceCard job={"Software Developer Intern @ TheDevFactory.ai"}
                point1={"Developed a customized chat completion model leveraging OpenAI's ChatGPT-4 API to integrate code snippets and SonarQube reports, enabling real-time feedback and suggestions to users"}
                point2={"Enhanced model performance through iterative refinement of prompts and adjustments to API interactions, ensuring accurate and valuable responses aligned with user queries"}
                point3={"Proposed and implemented innovative strategies to optimize the AI code reviewer's functionality, focusing on delivering actionable insights based on industry best practices and software design principles"}/>
              </li>
            </ol>
          </div>
          <div className="mb-16">
            <h3>Projects</h3>
            <ProjectCard title={"Splendor"}
            point1={"Developed backend game rules and logic in Java, integrating it with the frontend using REST API calls"}
            point2={"Implemented user authentication y integrating the backend with a provided Lobby Service"}
            point3={"Wrote comprehensive unit tests for all API calls to ensure functionality and reliability"}
            point4={"Containerized the frontend, backend and database with Docker for ease of deployment"}
            techPoints={["Java", "JavaScript", "REST", "Maven", "Docker", "JUnit", "Spring", "Boot", "Git"]}/>
          </div>
          <div>Made with nextjs and tailwindcss</div>
        </div>
      </div>
    </div>
  );
}
