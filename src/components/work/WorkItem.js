import React, { Component } from 'react';
import './workItem.css'
import AOS from 'aos'
import Slider from 'react-slick'

export default class WorkItem extends Component{

    state = {
        work: {},
        tagName: '',
    }

    componentDidMount(){
        AOS.init({
            duration: 1000
        })
        document.getElementsByTagName('body')[0].classList.add('light')
        const workTag = this.props.match.params.workTag
        workTag && this.setState({ tagName: workTag })

        console.log('work tag -', workTag )
    }



    render(){

        const settings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        };

        return (
            <div className="max-height">
                <section className="workDetail">
                    <div className="detail">
                        <p className="workTitle" data-aos="fade-in" data-aos-delay="400">7Rewards</p>
                        <div className="workLegends" data-aos="fade-up"  data-aos-delay="500" data-aos-once="true">
                            <a className="legend-link">
                                <div className="legend-icon appStore"></div>
                                <p className="legend-txt">Available on</p>
                                <p className="legend-txt-2">App Store</p>
                            </a>
                            <a className="legend-link">
                                <div className="legend-icon appStore"></div>
                                <p className="legend-txt">Available on</p>
                                <p className="legend-txt-2">App Store</p>
                            </a>
                            <a className="legend-link">
                                <div className="legend-icon appStore"></div>
                                <p className="legend-txt">Available on</p>
                                <p className="legend-txt-2">App Store</p>
                            </a>
                        </div>
                        <div className="workDesc" data-aos="fade-up"  data-aos-delay="700" data-aos-once="true">
                            Convenience now comes with a side of rewards.
                            
                            The 7Rewards mobile app is a delightful and effortless experience for all loyal 7-Eleven customers. Implemented islandwide and fully integrated with every point-of-sale system, all customers can simply scan their unique member barcode after every purchase and receive stamps that can be used to redeem any rewards of their choice.

                            Powered by a custom-made CMS, 7-Eleven can track and monitor their customers' purchasing and redemption behaviours to craft more palatable and desirable promotional campaigns or even conduct market surveys on new products before public launches all via a comprehensive dashboard.
                        </div>
                        <div className="workFeatures" data-aos="fade-up" data-aos-delay="800" data-aos-once="true">
                            <div className="feature_label">
                                <p>Key Features</p>
                            </div>
                            <div className="features">
                                <div className="feature-list">
                                    <ul>
                                        <li>Rewards award & redemption</li>
                                        <li>POS integration</li>
                                        <li>One CMS serving content to both 7Rewards mobile apps and 7-Eleven website</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-img">
                        <div className="detail-bubble" style={{ background: 'green'}}></div>
                        <Slider {...settings} className="detail-images">
                            <div data-aos="fade-in" data-aos-delay="400" data-aos-once="true">
                                <img className="detail-image" src="https://cdn.codigo.co/uploads/2018/04/7Eleven_04.png" />
                            </div>
                            <div>
                                <img className="detail-image" src="https://cdn.codigo.co/uploads/2018/04/7Eleven_04.png" />
                            </div>
                            <div>
                                <img className="detail-image" src="https://cdn.codigo.co/uploads/2018/04/7Eleven_04.png" />
                            </div>
                            <div>
                                <img className="detail-image" src="https://cdn.codigo.co/uploads/2018/04/7Eleven_04.png" />
                            </div>
                        </Slider>
                    </div>
                </section>
            </div>
        )
    }
}