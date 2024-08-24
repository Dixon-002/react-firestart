import { useState } from "react";
import Sidebar from "../components/shared/Sidebar";
import Overlay from "../components/shared/Overlay";
import Header from "../components/shared/Header";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/authActions";

export default function AuthenticatedLayout({ children, pageTitle }) {
    const [showingSidebarMobile, setShowingSidebarMobile] = useState(false);

    const dispatch = useDispatch();
    
    return (
        <>
            <Sidebar 
                isShowing={showingSidebarMobile}
                onClose={() => setShowingSidebarMobile(false)}
                onSignOut={() => dispatch(logoutAction())}
            />

            <Overlay isShowing={showingSidebarMobile} />

            <main className={`flex z-0 ${showingSidebarMobile && 'overflow-hidden'}`}>
                <div className="relative w-full h-full overflow-auto lg:ml-80">
                    <Header title={pageTitle} onClick={() => setShowingSidebarMobile(!showingSidebarMobile)} />
                    <div className="p-6">
                        { children }
                    </div>
                </div>
            </main>
        </>
    );
};
