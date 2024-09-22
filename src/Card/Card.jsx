import PropTypes from 'prop-types'
import styles from './Card.module.css'

function Card(props) {

    const altText = props.title + " image";

    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]}>
                <img alt={altText} src={props.src}></img>
            </div>
            <div className={styles["card-text"]}>
                <div className={styles["title"]}>
                    <h3>{props.title}</h3>
                </div>
                <p className={styles["text"]}>{props.text}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.string
}

Card.defaultProps = {
    title: "Title",
    text: "Description",
    src: "/default-card-image.svg",
}

export default Card;