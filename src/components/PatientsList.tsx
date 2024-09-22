import { usePatientStore } from "../store/store";
import { PatientDetails } from "./PatientDetails";

export const PatientsList = () => {

   const PatientsList = usePatientStore( state => state.patients );

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { PatientsList.length 
         ? (<>
               <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
               <p className="text-lg mt-5 text-center mb-10">
                  Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
               </p>
               { PatientsList.map( patient => (
                  <PatientDetails key={ patient.id } patient={ patient } />
               ))}
            </>)
         : (<>
               <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
               <p className="text-lg mt-5 text-center"> 
                  Comienza agregando pacientes {''} <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
               </p>
            </>)
      }
    </div>
  )
}
