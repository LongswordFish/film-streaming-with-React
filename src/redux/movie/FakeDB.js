const fakeDB = [
        {
            id:101,
            movie_title:'Extraction',
			type:'movie',
			movie_type:'Action',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/extraction_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/extraction_big.webp',
            description:"After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
            featured:true

        },

        {
            id:102,
            movie_title:'6 Underground',
			type:'movie',
			movie_type:'Animation',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/6_underground_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/6_underground_big.webp',
            description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
            featured:true

        },
        {
            id:103,
            movie_title:'The Godfather',
			type:'movie',
			movie_type:'thriller',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/god_father_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/god_father_big.webp',
            description:"An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            featured:false

        },
        {
            id:104,
            movie_title:'Pulp Fiction',
			type:'movie',
			movie_type:'Crime',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/Pulp_Fiction_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/Pulp_Fiction_big.webp',
            description:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            featured:true

        },
        {
            id:105,
            movie_title:'Fight Club',
			type:'movie',
			movie_type:'Action',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/fight_club_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/fight_club_big.webp',
            description:"An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more..",
            featured:true

        },
        {
            id:106,
            movie_title:'Inception',
			type:'movie',
			movie_type:'Action',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/Inception_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/Inception_big.webp',
            description:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O..",
            featured:true

        },
        {
            id:107,
            movie_title:'The Matrix',
			type:'movie',
			movie_type:'Action',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/The_Matrix_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/The_Matrix_big.webp',
            description:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
            featured:false

        },
        {
            id:108,
            movie_title:'Life Is Beautiful',
			type:'movie',
			movie_type:'Drama',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/life_is_beautiful_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/life_is_beautiful_big.webp',
            description:"When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
            featured:true

        },
        {
            id:109,
            movie_title:'City of God',
			type:'movie',
			movie_type:'Crime',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/city_of_god_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/city_of_god_big.webp',
            description:"In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
            featured:false

        },
        {
            id:110,
            movie_title:'The Silence of the Lambs',
			type:'movie',
			movie_type:'thriller',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/silence_of_lambs_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/silence_of_lambs_big.webp',
            description:"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
            featured:false

        },
        {
            id:111,
            movie_title:'Saving Private Ryan',
			type:'movie',
			movie_type:'War',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/saving_Ryan_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/saving_Ryan_big.webp',
            description:"Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
            featured:false

        },
        {
            id:112,
            movie_title:'Spirited Away',
			type:'movie',
			movie_type:'Animation',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/sprited_away_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/sprited_away_big.webp',
            description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
            featured:false

        },
        {
            id:201,
            movie_title:'Planet Earth ',
			type:'TV',
			movie_type:'Animation',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/planet_earth_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/planet_earth_big.webp',
            description:"Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.",
            featured:true
        },
        {
            id:202,
            movie_title:'Band of Brothers',
			type:'TV',
			movie_type:'History',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/band_of_brothers_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/band_of_brothers_big.webp',
            description:"The story of Easy Company of the U.S. Army 101st Airborne Division, and their mission in World War II Europe, from Operation Overlord, through V-J Day. ",
            featured:true

        },
        {
            id:203,
            movie_title:'Breaking Bad',
			type:'TV',
			movie_type:'thriller',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/breaking_bad_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/breaking_bad_big.webp',
            description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
            featured:true

        },
        {
            id:204,
            movie_title:'Blue Planet II ',
			type:'TV',
			movie_type:'Documentary',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/blue_planet_2_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/Blue_Planet_2_big.webp',
            description:"David Attenborough returns to the world's oceans in this sequel to the acclaimed documentary filming rare and unusual creatures of the deep, as well as documenting the problems our oceans face.",
            featured:true

        },
        {
            id:205,
            movie_title:'Game of Thrones',
			type:'TV',
			movie_type:'Action',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/Game_of_Thrones_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/Game_of_Thrones_big.webp',
            description:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
            featured:true

        },
        {
            id:206,
            movie_title:'The Vietnam War',
			type:'TV',
			movie_type:'War',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/The_Vietnam_War_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/The_Vietnam_War_big.webp',
            description:"A comprehensive history of the United States' involvement in the bitterly divisive armed conflict in Southeast Asia.",
            featured:true

        },
        {
            id:207,
            movie_title:'Sherlock',
			type:'TV',
			movie_type:'Crime',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/Sherlock_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/Sherlock_big.webp',
            description:"A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
            featured:false

        },
        {
            id:208,
            movie_title:'Firefly',
			type:'TV',
			movie_type:'Sci-fi',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/Firefly_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/Firefly_big.webp',
            description:"Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
            featured:false

        },  
        {
            id:209,
            movie_title:'True Detective',
			type:'TV',
			movie_type:'Crime',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/True_Detective_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/True_Detective_big.webp',
            description:"Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
            featured:false

        },        
        {
            id:210,
            movie_title:'Fargo',
			type:'TV',
			movie_type:'Crime',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/Fargo_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/Fargo_big.webp',
            description:"Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota.",
            featured:false

        },
        {
            id:211,
            movie_title:'The Office',
			type:'TV',
			movie_type:'Comedy',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/The_Office_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/The_Office_big.webp',
            description:"A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
            featured:false

        },        
        {
            id:212,
            movie_title:'Friends',
			type:'TV',
            movie_type:'Comedy',
			price_to_rent:800,
			price_to_purchase:1000,
			small_picture:'http://wonderfish.ca/wp-content/uploads/2022/02/Friends_small.webp',
			large_picture: 'http://wonderfish.ca/wp-content/uploads/2022/02/Friends_big.webp',
            description:"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
            featured:false

        }
		
    ];


export default fakeDB;
