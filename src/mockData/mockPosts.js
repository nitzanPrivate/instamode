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
                by: getUserById("u105", mockUsers),
                txt: "Good one!",
            },
            {
                id: "c1002",
                by: getUserById("u103", mockUsers),
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
                by: getUserById("u105", mockUsers),
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
    {
        _id: "s104",
        txt: "Post about kitten",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522129/samples/animals/kitten-playing.gif",
        by: getUserById("u102", mockUsers),
        comments: [],
        likedBy: [
            getUserById("u103", mockUsers),
            getUserById("u104", mockUsers),
            getUserById("u105", mockUsers)
        ],
    },
    {
        _id: "s105",
        txt: "Post about spices",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522129/samples/food/spices.jpg",
        by: getUserById("u104", mockUsers),
        comments: [
            {
                id: "c2001",
                by: getUserById("u101", mockUsers),
                txt: "Looks delicious!",
            },
            {
                id: "c2002",
                by: getUserById("u102", mockUsers),
                txt: "Nice colors!",
            },
        ],
        likedBy: [
            getUserById("u103", mockUsers),
            getUserById("u104", mockUsers),
            getUserById("u105", mockUsers),
            getUserById("u101", mockUsers)
        ],
    },
    {
        _id: "s106",
        txt: "Post about bag",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522128/samples/ecommerce/leather-bag-gray.jpg",
        by: getUserById("u101", mockUsers),
        comments: [],
        likedBy: [
            getUserById("u105", mockUsers),
        ],
    },
    {
        _id: "s107",
        txt: "Post about dogs",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522128/samples/animals/three-dogs.jpg",
        by: getUserById("u103", mockUsers),
        comments: [
            {
                id: "c3001",
                by: getUserById("u104", mockUsers),
                txt: "Adorable!",
            },
            {
                id: "c3002",
                by: getUserById("u105", mockUsers),
                txt: "I love dogs!",
            },
            {
                id: "c3003",
                by: getUserById("u102", mockUsers),
                txt: "The best pets!",
            },
        ],
        likedBy: [
            getUserById("u101", mockUsers),
            getUserById("u102", mockUsers),
            getUserById("u104", mockUsers),
            getUserById("u105", mockUsers)
        ],
    },
    {
        _id: "s108",
        txt: "Broadway Street / Morris St",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522128/samples/landscapes/architecture-signs.jpg",
        by: getUserById("u105", mockUsers),
        comments: [],
        likedBy: [],
    },
    {
        _id: "s109",
        txt: "Post about shoes",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522128/samples/ecommerce/shoes.png",
        by: getUserById("u102", mockUsers),
        comments: [
            {
                id: "c4001",
                by: getUserById("u101", mockUsers),
                txt: "I need these!",
            },
        ],
        likedBy: [
            getUserById("u103", mockUsers),
            getUserById("u105", mockUsers)
        ],
    },
    {
        _id: "s110",
        txt: "Jazz Band Live!",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522128/samples/people/jazz.jpg",
        by: getUserById("u103", mockUsers),
        comments: [],
        likedBy: [],
    },
    {
        _id: "s111",
        txt: "Kid playing in the snow",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522128/samples/people/boy-snow-hoodie.jpg",
        by: getUserById("u104", mockUsers),
        comments: [],
        likedBy: [
            getUserById("u101", mockUsers),
        ],
    },
    {
        _id: "s112",
        txt: "Sheep on the road",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522127/samples/sheep.jpg",
        by: getUserById("u105", mockUsers),
        comments: [],
        likedBy: [],
    },
    {
        _id: "s113",
        txt: "Reindeer wandering around",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522127/samples/animals/reindeer.jpg",
        by: getUserById("u101", mockUsers),
        comments: [],
        likedBy: [
            getUserById("u102", mockUsers),
            getUserById("u104", mockUsers)
        ],
    },
    {
        _id: "s114",
        txt: "Cat enjoying the sun",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522127/samples/animals/cat.jpg",
        by: getUserById("u103", mockUsers),
        comments: [
            {
                id: "c5001",
                by: getUserById("u105", mockUsers),
                txt: "Cute cat!",
            },
        ],
        likedBy: [],
    },
    {
        _id: "s115",
        txt: "Beautiful flowers",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522126/sample.jpg",
        by: getUserById("u105", mockUsers),
        comments: [],
        likedBy: [],
    },
    {
        _id: "s116",
        txt: "Classic Watch",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522127/samples/ecommerce/analog-classic.jpg",
        by: getUserById("u102", mockUsers),
        comments: [],
        likedBy: [
            getUserById("u101", mockUsers),
            getUserById("u103", mockUsers)
        ],
    },
    {
        _id: "s117",
        txt: "Delicious Fish Dish",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522127/samples/food/fish-vegetables.jpg",
        by: getUserById("u104", mockUsers),
        comments: [],
        likedBy: [],
    },
    {
        _id: "s118",
        txt: "Seafood Soup",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522127/samples/food/pot-mussels.jpg",
        by: getUserById("u105", mockUsers),
        comments: [
            {
                id: "c6001",
                by: getUserById("u102", mockUsers),
                txt: "Yummy!",
            },
        ],
        likedBy: [],
    },
    {
        _id: "s119",
        txt: "Bicycle Racing Fun!",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522128/samples/people/bicycle.jpg",
        by: getUserById("u101", mockUsers),
        comments: [],
        likedBy: [],
    },
    {
        _id: "s120",
        txt: "Boat and Beach Relaxation",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522128/samples/landscapes/beach-boat.jpg",
        by: getUserById("u104", mockUsers),
        comments: [],
        likedBy: [
            getUserById("u103", mockUsers),
            getUserById("u105", mockUsers)
        ],
    },
];
