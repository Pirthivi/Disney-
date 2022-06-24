import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer.js";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
// import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../app/features/Movies/movieSlice";
import { selectUserName } from "../app/features/users/userSlice";
import axios from "../axios.js";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/movie_data");
      req.data.map((data) => {
        // console.log(data);
        switch (data.type) {
          case "recommend":
            // console.log(recommends)
            recommends = [...recommends, { id: data._id, ...data }];
            break;
          case "new":
            newDisney = [...newDisney, { id: data._id, ...data }];
            break;
          case "original":
            originals = [...originals, { id: data._id, ...data }];
            break;
          case "trending":
            trendings = [...trendings, { id: data._id, ...data }];
            break;
          default:
            return "nothing";
        }
        // return data;
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trendings,
        })
      );
      // console.log("hi")
      recommends = [];
      newDisney = [];
      trendings = [];
      originals = [];
    }

    fetchData();
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 20px;
  padding: 0 calc(3.5vw + 5px);

  &::before {
    background-image: url("/images/home-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    content: "";
    inset: 0px;
    position: absolute;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
