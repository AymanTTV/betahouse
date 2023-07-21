import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Images = () => {
  const [imagesList, setImagesList] = useState([]);
  const [newImage, setNewImage] = useState({
    id: '',
    guriId: '',
    guriImages: [],
    bathroomImages: [],
  });
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    fetchImagesList();
  }, []);

  const fetchImagesList = async () => {
    try {
      const response = await axios.get('http://localhost:4000/images/get');
      setImagesList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImage({ ...newImage, [name]: value });
  };

  const handleGuriImagesChange = (e) => {
    const files = e.target.files;
    setNewImage({ ...newImage, guriImages: [...newImage.guriImages, ...files] });
  };

  const handleBathroomImagesChange = (e) => {
    const files = e.target.files;
    setNewImage({ ...newImage, bathroomImages: [...newImage.bathroomImages, ...files] });
  };

  const addImage = async () => {
    const errors = {};
    if (!newImage.id.trim()) {
      errors.id = 'ID is required';
    }
    if (!newImage.guriId.trim()) {
      errors.guriId = 'Guri ID is required';
    }
    // Add more validations for other fields if needed

    if (Object.keys(errors).length > 0) {
      setValidationError(errors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('id', newImage.id);
      formData.append('guriId', newImage.guriId);
      newImage.guriImages.forEach((image, index) => {
        formData.append(`guriImages-${index}`, image);
      });
      newImage.bathroomImages.forEach((image, index) => {
        formData.append(`bathroomImages-${index}`, image);
      });

      const response = await axios.post('http://localhost:4000/images/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setNewImage({
        id: '',
        guriId: '',
        guriImages: [],
        bathroomImages: [],
      });
      setValidationError({});
      fetchImagesList();
    } catch (error) {
      console.log(error);
    }
  };

  const updateImage = async (imageId) => {
    const updatedImage = {
      guriId: newImage.guriId,
      guriImages: newImage.guriImages,
      bathroomImages: newImage.bathroomImages,
    };

    try {
      const response = await axios.put(`http://localhost:4000/images/update/${imageId}`, updatedImage);
      console.log(response.data);
      setNewImage({
        id: '',
        guriId: '',
        guriImages: [],
        bathroomImages: [],
      });
      fetchImagesList();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/images/delete/${id}`);
      console.log(response.data);
      fetchImagesList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <h2>Images</h2>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="id">
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="ID"
                  value={newImage.id}
                  onChange={handleInputChange}
                  isInvalid={!!validationError.id}
                />
                <Form.Control.Feedback type="invalid">{validationError.id}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="guriId">
                <Form.Control
                  type="text"
                  name="guriId"
                  placeholder="Guri ID"
                  value={newImage.guriId}
                  onChange={handleInputChange}
                  isInvalid={!!validationError.guriId}
                />
                <Form.Control.Feedback type="invalid">{validationError.guriId}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="guriImages">
            <Form.Control type="file" name="guriImages" multiple onChange={handleGuriImagesChange} />
          </Form.Group>
          <Form.Group controlId="bathroomImages">
            <Form.Control type="file" name="bathroomImages" multiple onChange={handleBathroomImagesChange} />
          </Form.Group>
          <Button variant="primary" onClick={addImage}>
            Add Image
          </Button>
        </Form>
        <hr />
        <Row>
          <Col>
            <h3>Images List</h3>
            <ul>
              {imagesList.map((image) => (
                <li key={image._id}>
                  ID: {image.id}, Guri ID: {image.guriId}
                  <Button variant="info" onClick={() => updateImage(image._id)}>
                    Update
                  </Button>
                  <Button variant="danger" onClick={() => deleteImage(image._id)}>
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

export default Images;
