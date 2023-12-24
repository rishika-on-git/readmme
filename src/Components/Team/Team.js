import React from "react";
import "./Team.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const TeamMember = [
    {
      img: "/images/mehul.jpg",
      name: "Mehul Bansal",
      role: "Frontend Developer",
      social: [
        "https://github.com/mehul1409",
        "https://www.instagram.com/mehulbansal1409",
        "https://www.linkedin.com/in/mehul-bansal-27173b254",
      ],
    },
    {
      img: "/images/mehul.jpg",
      name: "Mehul Bansal",
      role: "Frontend Developer",
      social: [
        "https://github.com/mehul1409",
        "https://www.instagram.com/mehulbansal1409",
        "https://www.linkedin.com/in/mehul-bansal-27173b254",
      ],
    },
    {
      img: "/images/mehul.jpg",
      name: "Mehul Bansal",
      role: "Frontend Developer",
      social: [
        "https://github.com/mehul1409",
        "https://www.instagram.com/mehulbansal1409",
        "https://www.linkedin.com/in/mehul-bansal-27173b254",
      ],
    },
    {
      img: "/images/mehul.jpg",
      name: "Mehul Bansal",
      role: "Frontend Developer",
      social: [
        "https://github.com/mehul1409",
        "https://www.instagram.com/mehulbansal1409",
        "https://www.linkedin.com/in/mehul-bansal-27173b254",
      ],
    },
    {
      img: "/images/mehul.jpg",
      name: "Mehul Bansal",
      role: "Frontend Developer",
      social: [
        "https://github.com/mehul1409",
        "https://www.instagram.com/mehulbansal1409",
        "https://www.linkedin.com/in/mehul-bansal-27173b254",
      ],
    },
    {
      img: "/images/mehul.jpg",
      name: "Mehul Bansal",
      role: "Frontend Developer",
      social: [
        "https://github.com/mehul1409",
        "https://www.instagram.com/mehulbansal1409",
        "https://www.linkedin.com/in/mehul-bansal-27173b254",
      ],
    },
  ];

  return (
    <>
    <div className="TeammemberHeading">TEAM MEMBERS</div>
      <div className="Teamcontainer">
        {TeamMember.map((member, index) => (
          <div className="card" key={index}>
            <div className="content">
              <div className="imgbox">
                <img src={member.img}></img>
              </div>
              <div className="contentbox">
                <h3>{member.name}</h3>
                <br />
                <p>{member.role}</p>
              </div>
            </div>
            <ul className="social">
              <li>
                <a href={member.social[0]}>
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href={member.social[1]}>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href={member.social[2]}>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
