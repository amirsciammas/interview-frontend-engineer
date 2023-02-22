import { useNavigate } from 'react-router-dom';
import './error.css';

type Props = {
  title: string;
  body: string;
}

const NotFound = ({ title, body }: Props) => {
  const navigate = useNavigate();
  return (
    <div className='error-container'>
        <div className='error-div'>
            <div className='error-title'>{title}</div>
            <div className='error-detail'>
              {body}
            </div>
            <button className='error-action' onClick={() => navigate(-1)}>
                Back to dashboard
            </button>
        </div>
    </div>
  )
}

export default NotFound