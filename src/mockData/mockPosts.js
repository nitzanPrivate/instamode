import { mockUsers } from './mockUsers'; 

const getUserById = (userId, users) => {
    const user = users.find(user => user.user_id === userId);
    return user ? { fullname: user.username, imgUrl: user.imgUrl } : { fullname: 'Unknown', imgUrl: '' };
};

export const mockPosts = [
    {
        _id: "s101",
        txt: "Best trip ever",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522137/cld-sample-2.jpg", 
        by: getUserById("u101", mockUsers),
        comments: [
            {
                id: "c1001",
                by: getUserById("u105", mockUsers), // Fetch user details for the comment
                txt: "Good one!",
            },
            {
                id: "c1002",
                by: getUserById("u103",mockUsers),
                txt: "Looks amazing!",
            }
        ],
        likedBy: [
            getUserById("u102", mockUsers),
            getUserById("u103", mockUsers)
        ],
    },
    {
        _id: "s102",
        txt: "Chilling at the beach!",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522136/samples/dessert-on-a-plate.jpg",
        by: getUserById("u104", mockUsers),
        comments: [
            {
                id: "u101",
                by: getUserById("u106", mockUsers),
                txt: "Whoooooooooooooooooooooooooooooooooooooooooo",
            },
            {
                id: "u105",
                by: getUserById("u103", mockUsers),
                txt: "LOL!",
            }
        ],
        likedBy: [
             getUserById("u101", mockUsers),
             getUserById("u104", mockUsers)
        ],
    },
    {
        _id: "s103",
        txt: "Exploring the mountains!",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522136/samples/coffee.jpg",
        by: getUserById("u103", mockUsers),
        comments: [],
        likedBy: [
            getUserById("u102", mockUsers),
        ],
    },
];
