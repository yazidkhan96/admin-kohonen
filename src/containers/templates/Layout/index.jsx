import { Container } from "@material-ui/core";
import Navbar from "../../../containers/organism/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
