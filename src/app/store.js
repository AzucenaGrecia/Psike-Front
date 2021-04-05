import { configureStore } from '@reduxjs/toolkit';

import quotesReducer from '../features/quotes/quotesSlice';
import PsychologistsReducer from "../features/psychologists/PsychologistsSlice";
import createAppointmentReducer from "../features/appointment/createAppointmentSlice";
import showAppointmentsReducer from "../features/psychologist/showAppointmentsSlice";
import showPsychologistReducer from "../features/psychologist/showPsychologistSlice";
import sessionReducer from "../features/session/sessionSlice";
import signReducer from "../features/signup/signSlice";
import profileReducer from "../features/profile/profileSlice";
import appointmentReducer from "../features/appointment/appointmentSlice";
import updateAppointmentReducer from '../features/appointment/updateAppointmentSlice';

export default configureStore({
  reducer: {
    psychologists: PsychologistsReducer,
    showPsychologist: showPsychologistReducer,
    showAppointments: showAppointmentsReducer,
    createAppointment: createAppointmentReducer,
    updateAppointment: updateAppointmentReducer,
    session: sessionReducer,
    signup: signReducer,
    quotes: quotesReducer,
    profile: profileReducer,
    appointment: appointmentReducer
  }
})