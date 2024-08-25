import React from 'react';

import { SafeAreaView } from 'react-native';
import DataTable from './DataTable';

function Profile() {

  const data = [
    {
      "Estado": "Desierto",
      "Expediente": "EX-2024-56594419-   -APN-DA#CRJYPPF",
      "Fecha de apertura": "09/08/2024 10:00 Hrs.",
      "Nombre proceso": "ADQUISICION DE INSUMOS DE CAFETERIA",
      "Número proceso": "22-0013-CDI24",
      "Servicio Administrativo Financiero": "250 - Caja de Retiros Jubilaciones y Pensiones de la Policía Federal",
      "Tipo de Proceso": "Contratación Directa",
      "Unidad Ejecutora": "22 - Dpto de Compras y Suministros - Caja de Retiros Jubilaciones y Pensiones de la Policía Federal",
      "id": 1
    },
    {
      "Estado": "En Apertura",
      "Expediente": "EX-2024-56575422-   -APN-DA#CRJYPPF",
      "Fecha de apertura": "20/08/2024 10:00 Hrs.",
      "Nombre proceso": "ADQUISICION DE MUEBLES DE OFICINA 2024",
      "Número proceso": "22-0013-LPU24",
      "Servicio Administrativo Financiero": "250 - Caja de Retiros Jubilaciones y Pensiones de la Policía Federal",
      "Tipo de Proceso": "Licitación Pública",
      "Unidad Ejecutora": "22 - Dpto de Compras y Suministros - Caja de Retiros Jubilaciones y Pensiones de la Policía Federal",
      "id": 2
    }
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DataTable data={data} />
    </SafeAreaView>
  );

}

export default Profile;