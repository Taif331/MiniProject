
import Posts from "./Posts";
import SharePosts from "./SharePost";
import User from "./User";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap"; 
import { Link } from 'react-router-dom';
import Medical from '../Images/Medical.jpeg';
import Maths from '../Images/Maths.jpeg';
import Literature from '../Images/Literature.jpeg';
import Science from '../Images/Science.jpeg';
import History from '../Images/History.jpeg';
import Music from '../Images/Music.jpeg';

const Home = () => {
  // const email = useSelector((state) => state.users.user.email);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!email) {
  //     navigate("/login");
  //   }

  // }, [email])
    const boxesData = [
      { 
        title: 'Medical books', 
        description: 'The most famous doctors of the present and past era and their books', 
        imageUrl: Medical,
        link: '/MedicalBooks'
      },
      { 
        title: 'Math books', 
        description: 'Philosophers interested in root science', 
        imageUrl: Maths,
        link: '/MathBooks'
      },
      { 
        title: 'Literature books', 
        description: 'Literature, grammar, rhetoric and poetry', 
        imageUrl: Literature,
        link: '/LiteratureBooks'
      },
      { 
        title: 'Science books', 
        description: 'Earth, space, plant and psychological sciences', 
        imageUrl: Science,
        link: '/ScienceBooks'
        
      },
      { 
        title: 'History books', 
        description: 'Writings of historical travelers and history of countries', 
        imageUrl: History,
        link: '/HistoryBooks'
      },
      { 
        title: 'Music books', 
        description: 'Various publications on Beethoven and music schools', 
        imageUrl: Music,
        link: '/MusicBooks'
      }
    ];
   
    return (
      <div className="container">
      
      <Row>
          <Col md={3}></Col>
          <Col md={9}>
              <div className="book-container">
                  {boxesData.map((box, index) => (
                      <div className="box" key={index}>
                        <Link>
                          <img src={box.imageUrl} alt={box.title} className="box-image" />
                          </Link>
                          <h2>{box.title}</h2>
                          <p>{box.description}</p>
                      </div>
                  ))}
              </div>
          </Col>
      </Row>

     
      {/* <Row>
          <Col md={3}>
              <User />
          </Col>
          <Col md={9}>
              <SharePosts />
          </Col>
      </Row> 

      
       <Row>
          <Col md={3}></Col>
          <Col md={9}>
              <Posts />
          </Col>
      </Row> */}
  </div>
);
};
  export default Home;
