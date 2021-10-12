function slugify(title) {
    return title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

var adventures = [
    {
        title: "Twin Mountain",
        elevation: "3640",
        description: "Aptly named for its perfectly shaped, dual peaks, Twin Mountain offers excellent nature walks, and the most beautiful views the Indian Head Wilderness has to offer. Whether you fancy a leisurely trek through a beautiful forest or a moderate hike to an expansive view, Twin Mountain is the perfect getaway. You don’t have to be an experienced hiker to see this spectacular summit; with HikeHost anyone with a little motivation can safely make it to this mind-blowing overlook.",
        mainImage: "twin_mountain.jpg",
        topoImage: "twin_mountain_topo.jpg",
        difficulty: "Difficult",
        difficultyNum: "65",
        featureList: [1,1,0,1,0,1,1,0,0,0,0],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Indian Head Mountain",
        elevation: "3573",
        description: "A mesmerizing nature walk to the secluded Echo Lake or a fun and challenging hike up a curiously-shaped mountain overlooking the Hudson Valley. With HikeHost, Indian Head Mountain makes a perfect destination for anyone. Looking for some exercise? The Devil’s Path may sounds scary, but have no fear. Our HikeHost guides have led countless trips to the summit of Indian Head Mountain with adventurers of every shape and size.",
        mainImage: "indian_head_mountain.jpg",
        topoImage: "indian_head_mountain_topo.jpg",
        difficulty: "Difficult",
        difficultyNum: "65",
        featureList: [1,1,0,1,1,0,1,1,0,0,1,1],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Huckleberry Point",
        elevation: "2358",
        description: "Part of the infamous Kaaterskill Wild Forest, this hike is an outstanding place to reconnect with nature and features one of the most impressive overlooks in Northeastern Ulster County. This beautiful location boasts a huge field of mountain laurels, a breathtaking waterfall, and a magnificent view. Camp on a cliff face or hike with us and see it all. Each of our HikeHosts are intimately familiar with the Kaaterskill Wild Forest and the hidden beauty it has to offer and we’re excited to share it with you.",
        mainImage: "huckleberry_point.jpg",
        topoImage: "huckleberry_point_topo.jpg",
        difficulty: "Very Easy",
        difficultyNum: "15",
        featureList: [1,1,0,0,1,1,1,1,0,0,0,0],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Friday Mountain",
        elevation: "3694",
        description: "Aspiring 3500 Club members and thrill seekers alike will be challenged by the difficult trek to the summit of Friday Mountain. Get ready to sign your name inside a summit canister deep within the Catskill Wilderness. Best known for its 100 foot vertical climb near the summit, and remnants of the elusive B-25 Mitchell Bomber airplane that crashed in 1944, this bushwhack is both fun and exhilarating. While Friday mountain isn’t for everyone, you don’t have to be an excellent hiker to make it to the top. With HikeHost, anyone with a little motivation and a positive attitude can conquer this tough peak.",
        mainImage: "friday_mountain.jpg",
        topoImage: "friday_mountain_topo.jpg",
        difficulty: "Very Difficult",
        difficultyNum: "100",
        featureList: [1,1,0,1,1,0,0,0,0,1,1,1],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Balsam Cap Mountain",
        elevation: "3623",
        description: "Whether you’re camping or just bagging another peak, Balsam Cap Mountain offers the best in total seclusion. Densely packed pine groves and steep cliffs surround the top of this 3,623 foot giant, and there’s only one way to the summit. You don’t have to be an excellent climber or a seasoned hiker to top Balsam Cap Mountain. With HikeHost and a little determination you will navigate your way through a maze of dense pine to sign your name inside a summit canister deep within the Catskill Wilderness.",
        mainImage: "balsam_cap_mountain.jpg",
        topoImage: "balsam_cap_mountain_topo.jpg",
        difficulty: "Very Difficult",
        difficultyNum: "85",
        featureList: [1,1,0,1,1,0,0,0,0,0,0,1],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Wittenberg Mountain",
        elevation: "3780",
        description: "A beautiful ridge run to some impressive rock formations and arguably the greatest view in all of Catskill Park. The Slide Mountain Wilderness sports miles of beautiful ridge, and a massive rocky plateau that’s perfect for camping or even a secluded afternoon picnic. The view from the summit of Wittenberg Mountain is life changing, and one of HikeHost’s personal favorites. Whether you’re in it for the view, wildlife or a night under the stars, with HikeHost the possibilities are endless.",
        mainImage: "wittenberg_mountain.jpg",
        topoImage: "wittenberg_mountain_topo.jpg",
        difficulty: "Difficult",
        difficultyNum: "60",
        featureList: [1,1,0,1,1,0,1,1,0,0,0,0],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Vly Mountain",
        elevation: "3529",
        description: "Nestled in the northern Catskills on the western edge of Greene County lies the perfect beginner bushwhack. The Vly Mountain trek starts off on a big beautiful dirt road to a hunter’s cabin where the real fun begins. Follow herd paths and painted trees to sign your name in one of the 3500 Clubs 14 summit canisters. A fun and easy bushwhack; great for beginners, 3500 Club aspirants or anyone just getting into the HikeHost lifestyle.",
        mainImage: "vly_mountain.jpg",
        topoImage: "vly_mountain_topo.jpg",
        difficulty: "Moderate",
        difficultyNum: "45",
        featureList: [1,0,0,1,0,0,1,1,0,0,0,1],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Bearpen Mountain",
        elevation: "3600",
        description: "A great view, smooth terrain and wide trails make a Bearpen Mountain hike perfect for the whole family. Take the easy route following snowmobile trails and abandoned roads or take your time on a long unmarked trail to the summit and spend the whole day in this beautiful state forest. And don’t worry, despite the name, I’ve never seen any bears there.",
        mainImage: "bearpen_mountain.jpg",
        topoImage: "bearpen_mountain_topo.jpg",
        difficulty: "Easy",
        difficultyNum: "25",
        featureList: [1,0,0,1,1,0,1,1,0,0,0,0],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Rocky Mountain",
        elevation: "3508",
        description: "Get your boots ready because we’re gearing up for another exciting adventure! Join us as we begin our trek alongside the beautiful Donovan Brook. Micro waterfalls, a beautiful stream and impressive log bridges are only a small piece of the beauty that sits inside Sundown Wild Forest. Get away from the daily buzz for a light bushwhack or challenge yourself with an intense 3500 Club summit canister.",
        mainImage: "rocky_mountain.jpg",
        topoImage: "rocky_mountain_topo.jpg",
        difficulty: "Difficult",
        difficultyNum: "75",
        featureList: [1,1,0,1,1,0,0,0,0,0,0,1],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "Balsam Lake Mountain",
        elevation: "3723",
        description: "A light hike, with a mind-blowing view. Balsam Lake Mountain is said to have some of the most naturally preserved land in Catskill Park. Atop this 3,723 foot mountain sits one of the few remaining fire towers in the Catskills. Built in 1909 and used to spot and triangulate fires, the Balsam Lake Mountain fire tower was recently renovated and packs a fantastic view.",
        mainImage: "balsam_lake_mountain.jpg",
        topoImage: "balsam_lake_mountain_topo.jpg",
        difficulty: "Very Easy",
        difficultyNum: "15",
        featureList: [1,1,0,1,1,0,1,1,1,0,0,0],
        get slug() {
            return slugify(this.title)
        }
    },
    {
        title: "TEST",
        elevation: "12",
        description: "none",
        mainImage: "none_mountain.jpg",
        topoImage: "none_mountain_topo.jpg",
        difficulty: "none",
        difficultyNum: "15",
        featureList: [0,0,0,0,0,0,0,0,0,0,0,0],
        get slug() {
            return slugify(this.title)
        }
    }
]
