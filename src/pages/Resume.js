import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  References: () => <References />,
};

const Resume = () => {
  const resumePdfUrl = 'https://hotbarbeque.github.io/C20-React-Portfolio-KC/images/resume.pdf';

  return (
    <Main
      title="Resume"
      description="Kyle Curry's Resume."
    >
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>
              <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
                Resume Download
              </a>
            </h2>
            <div className="link-container">
              {Object.keys(sections).map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
      </article>
    </Main>
  );
};

export default Resume;