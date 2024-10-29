'use client';
import React, { useState } from "react";
import DeleteButton from '../Delete';
import AddButton from '../Add';

const initialData = [
    { id: '1', name: 'Paga Todo', age: '10', description: 'Banco Paga Todo es Para Todos' },
    { id: '2', name: 'BBVA Bancomer', age: '11', description: 'BBVA Bancomer Creando Oportunidades' },
    { id: '3', name: 'Scotiabank México', age: '9', description: 'Scotiabank Creando Tú decides, Nosotros te Asesoramos' },
    { id: '4', name: 'Citibanamex', age: '7', description: 'Citibanamex, lo mejor de México, lo mejor del mundo' },
    { id: '5', name: 'Banregio', age: '5', description: 'Somos el banco de creadores' },
];

function Table() {
    const [data, setData] = useState(initialData);
    const [removedData, setRemovedData] = useState<any[]>([]);
    const handleDeleteFirst = () => {
        if (data.length > 0) {
            const updatedData = data.slice(1);
            const removedItem = data[0];
            setRemovedData([...removedData, removedItem]);
            setData(updatedData);
        }
    };
    const handleAddOne = () => {
        if (removedData.length > 0) {
            const restoredItem = removedData[0];
            const updatedRemovedData = removedData.slice(1);
            setData([restoredItem, ...data]);
            setRemovedData(updatedRemovedData);
        }
    };

    return (
        <div className="relative overflow-x-auto md:mt-8 md:mx-6">
            <table className="min-w-full border border-strong-blue">
                <thead>
                <tr className="bg-blue">
                    <th className="p-2 text-black border-black">Nombre</th>
                    <th className="p-2 text-black border-black">Años</th>
                    <th className="p-2 text-black border-black">Descripción</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className="p-2 border border-strong-blue">{item.name}</td>
                        <td className="p-2 border border-strong-blue">{item.age}</td>
                        <td className="p-2 border border-strong-blue">{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-end mt-4">
                <AddButton onAdd={handleAddOne} hasRemovedItems={removedData.length > 0} />
                <DeleteButton onDelete={handleDeleteFirst} />
            </div>
        </div>
    );
}

export default Table;
