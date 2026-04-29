// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectDetail from './components/ProjectDetail';
import ViewAllProjects from './components/ViewAllProjects';
import projectsData from './data/projectsData';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-projects" element={<ViewAllProjects />} />

      {projectsData.map((project) => (
        <Route
          key={project.id}
          path={project.details}
          element={
            <ProjectDetail
              title={project.title}
              subtitle={project.subtitle}
              about={project.about}
              image1={project.image1}
              image2={project.image2}
              githubLink={project.github}
            />
          }
        />
      ))}
    </Routes>
  );
}