import React from "react";

const PreviewImageHolder = ({ previewImage }) => {
    return (
        <div className="w-full flex justify-center">
            <img
                className="w-[250px] flex-shrink-0"
                src={previewImage}
                alt=""
            />
        </div>
    );
};

export default PreviewImageHolder;
