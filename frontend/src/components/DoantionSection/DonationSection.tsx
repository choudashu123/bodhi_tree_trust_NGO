import React from 'react'
import { donateCardData } from '../../data/Card/DonationCard/DonationCard'
import DonationCard from '../Card/DonationCard/DonationCard'
import './DonationSection.css'


const DonationSection: React.FC = () => {
    return (
        <div>
            <div className="donation_cause container py-5">
  <div className="text-center">
    <h1 className="display-5 fw-bold cause-title mb-3">Latest Cause</h1>
    <p className="text-muted cause-description w-75 mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis repellendus quis, tempore, ut eaque, magni quaerat impedit natus aut explicabo eius vel! Non.
    </p>
  </div>
</div>

            <div className="container d-flex flex-wrap justify-content-center">
                {donateCardData.map(card => (
                    <DonationCard
                        main_photo={card.image}
                        description={card.description}
                        donation_amount={card.donation_amount}
                        pp={card.donator_profile_photo}
                        donator_name={card.donator_name}
                        donation_category={card.donation_category}
                    />

                ))}
            </div>
        </div>
    )
}

export default DonationSection
