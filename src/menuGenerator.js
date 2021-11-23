import React,{useState} from 'react';
import data from './data.json';
import TabContent from './TabContent';
import './index.css';

const MenuGenerator = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [childData, setChildData] = useState(Object.values(data[activeTab]));

    const handleclick = (tab,indx) => {
        setChildData(Object.values(tab));
        setActiveTab(indx);
    }

    return (
        <div className="container">
        <div className="text-center">
            <h1>Menu Generator</h1>
            <div className="row text-left">
                <div className="w-100">
                    <ul className="nav nav-tabs">
                        {data.map((tab, indx) => (
                            <li className="nav-item" key={indx}>
                                <a className={`nav-link ${indx === activeTab ? "active" : ""}`} href="#" onClick={() => handleclick(tab,indx)}>
                                    {Object.keys(tab)[0]}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content p-3 tab-con">
                        <TabContent children={childData}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MenuGenerator;
