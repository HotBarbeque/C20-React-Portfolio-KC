import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Kyle Curry's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={{
            ...project,
            linkProps: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          }}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
