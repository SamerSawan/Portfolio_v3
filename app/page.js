"use client";

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import ExperienceCard from "./components/experienceCard";
import ProjectCard from "./components/projectCard";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/navBar";
import StarrySky from './components/starrySky';
import PixelArt from "./components/pixelArt";


export default function Home() {
  return (
    <div className="bg-[#182734] text-slate-400 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <StarrySky />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="lg:py-24 lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:items-center lg:sticky lg:top-0 lg:max-h-screen">
          <div>
            <h1 className="text-5xl text-slate-200 tracking-tight font-bold">Sam Sawan</h1>
            <h2 className="mt-3 font-medium text-slate-200 text-xl">Software Developer</h2>
            <p className="mt-4 max-w-xs">I bring fun and innovative ideas to life</p>
            <div className="mt-6 hidden lg:block">
              <Navbar />
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <a href="https://github.com/SamerSawan" target="_blank">
              <FontAwesomeIcon className="mr-4 hover:text-[#42d17b]" icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/samersawan1/" target="_blank">
              <FontAwesomeIcon className="mr-4 hover:text-[#42d17b]" icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/samersawan1/" target="_blank">
              <FontAwesomeIcon className="mr-4 hover:text-[#42d17b]" icon={faInstagram} size="2x" />
            </a>
            <a href="mailto:me@samersawan.com">
              <FontAwesomeIcon className="mr-4 hover:text-[#42d17b]" icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
        <div className="pt-24 lg:py-24 lg:w-1/2 flex flex-col justify-center items-center overflow-auto">
          <div id="About" className="mb-16 section">
            <p className="mb-4">
              For my high school graduation project in 2017, I decided I wanted to learn how to make video games, so I made a simple brick breaker game. 
              Since then, I&rsquo;ve switched out of health sciences and graduated from <a href={"https://mcgill.ca"} target="_blank" rel="noreferrer" className="text-slate-200 cursor-pointer">McGill University</a> with a bachelor&rsquo;s degree in Software Engineering. 
              I&rsquo;ve had the privilege of participating in various hackathons, game jams, working at a <a href={"https://www.thedevfactory.ai/"} target="_blank" rel="noreferrer" className="text-slate-200 cursor-pointer">start-up</a> and getting an AWS cloud practitioner certification.
            </p>
            <p className="mb-4">
              My main focus as a new grad is continuing my learning journey and building good programming habits. 
              I&rsquo;ve recently been enjoying game development a lot, but I also like to make mobile apps and web apps. 
              In my free time, I participate in Game Jams so that I can meet new people and learn new skills.
            </p>
            <p className="mb-4">
              In my free time, I&rsquo;m learning the piano, rock climbing, reading or playing video games with my friends.
            </p>
          </div>
          <div id="Experience" className="mb-16 section">
            <h2 className="mb-10 font-medium text-lg text-slate-400">Experience</h2>
            <ol className="group/list">
              <li>
                <ExperienceCard job={"Software Developer Intern @ TheDevFactory.ai"}
                point1={"Developed a customized chat completion model leveraging OpenAI's ChatGPT-4 API to integrate code snippets and SonarQube reports, enabling real-time feedback and suggestions to users"}
                point2={"Enhanced model performance through iterative refinement of prompts and adjustments to API interactions, ensuring accurate and valuable responses aligned with user queries"}
                point3={"Proposed and implemented innovative strategies to optimize the AI code reviewer's functionality, focusing on delivering actionable insights based on industry best practices and software design principles"}
                href={"https://www.linkedin.com/company/the-devfactory/?originalSubdomain=ca"}/>
              </li>
              <li>
                <ExperienceCard job={"Specialist @ Apple"} 
                point1={"Consistently achieved top performance amongst peers by exceeding Trade-In targets by 20% and exceeding the 20% Activation target for three consecutive quarters"}
                point2={"Demonstrated strong problem-solving skills by assessing customer needs and providing personalized solutions, resulting in a 95% customer satisfaction rate for five consecutive quarters"}
                point3={"Organized and presented multiple store-wide trainings to help with onboarding new, seasonal and veteran specialists alike, ensuring best practices for various store initiatives and goals"}
                href={"https://www.apple.com/"}/>
              </li>
            </ol>
            <a href="/Resume.pdf" className="text-slate-200 underline hover:text-[#8ce9b1] cursor-pointer">View Full Résumé</a>
          </div>
          <div id="Projects" className="mb-16 section w-full">
            <h2 className="mb-10 font-medium text-lg text-slate-400">Projects</h2>
            <ol className="group/list">
              <li>
                <ProjectCard title={"Standy's Mountain of Doubts"} 
              point1={"My submission for HealthyGamerGG's Mental Health May Hackathon was a precision platformer where the main character, Standy, learns to meditate to improve focus and navigate a complex map. The game was developed in GDScript and Godot, utilizing a sophisticated state machine to manage character and enemy behaviors through various state transitions. This state machine handles states such as running, idling, climbing, and jumping, enabling pixel-precise movement and mechanics like coyote jumping."}
              techPoints={["GDScript", "Godot", "Aseprite"]} href={"https://bappleboi.itch.io/standys-mountain-of-doubts"}/>
              </li>
              <li>
            <ProjectCard title={"Splendor"}
            point1={"For my senior capstone project at McGill, I developed backend game rules and logic in Java, seamlessly integrating it with the frontend through REST API calls. I implemented user authentication by connecting the backend with a provided Lobby Service, ensuring secure and reliable access. To maintain high code quality, I wrote comprehensive unit tests for all API calls, guaranteeing functionality and reliability. Additionally, I containerized the frontend, backend, and database using Docker, facilitating easy deployment and scalability. For academic integrity purposes, I can't publicly share the project. Reach out to me if you'd like to see it!"}
            techPoints={["Java", "JavaScript", "REST", "Maven", "Docker", "JUnit", "Spring", "Boot", "Git"]}
            href={"https://www.mcgill.ca/deanofstudents/policies-procedures/code"}/>
            </li>
            <li>
            <ProjectCard title={"Discord Poll Bot"} 
            point1={"I developed a Discord 'Poll Bot' as part of a talk I gave at the HealthyGamer Tech Community, aimed at teaching users how to create their own Discord bots. The bot was designed to build Discord's polling functionality from the ground up, providing a practical example to illustrate key concepts. During the talk, I covered essential topics such as file management and maintaining clean, organized code. Additionally, I delved into specific functionalities in discord.js, including the implementation of buttons, embeds, modals, and more, offering a comprehensive guide for attendees to understand and apply these features in their own projects."}
            techPoints={['Discord.js', 'Node.js']} href={"https://github.com/SamerSawan/StatBot_v2"}/>
            </li>
            <li>
            <ProjectCard title={"Personal Recipe App"}
            point1={"I designed and built a recipe app that enables users to create, view, and delete recipes, as well as manage their groceries. By combining Axios for efficient API calls to Firebase and React Context, I created a seamless and user-friendly experience. Additionally, I integrated iOS VoiceOver for enhanced accessibility."}
            techPoints={["React Native", "Axios", "React Context", "Firebase", "Figma"]} href={"https://github.com/SamerSawan/RecipeApp"}
            />
            </li>
            </ol>
          </div>
          <div id="Art" className="mb-16 section w-full">
            <h2 className="mb-8 font-medium text-lg text-slate-400">Art</h2>
            <div>
              <p className="mb-8">
                One thing I&rsquo;ve always found difficult is Art. I always thought I had no talent for it and never gave myself a chance. 
                More recently, thanks to various mentors and people in my life, I&rsquo;ve gained the courage to try things that make me uncomfortable, 
                which has vastly increased my motivation and confidence to try new things. 
                As a result, I&rsquo;ve made some video game assets that I am quite proud of, and you can see them here below. 
                I will be updating this section frequently, as I continue to make pixel art, and eventually I&rsquo;ll include some piano pieces that I&rsquo;m currently learning.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 justify-between">
              <PixelArt src="https://samerportfoliobucket.s3.us-east-2.amazonaws.com/RockGuy.gif" alt="Sentient Rock walks forward" text="Sentient Rock Guy walks" />
              <PixelArt src="https://samerportfoliobucket.s3.us-east-2.amazonaws.com/attackAnimation_RockGuy.gif" alt="Sentient Rock atacks by propelling itself off the floor and throwing it's fist forward" text="Sentient Rock Guy attacks"/>
              <PixelArt src="https://samerportfoliobucket.s3.us-east-2.amazonaws.com/merchant.gif" alt="Merchant smokes Shisha" text="A merchant smoking a shisha (or hookah)"/>
              <PixelArt src="https://samerportfoliobucket.s3.us-east-2.amazonaws.com/GAME+HEALTH+BAR.gif" alt="Video Game Health Bar in the shape of a sword" text="A sword shaped health bar with a broken sword hilt as a base" />
            </div>
          </div>
          <div>Made with NextJS, TailwindCSS, AnimeJS and GSAP</div>
        </div>
      </div>
    </div>
  );
}
