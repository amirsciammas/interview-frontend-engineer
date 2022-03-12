import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiMail, FiGlobe } from 'react-icons/fi';
import { User } from 'src/types/api';
import Card from 'src/components/Card';
import * as classes from './user.module.css';

interface Props {
  user: User
}

export const cardStyle = {
  width: '70%',
  margin: '0 auto 12px',
};

function UserComponent(props: Props) {
  const { user } = props;
  return (
    <Card additionalStyles={cardStyle}>
      <div className={classes.cardContent}>
        <div>
          <div>
            <b>
              {user.username}
              ,
            </b>
            {' '}
            {user.company.name}
          </div>
          <div>
            <div className={classes.contacts}>
              <p>
                <FiPhoneCall />
                {user.phone}
              </p>
              <p>
                <FiGlobe />
                <a href={user.website} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </p>
              <p>
                <FiMail />
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.link}>
          <Link to={`users/${user.id}/posts`}>browse posts</Link>
        </div>
      </div>
    </Card>
  );
}

export default UserComponent;
