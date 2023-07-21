import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Guriyaha = () => {
  const [guriyahaList, setGuriyahaList] = useState([]);
  const [newGuriyaha, setNewGuriyaha] = useState({
    id: '',
    type: '',
    area: '',
    address: '',
    age: 0,
    rent: '',
    deposit: '',
    parking: '',
    isAvailable: '',
    rooms: '',
    musqulaha: '',
    masterRoom: '',
    faahfaahin: '',
    imagepreview: null,
    user: '',
  });
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    fetchGuriyahaList();
  }, []);

  const fetchGuriyahaList = async () => {
    try {
      const response = await axios.get('http://localhost:4000/guriyaha/get');
      setGuriyahaList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGuriyaha({ ...newGuriyaha, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewGuriyaha({ ...newGuriyaha, imagepreview: file });
  };

  const addGuriyaha = async () => {
    const errors = {};
    if (!newGuriyaha.id.trim()) {
      errors.id = 'ID is required';
    }
    if (!newGuriyaha.type.trim()) {
      errors.type = 'Type is required';
    }
    // Add more validations for other fields if needed

    if (Object.keys(errors).length > 0) {
      setValidationError(errors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('id', newGuriyaha.id);
      formData.append('type', newGuriyaha.type);
      formData.append('area', newGuriyaha.area);
      formData.append('address', newGuriyaha.address);
      formData.append('age', newGuriyaha.age);
      formData.append('rent', newGuriyaha.rent);
      formData.append('deposit', newGuriyaha.deposit);
      formData.append('parking', newGuriyaha.parking);
      formData.append('isAvailable', newGuriyaha.isAvailable);
      formData.append('rooms', newGuriyaha.rooms);
      formData.append('musqulaha', newGuriyaha.musqulaha);
      formData.append('masterRoom', newGuriyaha.masterRoom);
      formData.append('faahfaahin', newGuriyaha.faahfaahin);
      formData.append('user', newGuriyaha.user);
      if (newGuriyaha.imagepreview) {
        formData.append('imagepreview', newGuriyaha.imagepreview);
      }

      const response = await axios.post('http://localhost:4000/guriyaha/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setNewGuriyaha({
        id: '',
        type: '',
        area: '',
        address: '',
        age: 0,
        rent: '',
        deposit: '',
        parking: '',
        isAvailable: '',
        rooms: '',
        musqulaha: '',
        masterRoom: '',
        faahfaahin: '',
        imagepreview: null,
        user: '',
      });
      setValidationError({});
      fetchGuriyahaList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateGuriyaha = async (guriyahaId) => {
    const updatedGuriyaha = {
      type: newGuriyaha.type,
      area: newGuriyaha.area,
      address: newGuriyaha.address,
      age: newGuriyaha.age,
      rent: newGuriyaha.rent,
      deposit: newGuriyaha.deposit,
      parking: newGuriyaha.parking,
      isAvailable: newGuriyaha.isAvailable,
      rooms: newGuriyaha.rooms,
      musqulaha: newGuriyaha.musqulaha,
      masterRoom: newGuriyaha.masterRoom,
      faahfaahin: newGuriyaha.faahfaahin,
      user: newGuriyaha.user,
    };

    try {
      const response = await axios.put(`http://localhost:4000/guriyaha/update/${guriyahaId}`, updatedGuriyaha);
      console.log(response.data);
      setNewGuriyaha({
        id: '',
        type: '',
        area: '',
        address: '',
        age: 0,
        rent: '',
        deposit: '',
        parking: '',
        isAvailable: '',
        rooms: '',
        musqulaha: '',
        masterRoom: '',
        faahfaahin: '',
        imagepreview: null,
        user: '',
      });
      fetchGuriyahaList();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGuriyaha = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/guriyaha/delete/${id}`);
      console.log(response.data);
      fetchGuriyahaList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <h2>Guriyaha</h2>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="id">
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="ID"
                  value={newGuriyaha.id}
                  onChange={handleInputChange}
                  isInvalid={!!validationError.id}
                />
                <Form.Control.Feedback type="invalid">{validationError.id}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="type">
                <Form.Control
                  type="text"
                  name="type"
                  placeholder="Type"
                  value={newGuriyaha.type}
                  onChange={handleInputChange}
                  isInvalid={!!validationError.type}
                />
                <Form.Control.Feedback type="invalid">{validationError.type}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="area">
                <Form.Control
                  type="text"
                  name="area"
                  placeholder="Area"
                  value={newGuriyaha.area}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="address">
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={newGuriyaha.address}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="age">
                <Form.Control
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={newGuriyaha.age}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="rent">
                <Form.Control
                  type="text"
                  name="rent"
                  placeholder="Rent"
                  value={newGuriyaha.rent}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="deposit">
                <Form.Control
                  type="text"
                  name="deposit"
                  placeholder="Deposit"
                  value={newGuriyaha.deposit}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="parking">
                <Form.Control
                  type="text"
                  name="parking"
                  placeholder="Parking"
                  value={newGuriyaha.parking}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="isAvailable">
                <Form.Control
                  type="text"
                  name="isAvailable"
                  placeholder="Is Available"
                  value={newGuriyaha.isAvailable}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="rooms">
                <Form.Control
                  type="text"
                  name="rooms"
                  placeholder="Rooms"
                  value={newGuriyaha.rooms}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="musqulaha">
                <Form.Control
                  type="text"
                  name="musqulaha"
                  placeholder="Musqulaha"
                  value={newGuriyaha.musqulaha}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="masterRoom">
                <Form.Control
                  type="text"
                  name="masterRoom"
                  placeholder="Master Room"
                  value={newGuriyaha.masterRoom}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="faahfaahin">
                <Form.Control
                  type="text"
                  name="faahfaahin"
                  placeholder="Faahfaahin"
                  value={newGuriyaha.faahfaahin}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="user">
                <Form.Control
                  type="text"
                  name="user"
                  placeholder="User (User ID)"
                  value={newGuriyaha.user}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="imagepreview">
            <Form.Control type="file" name="imagepreview" onChange={handleImageChange} />
          </Form.Group>
          <Button onClick={addGuriyaha}>Add Guriyaha</Button>
        </Form>
        {/* Display the guriyahaList */}
        <Row>
          <Col>
            <h3>Guriyaha List</h3>
            <ul>
              {guriyahaList.map((guriyaha) => (
                <li key={guriyaha._id}>
                  <p>ID: {guriyaha.id}</p>
                  <p>Type: {guriyaha.type}</p>
                  <Button variant="primary" onClick={() => updateGuriyaha(guriyaha._id)}>
                    Update Guriyaha
                  </Button>
                  <Button variant="danger" onClick={() => deleteGuriyaha(guriyaha._id)}>
                    Delete Guriyaha
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Guriyaha Details</h3>
            <ul>
              {guriyahaList.map((guriyaha) => (
                <li key={guriyaha._id}>
                  <p>ID: {guriyaha.id}</p>
                  <p>Type: {guriyaha.type}</p>
                  <p>Area: {guriyaha.area}</p>
                  <p>Address: {guriyaha.address}</p>
                  <p>Age: {guriyaha.age}</p>
                  <p>Rent: {guriyaha.rent}</p>
                  <p>Deposit: {guriyaha.deposit}</p>
                  <p>Parking: {guriyaha.parking}</p>
                  <p>Is Available: {guriyaha.isAvailable}</p>
                  <p>Rooms: {guriyaha.rooms}</p>
                  <p>Musqulaha: {guriyaha.musqulaha}</p>
                  <p>Master Room: {guriyaha.masterRoom}</p>
                  <p>Faahfaahin: {guriyaha.faahfaahin}</p>
                  <Button variant="danger" onClick={() => deleteGuriyaha(guriyaha._id)}>
                    Delete Guriyaha
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

export default Guriyaha;
