import React from 'react';
import { Icon } from 'antd';
import './Mashead.css';
class Masthead extends React.Component {
    render(){
        return <div className="basic">
                <div>
                    <Icon style={{ color: '#66FCF1'}} type="menu" />
                    <span style={{paddingLeft:'8px'}}>MENU</span>
                </div>
            </div>;
    }
}
export default Masthead;