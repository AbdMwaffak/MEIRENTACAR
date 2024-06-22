import React from 'react';
import './service.css';

const Service = ({ title, description }) => {
  return (
    <section>
      <div>
        <h2 className='title'>
          {' '}
          Best Luxury Car Rental Services Near You in Dubai{' '}
        </h2>
        <div className='service-div'>
          <p className='description'>
            Searching for a ‘luxury car rental near me’ will bring your many
            random results. MEI Car Rental Dubai is the best rent a car service
            provider for all requirements. With the most extensive range of
            sports cars, luxury car rental solutions, SUVs, and vehicles of all
            types, we have been fulfilling car dreams in the city for over a
            decade. Rent a luxury car in Dubai today and find the best solution
            for business rental requirements or private hire needs in the city.
            We are the leading Dubai luxury car rental company offering the best
            brand models for all requirements. Exceptional services including
            pick and drop with chauffeur, quick delivery, and free collection
            have made us the top service providers in the city. From
            budget-friendly rent a car Dubai services to the most luxurious, and
            expensive exotic car hire, we have all options available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
