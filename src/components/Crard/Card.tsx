import React from 'react';

interface Props {
    title: string;
    status: boolean;
    remove: () => void;
    changeBox: () => void;
};

const Card: React.FC<Props> = ({ title , remove, status, changeBox}) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <div className="input-group-text">
                                <input type="checkbox" defaultChecked={status} onChange={changeBox}/>
                            </div>
                            <h5 className="form-control" style={{ margin: 0 }}>{title}</h5>
                        </div>
                        <button className="btn btn-primary" onClick={remove}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;