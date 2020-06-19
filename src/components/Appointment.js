import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => {
    // Extraer los valores
    const { pet, owner, date, hour, symptoms, id } = appointment;

    return (
        <div className="cita">
            <p>Mascota: <span>{pet}</span></p>
            <p>Dueño: <span>{owner}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{hour}</span></p>
            <p>Síntomas: <span>{symptoms}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={() => deleteAppointment(id) }
            >Eliminar &times;</button>
        </div>
    );
};

Appointment.propTypes = {
    appointments: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired,
}
 
export default Appointment;
