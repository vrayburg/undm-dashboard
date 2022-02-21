import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Countdown from "react-countdown";
import Leaderboard from "./Leaderboard";
import RecentDonations from "./RecentDonations";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            donations: [],
            pollingCount: 0,
            delay: 5000,
            teamLeaders: []
        }

    }

    componentDidMount(){
        this.interval = setInterval(this.poll, this.state.delay);
        this.poll();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    poll = () => {
        this.setState({pollingCount: this.state.pollingCount + 1});
        fetch('https://events.dancemarathon.com/api/events/4589/donations?limit=5')
            .then(response => response.json())
            .then(data => {
                this.setState({donations: data})
            });
    }

    render(){
        return <><Row className="filledRow">
            <div className="donationTable">
                <RecentDonations donations={this.state.donations}/>
            </div>
        </Row>
        <Row style={{display: "inline-block"}}>
            <div className="countdown">
                <span>🚀</span>
                <Countdown date={new Date("Feb 26, 2022 23:45:00")} daysInHours={true}/>
                <span style={{padding: 0}}> until Huskerthon blastoff!</span>
                <span>🚀</span>
            </div>
        </Row>
        {/* <Row>
            <div className="">
                <Leaderboard title={"Test"} leaders={this.state.teamLeaders}/>
            </div>
        </Row>*/}</>
    }
}

export default Dashboard;