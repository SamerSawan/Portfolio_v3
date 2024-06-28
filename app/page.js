import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import ExperienceCard from "./components/experienceCard";
import ProjectCard from "./components/projectCard";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/navBar";

export default function Home() {
  return (
    <div className="bg-[#182734] text-slate-400">
      <div className="flex mx-auto min-h-screen max-w-screen-xl">
        <div className="py-24 w-1/2 flex flex-col justify-between items-center text-center sticky top-0 h-screen">
          <div>
            <h1 className="text-4xl text-slate-200 font-bold">Samer Sawan</h1>
            <h2 className="mt-3 text-lg">Software Developer</h2>
            <p className="mt-4 max-w-xs">I bring innovative ideas to life</p>
            <div className="mt-6">
              <Navbar></Navbar>
            </div>
          </div>
          <div className="mt-96">
            <FontAwesomeIcon className="mr-4" icon={faGithub} size="2x" /> 
            <FontAwesomeIcon className="mr-4" icon={faLinkedin} size="2x" />
            <FontAwesomeIcon className="mr-4" icon={faInstagram} size="2x" />
            <FontAwesomeIcon className="mr-4" icon={faEnvelope} size="2x" />
          </div>
        </div>
        <div id="About" className="py-24 w-1/2 flex flex-col justify-center items-center overflow-auto">
          <div className="mb-16">
            <p className="mb-4">
              For my high school graduation project in 2017, I decided I wanted to learn how to make video games, so I made a simple brick breaker game. Since then, I’ve switched out of health sciences and graduated from McGill University with a bachelor’s degree in Software Engineering. I’ve had the privilege of participating in various hackathons, game jams, working at a start-up and getting an AWS cloud practitioner certification.
            </p>
            <p className="mb-4">
              My main focus as a new grad is continuing my learning journey and building good programming habits. I’ve recently been enjoying game development a lot, but I also like to make mobile apps and web apps. In my free time, I participate in Game Jams so that I can meet new people and learn new skills.
            </p>
            <p className="mb-4">
              When I’m not doing software related activities, I like to rock climb with my friends, read and play video games.
            </p>
          </div>
          <div id="Experience" className="mb-16">
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
          <div id="Projects" className="mb-16">
            <h3>Projects</h3>
            <ProjectCard title={"Standy's Mountain of Doubts"} 
            point1={"My submission for HealthyGamerGG's Mental Health May Hackathon was a precision platformer where the main character, Standy, learns to meditate to improve focus and navigate a complex map. The game was developed in GDScript and Godot, utilizing a sophisticated state machine to manage character and enemy behaviors through various state transitions. This state machine handles states such as running, idling, climbing, and jumping, enabling pixel-precise movement and mechanics like coyote jumping."}
            techPoints={["GDScript", "Godot", "Aseprite"]}/>
            <ProjectCard title={"Splendor"}
            point1={"For my senior capstone project at McGill, I developed backend game rules and logic in Java, seamlessly integrating it with the frontend through REST API calls. I implemented user authentication by connecting the backend with a provided Lobby Service, ensuring secure and reliable access. To maintain high code quality, I wrote comprehensive unit tests for all API calls, guaranteeing functionality and reliability. Additionally, I containerized the frontend, backend, and database using Docker, facilitating easy deployment and scalability. For academic integrity purposes, I can't publicly share the project. Reach out to me if you'd like to see it!"}
            techPoints={["Java", "JavaScript", "REST", "Maven", "Docker", "JUnit", "Spring", "Boot", "Git"]}/>
            <ProjectCard title={"Discord Poll Bot"} 
            point1={"I developed a Discord 'Poll Bot' as part of a talk I gave at the HealthyGamer Tech Community, aimed at teaching users how to create their own Discord bots. The bot was designed to build Discord's polling functionality from the ground up, providing a practical example to illustrate key concepts. During the talk, I covered essential topics such as file management and maintaining clean, organized code. Additionally, I delved into specific functionalities in discord.js, including the implementation of buttons, embeds, modals, and more, offering a comprehensive guide for attendees to understand and apply these features in their own projects."}
            techPoints={['Discord.js', 'Node.js']}/>
            <ProjectCard title={"Personal Recipe App"}
            point1={"I designed and built a recipe app that enables users to create, view, and delete recipes, as well as manage their groceries. By combining Axios for efficient API calls to Firebase and React Context, I created a seamless and user-friendly experience. Additionally, I integrated iOS VoiceOver for enhanced accessibility."}
            techPoints={["React Native", "Axios", "React Context", "Firebase", "Figma"]}
            />
          </div>
          <div>Made with nextjs and tailwindcss</div>
        </div>
      </div>
    </div>
  );
}
