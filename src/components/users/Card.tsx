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

    const handleSeePosts = (id: number, name: string) => {
        navigate(`/${name}/post/${id}`);
    }

    const getAndSetInitials = (name: string) => {
        let initials = '';
        const names = name.split(" ");
        if (names.length === 1) {
            initials = names[0].substring(0, 1).toUpperCase();
        } else if (names.length > 1) {
            names.forEach((_, i) => {
                initials += names[i].substring(0, 1).toUpperCase();
            });
        }
        return initials;
    }

    return (
        <div className='card-container'>
            <div className='card-avatar' style={{ background: '#' + getRandomColor() }}>
                <div className='card-name'>{getAndSetInitials(data?.name)}</div>
            </div>
            <div className='card-detail'>
                <div className='card-title'>{data?.name}</div>
                <div className='card-sub-title'>{data?.email}</div>
                <div className='card-link' onClick={() => handleSeePosts(data?.id, data?.name)}>See posts</div>
            </div>
        </div>
    )
}

export default Card;