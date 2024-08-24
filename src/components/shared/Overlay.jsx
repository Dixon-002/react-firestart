export default function Overlay({ isShowing }) {

    const display = isShowing ? 'blick' : 'hidden';

    return (
        <div className={"fixed lg:hidden inset-0 z-10 bg-gray-900/40 " + display}></div>
    );
};