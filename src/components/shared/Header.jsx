import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ title = "", onClick = () => {} }) {
    return (
        <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl">{ title }</h2>
            <button onClick={onClick} className="lg:hidden">
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
        </div>
    );
};
