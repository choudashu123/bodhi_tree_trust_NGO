import React from 'react'
import { donateCardData } from '../../data/Card/DonationCard/DonationCard'
import DonationCard from '../Card/DonationCard/DonationCard'


const DonationSection: React.FC = () => {
    return (
        <div>
            <div className="donation_cause container">
                <div className="row">
                    <h1 className="d-flex justify-content-center col-6">Latest Cause</h1>
                    <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis repellendus quis, tempore, ut eaque, magni quaerat impedit natus aut explicabo eius vel! Non.</p>
                </div>
            </div>
            <div className="container bg-success d-flex flex-wrap justify-content-center">
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
