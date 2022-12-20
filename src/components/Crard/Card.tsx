import React from 'react';

interface Props {
    title: string;
}

const Card: React.FC<Props> = ({ title }) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <div className="input-group-text">
                                <input type="checkbox"  />
                            </div>
                            <h5 className="form-control" style={{ margin: 0 }}>{title}</h5>
                        </div>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;