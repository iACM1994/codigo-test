import React, { Component } from 'react'
import './work.css'
import works from '../../works.js'
import WorkItems from './WorkItems'
import AOS from 'aos'

class Work extends Component{

    state = {
        floatIconVisible : false,
        floatVisible : false,
    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].classList.add('light');
        AOS.init({
            duration: 1000
        })

        
        document.addEventListener('scroll', () => {
            const works = document.getElementById('works')
            const worksY = works.getBoundingClientRect().top
            const worksBot = document.body.clientHeight - ( works.offsetTop + works.offsetHeight )
            const worksPos = works.getBoundingClientRect().bottom - ( worksBot * 2 )

            if( worksY < -100 && worksPos > 0 ){    
                this.setState({ floatIconVisible : true })
            }else{
                console.log('called')
                this.setState({ floatIconVisible : false, floatVisible: false })
            }
        })
    }

    filterTirgger(){
        this.setState({ floatVisible : !this.state.floatVisible })
    }

    render(){ 
        const filters = [
            { name: 'all', selected: true },
            { name: 'food & beverage', selected: false },
            { name: 'media', selected: false },
            { name: 'transports & logistics', selected: false },
            { name: 'banking & finance', selected: false },
            { name: 'lifestyle', selected: false },
            { name: 'co-incubation', selected: false },
            { name: 'healthcare', selected: false },
            { name: 'retail & entertainment', selected: false },
            { name: 'telco', selected: false },
            { name: 'others', selected: false },
            { name: 'start-ups', selected: false },
        ]

        const legends = [
            { icon: 'app', name: 'App'},
            { icon: 'web', name: 'Web'},
            { icon: 'cms', name: 'cms'},
            { icon: 'uiux', name: 'ui/ux'}
        ]

        const Filters = ({filters}) => {
            return <div className="filter-group" data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
                {filters.map((item, index) => {
                   return <div key={`${item.name}_${index+1}`} className={`filter-item ${item.selected ? 'selected' : ''}`}>{item.name}</div>
                })}
            </div>
        }

        const Legends = ({legends}) => {
            return <div className="legend-items">
                {
                    legends.map((item, index) => {
                        return <div className="legend-item" key={`${item.name}_${index + 1 }`}>
                        <div>
                            <div className={`legned-icon ${item.icon}`}></div>
                            <p className="legend-text">{item.name}</p>
                        </div>
                    </div>
                    })
                }
            </div>
        }

        return(
            <div className="max-height">
                <section className={`float-filter ${this.state.floatVisible ? 'visible' : 'invisible'}`} id="float-filter">
                    <div className="filter-box">
                        <div className={`float-control ${this.state.floatIconVisible ? 'visible' : 'invisible' }`} onClick={() => this.filterTirgger()}>
                            {
                                !this.state.floatVisible ? 
                                    <div className="control-text">Filter</div>
                                :
                                <div className="cross-icon">
                                    <div className="stroke"></div>
                                    <div className="stroke"></div>
                                </div>
                            }
                        </div>
                        <div className="float-filters">
                            {
                                filters.map((item, index) => {
                                    return <div key={`${item.name}__${index+1}`} className={`float-filter-item  ${item.selected ? 'selected' : ''}`}>{item.name}</div>
                                })
                            }
                        </div>
                        <div className="float-legend">
                            <p className="legend-title">legend</p>
                            <Legends legends={legends} />
                        </div>
                    </div>
                </section>
                <section className={`work`}>
                    <div className="work-title">
                        <p className="work-title-txt" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Here's 5% of</p>
                        <p className="work-title-txt" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Our published work.</p>
                        <p className="work-title-txt text-red" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">See 100% of our power.</p>
                    </div>
                    <div className="filters">
                        <Filters filters={filters} />
                        <div className="legend" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="500">
                            <p className="legend-title">legend</p>
                            <Legends legends={legends} />
                        </div>
                    </div>
                </section>
                <section className={`works ${this.state.floatVisible ? 'expended': ''}`} id="works">
                    <WorkItems works={works} />
                </section>
            </div>
        )
    }
}

export default Work;