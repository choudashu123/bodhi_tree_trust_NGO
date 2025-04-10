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
    <div className="card">
      <div className={`overlay ${overlay}`}></div>
      <img src={image} alt={title} />
      <div className="card-body">
        <h3 className="text-color-white">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default GalleryCard
