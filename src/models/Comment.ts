interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
};

interface PostComments {
    comments: Comment[],
};

export default PostComments;