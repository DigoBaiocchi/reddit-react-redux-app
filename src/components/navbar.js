export default function Navbar({name}) {
    return (
        <nav>
            <a href={`https://www.google.com/search?q=${name}`}>{name}</a>
        </nav>
    );
}