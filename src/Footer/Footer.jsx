import styles from './Footer.module.css'

function Footer() {
    return (
        <>
            <hr></hr>
            <footer>
                <p className={styles.text}>&copy; {new Date().getFullYear()} Harsh Desai. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default Footer;