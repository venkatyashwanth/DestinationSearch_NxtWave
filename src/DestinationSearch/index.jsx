import { Component } from "react";
import "./index.css";
import DestinationItem from "../DestinationItem";

class DestinationSearch extends Component {
    state = {
        searchInput: ''
    }
    handleChange = (event) => {
        this.setState({ searchInput: event.target.value })
    }
    render() {
        const { destinationsList } = this.props
        const { searchInput } = this.state;
        const searchResults = destinationsList.filter(eachDestination =>
            eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
        )
        return (
            <>
                <div className="appContainer">
                    <h1 className="title">Destination Search</h1>
                    <div className="search-box">
                        <input type="search" placeholder="Search" onChange={this.handleChange} value={searchInput} />
                        <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" />
                    </div>

                    <ul className="destination-list">
                        {
                            searchResults.map(destinationElement => (
                                <DestinationItem key={destinationElement.name} destinationDetail={destinationElement} />
                            ))
                        }
                    </ul>
                </div>
            </>
        )
    }
}

export default DestinationSearch