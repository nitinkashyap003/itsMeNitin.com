import React from 'react';
// import ImageBackground from './ImageBackground/ImageBacksground.js';
import MastHead from './MastHead/Masthead.js';
import Name from './Name/Name.js';
class Website extends React.Component {
    render(){
        return <div style={{display:'flex',padding:'36px 0px 0px 24px', flexDirection:'row', justifyContent:'space-between', width:'1280px'}}>
            <MastHead/>
            <Name/>
        </div>;
    }
}
export default Website;