
import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Projects = () => {

  const projects = [
    {
      title: 'Fruits and Vegetables Freshness Detection using Machine Learning',
      description: 'Application will detect the Freshness of Fruits and Vegetables by detecting the color gradient using the ML trained dataset',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8Jx3miMXPJ7taB9a-7r1Jak44IcWV4s2YA&s',
    },
    {
      title: 'Student Management System ',
      description: 'The Student Management System project, developed using Spring Boot and MySQL, facilitates comprehensive management of student information. -It incorporates features such as student CRUD operations.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczGzcxi02QPOlgJ7LuTCt1n0DPLwGFnzGHbgRVOetGD0_oWNotLZd9hK8sA&s',
    },
     
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
