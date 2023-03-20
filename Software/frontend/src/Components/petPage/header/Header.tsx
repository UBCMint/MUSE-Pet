import {
  MDBCol,
  MDBRow,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Header = (props: { name: string }) => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
          <MDBBreadcrumbItem>
            <Link to="/" style={{ color: "#32cec6" }}>
              Home
            </Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
            <Link to="/pets" style={{ color: "#32cec6" }}>
              Pets
            </Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>{props.name}</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </MDBCol>
    </MDBRow>
  );
};

export default Header;
