import './Button.css';

function Button() {
    const handleClick = () => {
        console.log('Button Clicked');
    };

    return (
        <button className="btn-primary" onClick={handleClick}>
            Upload
        </button>
    );
}

export default Button;
