import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
            <div className="p-footer">About</div>
            <div className="p-footer">States</div>
            <div className="p-footer">Cities</div>
            <div className="p-footer">Contact</div>
            <div className="copyright">&copy;copyright</div>
            </div>
        );
    }
}

export default Footer;