import { toast } from "react-toastify";
import { usePatientStore } from "../store/store";
import { Patient } from "../types";
import { PatientDetailsItem } from "./PatientDetailsItem";

type PatientDetailsProps = {
   patient: Patient
}

export const PatientDetails = ({ patient } : PatientDetailsProps ) => {

   const { deletePatient, getPacientById } = usePatientStore();

   const onDeletePatient = () => {
      deletePatient( patient.id );
      toast.error("¡Paciente Eliminado!");
   }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg">
      
      <PatientDetailsItem label="ID" data={ patient.id } />
      <PatientDetailsItem label="Nombre" data={ patient.name } />
      <PatientDetailsItem label="Propietario" data={ patient.caretaker } />
      <PatientDetailsItem label="Email" data={ patient.email } />
      <PatientDetailsItem label="Fecha" data={ patient.date.toString() } />
      <PatientDetailsItem label="Sintomas" data={ patient.symptoms } />
      
      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
         <button 
            type="button"
            className="bg-indigo-600 text-white font-bold uppercase rounded-lg px-10 py-2"
            onClick={ () => getPacientById( patient.id ) }
         >
            Editar
         </button>
         <button 
            type="button"
            className="bg-red-600 text-white font-bold uppercase rounded-lg px-10 py-2"
            onClick={ onDeletePatient }
         >
            Eliminar
         </button>
      </div>

    </div>
  )
}
