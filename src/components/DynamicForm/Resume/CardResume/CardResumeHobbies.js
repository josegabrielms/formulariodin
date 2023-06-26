import { Card } from "react-bootstrap";
import "./CardResume";
export default function CardResumeHobbies(props) {
    const {subtitle, hobbiesStorage, additionalHobbie}=props;

    return (
        <div>
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle>
                        <b>{subtitle}</b>
                    </Card.Subtitle>
                    <ul>
                        {hobbiesStorage.map((hobbie, index)=>(
                            <li key={index}>{hobbie.label}</li>
                        ))}
                    </ul>
                    <Card.Body>
                        <Card.Subtitle>
                            <b>Your Additional Hobbie is: </b>
                        </Card.Subtitle>
                        <Card.Text><li>{additionalHobbie}</li></Card.Text>
                    </Card.Body>
                </Card.Body>
            </Card>
        </div>
    );
}