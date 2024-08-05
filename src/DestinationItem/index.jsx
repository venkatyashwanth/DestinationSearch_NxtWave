import "./index.css";

const DestinationItem = (props) => {
    const { destinationDetail } = props;
    return (
        <>
            <li className="destination-item">
                <div className="image-wrapper">
                    <img src={destinationDetail.imgUrl} alt={destinationDetail.name} />
                </div>
                <p className="destination-name">{destinationDetail.name}</p>
            </li>
        </>
    )
}

export default DestinationItem