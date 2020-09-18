let db={
    users:[
        {
            userId:'kyOZXWr8MGeyA1G5l9A10vg27h42',
            email:'devro@email.com',
            handle:'Dev',
            createdAt:'2020-07-28T06:45:32.536Z',
            imageUrl:'https://firebasestorage.googleapis.com/v0/b/jobeefy-9bc92.appspot.com/o/62899891597.jpg?alt=media&token=6d872c3f-e563-42f5-a1f9-0aa227ca417c',
            bio:'Hello I am Dev',
            phoneNumber:'09792469504',
            university:'TUM',
            badge:'Entry GIGGLER',
            relation:'Single',
            website:'https://user.com',
            location:'London,UK'
        }
    ],
    screams:[
        {
            userHandle:'user',
            body:'this is the scream body',
            createdAt:'2020-07-26T20:43:14.999Z',
            likeCount:5,
            commentCount:2,
            uploadImage:'https://firebasestorage.googleapis.com/v0/b/jobeefy-9bc92.appspot.com/o/62899891597.jpg?alt=media&token=6d872c3f-e563-42f5-a1f9-0aa227ca417c',
            userImage:'https://firebasestorage.googleapis.com/v0/b/jobeefy-9bc92.appspot.com/o/62899891597.jpg?alt=media&token=6d872c3f-e563-42f5-a1f9-0aa227ca417c'
        }
    ],
    globalChat:[
        {
            userHandle:'Dev',
            body:'Test Global Chat',
            createdAt:'2020-07-26T20:43:14.999Z',
            userImage:'https://firebasestorage.googleapis.com/v0/b/jobeefy-9bc92.appspot.com/o/62899891597.jpg?alt=media&token=6d872c3f-e563-42f5-a1f9-0aa227ca417c'
        }
    ],
    comments:[
        {
            userHandle:'user',
            screamId:'6tgS6fSnleHLXUu3Tmx3',
            body:'nice one mate',
            createdAt:'2020-07-26T20:43:14.999Z',
            uploadImage:'https://firebasestorage.googleapis.com/v0/b/jobeefy-9bc92.appspot.com/o/62899891597.jpg?alt=media&token=6d872c3f-e563-42f5-a1f9-0aa227ca417c',
            userImage:'https://firebasestorage.googleapis.com/v0/b/jobeefy-9bc92.appspot.com/o/62899891597.jpg?alt=media&token=6d872c3f-e563-42f5-a1f9-0aa227ca417c'
        }
    ],
    notifications:[
        {
            recipient:'user',
            sender:'john',
            read:'true | false',
            screamId:'hh705oWfWucVgGbHH2pa',
            type:'like | comment',
            createdAt:'2020-07-28T06:45:32.536Z'
        }
    ]
};
const userDetail={
    credentials:{
            userId:'kyOZXWr8MGeyA1G5l9A10vg27h42',
            email:'devro@email.com',
            handle:'Dev',
            createdAt:'2020-07-28T06:45:32.536Z',
            imageUrl:'https://firebasestorage.googleapis.com/v0/b/jobeefy-9bc92.appspot.com/o/62899891597.jpg?alt=media&token=6d872c3f-e563-42f5-a1f9-0aa227ca417c',
            bio:'Hello I am Dev',
            phoneNumber:'09792469504',
            relation:'single',
            university:'TUM',
            badge:'Entry GIGGLER',
            website:'https://user.com',
            location:'London,UK'
    },
    likes:[
        {
            userHandle:'user',
            screamId:'hh705oWfWucVzGbHH2pa'
        },
        {
            userHandle:'user',
            screamId:'hh705oWfWucVgGbHH2pa'
        }
    ]

}