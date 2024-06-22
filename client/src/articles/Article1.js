import React from 'react';
import car1 from '../imge/car1.png';
import car3 from '../imge/car3.jpeg';
import logo from '../imge/logo.png';
import './article1.css';

const Article1 = () => {
  return (
    <>
      <header className="header">
        <h1 className="h1">Why Choose MEI Car Rentals?</h1>
      </header>

      <main className='main'>
        <div class='backpack'>
          <img class='cat-one' src={logo} alt='' />
          <p className='p'>
            When it comes to Dubai rent a car , MEI Car Rentals stands out for
            its diverse fleet that caters to every type of traveler. Whether
            you're looking for a compact car to zip around the city's bustling
            streets or a spacious SUV for a family excursion, MEI has the
            perfect ride for you. Booking with MEI is a breeze, ensuring that
            you can hit the road and start your Dubai adventure without any
            delays.
          </p>
        </div>
        <div class='backpack'>
          <img class='cat-two' src={car1} alt='' />
          <p className='p'>
            MEI Car Rentals is not just about convenience; it's also about
            affordability. In a city known for its luxury, finding cheap car
            rental Dubai options can be a challenge. However, MEI breaks the
            mold by offering competitive rates without compromising on quality.
            Say goodbye to overpriced rentals and hello to a budget-friendly way
            to explore Dubai's sights and sounds.
          </p>
        </div>
        <div class='backpack'>
          <img class='cat-three' src={car3} alt='' />
          <p className='p'>
            And for those looking to add a touch of luxury to their Dubai
            experience, MEI Car Rentals offers a premium selection of vehicles
            for luxury car hire Dubai. Whether you're in the mood to rent sports
            car or a prestigious sedan, MEI has the perfect ride to elevate your
            Dubai adventure to the next level. Experience the glamour of Dubai
            in style with MEI Car Rentals by your side.
          </p>
          <p className='p'>
            In conclusion, when it comes to renting a car in Dubai, MEI Car
            Rentals is the ultimate choice.
          </p>
        </div>
      </main>
    </>
  );
};

export default Article1;
