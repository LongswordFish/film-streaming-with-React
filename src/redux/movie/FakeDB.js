const fakeDB = [
        {
            id:101,
            movie_title:'Extraction',
			type:'movie',
			movie_type:'Action',
			price_to_rent:5.99,
			price_to_purchase:11.99,
			small_picture:'https://data.terabox.com/thumbnail/4ac530d51bbb832a5102c849f49493e1?fid=4401060919470-250528-171207331840611&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-kPqNbcih%2fJ6EeZI59UghWdifrVY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/daa70b2f152170eb002dc5f7f4de73ed?fid=4401060919470-250528-367103595289714&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-yfAuMGKJl05QOy7j%2fmdKBIwtorM%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/82ca29a3075411da71eec20a972ea3aa?fid=4401060919470-250528-274382535761517&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-hxC7vDuhKWXWiyozkAPpFskaKb4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/bf9e1ee0ce116be2ca9c92852e209482?fid=4401060919470-250528-396118646342389&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-WIcGigYQGhrLcuPTuqHK6wS7N2o%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/3289823f5c191c52ed18a96ba4cf808d?fid=4401060919470-250528-27669072252615&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-qb6Gml9Dn5%2baCiIA%2fdqrtLUXx94%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/0b10bc71e1c3ba20cdf9dba81978752c?fid=4401060919470-250528-28586076601154&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-nA%2fRosADxnjeQQlC%2fsXRR%2b4fkAI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/7c90a08478ef68e4dee9a571ce7c01b9?fid=4401060919470-250528-914586099666424&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-oCsAKieD8QcJi%2f3fWYVFUZYitQI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/b29f046bb2002b70d9c4862ab559a21a?fid=4401060919470-250528-684298350970455&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-uFOHy4h42OKa54ZXKoIfblRhdg4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/56e0923b33fa0700f19cbf7627d6cb92?fid=4401060919470-250528-1053055936215515&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Tzq12oBai6T%2ftkXhF7limoYw8%2fE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/6e0a578df371e9985d789f0cddb65881?fid=4401060919470-250528-837154452680569&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-BMbJ8fYfk4HTronyNiYZusKBi1c%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/77eb9b9ba2e88362cfb34b1df0354d5e?fid=4401060919470-250528-458405057570441&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-%2b%2bS41c%2boN8glaDhdKxxPUJb5lm4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/2d2fe51e0b1bce3001c11eff9aff3b58?fid=4401060919470-250528-149510889041175&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-H4GnV0POFG3fHMq23L5ra0w1SDo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/9f42dc1a2bf30a449ce3ad460b6942da?fid=4401060919470-250528-522669028346411&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-cUylu8tMeUjMSaWS8c1KzmdATM4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/c7fc2934d730f06c5d18c43a79b3f010?fid=4401060919470-250528-454466261045552&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-41OazmxlJUQ966cUb%2fLBWMViKVw%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/f593e37ff6876faaee925718e8228f5d?fid=4401060919470-250528-381710353518026&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-V6sP%2bzvcNfgKDTwMwKELhwgh83E%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/7013bf4656e92ced17da6198702030c9?fid=4401060919470-250528-242421958274205&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-6VjNC0mwEGbDHvIjK%2b83SYSvUGA%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/f417a17cf2972d132867cf5d0a2796b2?fid=4401060919470-250528-140680577179124&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-9YpeC9XvGcGUueTMfez9Gk8qmpE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/ad9c93703cad08db40f73839c5f4024e?fid=4401060919470-250528-731331978531924&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-hI47Ssevgna35cjBQ1BwOmziksE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/fc18c5bc38542514233739a81460050a?fid=4401060919470-250528-550169433434338&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-X1WkWu0mq5mgcWf44jlLDPNJ0eA%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/60b6aeaf31e9391bbfbbeda7c0fdbb08?fid=4401060919470-250528-225522833242057&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-v%2bC32RAipxtHu3hQXePiEs8LFgI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/fadb1ae7192886081e95eef480bd9a51?fid=4401060919470-250528-363227431818095&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KwyjCnba6tiTbt3evYQbt2LtUU0%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/5c3805737538f6f1aed70dd690d5c88a?fid=4401060919470-250528-991964404740936&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Hqb%2fQWEObgUD6RPX1yl9qIqB5Sg%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/2cd43782981c7531757527ed75540d35?fid=4401060919470-250528-38886872418972&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jQI%2f7chIsObOoUwWGQbhA4hZwLU%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/8c2f9877e3c8b22ab4765111fa568f02?fid=4401060919470-250528-393272305119261&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-n6kKgPTLZ9c9o%2bsOGabg3PWhh6k%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/e80b82a67f72e13a09c0ec0742d22429?fid=4401060919470-250528-496191359679378&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-IRsLrzyPar4FTeF4zqMGAZIwSiE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/4b94929bddf9efe63373052035b74996?fid=4401060919470-250528-676403118215393&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-T42dL60NaTfwH7EoXpN3AQCUtoI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/92731846fda225235f3a1ca403c71eed?fid=4401060919470-250528-374320412102383&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-HOrG3lcH3UJrRlZ%2fh5cdHqmrKFU%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/29e7a9e00a3271d15269406c7cc31590?fid=4401060919470-250528-197853074600062&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-4shLhPRdwEZXrAOSDcwYXYhnvbg%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/39f84b1328d3e93aa3c7e4d582f55341?fid=4401060919470-250528-305206495537348&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-hZA5blpesA4B5Ypi7EVGLFJdVrU%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/36b587ae5ca38016c6d77e61682440f6?fid=4401060919470-250528-1123183564068672&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-v9od1mfkFA55ro79jyE4JRGLSAc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/c64d1b468db175817baae5cb0dc9fcf9?fid=4401060919470-250528-175548986479518&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ekckdmNvobm4dRuijEgPenfHSlM%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/05e569e38e48e8661c95dac22296dcc4?fid=4401060919470-250528-1113062907071535&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-m5CosMU0KoLdY8mbXnuXwzG7p2c%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/0c86445cc3cac7a2ffed0c32c62bab34?fid=4401060919470-250528-992713195860246&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-UY0MQLSpQt9eu0fsUEP1QL%2bUB6I%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/cd7ebf8d2cf0118bf59299145889866e?fid=4401060919470-250528-657445517798828&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-nwCDsJvJEVb729%2bkTXsNb1H%2fRU0%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/82ca29a3075411da71eec20a972ea3aa?fid=4401060919470-250528-274382535761517&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-hxC7vDuhKWXWiyozkAPpFskaKb4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/ca4f4385a2e59d74dbb17ec909cbfeb8?fid=4401060919470-250528-1047201266388920&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rXZA3MMadXDMl0Laq5SxyE8KGwo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/f5680f4c25bc5dab147e89570587b74c?fid=4401060919470-250528-1103403930385841&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-M5VypBBQ5Rcbms5428K8Y41Htmc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/9ad5bcd6a9b1eeaff2bc17966ff5c91d?fid=4401060919470-250528-20960079966766&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-TR9pMVZ9FKbtWuw01NbPntC3%2fZk%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/ccca8c5f75f4bbf2eb6f1d5f0c015fd7?fid=4401060919470-250528-1093215354106882&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-4mDrXABHGEiVGAytE4uJy0gVCEo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/b984988f036a2f65337528bdf6ebd0e4?fid=4401060919470-250528-152267241737649&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-MoUHxzkUTf1C6n6AaV9pdCNdJpc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/2b54c57c10a7a86e22cb00bf29ebef4a?fid=4401060919470-250528-856608402863234&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-LHw7n2QK6ChPXFBfVYOWEa2kP98%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/8d56c5a0f031ea2ac4318b40cd15e65a?fid=4401060919470-250528-410046553109684&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-miHccG9zZEg%2fGZIsnF56u09lOrc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/2ad4a6655186f262e2212928c261b7ca?fid=4401060919470-250528-853647743947177&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-7IqQGwY%2fNf6Xo74BAZNBHwVJNFk%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/b8fa8c859adbd9a88a61664ca622ff58?fid=4401060919470-250528-62709905682847&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rdRTPSJ9TszFMPX%2fo8ayy%2fIpLMI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/a98604034a20c4511ab8a40ed7cf4fe6?fid=4401060919470-250528-1092767156050682&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-lNSiigKGTngOeiLcbUOFgNyooVE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/18faa69f2c9c6cfc0dd6cd8f960fdf0f?fid=4401060919470-250528-835336676408469&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-lLG5ARp%2b3i%2b%2fv7JIhiCvoChmsGs%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
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
			small_picture:'https://data.terabox.com/thumbnail/124190dd5601823d62635295f3e92266?fid=4401060919470-250528-1027839225547367&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-fE64rfvPxZIIA03A1expaXkU6Yo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
			large_picture: 'https://data.terabox.com/thumbnail/d2ffd0203ca5c793859037ce777a37b6?fid=4401060919470-250528-1034282396073084&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-46A%2fATdKqOitcHNLFuGbwS84XW8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8835203767188581242&dp-callid=0&time=1643814000&size=c10000_u10000&quality=90&vuk=4401060919470&ft=image',
            description:"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
            featured:false

        }
		
    ];


export default fakeDB;
