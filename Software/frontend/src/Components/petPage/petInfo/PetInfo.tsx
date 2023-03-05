import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
} from 'mdb-react-ui-kit';

const PetInfo = (props: {
    name: string,
    birthDate: Date,
    isDead: boolean,
}) => {

    // convert date string in the format YYYY-MM-DDT09:12:38.005Z to date object

    const getAge = (birthDate: Date) => {
        const today = new Date();
        const diff = Math.abs(today.getTime() - birthDate.getTime());
        return Math.floor(diff / (1000 * 3600 * 24));
    }

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
                        <MDBCardText className="text-muted">{
                            getAge(props.birthDate)
                        }</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Birthday</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText className="text-muted">{
                            (props.birthDate).toLocaleDateString()
                        }</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Status</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText style={props.isDead ? { color: 'red' } : { color: 'rgb(36, 203, 56)' }}>
                            {props.isDead ? 'Dead' : 'Alive'}</MDBCardText>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default PetInfo;