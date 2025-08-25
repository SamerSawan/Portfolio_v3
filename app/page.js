"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
    <div>
    <StarrySky />
    <div className="bg-[#182734] text-slate-400 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 z-10">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="lg:py-24 lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:items-start lg:sticky lg:top-0 lg:max-h-screen">
          <div>
            <h1 className="text-5xl text-slate-200 tracking-tight font-bold">Sam Sawan</h1>
            <h2 className="mt-3 font-medium text-slate-200 text-xl">Software Developer</h2>
            <p className="mt-4 max-w-xs">I turn ideas into reliable, user-friendly software.</p>
            <Navbar /> 
          </div>
          <div className="mt-4 lg:mt-0 flex justify-center gap-6">
            <a href="https://github.com/SamerSawan" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon className="hover:text-[#42d17b]" icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/samersawan1/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon className="hover:text-[#42d17b]" icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:me@samersawan.com" aria-label="Mail">
              <FontAwesomeIcon className="hover:text-[#42d17b]" icon={faEnvelope} size="2x" />
            </a>
          </div>

        </div>
        <div className="pt-24 lg:py-24 lg:w-1/2 flex flex-col justify-center items-center overflow-auto">
          <div id="About" className="mb-16 section">
            <p className="mb-4">
              I&rsquo;m a developer who cares about building clean, thoughtfully designed products that are intuitive and enjoyable to use.
            </p>
            <p className="mb-4">
              Today, I&rsquo;m a Software Developer at <a href="https://www.netrevenue.io/" target="_blank" rel="noreferrer" className="text-slate-200 cursor-pointer hover:text-green-200">NetRevenue</a>, where I work on <span href="https://www.salesvue.io/" className="text-slate-200 cursor-pointer hover:text-green-200">Salesvue.io</span>, a sales engagement platform designed to help teams manage leads, automate follow-ups, and streamline customer communication. My role involves building and maintaining core features, integrating third-party services, and ensuring the platform is reliable, scalable, and user-friendly.
            </p>
            <p className="mb-4">
              In the past, I&rsquo;ve built <a href="https://github.com/SamerSawan/bookmarkd" target="_blank" rel="noreferrer" className="text-slate-200 cursor-pointer hover:text-green-200">Bookmarkd</a>, a book club app for sharing reads with friends, and a <a href="https://bappleboi.itch.io/unseen-alchemist" target="_blank" rel="noreferrer" className="text-slate-200 cursor-pointer hover:text-green-200">video game</a> during a game jam, along with other personal and hackathon projects. I also interned at <a href="https://www.thedevfactory.ai/" target="_blank" rel="noreferrer" className="text-slate-200 cursor-pointer hover:text-green-200">TheDevFactory</a>, earned my AWS Cloud Practitioner certification, and graduated from <a href={"https://mcgill.ca"} target="_blank" rel="noreferrer" className="text-slate-200 cursor-pointer hover:text-green-200">McGill University</a> in Software Engineering.
            </p>


            <p className="mb-4">
              When I&rsquo;m not coding, you&rsquo;ll usually find me reading, rock climbing, playing piano, or spending time with friends.
            </p>
          </div>
          <div id="Experience" className="mb-16 section">
            <h2 className="mb-10 text-2xl font-semibold text-slate-200 border-b border-slate-700 pb-2">
              Experience
            </h2>

            <ol className="group/list">
              <li>
                <ExperienceCard 
                  job={"Software Developer @ NetRevenue"} 
                  date={"Mar 2025 – Present"} 
                  point1={"Build and maintain backend services for Salesvue.io, a sales engagement platform used to manage leads and automate workflows."}
                  point2={"Design and implement integrations with third-party services such as Stripe and Whop, supporting subscription billing, membership synchronization, and API event processing."}
                  point3={"Introduce and advocate for backend testing practices, improving release reliability and team confidence in deployments."}
                  href={"https://www.netrevenue.io/"} 
                />
              </li>
              <li>
                <ExperienceCard 
                  job={"Software Developer Intern @ TheDevFactory.ai"} 
                  date={"Sep 2023 – Jan 2024"} 
                  point1={"Developed features for an AI-powered code review tool that combined ChatGPT with SonarQube, delivering real-time insights to developers."}
                  point2={"Refined model prompts and system behavior to improve accuracy and usefulness of automated code review feedback."}
                  point3={"Collaborated in an agile environment to deliver production-ready features and enhancements."}
                  href={"https://www.thedevfactory.ai/"} 
                />
              </li>
              <li>
                <ExperienceCard 
                  job={"Technical Specialist @ Apple"} 
                  date={"Jun 2022 – April 2025"} 
                  point1={"Diagnose and resolve technical issues across Apple hardware and software, ensuring a high level of customer satisfaction."}
                  point2={"Create and maintain internal shortcuts and routines to streamline team workflows, improving efficiency during customer appointments."}
                  point3={"Apply systematic troubleshooting approaches to isolate root causes and deliver consistent, reliable support."}
                  href={"https://www.apple.com/"} 
                />
              </li>
            </ol>

            <a href="/Resume.pdf" className="text-slate-200 underline hover:text-[#8ce9b1] cursor-pointer">View Full Résumé</a>
          </div>



          <div id="Projects" className="mb-16 section w-full">
          <h2 className="mb-10 text-2xl font-semibold text-slate-200 border-b border-slate-700 pb-2">
            Projects
          </h2>


            <ol className="group/list">
            <li>
              <ProjectCard title={"Bookmarkd"}
              point1={"I designed and developed a book logging website for myself and my book club to allow us to update each other on our progress and discuss our thoughts about what we were reading. I built Bookmarkd using a component-based architecture using NextJS and TypeScript, which made it significantly easier to maintain and scale up. Additioanlly, I used Golang to build the backend REST API, and I built my very own relational database using PostgreSQL. The website is hosted using Vercel for the frontend and Google Cloud for the backend, feel free to try it out!"}
              techPoints={["Go", "TypeScript", "PostgreSQL", "React", "NextJS", "Firebase", "Docker", "Figma"]}
              href={"https://github.com/SamerSawan/bookmarkd"}
              />
            </li>
            <li>
              <ProjectCard title={"Unseen Alchemist"}
              point1={"I led a team of 3 developers for the PirateJam 15 Game Jam to develop a 2D MetroidVania where you play as an Alchemist that has to solve puzzles by brewing a variety of different potions. I worked on the AI pathing and behaviour as well as the inventory systems that the player interacts with. Unseen Alchemist was in the top 3% of submissions, feel free to try it out!"}
              techPoints={["GDScript", "Godot", "Aseprite"]}
              href={["https://bappleboi.itch.io/unseen-alchemist"]}
              />
            </li>
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
            <li>
              <ProjectCard title={"Gator"}
              point1={"Gator is a CLI tool that I built as part of a boot.dev course on learning Go. It is a CLI tool that allows users to manage and browse RSS feeds, allowing users to fetch from RSS feeds and read posts."}
              techPoints={["Go"]}
              href={["https://github.com/SamerSawan/Gator"]}/>
            </li>
            </ol>
          </div>
          <div id="Art" className="mb-16 section w-full">
          <h2 className="mb-10 text-2xl font-semibold text-slate-200 border-b border-slate-700 pb-2">
            Art
          </h2>
            <div>
            </div>
            <div className="grid grid-cols-2 gap-4 justify-between">
              <PixelArt src="https://samerportfoliobucket.s3.us-east-2.amazonaws.com/RockGuy.gif" alt="Sentient Rock walks forward" text="" />
              <PixelArt src="https://samerportfoliobucket.s3.us-east-2.amazonaws.com/attackAnimation_RockGuy.gif" alt="Sentient Rock atacks by propelling itself off the floor and throwing it's fist forward" text=""/>
              <PixelArt src="https://samerportfoliobucket.s3.us-east-2.amazonaws.com/merchant.gif" alt="Merchant smokes Shisha" text=""/>
              <PixelArt src="https://samerportfoliobucket.s3.us-east-2.amazonaws.com/GAME+HEALTH+BAR.gif" alt="Video Game Health Bar in the shape of a sword" text="" />
            </div>
          </div>
          <div>Made with NextJS, TailwindCSS, AnimeJS and GSAP</div>
        </div>
      </div>
    </div>
    </div>
  );
}

// &rsquo;
