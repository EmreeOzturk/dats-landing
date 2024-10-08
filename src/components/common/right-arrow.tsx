
type RightArrowProps = {
    color: "black" | "white";
}

const RightArrow: React.FC<RightArrowProps> = ({ color }) => {
    return (
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33333 0.833496L13 5.50016M13 5.50016L8.33333 10.1668M13 5.50016L1 5.50016" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default RightArrow