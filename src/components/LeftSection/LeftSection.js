import React, {Component} from 'react';
import * as style from './LeftSection.css.js';
import { TouchableOpacity } from 'react-native';
import  {Icon} from 'antd';
class LeftSection extends Component {
    render(){
        return(
            <div className={style.main}>
                <TouchableOpacity
                    style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'188px',
                        height:'188px',
                        backgroundColor:'#fff',
                        borderRadius:'94px',
                        margin:'32px'
                        }}
                >
                     <Icon name="chevron-right"  size={30} color="#01a699" />
                </TouchableOpacity>
               {/* <div style={{margin:'32px 12px 0px 0px'}}>
                <TouchableOpacity
                    style={{
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            backgroundColor:'#fff',
                            width:'32px', height:'32px', borderRadius:'16px',
                            margin:'72px 4px 8px 0px'
                            }} 
                    >
                    <Icon name={"left"}  size={30} color="#01a699" />
                </TouchableOpacity>
                <TouchableOpacity
                style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        backgroundColor:'#fff',
                        width:'32px', height:'32px', borderRadius:'16px',
                        margin:'72px 4px 8px 0px'
                        }} 
                >
                <Icon name={"left"}  size={30} color="#01a699" />
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    backgroundColor:'#fff',
                    width:'32px', height:'32px', borderRadius:'16px',
                    margin:'72px 4px 8px 0px'
                    }} 
            >
            <Icon name={"left"}  size={30} color="#01a699" />
        </TouchableOpacity>
        <TouchableOpacity
        style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                backgroundColor:'#fff',
                width:'32px', height:'32px', borderRadius:'16px',
                margin:'72px 4px 8px 0px'
                }} 
        >
        <Icon name={"left"}  size={30} color="#01a699" />
    </TouchableOpacity>
               </div> */}
            </div>
        );
    }
}
export default LeftSection;