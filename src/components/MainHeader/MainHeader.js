import React, {Component} from 'react';
import * as style from './MainHeader.css.js';
// import {Icon} from 'antd';
import '../index.css';
import { Button, Icon } from 'antd';
class MainHeader extends Component {
    render(){
        return(
        <header className={style.header}>
            <div className={style.nameIcon}>
                <span style={{color:'#004B81', textShadow:'0.5px 0.5px 1px #81B6DD'}}>NITIN</span><span style={{color:'#0088C4',textShadow:'0.5px 0.5px 2px #D6F2FF'}}>KASHYAP</span>
            </div>
            
            <div>
                <Button className={style.button}>
                    <div  style={{display: 'flex'}}>See Resume  
                          <div style={{paddingTop:'2px'}}><Icon type="right" /></div>  
                    </div>
                </Button>
           </div>
        </header>
        );
    }
}
export default MainHeader