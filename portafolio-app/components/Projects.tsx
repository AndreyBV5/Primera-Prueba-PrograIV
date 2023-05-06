import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Projects = () => {
  type Repo = {
    id: number;
    name: string;
  }
  const [x, setX] = useState(0);
  const [repos, setRepos] = useState<Repo[]>([]);

  const handleSlide = (direction: any) => {
    const slideWidth = window.matchMedia("(max-width: 700px)").matches
      ? 285.066666
      : 570.133333;
    if (direction === "left") {
      setX(x - slideWidth);
    } else {
      setX(x + slideWidth);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/AndreyBV5/repos"
      );
      const data = await response.json();
      setRepos(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const slideWidth = window.matchMedia("(max-width: 700px)").matches
      ? 285.066666
      : 570.133333;
    if (x > slideWidth * (repos.length - 1)) {
      setX(slideWidth * (repos.length - 1));
    }
    if (x < -slideWidth * (repos.length - 1)) {
      setX(-slideWidth * (repos.length - 1));
    }
  }, [x, repos]);
  return (
    <>
      <div className={styles.desktop}>
        <section id="Projects">
          <section className={styles.work}>
            <h2>My Projects</h2>
            <motion.div
              animate={{ x }}
              drag="x"
              dragConstraints={{
                left: window.matchMedia("(max-width: 700px)").matches
                  ? -285.066666 * (repos.length - 1)
                  : -570.133333 * (repos.length - 1),
                right: window.matchMedia("(max-width: 700px)").matches
                  ? 285.066666 * (repos.length - 1)
                  : 570.133333 * (repos.length - 1),
              }}
            >
              {repos.map((repo) => (
                <figure key={repo.id}>
                  <Image
                    src={`https://raw.githubusercontent.com/AndreyBV5/${repo.name}/main/banner.png`}
                    placeholder="blur"
                    alt={repo.name}
                    width={500}
                    height={300}
                  />
                </figure>
              ))}
            </motion.div>
            <div>
              <button type="button" onClick={() => handleSlide("right")}>
                <svg
                  width={15}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.12-5.12L8 0Z"
                    fill="#fff"
                  />
                </svg>
              </button>
              <button type="button" onClick={() => handleSlide("left")}>
                <svg
                  width={15}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
