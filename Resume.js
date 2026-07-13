import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Enzo Nguyen</h1>
                <p>123 Main Street, Anytown USA, 12345 | (123) 456-0606 | enzonguyen@email.com</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Master of Science in Computer Science</h3>
                    <p>City University of Seattle, Seattle USA | May 2023</p>
                    <p>GPA: 3.9/4.0</p>
                    <h3>Bachelor of Science in Computer Science</h3>
                    <p>City University of Seattle, Seattle USA | May 2021</p>
                    <p>GPA: 3.7/4.0</p>
                </div>
            </section>

            <section className="section skills">
                <h2>Skills</h2>
                <ul>
                    <li><strong>Programming Languages:</strong> JavaScript, Python, Java, C++</li>
                    <li><strong>Web Technologies:</strong> React, Node.js, HTML5, CSS3, Bootstrap</li>
                    <li><strong>Frameworks:</strong> Spring Boot, Express.js</li>
                    <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
                    <li><strong>Tools:</strong> Git, GitHub, Docker, AWS</li>
                    <li><strong>Soft Skills:</strong> Teamwork, Problem Solving, Communication</li>
                </ul>
            </section>

            <section className="section experience">
                <h2>Work Experience</h2>
                <div>
                    <h3>Software Developer Intern</h3>
                    <p>Tech Solutions Inc., Seattle USA | June 2022 - August 2022</p>
                    <ul>
                        <li>Developed and maintained web applications using React and Spring Boot</li>
                        <li>Collaborated with cross-functional teams in Agile/Scrum environment</li>
                        <li>Wrote unit tests and participated in code reviews</li>
                        <li>Improved application performance by 20% through code optimization</li>
                    </ul>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Personal Website</h3>
                    <p>
                        Built a personal website using React and deployed it on GitHub Pages
                    </p>
                    <p>
                        Source code:{" "}
                        <a
                            href="https://github.com/studentname/personal-website"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/studentname/personal-website
                        </a>
                    </p>
                    <h3>Online Bookstore</h3>
                    <p>
                        Developed a web application for an online bookstore using Spring Boot and MySQL
                    </p>
                    <p>
                        Source code:{" "}
                        <a
                            href="https://github.com/studentname/online-bookstore"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/studentname/online-bookstore
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;