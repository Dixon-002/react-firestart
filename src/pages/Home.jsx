import Card from "../components/shared/Card";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

export default function Home() {
    return (
        <AuthenticatedLayout pageTitle="Dashboard">
            <Card>
                <h1 className="text-lg font-medium">Welcome to React Firestart Dashboard!</h1>
                <p className="mt-4">This dashboard is your hub for navigating the application and accessing key features quickly.</p>
            </Card>
        </AuthenticatedLayout>
    );
};