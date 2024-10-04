export const mockPosts = [
    {
        _id: "s101",
        txt: "Best trip ever",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522137/cld-sample-2.jpg", 
        by: {
            _id: "u101",
            fullname: "Ulash Ulashi",
            imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg"
        },
        comments: [
            {
                id: "c1001",
                by: {
                    _id: "u105",
                    fullname: "Bob",
                    imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg"
                },
                txt: "Good one!",
            },
            {
                id: "c1002",
                by: {
                    _id: "u106",
                    fullname: "Alice",
                    imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego4_wppgb6.jpg"
                },
                txt: "Looks amazing!",
            }
        ],
        likedBy: [
            { _id: "u102", fullname: "John Doe", imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego8_ttcv9g.jpg" },
            { _id: "u103", fullname: "Emma Stone", imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg" }
        ],
    },
    {
        _id: "s102",
        txt: "Chilling at the beach!",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522137/cld-sample-2.jpg",
        by: {
            _id: "u102",
            fullname: "John Doe",
            imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego8_ttcv9g.jpg"
        },
        comments: [
            {
                id: "u101",
                by: {
                    _id: "u105",
                    fullname: "Bob",
                    imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg"
                },
                txt: "Whoooooooooooooooooooooooooooooooooooooooooo",
            },
            {
                id: "u105",
                by: {
                    _id: "u106",
                    fullname: "Alice",
                    imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego4_wppgb6.jpg"
                },
                txt: "LOL!",
            }
        ],
        likedBy: [
            { _id: "u101", fullname: "Ulash Ulashi", imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg" },
            { _id: "u104", fullname: "Mason", imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego8_ttcv9g.jpg" }
        ],
    },
    {
        _id: "s103",
        txt: "Exploring the mountains!",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522137/cld-sample-2.jpg",
        by: {
            _id: "u103",
            fullname: "Emma Stone",
            imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg"
        },
        comments: [],
        likedBy: [
            { _id: "u105", fullname: "Sophia", imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg" }
        ],
    },
];
