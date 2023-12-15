import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Dashboard(props) {
    const name = props.auth.user.name;
    return <div className="p-6 text-gray-900">You're logged in! {name}</div>;
}

Dashboard.layout = (page) => (
    <AuthenticatedLayout
        titlePage="Dashboard"
        headerTitle="Dashboard"
        user={page.props.auth.user}
        children={page}
    />
);

export default Dashboard;
