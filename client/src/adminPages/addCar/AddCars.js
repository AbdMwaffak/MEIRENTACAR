import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCar } from '../../RTKadmin/addCarSlice';
import Brands from '../../extensions/Brands';
import Categorys from '../../extensions/Categorys';
import Colors from '../../extensions/Colors';
import Models from '../../extensions/Models';
import Loader from '../../extensions/loader/Loader';
import './addCars.css';

const AddCars = () => {
  let set = useSelector((state) => state.addCar)?.status;
  console.log(set);
  ////////////////
  const [name, setname] = useState('ddd');
  const [color, setcolor] = useState(Colors[0]);
  const [category, setcategory] = useState(Categorys[0]);
  const [model, setmodel] = useState(Models[0]);
  const [gearBox, setgearBox] = useState('auto');
  const [powerHorse, setpowerHorse] = useState(0);
  const [speed, setspeed] = useState(0);
  const [seats, setseats] = useState(0);
  const [price, setPrice] = useState(1000);
  const [priceWeekly, setPriceWeekly] = useState(1000);
  const [priceMonthly, setPriceMonthly] = useState(1000);
  const [brand, setbrand] = useState(Brands[1]);
  const [images, setImages] = useState([]);
  const [imagesSquer, setImagesSquer] = useState([]);

  const imag2OnChange = (e) => {
    let fileArray = Array.from(e.target.files);
    // fileArray.map(f => f["id"] = Math.random() * Math.pow(10, 16))
    setImages(fileArray);
    const fileArraySquer = Array.from(e.target.files);
    fileArraySquer.map(
      (f, index) => (
        (f['id'] = Math.random() * Math.pow(10, 16)),
        (f['URL'] = URL.createObjectURL(e.target?.files[index]))
      )
    );
    setImagesSquer(fileArraySquer);
  };

  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('brand', brand);
    formData.append('color', color);
    formData.append('category', category);
    formData.append('model', model);
    formData.append('powerHorse', powerHorse);
    formData.append('gear', gearBox);
    formData.append('speed', speed);
    formData.append('price', price);
    formData.append('priceWeekly', priceWeekly);
    formData.append('priceMonthly', priceMonthly);
    formData.append('seats', seats);
    formData.append('description', 'description');
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    dispatch(addCar(formData));
  };

  return (
    <div className='addCar'>
      {set === 'loading' && <Loader text={'saving'} />}
      <div className='addCarimages'>
        <div
          className='imagMasseg'
          style={{ display: imagesSquer.length === 0 ? 'flex' : 'none' }}
        >
          no images yet, add some images
        </div>
        {imagesSquer?.map((image, index) => (
          <img src={image.URL} alt='' className='imgAC' />
        ))}
      </div>
      <Form
        className='adddcars'
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className='mb-1' controlId='exampleForm.ControlInput1'>
          <Form.Control
            type='file'
            required
            onChange={imag2OnChange}
            name='dlimg'
            accept='image/*'
            multiple
            maxLength={4}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
          <Form.Control.Feedback type='valid'>great!</Form.Control.Feedback>
        </Form.Group>

        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='CarName'
            required
            onChange={(e) => setname(e.target.value)}
            // defaultValue="Mark"
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
          <Form.Control.Feedback type='valid'>great!</Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Brand</Form.Label>
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => setbrand(e.target.value)}
            required
          >
            {Brands?.map((brand, index) => (
              <option key={index}>{brand} </option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Color</Form.Label>
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => setcolor(e.target.value)}
            required
          >
            {Colors?.map((color, index) => (
              <option key={index}>{color} </option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Category </Form.Label>
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => setcategory(e.target.value)}
            required
          >
            {Categorys?.map((cate, index) => (
              <option key={index}>{cate} </option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Model </Form.Label>
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => setmodel(e.target.value)}
            required
          >
            {Models?.map((model, index) => (
              <option key={index}>{model} </option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>powerHorse </Form.Label>
          <Form.Control
            type='text'
            placeholder='powerHorse'
            required
            onChange={(e) => setpowerHorse(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
          <Form.Control.Feedback type='valid'>great!</Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>GearBox </Form.Label>
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => setgearBox(e.target.value)}
            required
          >
            <option> auto </option>
            <option> manual </option>
          </Form.Select>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Speed </Form.Label>
          <Form.Control
            type='number'
            placeholder='speed'
            required
            onChange={(e) => setspeed(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
          <Form.Control.Feedback type='valid'>great!</Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Seats </Form.Label>
          <Form.Control
            type='number'
            placeholder='seats'
            required
            onChange={(e) => setseats(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
          <Form.Control.Feedback type='valid'>great!</Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>daily Price </Form.Label>
          <Form.Control
            type='number'
            placeholder='price'
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Weekly Price </Form.Label>
          <Form.Control
            type='number'
            placeholder='Weekly Price'
            required
            onChange={(e) => setPriceWeekly(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Monthly Price </Form.Label>
          <Form.Control
            type='number'
            placeholder='Monthly Price'
            required
            onChange={(e) => setPriceMonthly(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        {/* <Button type='submit'>Submit form</Button> */}
        <button onClick={handleSubmit} className='addButton'>
          Submit form
        </button>
      </Form>
    </div>
  );
};

export default AddCars;
