import { Row } from "react-bootstrap";
import DonationCard from "./DonationCard";

function RecentDonations(props){
    return props.donations && props.donations.length > 0 ? <div>
        {props.donations.map(donation => {
            return <Row className="cardRow">
                <DonationCard donation={donation}/>
            </Row>
        })}
    </div> 
    : <></>
}

export default RecentDonations;