import styles from './SectionHeader.module.css'
import PropTypes from 'prop-types'

function SectionHeader(props) {
    return (
        <>
            <u><h1 className={styles.header}>{props.text}</h1></u>
        </>
    );
}

SectionHeader.propTypes = {
    text: PropTypes.string,
}

SectionHeader.defaultProps = {
    text: "Header",
}

export default SectionHeader