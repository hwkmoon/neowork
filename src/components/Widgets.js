import React from 'react';
import "../assets/css/widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Widgets() {
  const newsArticle = (heading, subtitle) => 
    (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
    )
  

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Neowork News</h2>
        <InfoIcon />
      </div>
      {newsArticle("New Tesla Model X", "Top news 2020")}
      {newsArticle("Sandbox Pre Alpha", "Metaverse")}
      {newsArticle("Bitcoin Breaks 80K", "Top news 2022")}
      {newsArticle("Is Redux too good", "Code 123")}
      {newsArticle("New Tesla Smartphone", "Top news 2022")}
    </div>
  )
}
