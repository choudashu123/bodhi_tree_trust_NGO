import React from 'react'
import GalleryCard from '../Card/GalleryCard/GalleryCard'
import { CardData } from '../../data/Card/GalleryCard/GalleryCard';
import './WorksCardSection.css'

const WorksCardSection: React.FC = () => {
  return (
    <div className="container d-flex flex-wrap justify-content-center cards-section">
      {CardData.map(card => (
        <GalleryCard
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          overlay={card.overlay}
        />
      ))}
    </div>
  );
};

export default WorksCardSection;

