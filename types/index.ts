type PostsState = {
    posts: PostProps[];
    loading: boolean;
    error: string | null;
}

type PostProps = {
    userId: number | null;
    id: number | null;
    title: string | null;
    body: string | null;
}