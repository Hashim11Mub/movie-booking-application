const express = require('express');
const userRouter = express.Router;

userRouter.get('/', getAllUsers);
userRouter.post('/sginup', sifnUp);
userRouter.put(':id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/login', logIn);
userRouter.get('/bookings/:id', getBookingofUser);
userRouter.get('/:id', getUserById);

module.exports = userRouter;