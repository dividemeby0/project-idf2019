// const mongoose = require("mongoose");
// const Skater = require("../models/skater");
// require("dotenv").config();

const men = [
  {
    name: "Nicolas NADEAU",
    _id: 1,
    discipline: "men",
    country: "Canada",
    record: "Canadian nationals gold medalist, Junior Worlds silver medalist",
    description:
      "Don't have much to say about Nadeau. Last season was inconsistent, I hope he does better this year.",
    sp: "Wake Child - Don't Fall in Love",
    fs: "?",
    image:
      "https://www.nordinfo.com/wp-content/uploads/2017/02/2015-08-10-11-46-01-Nicolas-Nadeau-425x640.jpg"
  },
  {
    name: "Kévin AYMOZ",
    _id: 2,
    discipline: "men",
    country: "France",
    record: "Two-time French national Champion",
    description:
      "Kévin is great, and I love him. His skating is unique: very musical, fast, powerful and creative. He really is an artist, and I've never seen any skater do what he does. He's a gem. He has long been hated by the French federation for no reason, last season he was 4th at European Championships (no podium è__é) and 11th at Worlds (no top 10 è__é) but he just got a really strong start to his season and I am convinced that this is his year; his time has come, I CAN JUST FEEL IT.",
    sp: "Prince - The Question of U",
    fs: "Patrick Watson - Lighthouse",
    image:
      "https://pbs.twimg.com/profile_images/1128029245702328322/XC9KeuES_400x400.jpg"
  },
  {
    name: "Romain PONSART",
    _id: 3,
    discipline: "men",
    country: "France",
    record: "French nationals silver and bronze medalist",
    description:
      "He used to skate at my club! He hasn't won many medals but he's okay, I guess. He's very French (which means he wears a lot of deep v-neck shirts). Also, he's Mariah Bell's boyfriend.",
    sp: "Vicente Amigo - Poeta En El Mar",
    fs: "The Greatest Showman",
    image:
      "http://www2.pictures.zimbio.com/gi/Romain+Ponsart+ISU+World+Team+Trophy+Day+2+a3E506d_Ia1l.jpg"
  },
  {
    name: "Adrien TESSON",
    _id: 4,
    discipline: "men",
    country: "France",
    record: "French nationals bronze medalist",
    description:
      "I saw him in The Netherlands but I don't remember him AT ALL, except that he fell several times. Therefore I don't have much of an opinion.",
    sp: "Freddie Mercury - Highlander",
    fs: "Muse - Exogenesis Symphony, Ruled by Secrecy",
    image:
      "https://pbs.twimg.com/profile_images/1044840855792701440/wRFrJ9Fc_400x400.jpg"
  },
  {
    name: "Morisi KVITELASHVILI",
    _id: 5,
    discipline: "men",
    country: "Georgia",
    record: "Georgian champion",
    description:
      "Morisi doesn't have a lot of medals, but I personally think he's really good. He had a Mozart l'Opéra Rock program last year and I liked it, which says a lot. Unfortunately, he's at that awkward sport where he is an excellent skater, but not good enough to challenge the very best.",
    sp: "Peter Cincotti - Always Watching You",
    fs: "Adriano Celentano - Confessa, Jess Glynn - All I am",
    image:
      "https://www.goldenskate.com/wp-content/uploads/2019/01/Morisi-Kvitelashvili.jpg"
  },
  {
    name: "Daniel SAMOHIN",
    _id: 6,
    discipline: "men",
    country: "Israel",
    record: "Junior World champion, Two-time Israeli champion",
    description:
      "Not much to say about him to be honest. He's a good skater, but he's probably not going to win here.",
    sp: "Fastidious Horses (from 'White Night' soundtrack)",
    fs: "Hans Zimmer - 'The Peacemaker'",
    image:
      "https://ice.edeaskates.com/wp-content/uploads/sites/2/2015/10/daniel-samohin-02.jpg"
  },
  {
    name: "Shoma UNO",
    _id: 7,
    discipline: "men",
    country: "Japan",
    record:
      "Olympic silver medalist, Two-time Worlds silver medalist, Four Continents Champion, Two-time Grand Prix Final silver medalist, World Junior Champion, Junior Grand Prix Champion",
    description:
      "Listen. Shoma is amazing. He's tiny and powerful, has great musicality and interpretation. He really is one of the greats, and he's one of the skaters I'm most excited to see perform live. He has a bit of a 'silver curse', often in second place but rarely winning. It would be nice to see him win gold here.",
    sp: "Great Spirit (which is apparently acoustic techno??)",
    fs: "Robyn - Dancing on My Own",
    image:
      "https://cdn.japantimes.2xx.jp/wp-content/uploads/2018/12/sp-jack-a-20181225-870x659.jpg"
  },
  {
    name: "Alexander SAMARIN",
    _id: 8,
    discipline: "men",
    country: "Russia",
    record: "European Championiships silver medalist",
    description:
      "I love Samarin! I'm glad to see him return this season with new programs (he had a Greatest Showman free program last year and... let's just say I'm glad to it go). He's a really solid skater; he medalled at Russian nationals for the past three seasons, which is kind of a big deal.",
    sp: "Eddy Louis - Blues for Klook",
    fs: "Apashe - Good News",
    image:
      "https://www.goldenskate.com/wp-content/uploads/2019/02/Alexander-Samarin.jpg"
  },
  {
    name: "Anton SHULEPOV",
    _id: 9,
    discipline: "men",
    country: "Russia",
    record: "He ranked 10th last season at Russian nationals",
    description: "I literally have no opinion about this guy. You're welcome!",
    sp: "?",
    fs: "?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/2019_Russian_Figure_Skating_Championships_Anton_Shulepov_2018-12-20_16-22-34.jpg"
  },
  {
    name: "Sergei VORONOV",
    _id: 10,
    discipline: "men",
    country: "Russia",
    record:
      "European Championships silver and bronze medalist, Grand Prix Final bronze medalist",
    description:
      "31 year-old Sergei is what we call an 'uncle' in the business. But he's still super relevant (he medalled at both of his Grand Prix last season). It's really fun to watch older skaters, it's nice to have full-grown adults in the sport sometimes.",
    sp: "Queen - Somebody To Love",
    fs: "Muse - I Belong To You",
    image:
      "https://www.goldenskate.com/wp-content/uploads/2017/11/Sergei-Voronov.jpg"
  },
  {
    name: "Nathan CHEN",
    _id: 11,
    discipline: "men",
    country: "USA",
    record:
      "Two-time World champion, Two-time Grand Prix Final gold medalist, Four Continents champion, Olympic bronze medalist",
    description:
      "Nathan Chen is obviously a great skater. First of all, he can land all of the existing jumps (all of them!!) for which he has been dubbed the 'Quad King'. He's not the best skater in terms of musicality and interpretation, but I personally think he's made some good progress in skating skills during the past season. He's attending Yale University AND basically self-coaching AND he's one of the best skaters in the world, so, overall, an impressive kid.",
    sp: "Charles Aznavour - La Bohème",
    fs: "Elton John - Rocketman, Bennie and the Jets",
    image:
      "https://www.goldenskate.com/wp-content/uploads/2019/03/Nathan-Chen.jpg"
  },
  {
    name: "Tomoki HIWATASHI",
    _id: 12,
    discipline: "men",
    country: "USA",
    record: "2019 World Junior champion, 2016 US junior national champion",
    description:
      "Tomoki is fresh out of the junior ranks (basically: a baby). His skating is still a bit juniorish, which is normal, but he has loads of potential.",
    sp: "One Republic - Love Runs Out",
    fs: "Igor Stravinsky - Petrushka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Tomoki_Hiwatashi_3.jpg"
  }
];

export default men;

// mongoose
//   .connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true })
//   .then(() => {
//     Skater.insertMany(men)
//       .then(res => {
//         console.log(res);
//         console.log(`${men.length} men added`);
//       })
//       .catch(err => console.log(err));
//   });
