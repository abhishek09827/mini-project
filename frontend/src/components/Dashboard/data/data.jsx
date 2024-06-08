
const jsonData = {
    "meta":{"code":200,"message":"OK"},
    "data":{"series":{"current":[{"date":"01.09.2022","er":0.003407937604728113,"avgER":0.0021867401288056592,"usersCount":337635583,"deltaUsersCount":0,"deltaPosts":2,"deltaInteractions":1150641,"deltaLikes":1142296,"deltaComments":8345,"deltaRePosts":0,"deltaDislikes":0,"deltaViews":0,"qualityScore":0.11689993995641343,"avgPostsPerWeek":14.777777777777779},{"date":"02.09.2022","er":0.0021090743582848513,"avgER":0.0021817976969743047,"usersCount":337732521,"deltaUsersCount":96938,"deltaPosts":0,"deltaInteractions":712303,"deltaLikes":707577,"deltaComments":4726,"deltaRePosts":0,"deltaDislikes":0,"deltaViews":0,"qualityScore":0.11689993995641343,"avgPostsPerWeek":14.666666666666666},{"date":"03.09.2022","er":0.0015232774593526492,"avgER":0.0021930592533609796,"usersCount":337829459,"deltaUsersCount":96938,"deltaPosts":0,"deltaInteractions":514608,"deltaLikes":511440,"deltaComments":3168,"deltaRePosts":0,"deltaDislikes":0,"deltaViews":0,"qualityScore":0.11689993995641343,"avgPostsPerWeek":14.555555555555555}],"prev":[{"date":"29.08.2022","er":0.004205626215610968,"avgER":0.0021984208952703825,"usersCount":337344768,"deltaUsersCount":0,"deltaPosts":1,"deltaInteractions":1418746,"deltaLikes":1409451,"deltaComments":9295,"deltaRePosts":0,"deltaDislikes":0,"deltaViews":0,"qualityScore":0.11689993995641343,"avgPostsPerWeek":14.777777777777779},{"date":"30.08.2022","er":0.0026395640614737766,"avgER":0.0021962392449378755,"usersCount":337441706,"deltaUsersCount":96938,"deltaPosts":2,"deltaInteractions":890699,"deltaLikes":884804,"deltaComments":5895,"deltaRePosts":0,"deltaDislikes":0,"deltaViews":0,"qualityScore":0.11689993995641343,"avgPostsPerWeek":14.666666666666666},{"date":"31.08.2022","er":0.0025864445909191958,"avgER":0.0021867401288056592,"usersCount":337538644,"deltaUsersCount":96938,"deltaPosts":0,"deltaInteractions":873025,"deltaLikes":866842,"deltaComments":6183,"deltaRePosts":0,"deltaDislikes":0,"deltaViews":0,"qualityScore":0.11689993995641343,"avgPostsPerWeek":14.777777777777779}]},"summary":{"current":{"er":0.0023467631407885375,"avgER":0.0021871990263803145,"usersCount":337829459,"deltaUsersCount":193876,"deltaPosts":2,"deltaInteractions":2377552,"deltaLikes":2361313,"deltaComments":16239,"deltaRePosts":null,"deltaDislikes":null,"deltaViews":null,"qualityScore":0.11689993995641342,"avgPostsPerWeek":44},"prev":{"er":0.003143878289334647,"avgER":0.0021938000896713056,"usersCount":337538644,"deltaUsersCount":193876,"deltaPosts":3,"deltaInteractions":3182470,"deltaLikes":3161097,"deltaComments":21373,"deltaRePosts":null,"deltaDislikes":null,"deltaViews":null,"qualityScore":0.11689993995641342,"avgPostsPerWeek":44.22222222222222},"delta":{"er":-0.0007971151485461096,"avgER":-0.000006601063290991114,"usersCount":290815,"deltaUsersCount":0,"deltaPosts":-1,"deltaInteractions":-804918,"deltaLikes":-799784,"deltaComments":-5134,"deltaRePosts":null,"deltaDislikes":null,"deltaViews":null,"qualityScore":0,"avgPostsPerWeek":-0.22222222222222143}}}}

const jsonTwitterData = {"meta":{"code":200,"message":"OK"},"data":{"series":{"current":[{"date":"01.09.2022","er":0.0028370215427923526,"avgER":0.0012440710091492944,"usersCount":818464,"deltaUsersCount":0,"deltaPosts":0,"deltaInteractions":2322,"deltaLikes":1923,"deltaComments":48,"deltaRePosts":351,"deltaDislikes":0,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":1.4444444444444444},{"date":"02.09.2022","er":0.0005616489035026135,"avgER":0.0012440710091492944,"usersCount":819017,"deltaUsersCount":553,"deltaPosts":0,"deltaInteractions":460,"deltaLikes":380,"deltaComments":10,"deltaRePosts":70,"deltaDislikes":0,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":1.4444444444444444},{"date":"03.09.2022","er":0.00011103397029414242,"avgER":0.0012440710091492944,"usersCount":819569,"deltaUsersCount":552,"deltaPosts":0,"deltaInteractions":91,"deltaLikes":75,"deltaComments":2,"deltaRePosts":14,"deltaDislikes":0,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":1.4444444444444444}],"prev":[{"date":"29.08.2022","er":0.000007345676518443157,"avgER":0.0020720529513135674,"usersCount":816807,"deltaUsersCount":0,"deltaPosts":0,"deltaInteractions":6,"deltaLikes":5,"deltaComments":0,"deltaRePosts":1,"deltaDislikes":0,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":0.4444444444444444},{"date":"30.08.2022","er":0.000004893810430912243,"avgER":0.0020720529513135674,"usersCount":817359,"deltaUsersCount":552,"deltaPosts":0,"deltaInteractions":4,"deltaLikes":3,"deltaComments":0,"deltaRePosts":1,"deltaDislikes":0,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":0.4444444444444444},{"date":"31.08.2022","er":0.004016324494566652,"avgER":0.0020720529513135674,"usersCount":817912,"deltaUsersCount":553,"deltaPosts":9,"deltaInteractions":3285,"deltaLikes":2716,"deltaComments":69,"deltaRePosts":500,"deltaDislikes":0,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":0.4444444444444444}]},"summary":{"current":{"er":0.0011699014721963696,"avgER":0.0012440710091492944,"usersCount":819569,"deltaUsersCount":1105,"deltaPosts":0,"deltaInteractions":2873,"deltaLikes":2378,"deltaComments":60,"deltaRePosts":435,"deltaDislikes":null,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":4.333333333333333},"prev":{"er":0.001342854660505336,"avgER":0.0020720529513135674,"usersCount":817912,"deltaUsersCount":1105,"deltaPosts":9,"deltaInteractions":3295,"deltaLikes":2724,"deltaComments":69,"deltaRePosts":502,"deltaDislikes":null,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":1.3333333333333333},"delta":{"er":-0.0001729531883089665,"avgER":-0.000827981942164273,"usersCount":1657,"deltaUsersCount":0,"deltaPosts":-9,"deltaInteractions":-422,"deltaLikes":-346,"deltaComments":-9,"deltaRePosts":-67,"deltaDislikes":null,"deltaViews":0,"qualityScore":0,"avgPostsPerWeek":3}}}}

const twitterDashData = {"meta":{"code":200,"message":"OK"},"data":{"cid":"TW:4398626122","socialType":"TW","groupID":"4398626122","url":"https://twitter.com/OpenAI","name":"OpenAI","image":"https://36627.selcdn.ru/jagajam-c90/TW:4398626122?time=1699785092","description":"OpenAI’s mission is to ensure that artificial general intelligence benefits all of humanity. We’re hiring: https://t.co/dJGr6LgzPA","screenName":"OpenAI","usersCount":2720252,"communityStatus":"DONE","isBlocked":false,"isClosed":false,"verified":true,"tags":["english","business"],"suggestedTags":["english","business"],"avgER":0.00544398192824682,"avgInteractions":9981,"avgViews":1916344,"ratingIndex":2720252.8325885846,"ratingTags":[{"tagID":"english","name":"English"},{"tagID":"business","name":"Business"}],"similar":[{"cid":"TW:27260086","image":"https://clbrty-img.s3.amazonaws.com/TW:27260086?time=1707747679","name":"Justin Bieber","usersCount":111294603},{"cid":"TW:14230524","image":"https://clbrty-img.s3.amazonaws.com/TW:14230524?time=1709448383","name":"Lady Gaga","usersCount":83595229},{"cid":"TW:10228272","image":"https://clbrty-img.s3.amazonaws.com/TW:10228272?time=1716347785","name":"YouTube","usersCount":80733123},{"cid":"TW:11348282","image":"https://clbrty-img.s3.amazonaws.com/TW:11348282?time=1707747814","name":"NASA","usersCount":79208740},{"cid":"TW:783214","image":"https://clbrty-img.s3.amazonaws.com/TW:783214?time=1716346256","name":"X","usersCount":67689489},{"cid":"TW:2890961","image":"https://clbrty-img.s3.amazonaws.com/TW:2890961?time=1706617619","name":"Gizmodo","usersCount":2719865},{"cid":"TW:232480550","image":"https://clbrty-img.s3.amazonaws.com/TW:232480550?time=1709767290","name":"Xposure • Crypto & NFT","usersCount":2714465},{"cid":"TW:372575989","image":"https://36627.selcdn.ru/jagajam-c90/TW:372575989?time=1696687463","name":"News","usersCount":2713492},{"cid":"TW:18576537","image":"https://clbrty-img.s3.amazonaws.com/TW:18576537?time=1716586059","name":"Israel Defense Forces","usersCount":2705611},{"cid":"TW:14055301","image":"https://clbrty-img.s3.amazonaws.com/TW:14055301?time=1711375961","name":"Save the Children US","usersCount":2696268}],"qualityScore":0.7697594501718213,"timeStatistics":"2023-11-12T10:31:32.089Z","timePostsLoaded":"2023-11-12T10:45:45.257Z","membersCities":[],"membersCountries":[],"membersGendersAges":{"data":[],"summary":{"m":0,"f":0,"avgAges":"-"}},"avgLikes":8113,"avgComments":332,"country":"","countryCode":"","city":"","type":"business","gender":"","age":"","categories":[],"lastPosts":[{"url":"https://twitter.com/OpenAI/status/1721594380669342171/","date":"2023-11-06T18:24:20.000Z","type":"video","image":"https://36627.selcdn.ru/jagajam-c90/post_TW:4398626122_1721594380669342171?time=1699785947","likes":9145,"comments":382,"views":1759476,"text":"GPTs are a new way for anyone to create a tailored version of ChatGPT to be more helpful in their daily life, at specific tasks, at work, or at home — and then share that creation with others. No code required. https://openai.com/blog/introducing-gpts https://t.co/PcmorZwtMF"},{"url":"https://twitter.com/OpenAI/status/1721578256217076000/","date":"2023-11-06T17:20:16.000Z","type":"photo","image":"https://36627.selcdn.ru/jagajam-c90/post_TW:4398626122_1721578256217076000?time=1699785947","likes":3417,"comments":126,"views":1775113,"text":"We’re all ready to kick off our first ever OpenAI DevDay! See you soon! \n\nTune into the keynote at 10 AM PST: https://www.youtube.com/live/U9mJuUkhUzk?si=NHSelJlhTkTGXS5X https://t.co/oWN4Fltm2y"},{"url":"https://twitter.com/OpenAI/status/1715050647480086557/","date":"2023-10-19T17:01:53.000Z","type":"photo","image":"https://36627.selcdn.ru/jagajam-c90/post_TW:4398626122_1715050647480086557?time=1699785948","likes":687,"comments":43,"views":153678,"text":"\"I am working with a web designer for a new website to sell bicycle helmets. Could you recommend a few website UI's that are both modern and simple that I can share with her as examples?\" https://t.co/o6dgsnLRcX"}],"lastFromMentions":[],"membersTypes":[],"membersReachability":[],"countries":[],"cities":[],"genders":[],"ages":[],"interests":[],"brandSafety":{},"toMentions180d":257,"toMentionsCommunities180d":137,"toMentionsViews180d":8152245,"pctUsersCount180d":0.2675445463356445,"contactEmail":"","pctFakeFollowers":0,"audienceSeverity":0}}

