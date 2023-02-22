import { MDBCard } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/esm/Button';
import EditModal from '../editModal/EditModal';
import { FiEdit2 } from 'react-icons/fi';


const MainCard = (props: {
    name: string;
    isDead: boolean;
    handleShow: () => void;
    showModal: boolean;
    toggleModal: () => void;
    changePetData: (name: string, status: boolean) => void;
}) => {

    return (
        <MDBCard className="mb-4">
        <div className="text-center">
            {/* // this where the pet animation will go
                will this be saved to the database?
                or will it be a random animation that the user can select from?
             */}
            <img
                src="https://airnfts.s3.amazonaws.com/nft-images/20210623/Animal_Art_PandaNFT_1624459776108.png"
                alt="avatar"
                className="rounded-circle"
                style={{
                    width: '250px',
                    marginTop: '30px',
                    border: props.isDead ? '3px solid red' : '3px solid rgb(36, 203, 56)'
                }}
            />
            <div className="d-flex justify-content-center mt-2 mb-2">
                <Button className="edit-btn" variant='info'
                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                    onClick={props.handleShow}>
                    <FiEdit2 />
                </Button>
                <EditModal
                    isOpen={props.showModal}
                    toggle={props.toggleModal}
                    changePetData={props.changePetData}
                />
            </div>
        </div>
    </MDBCard>

    )
}

export default MainCard