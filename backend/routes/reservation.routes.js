import express from 'express';
import { createReservation, getReservation, listAccommodationReservations, guestCancelReservation, editReservation } from '../controllers/reservationController.js';

const router = express.Router();

//@TODO double-check router routes
router.get('host/accommodations/reservations', listAccommodationReservations);
router.post('/guest/acommodationPage/:acomId', createReservation);
router.get('/guest/minhas_reservas', getReservation);
router.delete('/guest/minhas_reservas', guestCancelReservation);
router.put('/guest/minhas_reservas/:reserveId', editReservation);

export default router;