const instagramDashData = {"meta":{"code":200,"message":"OK"},"data":{"cid":"INST:17841445531001821","socialType":"INST","groupID":"17841445531001821","url":"https://instagram.com/openaidalle","name":"DALL·E by OpenAI","image":"https://clbrty-img.s3.amazonaws.com/INST:17841445531001821?time=1708544254","description":"Learn more about DALL•E 3 in the link in bio 👇","screenName":"openaidalle","usersCount":661382,"communityStatus":"DONE","isBlocked":true,"isClosed":false,"verified":false,"tags":["english","nft","united-states","business","italy"],"suggestedTags":["english","nft","united-states","business","italy"],"avgER":0.002943959338427877,"avgInteractions":1904,"avgViews":0,"ratingIndex":648400.832011377,"ratingTags":[{"tagID":"english","name":"English"},{"tagID":"nft","name":"NFT"},{"tagID":"united-states","name":"United States"},{"tagID":"business","name":"Business"},{"tagID":"italy","name":"Италия"}],"similar":[{"cid":"INST:17841445531001821","image":"https://clbrty-img.s3.amazonaws.com/INST:17841445531001821?time=1706374543","name":"DALL·E by OpenAI","usersCount":648400},{"cid":"INST:17841425816846686","image":"https://clbrty-img.s3.amazonaws.com/INST:17841425816846686?time=1714625877","name":"𝘁𝗶𝗽𝘀𝗳𝗼𝗿𝗮𝗿𝘁𝗶𝘀𝘁𝘀.𝘇","usersCount":130271},{"cid":"INST:17841407118489024","image":"https://clbrty-img.s3.amazonaws.com/INST:17841407118489024?time=1717364005","name":"Looming nft","usersCount":854017}],"qualityScore":0.5389132054386292,"timeStatistics":"2024-06-08T11:34:38.585Z","timePostsLoaded":"2024-01-30T18:09:44.536Z","membersCities":[{"category":"istanbul","name":"Istanbul","value":0.15151515151515152},{"category":"miami","name":"Miami","value":0.045454545454545456},{"category":"madrid","name":"Madrid","value":0.045454545454545456},{"category":"paris","name":"Paris","value":0.045454545454545456},{"category":"moscow","name":"Москва","value":0.045454545454545456},{"category":"izmir","name":"Izmir","value":0.045454545454545456},{"category":"new-york-city","name":"New York City","value":0.030303030303030304},{"category":"toronto","name":"Toronto","value":0.030303030303030304},{"category":"budapest","name":"Budapest","value":0.030303030303030304},{"category":"los-angeles","name":"Los Angeles","value":0.030303030303030304},{"category":"tallinn","name":"Tallinn","value":0.030303030303030304},{"category":"dubai","name":"Dubai","value":0.030303030303030304},{"category":"novosibirsk","name":"Новосибирск","value":0.030303030303030304},{"category":"rotterdam","name":"Rotterdam","value":0.015151515151515152},{"category":"mumbai","name":"Mumbai","value":0.015151515151515152},{"category":"hamburg","name":"Hamburg","value":0.015151515151515152},{"category":"mexico-city","name":"Mexico City","value":0.015151515151515152},{"category":"kocaali","name":"Kocaali","value":0.015151515151515152},{"category":"lisboa","name":"Lisboa","value":0.015151515151515152},{"category":"rio-de-janeiro","name":"Rio de Janeiro","value":0.015151515151515152},{"category":"ankara","name":"Ankara","value":0.015151515151515152},{"category":"washington","name":"Washington","value":0.015151515151515152},{"category":"barcelona","name":"Barcelona","value":0.015151515151515152},{"category":"tbilisi","name":"Tbilisi","value":0.015151515151515152},{"category":"buenos-aires","name":"Buenos Aires","value":0.015151515151515152},{"category":"hong-kong-city","name":"Hong Kong","value":0.015151515151515152},{"category":"antalya","name":"Antalya","value":0.015151515151515152},{"category":"kilis","name":"Kilis","value":0.015151515151515152},{"category":"amsterdam","name":"Amsterdam","value":0.015151515151515152},{"category":"bengaluru","name":"Bengaluru","value":0.015151515151515152},{"category":"kazan","name":"Казань","value":0.015151515151515152},{"category":"almaty","name":"Алматы","value":0.015151515151515152},{"category":"chicago","name":"Chicago","value":0.015151515151515152},{"category":"krasnodar","name":"Краснодар","value":0.015151515151515152},{"category":"kastamonu","name":"Kastamonu","value":0.015151515151515152},{"category":"kemer","name":"Kemer","value":0.015151515151515152},{"category":"london-ca","name":"London, CA","value":0.015151515151515152},{"category":"ufa","name":"Уфа","value":0.015151515151515152},{"category":"portland","name":"Portland","value":0.015151515151515152},{"category":"indore","name":"Indore","value":0.015151515151515152}],"membersCountries":[{"category":"turkey","name":"Turkey","value":0.18018018018018017},{"category":"united-states","name":"United States","value":0.12612612612612611},{"category":"russia","name":"Россия","value":0.10810810810810811},{"category":"india","name":"India","value":0.06306306306306306},{"category":"spain","name":"Spain","value":0.06306306306306306},{"category":"netherlands","name":"Нидерланды","value":0.036036036036036036},{"category":"france","name":"Франция","value":0.036036036036036036},{"category":"estonia","name":"Эстония","value":0.02702702702702703},{"category":"canada","name":"Canada","value":0.02702702702702703},{"category":"china","name":"Китай","value":0.02702702702702703},{"category":"brazil","name":"Бразилия","value":0.02702702702702703},{"category":"indonesia","name":"Indonesia","value":0.02702702702702703},{"category":"thailand","name":"Таиланд","value":0.018018018018018018},{"category":"germany","name":"Германия","value":0.018018018018018018},{"category":"georgia","name":"Грузия","value":0.018018018018018018},{"category":"hungary","name":"Венгрия","value":0.018018018018018018},{"category":"italy","name":"Италия","value":0.018018018018018018},{"category":"united-arab-emirates","name":"Объединённые Арабские Эмираты","value":0.018018018018018018},{"category":"switzerland","name":"Швейцария","value":0.009009009009009009},{"category":"mexico","name":"Мексика","value":0.009009009009009009},{"category":"portugal","name":"Portugal","value":0.009009009009009009},{"category":"greece","name":"Греция","value":0.009009009009009009},{"category":"ukraine","name":"Украина","value":0.009009009009009009},{"category":"argentina","name":"Аргентина","value":0.009009009009009009},{"category":"czech-republic","name":"Чехия","value":0.009009009009009009},{"category":"nigeria","name":"Нигерия","value":0.009009009009009009},{"category":"uzbekistan","name":"Узбекистан","value":0.009009009009009009},{"category":"pakistan","name":"Пакистан","value":0.009009009009009009},{"category":"australia","name":"Австралия","value":0.009009009009009009},{"category":"vietnam","name":"Вьетнам","value":0.009009009009009009},{"category":"kazakhstan","name":"Казахстан","value":0.009009009009009009},{"category":"united-kingdom","name":"Великобритания","value":0.009009009009009009},{"category":"japan","name":"Япония","value":0.009009009009009009},{"category":"bosnia-and-herzegovina","name":"Босния и Герцеговина","value":0.009009009009009009}],"membersGendersAges":{"data":[{"category":"0_18","m":0.05263157894736842,"f":0.042105263157894736},{"category":"18_21","m":0.010526315789473684,"f":0.042105263157894736},{"category":"21_24","m":0.07368421052631578,"f":0.05263157894736842},{"category":"24_27","m":0.021052631578947368,"f":0.031578947368421054},{"category":"27_30","m":0.05263157894736842,"f":0.021052631578947368},{"category":"30_35","m":0.1368421052631579,"f":0.07368421052631578},{"category":"35_45","m":0.1368421052631579,"f":0.07368421052631578},{"category":"45_100","m":0.12631578947368421,"f":0.05263157894736842}],"summary":{"m":0.6105263157894737,"f":0.3894736842105263,"avgAges":"30_35"}},"avgLikes":1871,"avgComments":33,"country":"italy","countryCode":"IT","city":"","type":"business","gender":"","age":"","categories":["nft"],"lastPosts":[{"url":"https://www.instagram.com/p/C2iw1ZVNbW-/","date":"2024-01-26T00:21:44.000Z","type":"photo","image":"https://clbrty-img.s3.amazonaws.com/post_INST:17841445531001821_18045251329549730?time=1706638188","likes":2909,"comments":50,"text":"\"Imagine a giant cityscape where the buildings, streets, and stores are massive in scale, dwarfing the tiny humans that inhabit the city. The city is bustling with activity, showcasing towering skyscrapers, wide streets filled with oversized vehicles, and gigantic storefronts. The tiny people, no larger than a few inches in height, are going about their daily lives, walking along the enormous sidewalks, interacting with each other, and entering and exiting the colossal buildings. The scene captures a surreal contrast between the size of the city infrastructure and the minuscule size of its human inhabitants.\"\n\nMade with #dalle3"},{"url":"https://www.instagram.com/p/C2gKexJNHez/","date":"2024-01-25T00:08:07.000Z","type":"photo","image":"https://clbrty-img.s3.amazonaws.com/post_INST:17841445531001821_17977560347646946?time=1706638190","likes":1538,"comments":24,"text":"\"A captivating space scene depicting a futuristic colony on Mars, with domed habitats and advanced technology. The Martian landscape is a vivid red with rocky terrain, and in the background, Earth can be seen in the sky. Astronauts and robots are shown working together, exploring the surface and conducting experiments. The colony includes greenhouses for growing food and solar panels for energy. This image should reflect the possibilities of human ingenuity and the exploration of new frontiers in space.\"\n\nMade with #dalle3"},{"url":"https://www.instagram.com/p/C2c1SDjLB9d/","date":"2024-01-23T17:05:10.000Z","type":"photo","image":"https://clbrty-img.s3.amazonaws.com/post_INST:17841445531001821_18213321163272888?time=1706638192","likes":1009,"comments":6,"text":"\"A serene scene of a traditional Japanese Zen garden at sunrise. The garden features meticulously raked sand, elegant stone arrangements, and a small, tranquil pond with koi fish. Cherry blossom trees in full bloom add a splash of pink and white, contrasting with the green of the bamboo and meticulously trimmed shrubs. A small wooden bridge crosses the pond, and in the background, a traditional Japanese tea house can be seen. The image should convey a sense of peace, simplicity, and harmony with nature.\"\n\nMade with #dalle3"}],"lastFromMentions":[{"cid":"INST:17841400016050000","image":"https://clbrty-img.s3.amazonaws.com/INST:17841400016050000?time=1702300836","url":"https://instagram.com/n","name":"n"}],"membersTypes":[{"name":"real","percent":0.7928571428571428},{"name":"influencer","percent":0.10714285714285714},{"name":"massfollowers","percent":0.1},{"name":"suspicious","percent":0}],"membersReachability":[{"name":"r0_500","percent":0.31654676258992803},{"name":"r1500_plus","percent":0.28776978417266186},{"name":"r500_1000","percent":0.20863309352517986},{"name":"r1000_1500","percent":0.18705035971223022}],"countries":[{"name":"turkey","percent":0.18018018018018017},{"name":"united-states","percent":0.12612612612612611},{"name":"russia","percent":0.10810810810810811},{"name":"india","percent":0.06306306306306306},{"name":"spain","percent":0.06306306306306306}],"cities":[{"name":"istanbul","percent":0.15151515151515152}],"genders":[{"name":"m","percent":0.6105263157894737},{"name":"f","percent":0.3894736842105263}],"ages":[{"name":"30_35","percent":0.21052631578947367},{"name":"35_45","percent":0.21052631578947367},{"name":"45_100","percent":0.17894736842105263},{"name":"21_24","percent":0.12631578947368421},{"name":"0_18","percent":0.09473684210526316},{"name":"27_30","percent":0.07368421052631578},{"name":"18_21","percent":0.05263157894736842},{"name":"24_27","percent":0.05263157894736842}],"interests":[],"brandSafety":{"ad":0,"not_marked_ad":0,"alcohol":0,"toxic":0,"religious":0,"negative":0,"offensive":0,"political":0,"crime":0,"adult":0,"pranks":0,"totalScore":0},"pctUsersCount180d":0.07122205884782501,"contactEmail":"","pctFakeFollowers":0.1,"audienceSeverity":0}}

