
type Props = {
    userPosts: { id: number, body: string, title: string, userId: number }[],
}

const UserPostsInfo = ({ userPosts }: Props) => {
    return (
        <div>
            {userPosts.map((post) => {
                return (
                    <div key={post.id} className="postData">
                        <br />
                        <div
                            style={{ width: '100%' }}
                            className="font-weight-bold text-center"
                        >
                            <div>
                                Post Id <div className="text-color-blue">{post.id}</div>
                            </div>

                            <div>
                                Title
                                <div className="text-color-blue">{post.title}</div>
                            </div>

                            <div>
                                Body
                                <div className="text-color-blue">{post.body}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UserPostsInfo;
