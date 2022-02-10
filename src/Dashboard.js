import React from "react";
import RecentDonations from "./RecentDonations";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            donations: [],
            pollingCount: 0,
            delay: 600000
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
            .then(data => this.setState({donations: data}));
    }

    render(){
        return <div className="cardFrame">
                <RecentDonations donations={this.state.donations}/>
            </div>
    }
}

export default Dashboard;