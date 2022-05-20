const animeWatchList = [
    {
        id: 1,
        title: "Date a live",
        episodes: 0,
        seasons: 4,
        genres: ["action", "fantasy", "drama"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 2,
        title: "Shinchou Yuusha",
        episodes: 0,
        genres: ["action", "fantasy"],
        seasons: 1,
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 3,
        title: "Beatless",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "drama", "sci-fi"],
        status: "completed",
        score: 8.0,
        description: "",
        personalComments: ""
    },
    {
        id: 4,
        title: "Mushoku Tensei: Isekai Ittara Honki Dasu",
        episodes: 0,
        seasons: 2,
        genres: ["action", "fantasy", "ecchi"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 5,
        title: "Dororo",
        episodes: 0,
        seasons: 1,
        genres: ["action", "adventure", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 6,
        title: "Sewayaki Kitsune no Senko-san",
        episodes: 0,
        seasons: 1,
        genres: ["slice of life", "supernatural"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 7,
        title: "Gotoubun no Hanayome",
        episodes: 0,
        seasons: 2,
        genres: ["comedy", "romance"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 8,
        title: "Kami no tou",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 9,
        title: "Plunderer",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "ecchi"],
        status: "completed",
        score: 8.0,
        description: "",
        personalComments: ""
    },
    {
        id: 10,
        title: "Hige wo Soru. Soshite Joshikousei wo Hirou",
        episodes: 0,
        seasons: 1,
        genres: ["drama", "romance"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 11,
        title: "Kobayashi-san Chi no Maid Dragon",
        episodes: 0,
        seasons: 1,
        genres: ["comedy", "fantasy"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 12,
        title: "Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
        episodes: 0,
        seasons: 3,
        genres: ["action", "fantasy", "comedy", "adventure"],
        status: "pending",
        score: 9.0,
        description: "",
        personalComments: ""
    },
    {
        id: 13,
        title: "Zombie Land Saga",
        episodes: 0,
        seasons: 2,
        genres: ["comedy", "supernatural"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 14,
        title: "Black Bullet",
        episodes: 0,
        seasons: 1,
        genres: ["action", "mystery", "sci-fi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 15,
        title: "Akame ga Kiru",
        episodes: 0,
        seasons: 1,
        genres: ["gore", "superpower"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "The best of the best"
    },
    {
        id: 16,
        title: "Re:Zero",
        episodes: 0,
        seasons: 2,
        genres: ["gore", "fantasy", "supernatural"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 17,
        title: "ViVY: Flourite eye's song",
        episodes: 0,
        seasons: 1,
        genres: ["action", "sci-fi", "suspense"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "The best pci-fi anime ever"
    },
    {
        id: 18,
        title: "Kumo desu ga, nani ka?",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "adventure", "comedy", "mystery"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "I loved the spidy girl :3"
    },
    {
        id: 19,
        title: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu",
        episodes: 0,
        seasons: 1,
        genres: ["comedy", "fantasy", "ecchi"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 20,
        title: "Arifureta Shokugyou de Sekai Saikyou",
        episodes: 0,
        seasons: 2,
        genres: ["action", "fantasy", "adventure"],
        status: "pending",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 21,
        title: "Mairimashita! Iruma-kun",
        episodes: 0,
        seasons: 2,
        genres: ["comedy", "fantasy", "supernatural"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 22,
        title: "Jahy-sama wa kujikenai!",
        episodes: 0,
        seasons: 1,
        genres: ["comedy", "supernatural"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 23,
        title: "Kimetsu no yaiba",
        episodes: 0,
        seasons: 2,
        genres: ["action", "fantasy", "supernatural", "superpower", "comedy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 24,
        title: "Tate no yuusha no nariagari",
        episodes: 0,
        seasons: 2,
        genres: ["action", "fantasy", "adventure"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 25,
        title: "Koutetsujou no kabaneri",
        episodes: 0,
        seasons: 2,
        genres: ["horror", "supernatural", "romance", "action", "drama", "fantasy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 26,
        title: "Tsurezure children",
        episodes: 0,
        seasons: 1,
        genres: ["comedy", "romance"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 27,
        title: "Danna ga nani wo itteiru ka wakaranai ken",
        episodes: 0,
        seasons: 1,
        genres: ["comedy", "romance"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 28,
        title: "Rokka no yuusha",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy"],
        status: "completed",
        score: 7.0,
        description: "",
        personalComments: ""
    },
    {
        id: 29,
        title: "Another",
        episodes: 0,
        seasons: 1,
        genres: ["horror", "gore", "mystery"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 31,
        title: "Sword art online",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "adventure", "romance"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 32,
        title: "Sword art online: 2",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "adventure", "romance"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 33,
        title: "Sword art online: 3 Alternative gun gale online",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "adventure", "romance"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 34,
        title: "Sword art online: 4 Alicization",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "adventure", "romance"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 35,
        title: "Fate: Zero",
        episodes: 0,
        seasons: 2,
        genres: ["action", "fantasy", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 36,
        title: "Fate: Stay night",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 37,
        title: "Fate: Stay night Unlimited blade works",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 38,
        title: "Fate: PRISMA ILLYA",
        episodes: 0,
        seasons: 3,
        genres: ["action", "fantasy", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 39,
        title: "Fate: Apocrypha",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 40,
        title: "Fate: Grand order zettai majiuu sensen babylonia",
        episodes: 0,
        seasons: 1,
        genres: ["action", "fantasy", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 41,
        title: "Kill la Kill",
        episodes: 0,
        seasons: 1,
        genres: ["action", "comedy", "ecchi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 42,
        title: "Plastic memories",
        episodes: 0,
        seasons: 1,
        genres: ["sci-fi", "comedy", "romance"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 43,
        title: "Eromanga sensei",
        episodes: 0,
        seasons: 1,
        genres: ["comedy", "romance"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 44,
        title: "Darling in the franxx",
        episodes: 0,
        seasons: 1,
        genres: ["action", "sci-fi", "romance", "drama"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 45,
        title: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou Ka?",
        episodes: 0,
        seasons: 3,
        genres: ["action", "adventure", "fantasy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 47,
        title: "Monster musume no Oisha-san",
        episodes: 0,
        seasons: 3,
        genres: ["romance", "drama", "ecchi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 48,
        title: "Nisekoi",
        episodes: 0,
        seasons: 2,
        genres: ["romance", "drama"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 49,
        title: "Naruto",
        episodes: 0,
        seasons: 9,
        genres: ["action", "adventure", "fantasy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 50,
        title: "Naruto Shippuden",
        episodes: 0,
        seasons: 20,
        genres: ["action", "adventure", "fantasy"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 51,
        title: "Murenase! Seton Gakuen",
        episodes: 0,
        seasons: 1,
        genres: ["comedy"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 52,
        title: "Asobi Asobase",
        episodes: 0,
        seasons: 1,
        genres: ["comedy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 53,
        title: "Burn the witch",
        episodes: 0,
        seasons: 1,
        genres: ["action", "supernatural", "fantasy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 54,
        title: "Kaguya-sama: Love is war",
        episodes: 0,
        seasons: 3,
        genres: ["comedy", "romance"],
        status: "pending",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 55,
        title: "Bleach",
        episodes: 366,
        seasons: 15,
        genres: ["action", "adventure", "fantasy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 56,
        title: "Slime Taoshite-300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
        episodes: 12,
        seasons: 1,
        genres: ["slice of life", "fantasy", "comedy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 57,
        title: "Jashin-chan dropkick",
        episodes: 12,
        seasons: 2,
        genres: ["comedy", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 58,
        title: "Konosuba",
        episodes: 12,
        seasons: 2,
        genres: ["adventure", "fantasy", "comedy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 59,
        title: "High School of the dead",
        episodes: 0,
        seasons: 1,
        genres: ["gore", "fantasy", "horror", "ecchi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 60,
        title: "High School DxD",
        episodes: 0,
        seasons: 4,
        genres: ["romance", "ecchi", "comedy"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 61,
        title: "Princess connect",
        episodes: 0,
        seasons: 2,
        genres: ["adventure", "fantasy", "comedy"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 62,
        title: "Triage X",
        episodes: 0,
        seasons: 1,
        genres: ["action", "romance", "ecchi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 63,
        title: "Sono  Bisque Doll wa Koi wo Suru",
        episodes: 0,
        seasons: 1,
        genres: ["romance", "slice of life"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 64,
        title: "Sousei no onmyouji",
        episodes: 50,
        seasons: 4,
        genres: ["action", "romance", "supernatural", "fantasy"],
        status: "in progress",
        score: 9.8,
        description: "",
        personalComments: ""
    },
    {
        id: 65,
        title: "GATE",
        episodes: 24,
        seasons: 2,
        genres: ["action", "romance", "adventure"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 66,
        title: "Himouto! Umaru-chan",
        episodes: 12,
        seasons: 2,
        genres: ["comedy", "slice of life"],
        status: "pending",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 67,
        title: "Monster Musume no Iru Nichijou",
        episodes: 12,
        seasons: 1,
        genres: ["romance", "drama", "ecchi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 68,
        title: "No game No life",
        episodes: 12,
        seasons: 1,
        genres: ["comedy", "fantasy", "ecchi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "The best game board anime"
    },
    {
        id: 69,
        title: "Re:Creators",
        episodes: 24,
        seasons: 1,
        genres: ["action", "fantasy", "sci-fi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "The best anime cross over story"
    },
    {
        id: 70,
        title: "Higurashi no naku koro ni",
        episodes: 0,
        seasons: 6,
        genres: ["gore", "horror", "mystery", "suspense", "supernatural"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: "My fav anime ever"
    },
    {
        id: 71,
        title: "Gosick",
        episodes: 24,
        seasons: 1,
        genres: ["drama", "romance", "mystery"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "I loved it"
    },
    {
        id: 72,
        title: "Corpse Party",
        episodes: 4,
        seasons: 1,
        genres: ["gore", "horror", "mystery"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "Scary as hell..."
    },
    {
        id: 73,
        title: "Blood+",
        episodes: 50,
        seasons: 4,
        genres: ["action", "drama", "mystery", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 74,
        title: "To Love Ru",
        episodes: 0,
        seasons: 4,
        genres: ["comedy", "ecchi", "romance", "sci-fi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "Celine-chan!!!"
    },
    {
        id: 75,
        title: "Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai",
        episodes: 0,
        seasons: 1,
        genres: ["ecchi", "comedy"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 76,
        title: "Sora no Otoshimono",
        episodes: 0,
        seasons: 2,
        genres: ["comedy", "ecchi", "romance", "sci-fi", "supernatural"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 77,
        title: "Queen's blade",
        episodes: 0,
        seasons: 2,
        genres: ["action", "ecchi", "fantasy", "adventure"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 78,
        title: "Kore wa Zombie Desu Ka? of the dead",
        episodes: 10,
        seasons: 1,
        genres: ["action", "comedy", "supernatural", "ecchi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 79,
        title: "Boku wa Tomodachi ga Sukunai",
        episodes: 25,
        seasons: 2,
        genres: ["comedy", "romance", "ecchi"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 80,
        title: "Hitsugi no Chaika",
        episodes: 23,
        seasons: 2,
        genres: ["action", "comedy", "adventure", "fantasy", "romance"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: "Chaikaaaaaa!"
    },
    {
        id: 81,
        title: "Boku Dake ga Inai Machi",
        episodes: 12,
        seasons: 1,
        genres: ["mystery"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 82,
        title: "Kyokou Suiri",
        episodes: 12,
        seasons: 1,
        genres: ["romance", "mystery", "supernatural"],
        status: "completed",
        score: 8.5,
        description: "",
        personalComments: ""
    },
    {
        id: 83,
        title: "Cross Ange: Tenshi to Ryuu no ROndo",
        episodes: 25,
        seasons: 1,
        genres: ["sci-fi", "action"],
        status: "completed",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 84,
        title: "Toaru Majutsu no Index",
        episodes: 0,
        seasons: 3,
        genres: ["action", "sci-fi"],
        status: "pending",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 85,
        title: "Satsuriku no tenshi",
        episodes: 16,
        seasons: 1,
        genres: ["adventure", "horror", "suspense"],
        status: "pending",
        score: 9.5,
        description: "",
        personalComments: ""
    },
    {
        id: 86,
        title: "Kamisama no inai Nichiyoubi",
        episodes: 13,
        seasons: 1,
        genres: ["adventure", "fantasy", "mystery"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 87,
        title: "Shakugan no Shana",
        episodes: 72,
        seasons: 3,
        genres: ["action", "supernatural", "drama", "comedy", "romance", "fantasy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 88,
        title: "One Punch Man",
        episodes: 24,
        seasons: 2,
        genres: ["action", "comedy"],
        status: "completed",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    {
        id: 89,
        title: "Toaru Kagaku no Railgun",
        episodes: 72,
        seasons: 3,
        genres: ["action", "sci-fi"],
        status: "pending",
        score: 10.0,
        description: "",
        personalComments: ""
    },
    //----- Vampires and super power collectively
    // {
    //     id: 90,
    //     title: "",
    //     episodes: 0,
    //     seasons: 0,
    //     genres: ["action", "sci-fi"],
    //     status: "completed",
    //     score: 10.0,
    //     description: "",
    //     personalComments: ""
    // },
    
];

export default animeWatchList;
