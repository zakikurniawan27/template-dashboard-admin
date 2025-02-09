import { Col, Row } from "reactstrap";
import SalesChart from "../../components/SalesChart";
import Feeds from "../../components/Feeds";
import ProjectTables from "../../components/ProjectTable";
import Blog from "../../components/Blog";
import bg1 from "../../assets/images/bg/bg1.jpg";
import bg2 from "../../assets/images/bg/bg2.jpg";
import bg3 from "../../assets/images/bg/bg3.jpg";
import bg4 from "../../assets/images/bg/bg4.jpg";
import MainLayout from "../../layouts/MainLayout";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <Row>
          <Col sm="6" lg="6" xl="7" xxl="8">
            <SalesChart />
          </Col>
          <Col sm="6" lg="6" xl="5" xxl="4">
            <Feeds />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <ProjectTables />
          </Col>
        </Row>
        <Row>
          {BlogData.map((blg, index) => (
            <Col sm="6" lg="6" xl="3" key={index}>
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            </Col>
          ))}
        </Row>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
