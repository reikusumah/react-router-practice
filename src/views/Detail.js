import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "./NotFound";

// function Detail(props) {
//   const [content, setContent] = useState("");

//   const contentId = props.match.params.id;

//   useEffect(() => {
//     const data = content.find((item) => item.id === parseInt(contentId));
//     setContent({ data });
//   });

//   return (
//     <MainLayout>
//       <h2>Detail</h2>
//       {content}
//     </MainLayout>
//   );
// }

class Detail extends React.Component {
  state = {
    skills: [
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
    ],
    data: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const data = this.state.skills.find((item) => item.id === parseInt(id));

    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <MainLayout>
          <div style={container}>
            <h2>Detail</h2>
            <div style={card}>
              <img src={data.image} alt={data.name} style={detailImg} />
              <p>{data.description}</p>
            </div>
            <Link to="/" style={btnHome}>
              Back to Home
            </Link>
          </div>
        </MainLayout>
      );
    } else {
      return <NotFound />;
    }
  }
}

export default Detail;

// styling
const container = {
  padding: "0 6rem",
};

const card = {
  display: "flex",
  flexDirection: "row",
  gap: "1em",
  width: "100%",
};

const detailImg = {
  width: "300px",
  height: "300px",
};

const btnHome = {
  display: "inline-block",
  marginTop: "1.5rem",
  backgroundColor: "#655D8A",
  padding: "1em",
  textDecoration: "none",
  color: "#fff",
};
