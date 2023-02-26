import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
} from 'mdb-react-ui-kit';

const PetInfo = (props: {
    name: string,
    birthDate: string,
    isDead: boolean,
}) => {

    // convert date string in the format YYYY-MM-DDT09:12:38.005Z  to date object
    const stringToDate = (dateString: string) => {
        const dateArray = dateString.split('-');
        const year = parseInt(dateArray[0]);
        const month = parseInt(dateArray[1]) - 1;
        const day = parseInt(dateArray[2]);
        return new Date(year, month, day);
    }

    // get age in days from birthdate
    const getAge = (birthDate: string) => {
        const today = new Date();
        const birthDateDate = stringToDate(birthDate);
        const diff = Math.abs(today.getTime() - birthDateDate.getTime());
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
                            stringToDate(props.birthDate).toLocaleDateString()
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