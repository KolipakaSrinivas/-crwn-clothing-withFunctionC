import './custom-button.css'

const CustomButton = ({children,...otherprops}) => {
    return (
        <button className="custom-button"{...otherprops}>
            {children}
        </button>
    )
}

export default CustomButton