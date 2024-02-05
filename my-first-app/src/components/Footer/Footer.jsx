import './Footer.css'

const footer = (props) => {
    const link = props.link
    const text = props.text
    return (
        <a href ={link}>{text}</a>
    )
}

export default footer