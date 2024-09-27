import { Container } from "reactstrap";
import Header from "../components/Headers";
import Sidebar from "../components/SideBar";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="pageWrapper d-flex">
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        <div className="contentArea">
          <Container className="p-2">{children}</Container>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
