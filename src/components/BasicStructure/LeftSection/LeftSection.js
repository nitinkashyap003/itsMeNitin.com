import React, {Component} from 'react';
import * as style from './LeftSection.css.js';
import { TouchableOpacity } from 'react-native';
import  {Icon} from 'antd';
class LeftSection extends Component {
    render(){
        return(
            <div>
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
                            marginTop:'32px',
                            marginLeft:'32px',
                            marginBottom:'32px',
                            }}
                    >
                        <Icon name="chevron-right"  size={30} color="#01a699" />
                    </TouchableOpacity>
                    <div className={style.smallLeftCircle} style={{padding:'32px 0px'}}>
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
                        <div style={{paddingTop:'124px'}}>
                            <TouchableOpacity
                                style={{
                                        borderWidth:1,
                                        borderColor:'rgba(0,0,0,0.2)',
                                        backgroundColor:'#fff',
                                        width:'32px', height:'32px', borderRadius:'16px',
                                    }} 
                            >
                                <Icon name={"left"}  size={30} color="#01a699" />
                            </TouchableOpacity>
                        </div>
                    </div>
                    <div className={style.smallLeftCircle} style={{padding:'32px 0px'}}>
                         <div style={{paddingTop:'40px'}}>
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
                        </div>
                        <div style={{paddingTop:'36px'}}>
                            <TouchableOpacity
                                style={{
                                        borderWidth:1,
                                        borderColor:'rgba(0,0,0,0.2)',
                                        backgroundColor:'#fff',
                                        width:'32px', height:'32px', borderRadius:'16px',
                                    }} 
                            >
                                <Icon name={"left"}  size={30} color="#01a699" />
                            </TouchableOpacity>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LeftSection;