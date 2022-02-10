import { Alert } from "react-bootstrap"

function DonationCard(props) {
    return <Alert className="noMarginAlert" show={true} variant="dark">
        <Alert.Heading>{props.donation.recipientName}</Alert.Heading>
        <p className="message">
            {props.donation.message ? props.donation.message : "No message."}
        </p>
        <hr />
        <strong>
            ${props.donation.amount}
        </strong>
    </Alert>
}
export default DonationCard