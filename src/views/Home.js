import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const skills = [
  {
    id: 1,
    name: "Javascript",
    description: "Javascript description",
    image: require("../images/javascript.webp"),
  },
  {
    id: 2,
    name: "ReactJS",
    description: "ReactJS description",
    image: require("../images/reactjs.webp"),
  },
  {
    id: 3,
    name: "VueJS",
    description: "VueJS description",
    image: require("../images/vuejs.webp"),
  },
  {
    id: 4,
    name: "Svelte",
    description: "Svelte description",
    image: require("../images/svelte.webp"),
  },
];

function Home() {
  return (
    <MainLayout>
      <h2 style={title}>Home</h2>
      <div style={container}>
        {skills
          ? skills.map((item) => {
              return (
                <div key={item.id} style={card}>
                  <Link to={`/detail/${item.id}`}>
                    <img src={item.image} style={img} alt={item.name} />
                    <h3>{item.name}</h3>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </MainLayout>
  );
}

export default Home;

const title = {
  padding: "0 6rem",
};

const container = {
  display: "flex",
  padding: "0 6rem",
  justifyContent: "space-between",
  flexDirection: "row",
};

const card = {
  width: "20%",
  height: "15rem",
  textAlign: "center",
};

const img = {
  width: "300px",
  height: "300px",
};
