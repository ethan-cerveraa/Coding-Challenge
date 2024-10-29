'use client';
import React from "react";

interface DeleteProps {
    onDelete: () => void;
}

function Delete({ onDelete }: DeleteProps) {
    return (
        <div className="overflow-x-auto mr-4 ml-2">
            <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition-colors duration-150" onClick={onDelete}>
                Eliminar
            </button>
        </div>
    );
}

export default Delete;
