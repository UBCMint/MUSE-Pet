import { Link } from 'react-router-dom'
import './Pet.css'
import Button from 'react-bootstrap/Button'
import { BsFillTrashFill } from 'react-icons/bs'

interface Props {
    // everything from PetModel.ts but with the addition of handleDelete
    _id: string
    name: string
    focusLevel: number
    happinessLevel: number
    birthDate: string
    isDead: boolean
    isSick: boolean
    handleDelete: (props: { _id: string }, event: React.MouseEvent<HTMLButtonElement>) => void
}

const Pet: React.FC<Props> = (props) => {
    return (
    <div className="pet">
        <Link 
            to={'/pets/' + props._id} 
            style={{ textDecoration: 'none' }}
            state = {{
                _id: props._id,
                name: props.name,
                focusLevel: props.focusLevel,
                happinessLevel: props.happinessLevel,
                birthDate: props.birthDate,
                isDead: props.isDead,
                isSick: props.isSick
            }}>
            <h2>{props.name}</h2>
        </Link>
        <div className='focusLevel'>
            <h5>Focus Level: {props.focusLevel}</h5>
            <progress value={props.focusLevel} max="100"></progress>
        </div>
        <div className='deleteButton'>
            <Button onClick={
                (event: React.MouseEvent<HTMLButtonElement>) => {
                    props.handleDelete(props, event)
                }
             } variant="danger"><BsFillTrashFill /></Button>
        </div>
    </div>
    )
}

export default Pet