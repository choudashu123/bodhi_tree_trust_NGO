import React from 'react'
import "./DonationCard.css"
interface DonationCardProps {
    main_photo: string,
    description: string,
    donation_amount: number,
    pp: string,
    donator_name: string,
    donation_category: string
}
const DonationCard: React.FC<DonationCardProps> = ({ main_photo, description, donation_amount, pp, donator_name, donation_category }) => {
    return (
            <div className="donation_card">
                <img src={main_photo} ></img>
                <div className="dcb">
                    <div className="card-title donation_category">{donation_category}</div>
                    <p>{description}</p>
                    <p>Donated : <i class="fa-solid fa-dollar-sign"></i> {donation_amount}</p>
                    <div className="person_info d-flex flex-row align-items-center">
                        <img src={pp} className="donation_pp"></img>
                        <p className="mb-0 ms-2">{donator_name}</p>
                    </div>
                </div>
            </div>
    )
}
export default DonationCard