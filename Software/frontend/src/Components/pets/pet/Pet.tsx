import { Link } from 'react-router-dom'
import './Pet.css'
import Button from 'react-bootstrap/Button'
import { BsFillTrashFill } from 'react-icons/bs'

interface Props {
    _id: string
    name: string
    birthDate: Date
    focusLevel: number
    tirednessLevel: number
    happinessLevel: number
    isDead: boolean
    isSick: boolean
    handleDelete: (props: { _id: string }, event: React.MouseEvent<HTMLButtonElement>) => void
}

const Pet: React.FC<Props> = (props: Props) => {
    return (
    <div className="pet">
        <Link 
            to={'/pets/' + props._id} 
            style={{ textDecoration: 'none' }}
            state = {{
                _id: props._id,
                name: props.name,
                birthDate: props.birthDate,
                focusLevel: props.focusLevel,
                tirednessLevel: props.tirednessLevel,
                happinessLevel: props.happinessLevel,
                isDead: props.isDead,
                isSick: props.isSick
            }}>
            <h2>{props.name}</h2>
        </Link>
        <div className='focusLevel'>
            <h5>Focus Level: {props.focusLevel}</h5>
            <progress value={props.focusLevel} max="5"></progress>
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