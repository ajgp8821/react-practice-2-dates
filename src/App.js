import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  // Citas en Local Storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  // Arreglo de citas
  const [appointments, setAppointments] = useState(initialAppointments);

  // Use Effect para realizar ciertas operaciones cuando el State cambia
  useEffect( () => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }
    else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments] );

  // Función que que toma las citas actuales y agregue las nuevas
  const createAppointment = appointment => {
    console.log(appointment);
    setAppointments([
      ...appointments,
      appointment
    ])
  };

  // Función que elimina una cita por su ID
  const deleteAppointment = id => {
    const newAppointments = appointments.filter( appointment => appointment.id !== id);
    setAppointments(newAppointments);
  }

  // Mensaje condicional
  const title = appointments.length === 0 ? 'No hay citas' : 'Administras tus citas'
  // console.log(appointments.length);

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
    
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
