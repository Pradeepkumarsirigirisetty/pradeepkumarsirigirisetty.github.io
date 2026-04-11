import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/projects/polylingua-ai"
        element={
          <ProjectDetail
            title="PolyLingua AI"
            subtitle="An offline multilingual voice assistant developed to transcribe speech, detect language, and deliver intelligent responses through an accessible and structured interface."
            about="PolyLingua AI is a thoughtfully designed project built to make multilingual communication more seamless and approachable. It reflects my interest in language-focused AI systems, practical interaction design, and problem-solving through applied technology."
            image1="/images/polylingua-1.jpg"
            image2="/images/polylingua-2.jpg"
            githubLink="https://github.com/yourusername/polylingua-ai"
          />
        }
      />

      <Route
        path="/projects/portfolio-website"
        element={
          <ProjectDetail
            title="Personal Portfolio Website"
            subtitle="A responsive and refined portfolio platform created to present my projects, technical abilities, and evolving design sensibility in a polished format."
            about="This portfolio website was built to establish a distinctive digital presence and showcase my work with greater visual clarity and structure. It demonstrates responsive design, cleaner hierarchy, and a more professional way of presenting personal projects."
            image1="/images/portfolio-1.jpg"
            image2="/images/portfolio-2.jpg"
            githubLink="https://github.com/yourusername/portfolio-website"
          />
        }
      />

      <Route
        path="/projects/uptrend"
        element={
          <ProjectDetail
            title="Uptrend"
            subtitle="A finance-oriented web project crafted to make investing and market exploration more engaging through structured layouts and contemporary interface sections."
            about="Uptrend was developed as a visually driven and functionally clear web experience that highlights frontend styling, layout composition, and user-focused presentation. The project reflects my effort to create a modern interface with a stronger sense of purpose and direction."
            image1="/images/uptrend-1.jpg"
            image2="/images/uptrend-2.jpg"
            githubLink="https://github.com/yourusername/uptrend"
          />
        }
      />
    </Routes>
  );
}