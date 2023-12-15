import Button from "@/Components/Button";
import ImageHolder from "@/Components/ImageHolder";
import { Link, useForm } from "@inertiajs/react";
import { NotePencil, Trash } from "@phosphor-icons/react";
import React from "react";

const DashboardProductBox = ({ link, slug, image, title, price }) => {
    const { post } = useForm();
    const deleteHandler = (e) => {
        e.preventDefault();
        post(route("dashboard.product.destroy", slug));
    };
    return (
        <form onSubmit={deleteHandler} className="shadow-lg border rounded-xl">
            <>
                <ImageHolder className="rounded" src={image} />
                <div className="flex flex-col gap-y-8 leading-relaxed text-center">
                    <span className="text-gray-500 text-sm md:text-lg">
                        {title}
                    </span>
                    <div className="flex items-center justify-between w-full">
                        <Button
                            type="submit"
                            className="flex justify-center rounded-none items-center border"
                        >
                            <Trash size={28} className="fill-red-600" />
                        </Button>
                        <Button className=" flex justify-center rounded-none items-center border">
                            <Link href={route("homepage")}>
                                <NotePencil size={28} color="#000" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </>
        </form>
    );
};

export default DashboardProductBox;
