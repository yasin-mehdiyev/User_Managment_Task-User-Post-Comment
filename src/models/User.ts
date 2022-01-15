interface User {
    id: string,
    name: string,
    email: string,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
};

interface UserList {
    users: User[],
    userName: string,
};

export default UserList;