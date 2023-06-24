const request = require('supertest');
const app = require('../app');

//                              use npx jest route/test.js to test
//                      and also make sure you are in the backend directory!
//                                       mahadsanid   

// GET - Get all users
describe('GET /users/get', function () {
  it('should respond with JSON', function (done) {
    request(app)
      .get('/users/get')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// POST - Create a user
describe('POST /users/create', function () {
  it('should create a new user', function (done) {
    request(app)
      .post('/users/create')
      .send({
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: '123 ABC Street',
        gender: 'Male',
        userPower: 'Admin',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// GET - Get a user by ID
describe('GET /users/get/:id', function () {
  it('should get a user by ID', function (done) {
    request(app)
      .get('/users/get/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// PUT - Update a user
describe('PUT /users/update/:id', function () {
  it('should update a user', function (done) {
    request(app)
      .put('/users/update/1')
      .send({
        name: 'Updated Name',
        email: 'updatedemail@example.com',
        address: '456 XYZ Street',
        gender: 'Female',
        userPower: 'User',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// DELETE - Delete a user
describe('DELETE /users/delete/:id', function () {
  it('should delete a user', function (done) {
    request(app)
      .delete('/users/delete/1')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});


////////// Images ///////////


// GET - Get all images
describe('GET /images/get', function () {
  it('should respond with JSON', function (done) {
    request(app)
      .get('/images/get')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// POST - Create an image
describe('POST /images/create', function () {
  it('should create a new image', function (done) {
    request(app)
      .post('/images/create')
      .send({
        id: 1,
        guriId: '60c9e7e3a3e7a63da0906d4f',
        guriImages: ['Buffer data'],
        bathroomImages: ['image1.jpg', 'image2.jpg'],
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});


// GET - Get an Image by ID
exports.getImageById = async (req, res) => {
    try {
      const image = await Image.findOne({ _id: req.params.id });
      if (!image) {
        return res.send('Image not found');
      }
      res.json(image);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error getting image');
    }
  };
  
  
  

// PUT - Update an image
describe('PUT /images/update/:id', function () {
  it('should update an image', function (done) {
    request(app)
      .put('/images/update/1')
      .send({
        guriId: '60c9e7e3a3e7a63da0906d4f',
        guriImages: ['Updated Buffer data'],
        bathroomImages: ['updated_image1.jpg', 'updated_image2.jpg'],
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// DELETE - Delete an image
describe('DELETE /images/delete/:id', function () {
  it('should delete an image', function (done) {
    request(app)
      .delete('/images/delete/1')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});


//////////  About Table  //////

// POST - Create a new About entry
describe('POST /about/create', function () {
  it('should create a new About entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .post('/about/create')
        .send({
          id: 1,
          faahfaahinYar: "Example faahfaahinYar",
          faahfaahin: "Example faahfaahin"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// GET - Get all About entries
describe('GET /about/get', function () {
  it('should get all About entries', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .get('/about/get')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// GET - Get an About entry by ID
describe('GET /about/get/:id', function () {
  it('should get an About entry by ID', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .get('/about/get/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// PUT - Update an About entry
describe('PUT /about/update/:id', function () {
  it('should update an About entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .put('/about/update/1')
        .send({
          faahfaahinYar: "Updated faahfaahinYar",
          faahfaahin: "Updated faahfaahin"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// DELETE - Delete an About entry
describe('DELETE /about/delete/:id', function () {
  it('should delete an About entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .delete('/about/delete/1')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});


/////// xogtaShirkada Table /////////////



// describe('XogtaShirkada API', () => {
//   let createdXogtaShirkadaId;

//   // Test POST /xogtaShirkada/create
//   it('should create a new XogtaShirkada entry', async () => {
//     const response = await request(app)
//       .post('/xogtaShirkada/create')
//       .send({
//         id: 1,
//         location: 'Test Location',
//         logo: [Buffer.from('Test Logo')],
//         email: 'test@example.com',
//         complainEmail: 'complain@example.com',
//         complainPhone: '1234567890',
//         facebook: 'test-facebook',
//         tiktok: 'test-tiktok',
//         twitter: 'test-twitter',
//         instagram: 'test-instagram'
//       });

//     expect(response.statusCode).toBe(201);
//     expect(response.body).toHaveProperty('_id');
//     createdXogtaShirkadaId = response.body._id;
//   });

//   // Test GET /xogtaShirkada/get
//   it('should get all XogtaShirkada entries', async () => {
//     const response = await request(app).get('/xogtaShirkada/get');

//     expect(response.statusCode).toBe(200);
//     expect(response.body).toBeInstanceOf(Array);
//     expect(response.body.length).toBeGreaterThan(0);
//   });

//   // Test GET /xogtaShirkada/get/:id
//   it('should get a single XogtaShirkada entry by ID', async () => {
//     const response = await request(app).get(`/xogtaShirkada/get/${createdXogtaShirkadaId}`);

//     expect(response.statusCode).toBe(200);
//     expect(response.body).toHaveProperty('_id', createdXogtaShirkadaId);
//     expect(response.body).toHaveProperty('location', 'Test Location');
//   });

//   // Test GET /xogtaShirkada/get/:id - should return 404 if XogtaShirkada entry not found
//   it('should return 404 if XogtaShirkada entry not found', async () => {
//     const response = await request(app).get('/xogtaShirkada/get/nonexistent_id');

//     expect(response.statusCode).toBe(404);
//     expect(response.text).toBe('xogtaShirkada not found');
//   });

//   // Test PUT /xogtaShirkada/update/:id
//   it('should update an existing XogtaShirkada entry', async () => {
//     const response = await request(app)
//       .put(`/xogtaShirkada/update/${createdXogtaShirkadaId}`)
//       .send({
//         location: 'Updated Location'
//       });

//     expect(response.statusCode).toBe(200);
//     expect(response.body).toHaveProperty('_id', createdXogtaShirkadaId);
//     expect(response.body).toHaveProperty('location', 'Updated Location');
//   });

//   // Test PUT /xogtaShirkada/update/:id - should return 404 if XogtaShirkada entry not found
//   it('should return 404 if XogtaShirkada entry not found', async () => {
//     const response = await request(app).put('/xogtaShirkada/update/nonexistent_id');

//     expect(response.statusCode).toBe(404);
//     expect(response.text).toBe('xogtaShirkada not found');
//   });

//   // Test DELETE /xogtaShirkada/delete/:id
//   it('should delete an existing XogtaShirkada entry', async () => {
//     const response = await request(app).delete(`/xogtaShirkada/delete/${createdXogtaShirkadaId}`);

//     expect(response.statusCode).toBe(200);
//     expect(response.text).toBe('xogtaShirkada deleted successfully');
//   });

//   // Test DELETE /xogtaShirkada/delete/:id - should return 404 if XogtaShirkada entry not found
//   it('should return 404 if XogtaShirkada entry not found', async () => {
//     const response = await request(app).delete('/xogtaShirkada/delete/nonexistent_id');

//     expect(response.statusCode).toBe(404);
//     expect(response.text).toBe('xogtaShirkada not found');
//   });
// });




////////// Guriyaha Table //////


// describe('Guriyaha API', () => {
//   let createdGuriyahaId;

//   // Test the POST /guriyaha/create route
//   describe('POST /guriyaha/create', () => {
//     it('should create a new Guriyaha entry', async () => {
//       const response = await request(app)
//         .post('/guriyaha/create')
//         .send({
//           id: 1,
//           type: 'Residential',
//           area: 'Mogadishu',
//           bedrooms: 3,
//           bathrooms: 2,
//           price: 200000,
//         });

//       expect(response.statusCode).toBe(201);
//       expect(response.body).toHaveProperty('_id');
//       createdGuriyahaId = response.body._id;
//     });
//   });

//   // Test the GET /guriyaha/get/:id route
//   describe('GET /guriyaha/get/:id', () => {
//     it('should get a single Guriyaha entry by ID', async () => {
//       const response = await request(app).get(`/guriyaha/get/${createdGuriyahaId}`);

//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('_id', createdGuriyahaId);
//       expect(response.body).toHaveProperty('type', 'Residential');
//     });

//     it('should return 404 if Guriyaha entry not found', async () => {
//       const response = await request(app).get('/guriyaha/get/nonexistent_id');

//       expect(response.statusCode).toBe(404);
//       expect(response.text).toBe('Guriyaha entry not found');
//     });
//   });

//   // Test the PUT /guriyaha/update/:id route
//   describe('PUT /guriyaha/update/:id', () => {
//     it('should update an existing Guriyaha entry', async () => {
//       const response = await request(app)
//         .put(`/guriyaha/update/${createdGuriyahaId}`)
//         .send({
//           type: 'Commercial',
//           area: 'Hargeisa',
//           bedrooms: 0,
//           bathrooms: 1,
//           price: 500000,
//         });

//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('_id', createdGuriyahaId);
//       expect(response.body).toHaveProperty('type', 'Commercial');
//     });

//     it('should return 404 if Guriyaha entry not found', async () => {
//       const response = await request(app)
//         .put('/guriyaha/update/nonexistent_id')
//         .send({
//           type: 'Commercial',
//           area: 'Hargeisa',
//           bedrooms: 0,
//           bathrooms: 1,
//           price: 500000,
//         });

//       expect(response.statusCode).toBe(404);
//       expect(response.text).toBe('Guriyaha not found');
//     });
//   });

//   // Test the DELETE /guriyaha/delete/:id route
//   describe('DELETE /guriyaha/delete/:id', () => {
//     it('should delete an existing Guriyaha entry', async () => {
//       const response = await request(app).delete(`/guriyaha/delete/${createdGuriyahaId}`);

//       expect(response.statusCode).toBe(200);
//       expect(response.body.message).toBe('Guriyaha deleted successfully');
//     });

//     it('should return 404 if Guriyaha entry not found', async () => {
//       const response = await request(app).delete('/guriyaha/delete/nonexistent_id');

//       expect(response.statusCode).toBe(404);
//       expect(response.text).toBe('Guriyaha not found');
//     });
//   });
// });









///////// Contact Form Table ///////


// POST - Create a new contactForm entry
describe('POST /contactForm/create', function () {
  it('should create a new contactForm entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .post('/contactForm/create')
        .send({
          id:1,
          name: "John Doe",
          phone: "1234567890",
          message: "Hello, this is a test message"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// GET - Get a contactForm entry by ID
describe('GET /contactForm/get/:id', function () {
  it('should get a contactForm entry by ID', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .get('/contactForm/get/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// PUT - Update a contactForm entry
describe('PUT /contactForm/update/:id', function () {
  it('should update a contactForm entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .put('/contactForm/update/1')
        .send({
          name: "Updated Name",
          phone: "9876543210",
          message: "Updated message"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// DELETE - Delete a contactForm entry
describe('DELETE /contactForm/delete/:id', function () {
  it('should delete a contactForm entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .delete('/contactForm/delete/1')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});
