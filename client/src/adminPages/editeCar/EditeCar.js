import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Brands from '../../extensions/Brands';
import Categorys from '../../extensions/Categorys';
import Colors from '../../extensions/Colors';
import Loader from '../../extensions/loader/Loader';
import Models from '../../extensions/Models';
import { getCarById } from '../../RTK/carByIdSlice';
import { editCar } from '../../RTKadmin/editCarSlice';
import './editeCar.css';

const EditeCar = () => {
  const id = useLocation()?.state?.id;
  // const id = useParams();
  ////////////////
  const [name, setname] = useState('name');
  const [color, setcolor] = useState('');
  const [category, setcategory] = useState('');
  const [model, setmodel] = useState(2000);
  const [gearBox, setgearBox] = useState('');
  const [powerHorse, setpowerHorse] = useState('');
  const [speed, setspeed] = useState('0');
  const [seats, setseats] = useState('4');
  const [priceWeekly, setPriceWeekly] = useState(1000);
  const [priceMonthly, setPriceMonthly] = useState(1000);
  const [price, setPrice] = useState(1000);
  const [brand, setbrand] = useState('');
  const [images, setImages] = useState([]);
  const [imagesSquer, setImagesSquer] = useState([]);
  const [imagesForm, setImagesForm] = useState(false);
  /////////////
  let car = useSelector((state) => state.carById).data.car;
  let set = useSelector((state) => state.editCar).status;

  useEffect(() => {
    setImagesSquer(car?.images);
    setname(car?.name);
    setcolor(car?.color);
    setcategory(car?.category);
    setmodel(car?.model);
    setgearBox(car?.gear);
    setpowerHorse(car?.powerHorse);
    setspeed(car?.speed);
    setseats(car?.seats);
    setPrice(car?.price);
    setPrice(car?.priceWeekly);
    setPrice(car?.priceMonthly);
    setbrand(car?.brand);
    setImages(car?.images);
    //    setImagesSquer([]);
    // setImagesForm(true);
  }, [car]);
  ///////////
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);
  ///////////
  const imag2OnChange = (e) => {
    const fileArray = Array.from(e.target.files);
    fileArray.map((f) => (f['id'] = Math.random() * Math.pow(10, 16)));
    setImages(fileArray);
    const fileArraySquer = Array.from(e.target.files);
    fileArraySquer.map((f, index) => {
      f['id'] = Math.random() * Math.pow(10, 16);
      f['URL'] = URL.createObjectURL(e.target?.files[index]);
      return f;
    });
    setImagesSquer(fileArraySquer);
    setImagesForm(true);
  };

  const [validated, setValidated] = useState(false);

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
    // formData.append('fuel', model);
    formData.append('speed', speed);
    formData.append('price', price);
    formData.append('priceWeekly', priceWeekly);
    formData.append('priceMonthly', priceMonthly);
    formData.append('seats', seats);
    formData.append('description  ', 'description');
    for (let i = 0; i < images?.length; i++) {
      formData.append('images', images[i]);
    }
    const value = {
      reqobj: formData,
      id: id,
    };
    dispatch(editCar({ value }));
    // setImagesForm(true);
  };

  return (
    <div className='addCar'>
      {set === 'loading' && <Loader text={'saving'} />}
      <div className='addCarimages'>
        {/* <div className='imagMasseg' style={{ display: imagesSquer?.length ? "flex" : "none" }}>
                    no images yet,  add some images
                </div> */}
        {imagesSquer?.map((image, index) => (
          <img
            src={imagesForm ? image.URL : `/cars/${image}`}
            className='imgAC'
            alt=''
          />
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
        </Form.Group>

        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Name</Form.Label>
          <Form.Control
            type='text'
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Brand</Form.Label>
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => setbrand(e.target.value)}
            required
            value={brand}
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
            value={color}
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
            value={category}
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
            value={model}
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
            value={powerHorse}
            onChange={(e) => setpowerHorse(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>GearBox </Form.Label>
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => setgearBox(e.target.value)}
            required
            value={gearBox}
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
            value={speed}
            onChange={(e) => setspeed(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>Seats </Form.Label>
          <Form.Control
            type='number'
            placeholder='seats'
            required
            value={seats}
            onChange={(e) => setseats(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>daily Price </Form.Label>
          <Form.Control
            type='number'
            placeholder='price'
            required
            value={price}
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
            placeholder='WeeklyPrice'
            required
            value={priceWeekly}
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
            placeholder='MonthlyPrice'
            required
            value={priceMonthly}
            onChange={(e) => setPriceMonthly(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* ///////////// */}
        {/* <Button type='submit'>Submit form</Button> */}
        <button type='submit' className='editButton'>
          Submit form
        </button>
      </Form>
    </div>
  );
};

export default EditeCar;
