import { PuffLoader } from "react-spinners";

export default function PageLoader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <PuffLoader />
        </div>
    );
};
