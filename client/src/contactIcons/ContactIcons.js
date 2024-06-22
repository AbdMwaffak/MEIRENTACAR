import { AiFillInstagram } from 'react-icons/ai';
import { FaSnapchatGhost, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import './contactIcons.css';

const styleIcons = {
  color: '#d79a3d',
  fontSize: '32px',
  width: '50px',
  position: 'fixed',
  right: '10px',
  display: 'block',
};

const ContactIcons = () => {
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div style={{ zIndex: 1000 }} className='contact-icons-container'>
      <a
        href={`https://wa.me/+971566634661?text=Hello MEI`}
        target='blank'
        title='Whatsapp'
      >
        <FaWhatsapp style={{ ...styleIcons, top: '300px' }} />
      </a>
      <a
        href={`https://youtube.com/@m-e-i-car-rental-?si=IropwdYM3FGqvO52`}
        target='blank'
        title='Youtube'
      >
        <FaYoutube style={{ ...styleIcons, top: '350px' }} />
      </a>
      <a
        href={`https://www.instagram.com/mei.rent_a_car?igsh=d290bnAyamZ3ams1`}
        target='blank'
        title='Instagram'
      >
        <AiFillInstagram style={{ ...styleIcons, top: '400px' }} />
      </a>
      <a
        href={`https://www.snapchat.com/add/meidubai23?share_id=bbtm-imv47k&locale=en-US`}
        target='blank'
        title='Tiktok'
      >
        <FaTiktok style={{ ...styleIcons, top: '450px' }} />
      </a>
      <a
        href={`https://www.snapchat.com/add/meidubai23?share_id=bbtm-imv47k&locale=en-US`}
        target='blank'
        title='Snapchat'
      >
        <FaSnapchatGhost style={{ ...styleIcons, top: '500px' }} />
      </a>

      <button title='Scroll to top'>
        <RiArrowUpDoubleLine
          style={{
            ...styleIcons,
            bottom: '50px',
            fontSize: '52px',
            color: '#3c3c39',
            backgroundColor: '#d79a3d',
            borderRadius: '100%',
          }}
          onClick={scrollToTop}
        />
      </button>
    </div>
  );
};

export default ContactIcons;
