import React, { Component } from 'react';
import './work.css';

export default class WorkItems extends Component{

    render(){

        return(
            <div className="work-items">
                {
                    this.props.works.map((item, index) => {
                        return <a href={item.url} className={`work-item ${item.size} ${item.text}`} key={item.id} data-aos="flip-down"  data-aos-delay="600" data-aos-once="true">
                            
                        <img className="work-img" src={item.img} />
                        <div className="work-cat">
                            <p>
                                {
                                    item.cat.map((catItem, index) => {
                                        return index!== 0 ? `, ${catItem}` : catItem 
                                    }) 
                                }
                            </p>
                        </div>
                        <div className="work-name">
                            <p>{item.name}</p>
                        </div>
                        <div className="work-legends">
                            {
                                item.legends.map((legend, index) => {
                                    return <div key={`${legend}_${item.id}`} className={`work-legend ${legend}`}></div>
                                })
                            }
                        </div>
                    </a>
                    })
                }
            </div>
        )
    }
}