import { FaWhatsapp } from 'react-icons/fa';
import { GiPassport } from 'react-icons/gi';
import { HiOutlineIdentification } from 'react-icons/hi2';
import { PiIdentificationCardThin } from 'react-icons/pi';
import card from '../imge/card.PNG';

const styleIcons = {
  color: '#d79a3d',
  fontSize: '32px',
  width: '50px',
  marginLeft: '5px',
};
const ulStyles = {
  listStyle: 'none',
};

const liStyle = {
  display: 'inline',
};
const FAQs = [
  {
    id: 1,
    label: 'What documents do I need to rent a car in Dubai?',
    renderContent: () => {
      return (
        <div>
          <h3>For Local UAE Residents :</h3>
          <ul style={ulStyles}>
            <li style={liStyle}>
              <GiPassport style={styleIcons} />
              Valid Passport Copy
            </li>
            <li style={liStyle}>
              <HiOutlineIdentification style={styleIcons} />
              Valid UAE Driving License
            </li>
            <li style={liStyle}>
              <PiIdentificationCardThin style={styleIcons} />
              Copy of Emirates ID
            </li>
          </ul>
          <br />
          <h3>For Foreign Tourists in Dubai :</h3>
          <ul style={ulStyles}>
            <li style={liStyle}>
              <GiPassport style={styleIcons} /> Valid Passport Copy
            </li>
            <li style={liStyle}>
              <PiIdentificationCardThin style={styleIcons} /> Copy of ID
            </li>
            <li style={liStyle}>
              <HiOutlineIdentification style={styleIcons} /> Valid Driving
              License
            </li>
          </ul>
        </div>
      );
    },
  },

  {
    id: 2,
    label: 'How Can I Find A Car For Rent Near Me In Dubai?',
    renderContent: () => {
      return (
        <p>
          With technology at your fingertips, distances are no longer an issue.
          Book your dream car from MEI Car Rental anytime and we will deliver
          your car anywhere in the city.
        </p>
      );
    },
  },
  {
    id: 3,
    label: 'How Can I Extend My Rental Period Or Modify My Reservation?',
    renderContent: () => {
      return (
        <p>
          If you need to extend your rental period or make changes to your
          reservation, you should contact us
          <a
            href={`https://wa.me/+971566634661?text=Hello MEI I'd like to make some changes to my reservation`}
            target='blank'
          >
            <FaWhatsapp style={styleIcons} />
          </a>
        </p>
      );
    },
  },
  {
    id: 4,
    label: 'What Is The Minimum Age To Rent A Car In Dubai?',
    renderContent: () => {
      return (
        <p>
          There is no age restriction, you just need to have the required
          documents. First FAQ 👆
        </p>
      );
    },
  },
  {
    id: 5,
    label: 'How Do I make a reservation With MEI Car Rentals?',
    renderContent: () => {
      return (
        <div>
          After finding your favorite car for rent, simply click on your
          preferred contact method below the car card
          <br />
          <img
            style={{ width: '400px', height: '300px' }}
            src={card}
            alt='car-ex'
          />
          <br />
          <br />
          Or You Can Contact Us Directly On Whatsapp :
          <a
            href={`https://wa.me/+971566634661?text=Hello MEI I'd like to make some changes to my reservation`}
            target='blank'
          >
            <FaWhatsapp style={styleIcons} />
          </a>
          For Non Existing Cars or More Details
        </div>
      );
    },
  },
  {
    id: 6,
    label:
      'What Should I Do In Case Of An Accident (God Forbid) Or Breakdown With The Rental Car?',
    renderContent: () => {
      return (
        <p>
          In the event of an accident or breakdown, contact Us immediately . We
          provide roadside assistance and guidelines for handling such
          situations.
        </p>
      );
    },
  },
  {
    id: 7,
    label: 'How To Rent Luxury Cars In Dubai?',
    renderContent: () => {
      return (
        <p>
          Luxury car rental Dubai is a very easily accessible service. MEI Car
          Rental is one of the top Dubai luxury car rental experts. Let us know
          the car you want to hire. We will make it available at your desired
          location anywhere in the city.
        </p>
      );
    },
  },
  {
    id: 8,
    label: 'How Much To Rent Luxury Car In Dubai?',
    renderContent: () => {
      return (
        <p>
          The cost of renting a luxury car in Dubai can vary depending on
          several factors such as the type of luxury car, rental duration,
          season, and additional services or insurance options chosen. you can
          check the prices in our website
        </p>
      );
    },
  },

  {
    id: 9,
    label: 'What Are The Benefits Of Renting Car From MEI Car Rentals Company?',
    renderContent: () => {
      return (
        <div>
          <h5>1. Wide Selection of Vehicles :</h5>
          <p>
            - MEI Car Rentals Company offers a diverse range of vehicles,
            including economy cars, luxury cars, SUVs, and more, providing
            customers with options to suit their specific needs and preferences.
          </p>

          <h5>2. Competitive Pricing :</h5>
          <p>
            - We strive to offer competitive rental rates and transparent
            pricing with no hidden fees, ensuring that customers get value for
            their money when renting a car from us.
          </p>

          <h5>3. Convenience and Flexibility :</h5>
          <p>
            - Our rental process is designed to be convenient and flexible,
            allowing customers to easily book online or through our customer
            service team. We offer flexible rental periods, including daily,
            weekly, and long-term rentals.
          </p>

          <h5>4. Excellent Customer Service :</h5>
          <p>
            - At MEI Car Rentals, we prioritize customer satisfaction and
            provide exceptional customer service. Our team is dedicated to
            assisting customers with any queries, ensuring a smooth rental
            experience from start to finish.
          </p>

          <h5>5. Quality and Well-Maintained Vehicles :</h5>
          <p>
            - We maintain our fleet of vehicles to the highest standards,
            ensuring that customers receive safe, reliable, and well-maintained
            cars for their rental needs.
          </p>

          <h5>6. Additional Services and Amenities :</h5>
          <p>
            - MEI Car Rentals Company may offer additional services such as GPS
            navigation systems, child seats, insurance options, roadside
            assistance, and more to enhance the overall rental experience for
            customers.
          </p>

          <h5>7. Flexible Pickup and Drop-off Locations :</h5>
          <p>
            - We provide customers with the flexibility to choose convenient
            pickup and drop-off locations, whether it's at the airport, hotel,
            or any other designated location within Dubai.
          </p>
        </div>
      );
    },
  },
];

export default FAQs;
