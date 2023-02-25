import { Link } from 'react-router-dom';

export const UserError = () => {
  return (
    <>
      <h2>Ooops!! This user doesn't exist</h2>

      <p>
        <Link to="/">Click here</Link> to go back to the Homepage
      </p>
    </>
  );
};
