import React from 'react';
import { Link } from '@reach/router';

// import custom styles;
import './launch-item.css';

export default (props) => {
    const { data } = props;

    return (
        <React.Fragment>
            {data.launches.map(item => {
                // console.log(">>> Launch Item <<<", item);
                return (
                    <div className="launchItem__section">
                        <div key={item.flight_number} className="launchItem__container">
                            <div className="launchItem__title">
                                <h4>{item.flight_number}.
                                    Mission:
                                    <span className={item.launch_success ? 'text-success' : 'text-danger'}> {item.mission_name}</span>
                                </h4>
                                <p className="text-muted">Date: {item.launch_year}</p>
                            </div>
                            <div className="launchItem__details">
                                <Link to={`/launch/${item.flight_number}`} className="btn btn-secondary">Details</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
};
