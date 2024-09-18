import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/care-pulse.png"
          title="Care Pulse"
          description="A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js."
        />
        <ProjectCard
          src="/SatutiDevHub.png"
          title="Satuti DevHub"
          description="Welcome to Satuti Seth's portfolio! A passionate software developer specializing in creating innovative web solutions with expertise in technologies like React, TypeScript, and AI/ML integration. Explore my projects and see how I bring ideas to life through code!"
        />
        <ProjectCard
          src="/slybharat.png"
          title="Sly Bharat"
          description="SlyBharat is your ultimate travel partner, offering luxurious stays, curated travel guides, and affordable packages to breathtaking destinations around the world. Experience seamless booking, expert service, and unforgettable adventures from Maldives to the Brazil."
        />
      </div>
    </div>
  );
};

export default Projects;
