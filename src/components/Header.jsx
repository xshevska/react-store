function Header() {
    return (
        <nav className = "blue accent-3">
            <div className = "nav-wrapper">
                <a href = "#" className = "brand-logo">
                    React Shop
                </a>
                <ul id = "nav-mobile" className = "right hide-on-med-and-down">
                    <li>
                        <a href = "#">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export {Header};
