import React from 'react';
import "../../assets/css/feed.css"

export default function InputOption({Icon, title, color}) {
    return (
        <div className='inputOption'>
            <Icon style={{ color: color}} />
            <h4>{title}</h4>
        </div>
    )
}
