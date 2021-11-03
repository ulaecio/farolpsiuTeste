type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div>
        <button className='btn home-btn-order'>
            <h5>{text}</h5>
        </button>
    </div>
);

export default ButtonIcon;