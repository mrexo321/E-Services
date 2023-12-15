import React from "react";

const DashboardAddForm = ({ title, description, children }) => {
    return (
        <div className="min-h-screen flex justify-center">
            <div className="max-w-2xl flex items-center flex-col gap-4">
                <div className="border-2 rounded-lg p-4">
                    <h1 className="font-semibold text-xl">{title}</h1>
                    <span>{description}</span>
                </div>
                <div className={`border-2 rounded-lg w-full space-y-6`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardAddForm;
