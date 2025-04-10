import React from 'react'
import './GalleryCard.css'

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  overlay : string
}
const GalleryCard: React.FC<GalleryCardProps> = ({ image, title, description, overlay }) => {
  return (
    <div className="gallery_card">
      <div className={`overlay ${overlay}`}></div>
      <img src={image} alt={title} />
      <div className="gallery_card_body">
        <h3 className="gallery_card_title">{title}</h3>
        <p className="gallery_card_description">{description}</p>
      </div>
    </div>
  )
}
export default GalleryCard
