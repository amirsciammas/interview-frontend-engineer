
type Props = {
    id: number, 
    name: string, 
    email: string, 
    website: string, 
    index: number, 
    toggleUserPosts: (index: number, id: number) => void
}

const UserInfo = ({id, name, email, website, index, toggleUserPosts}: Props) => {
    return (
        <div key={index}
            className="table-body d-flex"
            onClick={() => toggleUserPosts(index, id)}
        >
            <p className="main-table-cell"></p>

            <p className="main-table-cell">{id}</p>

            <p className="main-table-cell">{name}</p>

            <p className="main-table-cell">{email}</p>

            <p className="main-table-cell">{website}</p>
        </div>
    );
};

export default UserInfo;
