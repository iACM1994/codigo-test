import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{

    render(){
        return(
            <div className="footer" id="footer">
                <div className="footer-title">
                    <p>Let's have a chat</p>
                </div>
                <div className="footer-items">
                    <div className="f-item">
                        <div className="f-text">
                            <span>Build</span>
                            <div>Help you build something</div>
                        </div>
                    </div>
                    <div className="f-item">
                        <div className="f-text">
                            <span>Build</span>
                            <div>Help you build something</div>
                        </div>
                    </div>
                    <div className="f-item">
                        <div className="f-text">
                            <span>Build</span>
                            <div>Help you build something</div>
                        </div>
                    </div>
                    <div className="f-item">
                        <div className="f-text">
                            <span>Build</span>
                            <div>Help you build something</div>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/codigo.co/" target="_blank">
                        <img src="https://www.codigo.co/img/icons/social-facebook.svg" width="12" height="22" />
                    </a>
                    <a href="https://twitter.com/CodigoApps" target="_blank" >
                        <img src="https://www.codigo.co/img/icons/social-twitter.svg" width="23" height="18"/>
                    </a>
                    <a href="https://www.instagram.com/hellocodigo/" target="_blank" >
                        <img src="https://www.codigo.co/img/icons/social-instagram.svg" width="21" height="19" />
                    </a>
                    <a href="https://www.linkedin.com/company/codigo-pte-ltd" target="_blank">
                        <img src="https://www.codigo.co/img/icons/social-linkedIn.svg" width="20" height="20" />
                    </a>
                </div>
                <div className="copyrights">
                    Copyright © Codigo - Mobile App Developer Singapore
                </div>
                <div className="contacts">
                    +65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971
                </div>
            </div>
        )
    }
}

export default Footer;