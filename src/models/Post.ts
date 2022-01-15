interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
};

interface UserPost {
    posts: Post[],
    post: {
        title: string,
        body: string
    }
};

export default UserPost;