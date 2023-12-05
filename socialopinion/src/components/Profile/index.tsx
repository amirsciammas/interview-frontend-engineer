import styles from './profile.module.css';

type userObject = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    } 
  };

  type profileProps = {
    informations?: userObject
  }

function Profile({ informations }: profileProps) {

 if (!informations){
    return <p>Aucune information disponible</p>
 }

  return (
    <div className={styles.profile}>
        <h5>{informations.username}</h5>
        <div>
        <h6><span>Nom :</span> {informations.name}</h6>
        <h6><span>Email :</span> {informations.email}</h6>
        <h6><span>Site Web :</span> {informations.website}</h6>
        </div>
    </div>
  );


}

export default Profile;