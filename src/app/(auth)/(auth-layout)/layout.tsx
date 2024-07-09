import React from "react";

export default function AuthLayout({children}: {children: React.ReactNode;}) {
    return (
        <>
            {children}
            <h3>Auth Layout Group</h3>
        </>
    );  
}