import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.header}>
                <img alt="logo" className={styles.logo} src="/logo.png"></img>
                <h1 id={styles["title"]}>Harsh Desai</h1>
                <nav className={styles.navbar}>
                    <p>Test</p>
                    {/* <ul className={styles.options}>
                        <li><a href="#">Home</a></li>
                    </ul> */}
                </nav>
            </div>
        </>
    );
}

export default Header;