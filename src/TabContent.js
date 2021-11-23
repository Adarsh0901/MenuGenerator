import React, { Fragment, useState, useEffect } from 'react';
import './index.css';

const TabContent = ({children, active=0}) => {
    const [activeTab, setActiveTab] = useState(active)
    const [data, setData] = useState(Object.values(children)[0])

    const handleClick = (res) => {
        setData(res);
    }
    useEffect(() => {
        setActiveTab(0);
        setData(Object.values(children)[0]);
    }, [children])
    return (
        <Fragment>
            <div className="d-flex align-items-start container">
                <div className="nav flex-column nav-pills me-3" aria-orientation="vertical">
                <button className="nav-link active" type="button" role="tab" disabled >Depth 2 keys</button>
                    {children.map((res,indx) => 
                        <div onClick={() => handleClick(res)} key={indx}>{Object.keys(res).map((newres,index) => <button className={`nav-link ${index === activeTab ? "active" : ""}`} type="button" role="tab"  key={index} onClick={() => setActiveTab(index)}>{newres}</button>)}</div>
                    )}
                </div>
                <div className="tab-content">
                    <textarea type="textarea" value={JSON.stringify(Object.values(data)[activeTab])} disabled rows="25" cols="90"/>
                </div>
            </div>
        </Fragment>
    )
}

export default TabContent
