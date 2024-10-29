import React from "react";

interface AddProps {
    onAdd: () => void;
    hasRemovedItems: boolean;
}

function Add({ onAdd, hasRemovedItems }: AddProps) {
    return (
        <button className={`${hasRemovedItems ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'} text-white px-5 py-2 rounded-md transition-colors duration-150`}
            onClick={onAdd} disabled={!hasRemovedItems}>
            Agregar
        </button>
    );
}

export default Add;
