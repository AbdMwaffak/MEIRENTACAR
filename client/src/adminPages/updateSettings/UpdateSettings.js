import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSettings } from '../../RTKadmin/getSettingsSlice';
import { updateSettings } from '../../RTKadmin/updateSettingsSlice';
import Loader from '../../extensions/loader/Loader';
import './updateSettings.css';

const UpdateSettings = () => {
  const [name1, setName1] = useState('');
  const [phone1, setPhone1] = useState('');
  const [email1, setEmail1] = useState('');
  const [name2, setName2] = useState('');
  const [phone2, setPhone2] = useState('');
  const [email2, setEmail2] = useState('');
  const [intro1, setIntro1] = useState('');
  const [intro2, setIntro2] = useState('');

  const [images, setImages] = useState([]);
  const [imagesSquer, setImagesSquer] = useState([]);
  const [imagesForm, setImagesForm] = useState(false);
  /////////////
  let settings = useSelector((state) => state.getSettings).data;

  let set = useSelector((state) => state.updateSettings).status;

  useEffect(() => {
    setImagesSquer(settings?.slider);
    setImages(settings?.slider);
    setName1(settings?.name1);
    setPhone1(settings?.phone1);
    setEmail1(settings?.email1);

    setName2(settings?.name2);
    setPhone2(settings?.phone2);
    setEmail2(settings?.email2);

    setIntro1(settings?.intro1);
    setIntro2(settings?.intro2);
  }, [settings]);
  ///////////
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);
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
    formData.append('phone1', phone1);
    formData.append('email1', email1);
    formData.append('phone2', phone2);
    formData.append('email2', email2);
    formData.append('name1', name1);
    formData.append('name2', name2);
    formData.append('intro1', intro1);
    formData.append('intro2', intro2);
    for (let i = 0; i < images.length; i++) {
      formData.append('slider', images[i]);
    }
    const value = {
      reqobj: formData,
      id: settings._id,
    };
    dispatch(updateSettings(value));

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
            src={imagesForm ? image.URL : image}
            className='imgSettings'
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
            // maxLength={4}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>

        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>name1</Form.Label>
          <Form.Control
            type='string'
            value={name1}
            required
            onChange={(e) => setName1(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* /////////////////////////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>phone1</Form.Label>
          <Form.Control
            type='string'
            value={phone1}
            required
            onChange={(e) => setPhone1(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>

        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>email1</Form.Label>
          <Form.Control
            type='email'
            value={email1}
            required
            onChange={(e) => setEmail1(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>name2</Form.Label>
          <Form.Control
            type='string'
            value={name2}
            required
            onChange={(e) => setName2(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>
        {/* /////////////////////////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>phone2</Form.Label>
          <Form.Control
            type='string'
            value={phone2}
            required
            onChange={(e) => setPhone2(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>

        {/* ///////////// */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>email2</Form.Label>
          <Form.Control
            type='email'
            value={email2}
            required
            onChange={(e) => setEmail2(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>intro1</Form.Label>
          <Form.Control
            type='text'
            value={intro1}
            required
            onChange={(e) => setIntro1(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            you have missed this!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label className='label'>intro2</Form.Label>
          <Form.Control
            type='text'
            value={intro2}
            required
            onChange={(e) => setIntro2(e.target.value)}
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

export default UpdateSettings;
