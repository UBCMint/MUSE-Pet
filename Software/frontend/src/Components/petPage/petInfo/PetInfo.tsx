import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";

const PetInfo = (props: { name: string; birthDate: Date; isDead: boolean }) => {
  const getAge = (birthDate: Date) => {
    const today = new Date();
    birthDate = new Date(birthDate);
    return Math.floor(
      (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  const formatDate = (date: Date) => {
    date = new Date(date);
    return date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <MDBCard className="mb-4">
      <MDBCardBody>
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Pet Name</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{props.name}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Age (Days)</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">
              {getAge(props.birthDate)}
            </MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Birthday</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">
              {formatDate(props.birthDate)}
            </MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Status</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText
              style={
                props.isDead ? { color: "red" } : { color: "rgb(36, 203, 56)" }
              }
            >
              {props.isDead ? "Dead" : "Alive"}
            </MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default PetInfo;
