import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import {
  // blogImg,
  realestateImg,
  todoImg,
  // colorcatchingImg,
  // inventoryImg,
  // sudokuImg,
  portfolioImg,
  // foodCart,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      des: "React.js | Tailwind CSS | Framer Motion",
      src: portfolioImg,
      githubLink:
        "https://github.com/Jashwanthsingh13/personal_portfolio_website",
    },

    {
      title: "Watchwise – Movie API based website",
      des: "React.js | CSS",
      src: realestateImg,
      githubLink: "https://github.com/Jashwanthsingh13/Movie-app",
      liveLink: "https://enigmatic-movies.netlify.app",
    },
    {
      title: "Diamond mobile accessories",
      des: "React.js | CSS",
      src: todoImg,
      githubLink: "https://github.com/Jashwanthsingh13/React-E-COMMERCE-WEBSITE",
      liveLink: "https://diamond-mobile-accessories.netlify.app/",
    },

  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section
      id="projects"
      className="w-full py-14 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {currentProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
        {/* <ProjectsCard title="Peronal Protfolio" />
        <ProjectsCard title="Blog Website" /> */}
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-5 py-2 mx-3 text-lg ${currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-900"
              } rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
