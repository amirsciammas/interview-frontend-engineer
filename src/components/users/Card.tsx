import { useNavigate } from 'react-router-dom';
import './card.css';

type Props = {
    data: any;
}

const getRandomColor = () => {
    const randomColor: string = Math.floor(Math.random()*16777215).toString(16);
    return randomColor === '000000' || randomColor === 'ffffff' ? '00DECA' : randomColor;
}

const Card = ({ data }: Props) => {
    const navigate = useNavigate();

    const handleSeePosts = (id: number) => {
        navigate('/post/' + id);
    }

    return (
        <div className='card-container'>
            <div className='card-avatar' style={{ background: '#' + getRandomColor() }}>
                <div className='card-name'>SP</div>
            </div>
            <div className='card-detail'>
                <div className='card-title'>{data?.name}</div>
                <div className='card-sub-title'>{data?.email}</div>
                <div className='card-link' onClick={() => handleSeePosts(data?.id)}>See posts</div>
            </div>
        </div>
    )
}

export default Card;