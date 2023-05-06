import React from "react";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "../styles/Home.module.css"



const Projects = () => {
  type Repo = {

    id: number;
    html_url: string;
    name: string;
    full_name: string;
  }
  const [repos, setRepos] = useState<Repo[]>([]);
  const [x, setX] = useState(0);

  const handleSlide = (direction: any) => {
    if (window.matchMedia('(max-width: 700px)').matches) {
      if (direction === 'left') {
        setX(x - 285.066666);
      } else {
        setX(x + 285.066666);
      }
    } else {
      if (direction === 'left') {
        setX(x - 570.133333);
      } else {
        setX(x + 570.133333);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer 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`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRepos(data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(max-width: 700px)').matches) {
      if (x > 570.133333) {
        setX(570.133333);
      }
      if (x < -570.133333) {
        setX(-570.133333);
      }
    } else {
      if (x > 1140.26667) {
        setX(1140.26667);
      }
      if (x < -1140.26667) {
        setX(-1140.26667);
      }
    }
  }, [x]);

  return (
    <>
      <div className={styles.desktop}>
        <section id='Projects'>
          <section className={styles.work}>
            <h2>My Projects</h2>
            <motion.div
              animate={{ x }}
              drag='x'
              dragConstraints={{ left: -855.2, right: 855.2 }}
            >
              {repos.map((repo) => (
                <figure key={repo.id}>
                  <a href={repo.html_url} target='_blank' rel='noreferrer'>
                  <img src={`https://raw.githubusercontent.com/${repo.full_name}/main/logo.png`} alt={`${repo.name} logo`} />
                    {repo.name}
                  </a>
                </figure>
              ))}
            </motion.div>
            <div>
              <button type='button' onClick={() => handleSlide('right')}>
                <svg
                  width={15}
                  height={16}
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.12-5.12L8 0Z'
                    fill='#fff'
                  />
                </svg>
              </button>
              <button type='button' onClick={() => handleSlide('left')}>
                <svg
                  width={15}
                  height={16}
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d="m6.807 16 8-8-8-8-1.686 1.687 5.12 5.12H0v2.386h10.241l-5.12 5.12L6.807 16Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Projects;
