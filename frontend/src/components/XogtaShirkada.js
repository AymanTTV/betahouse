import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const XogtaShirkada = () => {
  const [xogtaShirkadaList, setXogtaShirkadaList] = useState([]);
  const [newXogtaShirkada, setNewXogtaShirkada] = useState({
    id: '',
    location: '',
    logo: null,
    email: '',
    complainEmail: '',
    complainPhone: '',
    facebook: '',
    tiktok: '',
    twitter: '',
    instagram: '',
  });
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    fetchXogtaShirkadaList();
  }, []);

  const fetchXogtaShirkadaList = async () => {
    try {
      const response = await axios.get('http://localhost:4000/xogtaShirkada/get');
      setXogtaShirkadaList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewXogtaShirkada({ ...newXogtaShirkada, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewXogtaShirkada({ ...newXogtaShirkada, logo: file });
  };

  const addXogtaShirkada = async () => {
    const errors = {};
    if (!newXogtaShirkada.id.trim()) {
      errors.id = 'ID is required';
    }
    if (!newXogtaShirkada.location.trim()) {
      errors.location = 'Location is required';
    }
    // Add more validations for other fields if needed

    if (Object.keys(errors).length > 0) {
      setValidationError(errors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('id', newXogtaShirkada.id);
      formData.append('location', newXogtaShirkada.location);
      formData.append('logo', newXogtaShirkada.logo);
      formData.append('email', newXogtaShirkada.email);
      formData.append('complainEmail', newXogtaShirkada.complainEmail);
      formData.append('complainPhone', newXogtaShirkada.complainPhone);
      formData.append('facebook', newXogtaShirkada.facebook);
      formData.append('tiktok', newXogtaShirkada.tiktok);
      formData.append('twitter', newXogtaShirkada.twitter);
      formData.append('instagram', newXogtaShirkada.instagram);

      const response = await axios.post('http://localhost:4000/xogtaShirkada/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setNewXogtaShirkada({
        id: '',
        location: '',
        logo: null,
        email: '',
        complainEmail: '',
        complainPhone: '',
        facebook: '',
        tiktok: '',
        twitter: '',
        instagram: '',
      });
      setValidationError({});
      fetchXogtaShirkadaList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateXogtaShirkada = async (xogtaShirkadaId) => {
    const updatedXogtaShirkada = {
      location: newXogtaShirkada.location,
      logo: newXogtaShirkada.logo,
      email: newXogtaShirkada.email,
      complainEmail: newXogtaShirkada.complainEmail,
      complainPhone: newXogtaShirkada.complainPhone,
      facebook: newXogtaShirkada.facebook,
      tiktok: newXogtaShirkada.tiktok,
      twitter: newXogtaShirkada.twitter,
      instagram: newXogtaShirkada.instagram,
    };

    try {
      const response = await axios.put(`http://localhost:4000/xogtaShirkada/update/${xogtaShirkadaId}`, updatedXogtaShirkada);
      console.log(response.data);
      setNewXogtaShirkada({
        id: '',
        location: '',
        logo: null,
        email: '',
        complainEmail: '',
        complainPhone: '',
        facebook: '',
        tiktok: '',
        twitter: '',
        instagram: '',
      });
      fetchXogtaShirkadaList();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteXogtaShirkada = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/xogtaShirkada/delete/${id}`);
      console.log(response.data);
      fetchXogtaShirkadaList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <h2>Xogta Shirkada</h2>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="id">
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="ID"
                  value={newXogtaShirkada.id}
                  onChange={handleInputChange}
                  isInvalid={!!validationError.id}
                />
                <Form.Control.Feedback type="invalid">{validationError.id}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="location">
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={newXogtaShirkada.location}
                  onChange={handleInputChange}
                  isInvalid={!!validationError.location}
                />
                <Form.Control.Feedback type="invalid">{validationError.location}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="logo">
            <Form.Control type="file" name="logo" onChange={handleImageChange} />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={newXogtaShirkada.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="complainEmail">
                <Form.Control
                  type="email"
                  name="complainEmail"
                  placeholder="Complain Email"
                  value={newXogtaShirkada.complainEmail}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="complainPhone">
                <Form.Control
                  type="text"
                  name="complainPhone"
                  placeholder="Complain Phone"
                  value={newXogtaShirkada.complainPhone}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="facebook">
                <Form.Control
                  type="text"
                  name="facebook"
                  placeholder="Facebook"
                  value={newXogtaShirkada.facebook}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="tiktok">
                <Form.Control
                  type="text"
                  name="tiktok"
                  placeholder="TikTok"
                  value={newXogtaShirkada.tiktok}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="twitter">
                <Form.Control
                  type="text"
                  name="twitter"
                  placeholder="Twitter"
                  value={newXogtaShirkada.twitter}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="instagram">
            <Form.Control
              type="text"
              name="instagram"
              placeholder="Instagram"
              value={newXogtaShirkada.instagram}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={addXogtaShirkada}>
            Add Xogta Shirkada
          </Button>
        </Form>
        <hr />
        <Row>
          <Col>
            <h3>Xogta Shirkada List</h3>
            <ul>
              {xogtaShirkadaList.map((xogtaShirkada) => (
                <li key={xogtaShirkada._id}>
                  ID: {xogtaShirkada.id}, Location: {xogtaShirkada.location}
                  <Button variant="info" onClick={() => updateXogtaShirkada(xogtaShirkada._id)}>
                    Update
                  </Button>
                  <Button variant="danger" onClick={() => deleteXogtaShirkada(xogtaShirkada._id)}>
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default XogtaShirkada;
