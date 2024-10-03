
export const mockPosts = [
    {
        _id: "s101",
        txt: "Best trip ever",
        imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727522137/cld-sample-2.jpg", 
        by: {
            _id: "u101",
            fullname: "Ulash Ulashi",
            imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg" // mock profile image URL here
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
            }
        ],
        likedBy: [
            {
                _id: "u106",
                fullname: "Dob",
                imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego9_me6xcf.jpg"
            }
        ],
    },
    // Add more mock posts if needed
];
