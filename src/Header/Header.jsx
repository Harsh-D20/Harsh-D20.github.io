import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.header}>
                <img alt="logo" className={styles.logo} src="/logo.png"></img>
                <u><h1 id={styles["title"]}>Harsh Desai</h1></u>
                <nav className={styles.navbar}>
                    <ul className={styles.options}>
                        <li><a href="#">Home</a></li>
                        {/* <li><a href="#skills">Skills</a></li>
                        <li><a href="#courses">Coursework</a></li> */}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;