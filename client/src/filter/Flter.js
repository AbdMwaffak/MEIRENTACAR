import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Brands from '../extensions/Brands';
import Categorys from '../extensions/Categorys';
import Colors from '../extensions/Colors';
import './flter.css';

function Flter() {
  const [brand, setBrand] = useState('all');
  const [color, setColor] = useState('all');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('non sort');
  const [seats, setSeats] = useState('');
  const [flButtonn, setFlButtonn] = useState(false);

  const reqobj = {
    color: color === 'all' ? '' : 'color=' + color + '&',
    category: category === 'all' ? '' : 'category=' + category + '&',
    brand: brand === 'all' ? '' : 'brand=' + brand + '&',
    sort: sort === 'non sort' ? '' : 'sort=-' + sort + '&',
    seats: seats === '' ? '' : 'seats=' + seats + '&',
  };

  const x = `${reqobj.category}${reqobj.color}${reqobj.brand}${reqobj.seats}${reqobj.sort}`;
  // }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setFlButtonn(!flButtonn);
    setBrand('all');
    setColor('all');
    setCategory('all');
    setSort('non sort');
    setSeats('');

    navigate(`filter/cars?${x.slice(0, -1)}`, {
      state: {
        color,
        brand,
        sort,
        seats,
        category,
      },
    });
  };

  /////////////

  const flButtonnHandler = () => {
    setFlButtonn(!flButtonn);
    setBrand('all');
    setColor('all');
    setCategory('all');
    setSort('non sort');
    setSeats('');
  };
  return (
    <div className='ff66'>
      <span
        onClick={flButtonnHandler}
        className='flButtonn'
        style={{
          display:
            window.location.pathname === '/' ||
            window.location.pathname.includes('search') ||
            window.location.pathname.includes('cars')
              ? 'flex'
              : 'none',
        }}
      >
        Filter
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 1024 1024'
        >
          <path
            fill='currentColor'
            d='M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288z'
          ></path>
        </svg>
      </span>
      <div className={flButtonn ? 'sid-active' : 'sid-unactive'}>
        <div className='fl'>
          <div className='filterHeadr'>
            <p className='СARSELECTION'> СAR SELECTION </p>
            <button className='closeB' onClick={flButtonnHandler}>
              {' '}
              X{' '}
            </button>
          </div>
          <Form className='mainMenue'>
            <div className='menue'>
              <Form.Label className='lab'> Sort </Form.Label>
              <Form.Select
                className='sortMenue'
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option className='sortoption'> non sort </option>
                <option className='sortoption' value='price'>
                  {' '}
                  by price h - l{' '}
                </option>
                <option className='sortoption' value='popularity'>
                  {' '}
                  by popularity{' '}
                </option>
                <option className='sortLi' value='createdAt'>
                  {' '}
                  by latest{' '}
                </option>
                {/* <option className='sortLi'> all </option> */}
              </Form.Select>
            </div>
            <div className='menue'>
              <Form.Label className='lab'> Seats </Form.Label>
              <Form.Control
                className='sortMenue'
                max={20}
                min={1}
                type='number'
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              ></Form.Control>
            </div>

            <div className='menue'>
              <Form.Label className='lab'> Brand </Form.Label>
              <Form.Select
                className='brandMenue'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                {Brands.map((brand, index) => (
                  <option className='brandLi' key={index}>
                    {' '}
                    {brand}{' '}
                  </option>
                ))}
              </Form.Select>
            </div>

            <div className='menue'>
              <Form.Label className='lab'> Color </Form.Label>
              <Form.Select
                className='brandMenue'
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                {Colors.map((color, index) => (
                  <option className='brandLi' key={index}>
                    {' '}
                    {color}{' '}
                  </option>
                ))}
              </Form.Select>
            </div>

            <div className='menue'>
              <Form.Label className='lab'> Category </Form.Label>
              <Form.Select
                className='typeMenue'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option> </option>
                {Categorys.map((cate, index) => (
                  <option className='brandLi' key={index}>
                    {' '}
                    {cate}{' '}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className='babutton'>
              <div type='submit' className='fsButtonn' onClick={handleSubmit}>
                <div className='btTitle'> submit </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Flter;
