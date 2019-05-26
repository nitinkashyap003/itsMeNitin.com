import React , {Component} from 'react';
import * as style from './BasicDetails.css.js';
class BasicDetails extends Component {
    render = () =>{
        return(
            <div>
                <div className={style.HeadTitle}>
                    NITIN KASHYAP
                    <div className={style.subHeading}>REACT AND JAVA SPRING FRAMEWORK</div>
                </div>
                
            </div>
        );
    }
}

export default BasicDetails;