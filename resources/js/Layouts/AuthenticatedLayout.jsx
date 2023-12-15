import { Head, Link } from "@inertiajs/react";
import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar";
import Container from "@/Components/Container";

export default function AuthenticatedLayout({
    user,
    headerTitle,
    children,
    titlePage,
    action,
    routeAction,
}) {
    return (
        <div className="min-h-screen bg-gray-100 font-poppins">
            <Head title={titlePage} />
            <DashboardNavbar user={user} />
            {headerTitle && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl flex md:flex-row flex-col items-center justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            {headerTitle}
                        </h2>
                        {action && (
                            <Link
                                href={routeAction}
                                className="bg-gray-900 py-1 px-2 rounded text-white"
                            >
                                {action}
                            </Link>
                        )}
                    </div>
                </header>
            )}
            <div className="py-12">
                <Container className="px-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        {children}
                    </div>
                </Container>
            </div>
        </div>
    );
}
