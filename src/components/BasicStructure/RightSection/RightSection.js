import React, {Component} from 'react';
import * as style from './RightSection.css.js';
import BasicDetails from '../../Details/BasicDetails/BasicDetails.js';
class RightSection extends Component {
    render(){
        return(
            <div className={style.main}>
                <BasicDetails />
            </div>
        );
    }
}
export default RightSection;