export const InstaGraph = {
    "meta": {
      "code": 200,
      "message": "OK"
    },
    "data": [
      {
        "time": "1_0",
        "interactions": 44303.16098474669,
        "likes": 43957.52781603612,
        "comments": 345.6331687105732
      },
      {
        "time": "1_1",
        "interactions": 37879.83692323591,
        "likes": 37591.2320272185,
        "comments": 288.6048960174058
      },
      {
        "time": "1_2",
        "interactions": 30460.531173543975,
        "likes": 30226.4827194068,
        "comments": 234.04845413717558
      },
      {
        "time": "1_3",
        "interactions": 23862.133968664744,
        "likes": 23676.697532858485,
        "comments": 185.4364358062603
      },
      {
        "time": "1_4",
        "interactions": 21768.494365707524,
        "likes": 21609.203678842863,
        "comments": 159.29068686466175
      },
      {
        "time": "1_5",
        "interactions": 22926.85864401367,
        "likes": 22766.69658274663,
        "comments": 160.16206126704043
      },
      {
        "time": "1_6",
        "interactions": 31049.109783254695,
        "likes": 30836.453985135602,
        "comments": 212.6557981190943
      },
      {
        "time": "1_7",
        "interactions": 40301.16089791636,
        "likes": 40019.77107903053,
        "comments": 281.3898188858302
      },
      {
        "time": "1_8",
        "interactions": 48067.15775456703,
        "likes": 47733.97346516655,
        "comments": 333.1842894004797
      },
      {
        "time": "1_9",
        "interactions": 52493.43712139679,
        "likes": 52130.45407633683,
        "comments": 362.98304505996225
      },
      {
        "time": "1_10",
        "interactions": 55658.11744618419,
        "likes": 55276.539235033764,
        "comments": 381.5782111504258
      },
      {
        "time": "1_11",
        "interactions": 55023.1626084529,
        "likes": 54647.954312364076,
        "comments": 375.2082960888196
      },
      {
        "time": "1_12",
        "interactions": 52322.863676459645,
        "likes": 51963.3059946467,
        "comments": 359.55768181294815
      },
      {
        "time": "1_13",
        "interactions": 49039.484045036224,
        "likes": 48697.500879113824,
        "comments": 341.98316592239973
      },
      {
        "time": "1_14",
        "interactions": 49350.49571677234,
        "likes": 49019.07743070839,
        "comments": 331.4182860639454
      },
      {
        "time": "1_15",
        "interactions": 47641.82525791091,
        "likes": 47315.94655222387,
        "comments": 325.8787056870407
      },
      {
        "time": "1_16",
        "interactions": 46093.72559702554,
        "likes": 45777.991188648906,
        "comments": 315.7344083766331
      },
      {
        "time": "1_17",
        "interactions": 44376.850402103664,
        "likes": 44076.26168676681,
        "comments": 300.5887153368507
      },
      {
        "time": "1_18",
        "interactions": 45115.29726212867,
        "likes": 44801.24957439504,
        "comments": 314.0476877336289
      },
      {
        "time": "1_19",
        "interactions": 47019.6511272007,
        "likes": 46693.08578883089,
        "comments": 326.5653383698065
      },
      {
        "time": "1_20",
        "interactions": 47188.749686217765,
        "likes": 46854.90356941199,
        "comments": 333.8461168057785
      },
      {
        "time": "1_21",
        "interactions": 47194.63944584637,
        "likes": 46866.706212349556,
        "comments": 327.93323349681145
      },
      {
        "time": "1_22",
        "interactions": 48923.58345258987,
        "likes": 48599.50246901265,
        "comments": 324.080983577216
      },
      {
        "time": "1_23",
        "interactions": 42948.937638291725,
        "likes": 42664.718579110086,
        "comments": 284.2190591816382
      },
      {
        "time": "2_0",
        "interactions": 34660.99700533387,
        "likes": 34435.00465876165,
        "comments": 225.99234657221652
      },
      {
        "time": "2_1",
        "interactions": 26345.962907519555,
        "likes": 26169.292898129428,
        "comments": 176.67000939012678
      },
      {
        "time": "2_2",
        "interactions": 21778.394487657544,
        "likes": 21633.869351121924,
        "comments": 144.52513653561823
      },
      {
        "time": "2_3",
        "interactions": 21036.78948932346,
        "likes": 20907.07559684797,
        "comments": 129.71389247548612
      },
      {
        "time": "2_4",
        "interactions": 19853.01957144691,
        "likes": 19720.88130145321,
        "comments": 132.138269993698
      },
      {
        "time": "2_5",
        "interactions": 19126.8702483392,
        "likes": 18996.364967138685,
        "comments": 130.50528120051493
      },
      {
        "time": "2_6",
        "interactions": 23677.259820456766,
        "likes": 23519.81944507623,
        "comments": 157.4403753805341
      },
      {
        "time": "2_7",
        "interactions": 31232.18697702253,
        "likes": 31026.49137675367,
        "comments": 205.69560026885935
      },
      {
        "time": "2_8",
        "interactions": 40493.56330806158,
        "likes": 40183.93123988085,
        "comments": 309.63206818073564
      },
      {
        "time": "2_9",
        "interactions": 48922.54184425091,
        "likes": 48566.79019600568,
        "comments": 355.75164824523506
      },
      {
        "time": "2_10",
        "interactions": 52372.563192993686,
        "likes": 51993.70338698127,
        "comments": 378.85980601241135
      },
      {
        "time": "2_11",
        "interactions": 52870.37572625198,
        "likes": 52491.084372358644,
        "comments": 379.2913538933325
      },
      {
        "time": "2_12",
        "interactions": 51555.79012530862,
        "likes": 51184.69298265644,
        "comments": 371.09714265218173
      },
      {
        "time": "2_13",
        "interactions": 50491.94232004019,
        "likes": 50128.62901159265,
        "comments": 363.31330844753097
      },
      {
        "time": "2_14",
        "interactions": 55092.13498382685,
        "likes": 54723.35281848502,
        "comments": 368.78216534182684
      },
      {
        "time": "2_15",
        "interactions": 54818.23050015935,
        "likes": 54452.059511840045,
        "comments": 366.17098831930537
      },
      {
        "time": "2_16",
        "interactions": 52294.47055070376,
        "likes": 51948.36216207899,
        "comments": 346.10838862476436
      },
      {
        "time": "2_17",
        "interactions": 49360.46578148317,
        "likes": 49027.60796478773,
        "comments": 332.85781669544457
      },
      {
        "time": "2_18",
        "interactions": 48992.384370638276,
        "likes": 48653.19523438864,
        "comments": 339.1891362496403
      },
      {
        "time": "2_19",
        "interactions": 46344.45133003336,
        "likes": 46019.0317039008,
        "comments": 325.4196261325585
      },
      {
        "time": "2_20",
        "interactions": 44482.470729073386,
        "likes": 44162.578126916225,
        "comments": 319.8926021571632
      },
      {
        "time": "2_21",
        "interactions": 45366.75353032313,
        "likes": 45048.821257538846,
        "comments": 317.9322727842842
      },
      {
        "time": "2_22",
        "interactions": 43506.44959198022,
        "likes": 43213.90601917905,
        "comments": 292.54357280117347
      },
      {
        "time": "2_23",
        "interactions": 37302.73321197482,
        "likes": 37054.46106450675,
        "comments": 248.27214746806627
      },
      {
        "time": "3_0",
        "interactions": 31118.225994273038,
        "likes": 30926.822436043996,
        "comments": 191.40355822904294
      },
      {
        "time": "3_1",
        "interactions": 25572.37447201004,
        "likes": 25414.98548625118,
        "comments": 157.38898575886066
      },
      {
        "time": "3_2",
        "interactions": 21087.350244472083,
        "likes": 20959.687729239307,
        "comments": 127.66251523277711
      },
      {
        "time": "3_3",
        "interactions": 21101.02235020697,
        "likes": 20972.987312202666,
        "comments": 128.03503800430627
      },
      {
        "time": "3_4",
        "interactions": 20014.599393047305,
        "likes": 19893.978081276004,
        "comments": 120.62131177130061
      },
      {
        "time": "3_5",
        "interactions": 19789.96549507251,
        "likes": 19672.38911030203,
        "comments": 117.57638477047904
      },
      {
        "time": "3_6",
        "interactions": 26387.662164898917,
        "likes": 26230.47938375531,
        "comments": 157.18278114360558
      },
      {
        "time": "3_7",
        "interactions": 35371.95348972175,
        "likes": 35149.62551432771,
        "comments": 222.32797539404385
      },
      {
        "time": "3_8",
        "interactions": 45137.90465320098,
        "likes": 44781.94961840603,
        "comments": 355.95503479495085
      },
      {
        "time": "3_9",
        "interactions": 49419.621604818414,
        "likes": 49032.37928252326,
        "comments": 387.2423222951553
      },
      {
        "time": "3_10",
        "interactions": 53277.67611967367,
        "likes": 52878.5326426549,
        "comments": 399.14347701876625
      },
      {
        "time": "3_11",
        "interactions": 51440.85404748904,
        "likes": 51069.53077749339,
        "comments": 371.3232699956484
      },
      {
        "time": "3_12",
        "interactions": 50697.342153470876,
        "likes": 50335.96926255483,
        "comments": 361.3728909160525
      },
      {
        "time": "3_13",
        "interactions": 50053.23074181626,
        "likes": 49687.37450327291,
        "comments": 365.85623854334915
      },
      {
        "time": "3_14",
        "interactions": 50947.42229699879,
        "likes": 50575.56568008836,
        "comments": 371.85661691043305
      },
      {
        "time": "3_15",
        "interactions": 49679.31985084708,
        "likes": 49309.15048906992,
        "comments": 370.1693617771588
      },
      {
        "time": "3_16",
        "interactions": 48303.352585556095,
        "likes": 47951.30486097453,
        "comments": 352.04772458156606
      },
      {
        "time": "3_17",
        "interactions": 47834.0671600755,
        "likes": 47482.2244245396,
        "comments": 351.84273553590225
      },
      {
        "time": "3_18",
        "interactions": 47845.18630740066,
        "likes": 47490.831406088655,
        "comments": 354.3549013120074
      },
      {
        "time": "3_19",
        "interactions": 49799.75432182333,
        "likes": 49421.144858607004,
        "comments": 378.60946321633014
      },
      {
        "time": "3_20",
        "interactions": 48398.000564394664,
        "likes": 48035.56115835697,
        "comments": 362.4394060376979
      },
      {
        "time": "3_21",
        "interactions": 43688.860909039904,
        "likes": 43357.32368417726,
        "comments": 331.5372248626425
      },
      {
        "time": "3_22",
        "interactions": 39554.776736107546,
        "likes": 39251.55804719304,
        "comments": 303.21868891450515
      },
      {
        "time": "3_23",
        "interactions": 34714.00125516798,
        "likes": 34449.926740728384,
        "comments": 264.0745144396014
      },
      {
        "time": "4_0",
        "interactions": 31988.82208131102,
        "likes": 31764.592505678007,
        "comments": 224.22957563301478
      },
      {
        "time": "4_1",
        "interactions": 28208.300543953927,
        "likes": 28009.398285293064,
        "comments": 198.9022586608637
      },
      {
        "time": "4_2",
        "interactions": 25086.06181387861,
        "likes": 24914.705145114833,
        "comments": 171.35666876377618
      },
      {
        "time": "4_3",
        "interactions": 20542.66282970624,
        "likes": 20394.995411161748,
        "comments": 147.66741854449432
      },
      {
        "time": "4_4",
        "interactions": 19769.6885225978,
        "likes": 19633.20917503592,
        "comments": 136.47934756187797
      },
      {
        "time": "4_5",
        "interactions": 20395.577916521488,
        "likes": 20255.530020598224,
        "comments": 140.04789592326347
      },
      {
        "time": "4_6",
        "interactions": 23512.440214686485,
        "likes": 23353.483895216126,
        "comments": 158.9563194703591
      },
      {
        "time": "4_7",
        "interactions": 32791.225189154466,
        "likes": 32568.05011188994,
        "comments": 223.17507726452524
      },
      {
        "time": "4_8",
        "interactions": 38848.74150785369,
        "likes": 38592.776768144504,
        "comments": 255.96473970918137
      },
      {
        "time": "4_9",
        "interactions": 44389.800424269895,
        "likes": 44094.98626092309,
        "comments": 294.814163346801
      },
      {
        "time": "4_10",
        "interactions": 43981.17507221704,
        "likes": 43689.777268324535,
        "comments": 291.3978038925067
      },
      {
        "time": "4_11",
        "interactions": 43897.455168616805,
        "likes": 43599.89538389986,
        "comments": 297.5597847169488
      },
      {
        "time": "4_12",
        "interactions": 45705.97636645819,
        "likes": 45388.9402789272,
        "comments": 317.03608753098894
      },
      {
        "time": "4_13",
        "interactions": 43723.05508192821,
        "likes": 43421.69767578513,
        "comments": 301.3574061430751
      },
      {
        "time": "4_14",
        "interactions": 43436.126368189056,
        "likes": 43142.10041969564,
        "comments": 294.0259484934147
      },
      {
        "time": "4_15",
        "interactions": 39102.22936579183,
        "likes": 38836.872669738004,
        "comments": 265.35669605382475
      },
      {
        "time": "4_16",
        "interactions": 45377.34951563154,
        "likes": 45052.693573808196,
        "comments": 324.65594182334684
      },
      {
        "time": "4_17",
        "interactions": 44311.49880256819,
        "likes": 43991.75264320812,
        "comments": 319.74615936007064
      },
      {
        "time": "4_18",
        "interactions": 51107.907920605874,
        "likes": 50697.52109844442,
        "comments": 410.38682216145236
      },
      {
        "time": "4_19",
        "interactions": 50752.25959827529,
        "likes": 50341.88073040043,
        "comments": 410.378867874861
      },
      {
        "time": "4_20",
        "interactions": 50805.07874479765,
        "likes": 50393.60476383968,
        "comments": 411.47398095797183
      },
      {
        "time": "4_21",
        "interactions": 48082.53266910709,
        "likes": 47691.142905698376,
        "comments": 391.389763408714
      },
      {
        "time": "4_22",
        "interactions": 46622.9443802453,
        "likes": 46225.57802164232,
        "comments": 397.3663586029787
      },
      {
        "time": "4_23",
        "interactions": 42363.818728841696,
        "likes": 42007.25814498692,
        "comments": 356.5605838547762
      },
      {
        "time": "5_0",
        "interactions": 33124.339906774265,
        "likes": 32844.37507164836,
        "comments": 279.96483512589975
      },
      {
        "time": "5_1",
        "interactions": 27512.72470064965,
        "likes": 27286.89164765546,
        "comments": 225.83305299419183
      },
      {
        "time": "5_2",
        "interactions": 20824.727060616526,
        "likes": 20647.672540979118,
        "comments": 177.05451963740938
      },
      {
        "time": "5_3",
        "interactions": 17882.17155039832,
        "likes": 17741.722283507985,
        "comments": 140.44926689033662
      },
      {
        "time": "5_4",
        "interactions": 17317.399345561604,
        "likes": 17178.37548361675,
        "comments": 139.02386194485504
      },
      {
        "time": "5_5",
        "interactions": 17316.068284704575,
        "likes": 17184.704394114022,
        "comments": 131.3638905905537
      },
      {
        "time": "5_6",
        "interactions": 21710.004134374438,
        "likes": 21548.867954750105,
        "comments": 161.13617962433128
      },
      {
        "time": "5_7",
        "interactions": 32952.68937311768,
        "likes": 32712.186500790354,
        "comments": 240.50287232732796
      },
      {
        "time": "5_8",
        "interactions": 41478.04576243124,
        "likes": 41163.46324163958,
        "comments": 314.58252079165493
      },
      {
        "time": "5_9",
        "interactions": 49033.50920257778,
        "likes": 48680.259192531754,
        "comments": 353.2500100460222
      },
      {
        "time": "5_10",
        "interactions": 51316.593340480504,
        "likes": 50942.130250348564,
        "comments": 374.4630901319411
      },
      {
        "time": "5_11",
        "interactions": 53200.17908309453,
        "likes": 52817.457422397856,
        "comments": 382.7216606966767
      },
      {
        "time": "5_12",
        "interactions": 51096.19598995246,
        "likes": 50734.55249697675,
        "comments": 361.6434929757077
      },
      {
        "time": "5_13",
        "interactions": 53318.67506141958,
        "likes": 52959.083015552074,
        "comments": 359.5920458675031
      },
      {
        "time": "5_14",
        "interactions": 50297.396790686325,
        "likes": 49965.134044945815,
        "comments": 332.26274574050893
      },
      {
        "time": "5_15",
        "interactions": 49824.320545277216,
        "likes": 49493.338227031265,
        "comments": 330.98231824595325
      },
      {
        "time": "5_16",
        "interactions": 47510.29233145757,
        "likes": 47177.23018018293,
        "comments": 333.062151274637
      },
      {
        "time": "5_17",
        "interactions": 50951.49379658507,
        "likes": 50591.792863695606,
        "comments": 359.7009328894622
      },
      {
        "time": "5_18",
        "interactions": 52632.737056467806,
        "likes": 52258.14599737113,
        "comments": 374.5910590966739
      },
      {
        "time": "5_19",
        "interactions": 53632.770914466026,
        "likes": 53242.56885524661,
        "comments": 390.20205921941437
      },
      {
        "time": "5_20",
        "interactions": 54550.731518324224,
        "likes": 54163.57451826569,
        "comments": 387.1570000585356
      },
      {
        "time": "5_21",
        "interactions": 53008.261785854156,
        "likes": 52634.94899810334,
        "comments": 373.31278775081745
      },
      {
        "time": "5_22",
        "interactions": 54057.84066930349,
        "likes": 53664.517359866615,
        "comments": 393.323309436878
      },
      {
        "time": "5_23",
        "interactions": 45020.75005453578,
        "likes": 44687.286798054636,
        "comments": 333.4632564811463
      },
      {
        "time": "6_0",
        "interactions": 39191.17251220581,
        "likes": 38902.54937043583,
        "comments": 288.62314176998143
      },
      {
        "time": "6_1",
        "interactions": 30397.321537627755,
        "likes": 30170.8454226953,
        "comments": 226.47611493245628
      },
      {
        "time": "6_2",
        "interactions": 21067.55559881459,
        "likes": 20924.470317983163,
        "comments": 143.08528083142838
      },
      {
        "time": "6_3",
        "interactions": 17277.921631038058,
        "likes": 17156.585391142118,
        "comments": 121.33623989594135
      },
      {
        "time": "6_4",
        "interactions": 18232.991434611526,
        "likes": 18112.520613450768,
        "comments": 120.47082116075718
      },
      {
        "time": "6_5",
        "interactions": 22898.340082416922,
        "likes": 22713.716525716623,
        "comments": 184.62355670029896
      },
      {
        "time": "6_6",
        "interactions": 29495.447623613993,
        "likes": 29252.006746955914,
        "comments": 243.4408766580784
      },
      {
        "time": "6_7",
        "interactions": 37962.76252073602,
        "likes": 37665.30515171093,
        "comments": 297.4573690250929
      },
      {
        "time": "6_8",
        "interactions": 45490.07392002835,
        "likes": 45136.232939144975,
        "comments": 353.8409808833737
      },
      {
        "time": "6_9",
        "interactions": 54952.64375581405,
        "likes": 54514.00379072327,
        "comments": 438.63996509078225
      },
      {
        "time": "6_10",
        "interactions": 59943.422720079754,
        "likes": 59467.604439922216,
        "comments": 475.81828015754087
      },
      {
        "time": "6_11",
        "interactions": 59238.1212336874,
        "likes": 58767.48008309051,
        "comments": 470.6411505968927
      },
      {
        "time": "6_12",
        "interactions": 57787.93508621732,
        "likes": 57329.69057637102,
        "comments": 458.2445098463046
      },
      {
        "time": "6_13",
        "interactions": 54370.4957979403,
        "likes": 53943.464113688744,
        "comments": 427.0316842515517
      },
      {
        "time": "6_14",
        "interactions": 51596.37293285654,
        "likes": 51190.05451900026,
        "comments": 406.31841385628275
      },
      {
        "time": "6_15",
        "interactions": 47751.88014058097,
        "likes": 47375.77856606511,
        "comments": 376.1015745158602
      },
      {
        "time": "6_16",
        "interactions": 44739.05523795005,
        "likes": 44392.88648892208,
        "comments": 346.16874902797554
      },
      {
        "time": "6_17",
        "interactions": 43828.246891133276,
        "likes": 43492.312192709236,
        "comments": 335.9346984240388
      },
      {
        "time": "6_18",
        "interactions": 45183.87032492776,
        "likes": 44823.33263342281,
        "comments": 360.5376915049495
      },
      {
        "time": "6_19",
        "interactions": 53090.02316302073,
        "likes": 52676.48810487882,
        "comments": 413.5350581419047
      },
      {
        "time": "6_20",
        "interactions": 53656.44836058129,
        "likes": 53237.53118605824,
        "comments": 418.91717452305795
      },
      {
        "time": "6_21",
        "interactions": 55742.96178957782,
        "likes": 55309.469802568536,
        "comments": 433.49198700928235
      },
      {
        "time": "6_22",
        "interactions": 53030.2447839971,
        "likes": 52623.89359387296,
        "comments": 406.3511901241383
      },
      {
        "time": "6_23",
        "interactions": 47697.80343349241,
        "likes": 47330.250493981956,
        "comments": 367.55293951045394
      },
      {
        "time": "7_0",
        "interactions": 42327.77723576507,
        "likes": 41997.70178195313,
        "comments": 330.0754538119342
      },
      {
        "time": "7_1",
        "interactions": 36826.95617224501,
        "likes": 36556.07208953546,
        "comments": 270.88408270954557
      },
      {
        "time": "7_2",
        "interactions": 29646.836096701933,
        "likes": 29432.01035561834,
        "comments": 214.82574108359395
      },
      {
        "time": "7_3",
        "interactions": 22936.705635573613,
        "likes": 22782.094804987508,
        "comments": 154.61083058610552
      },
      {
        "time": "7_4",
        "interactions": 21363.05693953937,
        "likes": 21219.840252094684,
        "comments": 143.2166874446864
      },
      {
        "time": "7_5",
        "interactions": 23319.02448250364,
        "likes": 23156.710513305577,
        "comments": 162.31396919806278
      },
      {
        "time": "7_6",
        "interactions": 31130.78477189967,
        "likes": 30915.218407182714,
        "comments": 215.56636471695595
      },
      {
        "time": "7_7",
        "interactions": 43315.096049608765,
        "likes": 43003.856150901716,
        "comments": 311.23989870705077
      },
      {
        "time": "7_8",
        "interactions": 53368.99239296611,
        "likes": 52992.02617686804,
        "comments": 376.9662160980691
      },
      {
        "time": "7_9",
        "interactions": 57873.933917633556,
        "likes": 57460.08700492231,
        "comments": 413.8469127112448
      },
      {
        "time": "7_10",
        "interactions": 60218.436586726515,
        "likes": 59767.533208800414,
        "comments": 450.9033779261012
      },
      {
        "time": "7_11",
        "interactions": 58793.51547878443,
        "likes": 58335.37029351686,
        "comments": 458.1451852675691
      },
      {
        "time": "7_12",
        "interactions": 56314.39795079282,
        "likes": 55873.07886527794,
        "comments": 441.3190855148866
      },
      {
        "time": "7_13",
        "interactions": 53163.90487812413,
        "likes": 52744.01111380603,
        "comments": 419.8937643180976
      },
      {
        "time": "7_14",
        "interactions": 50220.99211700913,
        "likes": 49829.28907418058,
        "comments": 391.7030428285501
      },
      {
        "time": "7_15",
        "interactions": 50033.12602209439,
        "likes": 49643.307810779945,
        "comments": 389.8182113144441
      },
      {
        "time": "7_16",
        "interactions": 48437.65945226289,
        "likes": 48056.61511006515,
        "comments": 381.04434219773657
      },
      {
        "time": "7_17",
        "interactions": 52711.644835762105,
        "likes": 52295.128793633776,
        "comments": 416.5160421283274
      },
      {
        "time": "7_18",
        "interactions": 55200.01369345965,
        "likes": 54760.47844635342,
        "comments": 439.53524710623134
      },
      {
        "time": "7_19",
        "interactions": 58457.036205339304,
        "likes": 57977.20900145832,
        "comments": 479.8272038809806
      },
      {
        "time": "7_20",
        "interactions": 59894.92245593559,
        "likes": 59408.058618984054,
        "comments": 486.8638369515427
      },
      {
        "time": "7_21",
        "interactions": 64160.348995241045,
        "likes": 63617.100825013804,
        "comments": 543.2481702272386
      },
      {
        "time": "7_22",
        "interactions": 65582.27007865283,
        "likes": 65036.60570846013,
        "comments": 545.6643701927096
      },
      {
        "time": "7_23",
        "interactions": 55922.18312772382,
        "likes": 55462.05223493792,
        "comments": 460.1308927859088
      }
    ]
  }

  export const TwitterGraph = {"meta":{"code":200,"message":"OK"},"data":[{"time":"1_0","interactions":82.1458731784628,"likes":69.73051080745056,"comments":5.099242680566731,"rePosts":7.316119690445509,"views":5313.020932992411},{"time":"1_1","interactions":80.15277332187125,"likes":68.62493755752388,"comments":4.714791861963262,"rePosts":6.813043902384102,"views":5171.879851674291},{"time":"1_2","interactions":38.36599867122295,"likes":32.983308478863506,"comments":2.33459889741441,"rePosts":3.0480912949450314,"views":3087.1891712160073},{"time":"1_3","interactions":16.460246222546235,"likes":14.294759215943046,"comments":0.8854301565896657,"rePosts":1.2800568500135239,"views":1265.9319819260636},{"time":"1_4","interactions":16.56079333574572,"likes":13.809542763405334,"comments":1.0680676397545936,"rePosts":1.6831829325857945,"views":1231.4657938962898},{"time":"1_5","interactions":17.118321522660093,"likes":14.839872979512617,"comments":0.9268437913910137,"rePosts":1.351604751756463,"views":1286.9480775598124},{"time":"1_6","interactions":35.79440288560705,"likes":30.84162272495589,"comments":1.9750395627400492,"rePosts":2.9777405979111085,"views":2281.3448107970153},{"time":"1_7","interactions":58.27685174284409,"likes":49.831571400003,"comments":3.613271193446652,"rePosts":4.832009149394437,"views":4088.2513659282813},{"time":"1_8","interactions":60.232722695193345,"likes":51.10109516123202,"comments":3.8033633918399135,"rePosts":5.328264142121412,"views":4209.847381278997},{"time":"1_9","interactions":60.01607169629263,"likes":51.431263311351714,"comments":3.60938980095606,"rePosts":4.9754185839848555,"views":4243.467088260724},{"time":"1_10","interactions":64.68106959443622,"likes":55.579673994928015,"comments":3.736908389418993,"rePosts":5.364487210089214,"views":4518.689657821402},{"time":"1_11","interactions":64.57168328475419,"likes":55.31501033901421,"comments":3.861719565556139,"rePosts":5.3949533801838445,"views":4493.9111644592995},{"time":"1_12","interactions":65.81771610189406,"likes":55.885442412111274,"comments":4.326508373874508,"rePosts":5.605765315908284,"views":4473.416599167148},{"time":"1_13","interactions":64.41570269148141,"likes":55.16138572821683,"comments":3.9155766191408086,"rePosts":5.338740344123775,"views":4436.8186938536155},{"time":"1_14","interactions":56.44142017947908,"likes":48.53841440889909,"comments":3.266933250838814,"rePosts":4.6360725197411865,"views":4074.0711947445448},{"time":"1_15","interactions":50.49991299433643,"likes":43.38080726083294,"comments":2.982051153093365,"rePosts":4.137054580410121,"views":3557.4499879056707},{"time":"1_16","interactions":57.836287667578496,"likes":48.80578376763762,"comments":3.986460251587887,"rePosts":5.044043648352991,"views":4911.372294009084},{"time":"1_17","interactions":57.218760476078856,"likes":48.445809943324896,"comments":4.046051088863308,"rePosts":4.726899443890648,"views":4890.071624646818},{"time":"1_18","interactions":52.81799836395927,"likes":44.776564364689605,"comments":3.6389719065716952,"rePosts":4.4024620926979665,"views":4708.141567863543},{"time":"1_19","interactions":49.98016633029857,"likes":42.290554993211764,"comments":3.6627196269280593,"rePosts":4.026891710158752,"views":4429.750349959363},{"time":"1_20","interactions":49.834949598998605,"likes":41.449522550660554,"comments":3.8455126264602764,"rePosts":4.539914421877772,"views":4125.109767953466},{"time":"1_21","interactions":47.50331959073349,"likes":40.193544080782964,"comments":3.337566971251686,"rePosts":3.9722085386988417,"views":4062.9279360853025},{"time":"1_22","interactions":37.7345410235428,"likes":31.929895670978656,"comments":2.636625556096566,"rePosts":3.168019796467582,"views":3571.6627368261798},{"time":"1_23","interactions":26.695083432346255,"likes":22.306454646967016,"comments":2.1347405450394534,"rePosts":2.2538882403397875,"views":2639.7695810116857},{"time":"2_0","interactions":22.081695065009487,"likes":18.968682094340014,"comments":1.2294817647328706,"rePosts":1.8835312059366034,"views":1645.2100223238233},{"time":"2_1","interactions":21.007804164603606,"likes":17.63872454887396,"comments":1.5216926685758418,"rePosts":1.8473869471538062,"views":1573.8429948679782},{"time":"2_2","interactions":11.68678545605483,"likes":10.280987062470782,"comments":0.5978383302478603,"rePosts":0.807960063336188,"views":1168.3220318632762},{"time":"2_3","interactions":8.241565767844792,"likes":7.1380313574896554,"comments":0.4927930869217471,"rePosts":0.6107413234333894,"views":817.9542768366088},{"time":"2_4","interactions":9.470821210536691,"likes":7.374231450708691,"comments":0.9308776793462582,"rePosts":1.1657120804817418,"views":780.5903577549054},{"time":"2_5","interactions":8.833149276368855,"likes":7.625329932840669,"comments":0.4888238199673721,"rePosts":0.7189955235608144,"views":810.0978737989949},{"time":"2_6","interactions":12.11244107625476,"likes":10.483093306747328,"comments":0.6794942238709984,"rePosts":0.9498535456364325,"views":999.5907793732814},{"time":"2_7","interactions":16.540059513975674,"likes":14.131444758474391,"comments":0.9838949400360611,"rePosts":1.4247198154652223,"views":1346.3445836276815},{"time":"2_8","interactions":18.694038438506933,"likes":15.435644038699886,"comments":1.7073276740115026,"rePosts":1.5510667257955417,"views":1643.9675381430716},{"time":"2_9","interactions":18.470073993261067,"likes":15.715106127226695,"comments":1.1723382571176533,"rePosts":1.5826296089167193,"views":1660.1692992138671},{"time":"2_10","interactions":18.933817472047128,"likes":16.207354312046792,"comments":1.3231517482226876,"rePosts":1.4033114117776473,"views":1715.4806406133132},{"time":"2_11","interactions":19.120818944928565,"likes":16.601230701655357,"comments":1.0007807392481332,"rePosts":1.5188075040250748,"views":1714.7274149005361},{"time":"2_12","interactions":20.003871924882453,"likes":16.561428651773923,"comments":1.7813923608568265,"rePosts":1.6610509122517028,"views":1655.7033148970331},{"time":"2_13","interactions":19.561838987925224,"likes":16.643522626572018,"comments":1.1948713581158594,"rePosts":1.7234450032373485,"views":1643.609974083608},{"time":"2_14","interactions":17.019938593960426,"likes":14.625150479836801,"comments":1.100625736728273,"rePosts":1.2941623773953528,"views":1575.4149885602476},{"time":"2_15","interactions":16.20677159546263,"likes":13.80227518080122,"comments":1.1566965769682456,"rePosts":1.247799837693166,"views":1476.6693744766533},{"time":"2_16","interactions":16.736329809585204,"likes":13.655378870216113,"comments":1.2915510942581745,"rePosts":1.7893998451109157,"views":1402.2235699708426},{"time":"2_17","interactions":16.165245068762903,"likes":13.631474436252844,"comments":1.2559236552854791,"rePosts":1.2778469772245822,"views":1396.678253723333},{"time":"2_18","interactions":14.91122683678427,"likes":13.047047073509084,"comments":0.7874559095486294,"rePosts":1.0767238537265564,"views":1361.1192097136168},{"time":"2_19","interactions":14.109629574880856,"likes":12.037305564512058,"comments":0.9653892634783221,"rePosts":1.1069347468904762,"views":1306.2722754479537},{"time":"2_20","interactions":15.532209480537464,"likes":12.696478570049399,"comments":1.2784122026227616,"rePosts":1.5573187078653035,"views":1241.6693431627407},{"time":"2_21","interactions":14.21276507924421,"likes":12.060813849781969,"comments":0.8785881878582025,"rePosts":1.2733630416040398,"views":1215.0603578619268},{"time":"2_22","interactions":11.848749103973033,"likes":10.342021507073163,"comments":0.6866713213042542,"rePosts":0.8200562755956152,"views":1121.37145165104},{"time":"2_23","interactions":9.684120592534867,"likes":8.316013013759221,"comments":0.5405663602996985,"rePosts":0.8275412184759494,"views":942.2894196552636},{"time":"3_0","interactions":10.288088064697465,"likes":8.25240559857257,"comments":0.9119898175013781,"rePosts":1.1236926486235164,"views":755.5807602206037},{"time":"3_1","interactions":8.930334353694711,"likes":7.702281516980847,"comments":0.5476605433750756,"rePosts":0.6803922933387883,"views":733.4504037308527},{"time":"3_2","interactions":6.87856158290371,"likes":6.0441827303405296,"comments":0.3494441558402928,"rePosts":0.4849346967228876,"views":654.6615541857893},{"time":"3_3","interactions":5.81909306540627,"likes":5.112019263651953,"comments":0.34576155645127393,"rePosts":0.36131224530304323,"views":585.2697432472897},{"time":"3_4","interactions":6.898341854487473,"likes":5.5718102757067305,"comments":0.6652565159410045,"rePosts":0.6612750628397378,"views":574.3431083132642},{"time":"3_5","interactions":7.021393523275135,"likes":6.0121920753700655,"comments":0.3977512646130992,"rePosts":0.6114501832919702,"views":578.4779264981361},{"time":"3_6","interactions":5.295297957632709,"likes":4.592061078868723,"comments":0.3973222924774862,"rePosts":0.30591458628650026,"views":508.19276913724934},{"time":"3_7","interactions":5.532180737843914,"likes":5.023516808600686,"comments":0.20319852733739874,"rePosts":0.3054654019058294,"views":537.4862177243486},{"time":"3_8","interactions":7.013218418170718,"likes":5.728108878152287,"comments":0.5777932849225623,"rePosts":0.7073162550958685,"views":593.1132643185501},{"time":"3_9","interactions":7.0256104636729155,"likes":5.827944604567901,"comments":0.6056631378972233,"rePosts":0.5920027212077914,"views":597.3117696028296},{"time":"3_10","interactions":6.293712726358138,"likes":5.457797320403007,"comments":0.3790491789744566,"rePosts":0.45686622698067453,"views":608.6618907855708},{"time":"3_11","interactions":6.228890890736649,"likes":5.456589758747173,"comments":0.3100445647656995,"rePosts":0.46225656722377667,"views":611.1692526034624},{"time":"3_12","interactions":7.1316784051317965,"likes":5.762565972080467,"comments":0.5699583370440984,"rePosts":0.7991540960072313,"views":600.8776492257977},{"time":"3_13","interactions":6.833265251797004,"likes":5.85344565496092,"comments":0.31048331319453876,"rePosts":0.669336283641545,"views":597.2955918307803},{"time":"3_14","interactions":5.633228307156383,"likes":4.952447947931465,"comments":0.32903305917050935,"rePosts":0.3517473000544085,"views":584.4618188521448},{"time":"3_15","interactions":5.757607291942838,"likes":5.185610018396166,"comments":0.2597713249755754,"rePosts":0.3122259485710966,"views":567.6401193449537},{"time":"3_16","interactions":23.564879428733267,"likes":19.47453996014566,"comments":2.3828387689239072,"rePosts":1.7075006996637012,"views":2646.7963029020384},{"time":"3_17","interactions":23.0420061393178,"likes":19.498049761232277,"comments":1.8908454074168632,"rePosts":1.6531109706686604,"views":2646.518415320988},{"time":"3_18","interactions":22.40349635576514,"likes":18.95996554750317,"comments":1.8597266091859572,"rePosts":1.5838041990760081,"views":2641.267940479338},{"time":"3_19","interactions":22.336839816966563,"likes":19.04333411172563,"comments":1.7444854743214173,"rePosts":1.5490202309195125,"views":2626.484441383196},{"time":"3_20","interactions":19.307942914108843,"likes":16.201935351040614,"comments":1.5551937190288374,"rePosts":1.5508138440393904,"views":2186.895828795538},{"time":"3_21","interactions":19.340979035570008,"likes":16.423968439658697,"comments":1.663660748338495,"rePosts":1.2533498475728178,"views":2182.8153385977316},{"time":"3_22","interactions":18.202110631722867,"likes":15.496063509289202,"comments":1.4314573848901806,"rePosts":1.2745897375434811,"views":2166.593603056496},{"time":"3_23","interactions":17.730622553696957,"likes":15.243541105468024,"comments":1.2925663032291592,"rePosts":1.1945151449997742,"views":2110.414730575544},{"time":"4_0","interactions":7.775096410238078,"likes":6.151241798700988,"comments":0.8130193064411126,"rePosts":0.810835305095978,"views":697.8868572029921},{"time":"4_1","interactions":6.584293430561673,"likes":5.821725246247894,"comments":0.39257905229430873,"rePosts":0.3699891320194706,"views":692.1890700527223},{"time":"4_2","interactions":8.249466957252602,"likes":7.1401606723633355,"comments":0.5515318186204409,"rePosts":0.5577744662688264,"views":846.7077987305358},{"time":"4_3","interactions":7.586524784262268,"likes":6.783155200351718,"comments":0.4583989688934658,"rePosts":0.3449706150170842,"views":831.605804402097},{"time":"4_4","interactions":8.071136619428303,"likes":6.685986234780762,"comments":0.6791009055289465,"rePosts":0.706049479118596,"views":758.8740580301753},{"time":"4_5","interactions":8.172232294888374,"likes":6.961866066193958,"comments":0.5343040411092377,"rePosts":0.6760621875851783,"views":768.7681023125131},{"time":"4_6","interactions":15.74764927813467,"likes":13.594736777622927,"comments":1.1402570250825863,"rePosts":1.012655475429156,"views":1484.539473358601},{"time":"4_7","interactions":15.978300061355416,"likes":13.88141800283839,"comments":1.0524971276301978,"rePosts":1.0443849308868272,"views":1517.9100768414696},{"time":"4_8","interactions":20.69897195177414,"likes":17.295028447556724,"comments":1.7724806573650613,"rePosts":1.6314628468523538,"views":1933.401852628977},{"time":"4_9","interactions":20.414139331731565,"likes":17.2844163755208,"comments":1.6191289151255848,"rePosts":1.510594041085182,"views":1940.285183937825},{"time":"4_10","interactions":21.64457662916349,"likes":18.636787412090413,"comments":1.6734968638275087,"rePosts":1.3342923532455664,"views":2140.4201028228313},{"time":"4_11","interactions":22.040410748053546,"likes":18.97824613017539,"comments":1.6754692555123871,"rePosts":1.3866953623657718,"views":2139.3842352742713},{"time":"4_12","interactions":21.852856279411487,"likes":18.273673273796273,"comments":2.0680909489690555,"rePosts":1.5110920566461579,"views":2052.3629519694873},{"time":"4_13","interactions":21.609204077873923,"likes":18.506766505919174,"comments":1.646108629778918,"rePosts":1.4563289421758292,"views":2045.2040111736958},{"time":"4_14","interactions":18.08180985657818,"likes":15.43024022895393,"comments":1.363792743379251,"rePosts":1.2877768842449984,"views":1786.2037694316386},{"time":"4_15","interactions":18.30085166969685,"likes":15.683959669122354,"comments":1.3788983664963304,"rePosts":1.2379936340781645,"views":1782.965256984902},{"time":"4_16","interactions":17.75872396922311,"likes":15.037092127880376,"comments":1.333854315248525,"rePosts":1.3877775260942065,"views":1674.0559369683226},{"time":"4_17","interactions":18.088616951529346,"likes":15.281328734576102,"comments":1.4337926237505558,"rePosts":1.3734955932026858,"views":1670.3546810549672},{"time":"4_18","interactions":15.82772402138742,"likes":13.580138717657558,"comments":1.1652645789827674,"rePosts":1.0823207247470936,"views":1543.3850849451508},{"time":"4_19","interactions":15.426512031659922,"likes":13.405452640274186,"comments":1.00997195163102,"rePosts":1.011087439754716,"views":1541.1574821606805},{"time":"4_20","interactions":56.134709188471874,"likes":47.94446076403489,"comments":3.5005716467191523,"rePosts":4.689676777717825,"views":13116.731884832094},{"time":"4_21","interactions":132.6942930804481,"likes":115.84471925497812,"comments":5.07289837016064,"rePosts":11.776675455309338,"views":22895.580483475835},{"time":"4_22","interactions":128.08071312288098,"likes":112.13014089978053,"comments":4.679571118931359,"rePosts":11.271001104169075,"views":22594.541908884315},{"time":"4_23","interactions":127.92682218669961,"likes":111.89364323825818,"comments":4.701474964507952,"rePosts":11.331703983933487,"views":22553.342936952467},{"time":"5_0","interactions":92.90851858174244,"likes":81.44550354295195,"comments":3.1172673822407186,"rePosts":8.345747656549769,"views":12472.375253647951},{"time":"5_1","interactions":78.91975025035366,"likes":70.10637081102855,"comments":3.2396478393683292,"rePosts":5.573731599956769,"views":9033.434841790666},{"time":"5_2","interactions":74.74644621376174,"likes":66.69250373774996,"comments":2.8937146498314505,"rePosts":5.160227826180329,"views":8754.55656947262},{"time":"5_3","interactions":75.35337485052375,"likes":67.33480953239136,"comments":2.827421033184664,"rePosts":5.1911442849477325,"views":8762.609124399438},{"time":"5_4","interactions":110.49443757363382,"likes":96.53252045662698,"comments":5.0952572768248166,"rePosts":8.86665984018203,"views":10639.4011385338},{"time":"5_5","interactions":110.67518857504741,"likes":96.93086988734008,"comments":4.891510752321272,"rePosts":8.85280793538607,"views":11100.796724784757},{"time":"5_6","interactions":111.44595841046143,"likes":97.55416582424364,"comments":4.861002053542686,"rePosts":9.030790532675093,"views":11248.552842868232},{"time":"5_7","interactions":112.98366588534851,"likes":99.15654695905808,"comments":4.762126624797399,"rePosts":9.06499230149303,"views":11389.586013341215},{"time":"5_8","interactions":198.46033116024364,"likes":171.12135050288256,"comments":10.15691668444809,"rePosts":17.182063972912992,"views":19178.79414579949},{"time":"5_9","interactions":202.56960340838427,"likes":174.6826089564228,"comments":9.941286840301764,"rePosts":17.945707611659724,"views":20052.369500056797},{"time":"5_10","interactions":202.34486933784174,"likes":174.8673674432285,"comments":9.927263230546986,"rePosts":17.550238664066253,"views":20117.533874999794},{"time":"5_11","interactions":202.52654309731565,"likes":175.00240804798605,"comments":9.879562337959634,"rePosts":17.644572711369946,"views":20097.189372355915},{"time":"5_12","interactions":184.4846366857782,"likes":159.08418957369022,"comments":9.135774585004146,"rePosts":16.264672527083842,"views":18332.764404840884},{"time":"5_13","interactions":169.71982831297103,"likes":146.06275721894207,"comments":8.595119722947587,"rePosts":15.061951371081392,"views":16721.194633894134},{"time":"5_14","interactions":168.75943965361049,"likes":145.66877157591946,"comments":8.42495868361682,"rePosts":14.66570939407421,"views":16693.069307651916},{"time":"5_15","interactions":167.5530778016149,"likes":144.67493158870047,"comments":8.198321656241632,"rePosts":14.679824556672802,"views":16635.243833090262},{"time":"5_16","interactions":145.8548587290473,"likes":125.61755409663195,"comments":7.386635050098509,"rePosts":12.850669582316835,"views":14505.59458987774},{"time":"5_17","interactions":134.9268119474194,"likes":116.5009138356486,"comments":6.660580678783068,"rePosts":11.76531743298773,"views":13342.793696446824},{"time":"5_18","interactions":134.0739776409663,"likes":115.75176034520375,"comments":6.629205861877229,"rePosts":11.693011433885326,"views":13334.800533773276},{"time":"5_19","interactions":133.7964731107779,"likes":115.52121246040278,"comments":6.634321541836432,"rePosts":11.640939108538678,"views":13275.347053022377},{"time":"5_20","interactions":117.60567106540559,"likes":101.15383005290023,"comments":5.948421076271813,"rePosts":10.503419936233547,"views":11661.388779420637},{"time":"5_21","interactions":105.0391214606827,"likes":90.53493891428886,"comments":5.317099639999437,"rePosts":9.187082906394396,"views":10305.686594750556},{"time":"5_22","interactions":103.884968118162,"likes":89.48642900618158,"comments":5.255102076405423,"rePosts":9.143437035575001,"views":10254.348209586968},{"time":"5_23","interactions":101.04372107649475,"likes":87.15822171680476,"comments":5.0500545989064065,"rePosts":8.835444760783568,"views":9963.364357655953},{"time":"6_0","interactions":46.91174834550102,"likes":40.76959240914566,"comments":1.9739033298547128,"rePosts":4.168252606500643,"views":4862.387779592055},{"time":"6_1","interactions":30.386801309249346,"likes":26.437137534819094,"comments":1.4369441844906405,"rePosts":2.512719589939611,"views":2867.8429508728373},{"time":"6_2","interactions":28.8651927889845,"likes":25.390629569088173,"comments":1.2386724408667225,"rePosts":2.235890779029607,"views":2814.518942162783},{"time":"6_3","interactions":32.10864244305712,"likes":28.042966748358964,"comments":1.67856156334645,"rePosts":2.3871141313517117,"views":3564.3653892211187},{"time":"6_4","interactions":34.74330493831338,"likes":29.795570595610112,"comments":2.376985813253117,"rePosts":2.570748529450147,"views":4141.449097603606},{"time":"6_5","interactions":33.94329106555173,"likes":29.407041997923464,"comments":1.9532749140504815,"rePosts":2.582974153577787,"views":4249.438454933484},{"time":"6_6","interactions":34.308038725012466,"likes":29.812036480392035,"comments":1.9410802989748113,"rePosts":2.554921945645624,"views":4289.704377664064},{"time":"6_7","interactions":49.64640297958193,"likes":42.89762972591226,"comments":3.350819173367054,"rePosts":3.3979540803026143,"views":7763.506682803744},{"time":"6_8","interactions":76.7906727567864,"likes":65.37268614400476,"comments":5.478935116087281,"rePosts":5.939051496694358,"views":11106.724604994708},{"time":"6_9","interactions":77.14118609328993,"likes":66.05148735512029,"comments":5.251566770753795,"rePosts":5.838131967415853,"views":11317.171597479688},{"time":"6_10","interactions":76.74742124641261,"likes":65.92946115785749,"comments":5.026884323972476,"rePosts":5.791075764582651,"views":11336.447155756747},{"time":"6_11","interactions":76.37926403272087,"likes":65.53078413551665,"comments":5.072318972519788,"rePosts":5.7761609246844365,"views":11231.501584702384},{"time":"6_12","interactions":71.26663550780229,"likes":60.90048239028996,"comments":5.092648127588282,"rePosts":5.273504989924045,"views":10478.19707564949},{"time":"6_13","interactions":68.54644882179468,"likes":58.43924405796722,"comments":4.7472982054091,"rePosts":5.359906558418362,"views":10186.908957976784},{"time":"6_14","interactions":67.30396284593465,"likes":57.8529299474813,"comments":4.518654543323445,"rePosts":4.932378355129903,"views":10177.984039568548},{"time":"6_15","interactions":63.36976203994265,"likes":54.345648476436985,"comments":4.211125319336258,"rePosts":4.812988244169409,"views":9173.29860349606},{"time":"6_16","interactions":57.03590477724753,"likes":48.40406309276079,"comments":4.062816615582527,"rePosts":4.569025068904211,"views":8250.669487088924},{"time":"6_17","interactions":54.871816459593475,"likes":46.78972840135193,"comments":3.942490087155152,"rePosts":4.139597971086395,"views":8039.430091339948},{"time":"6_18","interactions":54.167121243083564,"likes":46.4286829593777,"comments":3.652870135739478,"rePosts":4.0855681479663835,"views":8035.653378651038},{"time":"6_19","interactions":51.57507122197604,"likes":44.27111324832406,"comments":3.396869588988301,"rePosts":3.9070883846636733,"views":7473.267581369835},{"time":"6_20","interactions":46.67935157632834,"likes":39.82519184910204,"comments":3.1983264065801627,"rePosts":3.655833320646129,"views":6782.1284834301205},{"time":"6_21","interactions":44.638633767496444,"likes":38.144024931267346,"comments":2.9589757736345166,"rePosts":3.5356330625945844,"views":6532.878356594953},{"time":"6_22","interactions":43.55903600611329,"likes":37.2444677867664,"comments":3.090744733674901,"rePosts":3.223823485671988,"views":6496.6550772033725},{"time":"6_23","interactions":34.57289769111509,"likes":29.81567010484683,"comments":2.0717370171774365,"rePosts":2.6854905690908204,"views":4583.065370375486},{"time":"7_0","interactions":19.05095512290784,"likes":16.020432751317188,"comments":1.4163849431452864,"rePosts":1.6141374284453667,"views":2397.2320469071074},{"time":"7_1","interactions":14.984208985760988,"likes":12.91558150367474,"comments":1.056372521748448,"rePosts":1.0122549603377995,"views":2012.54543967868},{"time":"7_2","interactions":14.077770368268624,"likes":12.384802414194324,"comments":0.8375613795205566,"rePosts":0.8554065745537436,"views":1989.7225491912425},{"time":"7_3","interactions":11.685043720854374,"likes":10.239793534852554,"comments":0.5742156534798711,"rePosts":0.8710345325219473,"views":1326.6190796285905},{"time":"7_4","interactions":11.157622772667539,"likes":9.093717231169403,"comments":0.8772658219700956,"rePosts":1.1866397195280405,"views":1168.6905648691675},{"time":"7_5","interactions":10.643221957448178,"likes":9.372505806863545,"comments":0.5939112127327356,"rePosts":0.6768049378518975,"views":1193.2153347342387},{"time":"7_6","interactions":10.2157459859248,"likes":8.955319820948995,"comments":0.5830537565784268,"rePosts":0.6773724083973789,"views":1214.7935305473718},{"time":"7_7","interactions":66.074716208737,"likes":55.55679852420838,"comments":5.242109563113602,"rePosts":5.275808121415024,"views":8362.329235426632},{"time":"7_8","interactions":71.81041070397539,"likes":59.81043961094507,"comments":5.923530086678147,"rePosts":6.07644100635219,"views":8999.923673100919},{"time":"7_9","interactions":71.62826169498899,"likes":60.19970181733005,"comments":5.681913377796432,"rePosts":5.746646499862504,"views":9055.131021341413},{"time":"7_10","interactions":70.84186267310707,"likes":59.54984374081698,"comments":5.582944273062399,"rePosts":5.7090746592276975,"views":9065.384844995564},{"time":"7_11","interactions":70.10352493001703,"likes":58.88182843457559,"comments":5.518797865650193,"rePosts":5.702898629791245,"views":8907.519805495012},{"time":"7_12","interactions":70.39904832920011,"likes":58.3333225595633,"comments":5.84503019113997,"rePosts":6.220695578496839,"views":8773.93789755721},{"time":"7_13","interactions":68.93229968962314,"likes":57.720522042285985,"comments":5.59841912329062,"rePosts":5.613358524046537,"views":8727.29993747409},{"time":"7_14","interactions":68.41721930212533,"likes":57.30130952271551,"comments":5.519802193784237,"rePosts":5.596107585625579,"views":8718.902731713144},{"time":"7_15","interactions":123.5406896331235,"likes":105.52028749796152,"comments":8.252495675779947,"rePosts":9.767906459382052,"views":10264.884732443217},{"time":"7_16","interactions":122.63307906107104,"likes":104.7088844563269,"comments":8.237923920909546,"rePosts":9.686270683834598,"views":10092.660809451983},{"time":"7_17","interactions":122.47698714801469,"likes":104.41733970519022,"comments":8.18572459543558,"rePosts":9.8739228473889,"views":10060.838546677745},{"time":"7_18","interactions":215.40254170330317,"likes":184.384539895777,"comments":12.963209310896413,"rePosts":18.054792496629737,"views":14874.8667784432},{"time":"7_19","interactions":196.8562830540331,"likes":168.6917675160254,"comments":11.65400956776416,"rePosts":16.510505970243553,"views":13400.199394407118},{"time":"7_20","interactions":197.08596451703767,"likes":168.26056530683954,"comments":11.904934351807809,"rePosts":16.920464858390318,"views":13276.558545021746},{"time":"7_21","interactions":195.24817471431234,"likes":167.1455022564266,"comments":11.773297739405937,"rePosts":16.3293747184798,"views":13198.026524393472},{"time":"7_22","interactions":145.38679669498248,"likes":124.56159137169462,"comments":8.832226607576949,"rePosts":11.992978715710896,"views":10627.955255083467},{"time":"7_23","interactions":84.20424106425638,"likes":72.34169348185179,"comments":4.872590920172167,"rePosts":6.989956662232422,"views":5722.709467970077}]}

  export {jsonData, jsonTwitterData, twitterDashData, instagramDashData}