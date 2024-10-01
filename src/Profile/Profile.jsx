import PropTypes from 'prop-types'
import styles from './Profile.module.css'

function Profile(props) {
    return (
        <>
            <div className={styles["profile"]}>
                <div className={styles["pic-container"]}>
                    <img className={styles["profile-pic"]} alt="profile-picture" src={props.src}></img>
                </div>
                <div className={styles["bio-container"]}>
                    <u><h2>{props.title}</h2></u>
                    <p className={styles["bio-text"]}>{props.bio}</p>
                </div>
            </div>
        </>
    );
}

Profile.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    bio: PropTypes.string
}

export default Profile