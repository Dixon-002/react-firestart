import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Card from "../components/shared/Card";

export default function ExamplePage() {
    return (
        <AuthenticatedLayout pageTitle="Example Page">
            <Card>
                <h1 className="text-lg font-medium">Welcome to the Example Page</h1>
                <p className="mt-4">
                    This page demonstrates routing in the React Firestart Dashboard, showing how to navigate between sections. It’s a practical example for using the AuthenticatedLayout and Card components effectively. Feel free to modify or replace this page as you develop your application.
                </p>
            </Card>
        </AuthenticatedLayout>
    );
};