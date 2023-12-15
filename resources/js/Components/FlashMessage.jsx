import React from "react";

const FlashMessage = ({ message }) => {
    return (
        <div className="fixed bottom-2 left-2 bg-green-400  rounded-xl text-base text-gray-800 py-2 px-4">
            {message}
        </div>
    );
};

export default FlashMessage;
