import React from "react";

type TField = {
    title: string;
    description: string | number;
}

export function Field({title, description}: TField) {
    return (
        <p>
            <strong>{title}</strong> {description}
        </p>
    );
}
