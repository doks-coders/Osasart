import React, { useRef } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


const TimelineDemo = () => {
    const events1 = [
        { status: 'Learned How To Write Vue Apps', date: '15/10/2020 10:30', icon: 'pi pi-check', color: '#E4003B', image: 'game-controller.jpg' },
        { status: 'Worked as a Lead Developer for WhoCreatives', date: '15/10/2020 14:00', icon: 'pi pi-check', color: '#E4003B' },
        { status: 'Designed food application For Landmark University', date: '15/10/2020 16:15', icon: 'pi pi-check', color: '#E4003B' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#E4003B' }
    ];

    const events2 = [
        '2020', '2021', '2022', '2023'
    ];

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <div className='main-card-style'>
                <div className='card-title'>
                    {item.status}
                </div>
                <div className='card-subtitle'>
                    {item.date}
                </div>
                <div className='card-class'>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img style={{ marginTop: '24px', marginBottom: '24px' }} src={`Images/vue.png`} alt={item.name} width={'50%'} height="200px" className="shadow-1" />

                        </div>
                        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                        <Button style={{marginTop:'10px',marginBottom:'10px',}} color={'#E4003B'} label="Read more" className="p-button-outline"></Button>
                    </div>

                </div>
            </div>
        );
    };

    return (
        <div className="timeline-demo">

            {/*       
   <div className="card">
                <h5>Left Align</h5>
                <Timeline value={events1} content={(item) => item.status} />
            </div>

            <div className="card">
                <h5>Opposite Content</h5>
                <Timeline value={events1} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
            </div>
    */}
            <div className="card">

                <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                {/*align="alternate"*/}
            </div>


        </div>
    );
}

export default TimelineDemo