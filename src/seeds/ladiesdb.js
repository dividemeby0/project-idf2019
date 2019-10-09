// const mongoose = require("mongoose");
// const Skater = require("../models/skater");

const ladies = [
  {
    name: "Loena HENDRICKX",
    _id: 1,
    discipline: "ladies",
    country: "Belgium",
    record: "Number one skater in Belgium",
    description:
      "I like her skating a lot but her international career hasn't really taken off yet, and unfortunately she's been injured for a while last year. I really hope this will be her season.",
    sp: "Céline Dion - It's All Coming Back to Me Now",
    fs: "Beyoncé - Fever",
    image:
      "https://www.loenahendrickx.com/afbeeldingen/1/11707/media-photo/loenahendrixwkkunstschaatsen201901.jpg"
  },
  {
    name: "Laurine LECAVELIER",
    _id: 2,
    discipline: "ladies",
    country: "France",
    record: "2017 French national champion",
    description:
      "Laurine had her Grand Prix debut last year and she represented France at Worlds last season. She is perhaps a bit more consistent than Maé-Bérénice Méité, and she is sweet and talented, even though her skating is not my favorite.",
    sp: "Max Richter - November",
    fs: "Chopin medley",
    image:
      "http://www1.pictures.zimbio.com/gi/Laurine+Lecavelier+ISU+Grand+Prix+Figure+Skating+IYqDtGEzLlnl.jpg"
  },
  {
    name: "Maé-Bérénice MÉITÉ",
    _id: 3,
    discipline: "ladies",
    country: "France",
    record: "Best skater in France since ~2014",
    description:
      "She's a sweetheart and I love her. Moreover, it's quite exceptional to see such an athletic black woman in figure skating. Unfortunately, she lacks consistensy  and it's always heartbreaking to see her fall during a program or miss an element in spite of her talent.",
    sp: "Latin Medley. It's super fun, fyi.",
    fs: "Adele - Hometown Glory",
    image:
      "https://sportdecouverteblog.files.wordpress.com/2017/12/mac3a9-bc3a9rc3a9nice-mec3aftc3a9.jpg?w=840"
  },
  {
    name: "Wakaba HIGUCHI",
    _id: 4,
    discipline: "ladies",
    country: "Japan",
    record:
      "Silver medal at the 2018 World Championships, silver medal at the 2017 Japanese nationals",
    description:
      "Literally my favorite skater in the world. I would die for her. Her skating is very energetic and powerful, and she has great musicality. She didn't get to go to the 2018 Olympics, which is an absolute shame, and her latest season has been a difficult one, as she spent most of it off the ice because of an injury. She had a rough start this season as well. Basically I'm terrified but I love her.",
    sp: "Sia - Bird Set Free",
    fs: "Vicente Amigo - Poeta",
    image:
      "http://www1.pictures.zimbio.com/gi/Wakaba+Higuchi+86th+Japan+Figure+Skating+Championships+fr5WXgPNwDKl.jpg"
  },
  {
    name: "Kaori SAKAMOTO",
    _id: 5,
    discipline: "ladies",
    country: "Japan",
    record: "Current Japanese champion, Four Continents gold medalist in 2018",
    description:
      "She's adorable! A great skater: well-rounded, incredibly graceful and technically solid. Her triple loop is gorgeous, in my opinion one of the most beautiful jumps in the biz. I really like her Matrix program this year, the costume is on FLEEK.",
    sp: "Alice Merton - No Roots",
    fs: "The Matrix",
    image:
      "https://www.goldenskate.com/wp-content/uploads/2018/12/Kaori-Sakamoto.jpg"
  },
  {
    name: "Alena KOSTORNAIA",
    _id: 6,
    discipline: "ladies",
    country: "Russia",
    record: "Gold medalist at the latest Junior Grand Prix Final",
    description:
      "15 year old Alena is part of a wave of junior Russian skaters making their senior debut this season. But in my opinion she is the most talented of the bunch: she's balanced, has strong technique, excellent skating skills (the best among the juniors) and she might be the one most likely to sustain a career in the long run. I'm thrilled to see her skating live. I'm excited to see her Twilight/Supermassive Blackhole program.",
    sp: "Max Richter - The Departure (from The Leftovers), November",
    fs: "Twilight Medley (New Moon, Eyes on Fire, Supermassive Black Hole)",
    image:
      "https://66.media.tumblr.com/d9eb288b022f98d780f1811a7d924c13/tumblr_pee7krw6Ej1vk0py7o1_500.jpg"
  },
  {
    name: "Maria SOTSKOVA",
    _id: 7,
    discipline: "ladies",
    country: "Russia",
    record: "2017 Grand Prix Final silver medalist",
    description:
      "It's hard being a Russian lady. Maria is only 19, but it's difficult for her to remain relevant in this field. She's a talented skater, but she doesn't have the technical qualities to compete with Olympic champions, World medalists and 15 year-olds doing quadruple jumps, which is a shame. If I were her, I would try skating for another federation, I don't think there's any room for her in Russia at the moment.",
    sp: "To Build A Home",
    fs: "50 Shades of Grey",
    image:
      "https://www.goldenskate.com/wp-content/uploads/2018/05/Maria-Sotskova.jpg"
  },
  {
    name: "Alina ZAGITOVA",
    _id: 8,
    discipline: "ladies",
    country: "Russia",
    record:
      "Olympic gold medalist in 2018, World Champion in 2019, gold medalist at both of her Grand Prix in 2018 (she didn't win the GP Final but I think we can agree that this is still a pretty impressive record)",
    description:
      "I like her a lot, even though I'm scared about her health, be it physical of mental. Her programs can be unbalanced and not well choreographed (hence the small scandal that ensued her Olympic victory: she was accused of having a weaker program that gamified the points system, while skaters with better artistic merit were not rewarded as generously). However, the medals can only lie to an extent, and to me she's an undeniably talented kid who's just doing her best.",
    sp: "Yasmin Levy - Me Voy",
    fs:
      "Cringeworthy middle-eastern inspired program (Lawrence of Arabia, Ramses)",
    image:
      "https://media1.popsugar-assets.com/files/thumbor/CxdN1eGQBHSlHaet9FZhjKmOvmM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/02/22/236/n/1922729/tmp_fyDUtv_03d402aa3cf5afe3_GettyImages-923188442.jpg"
  },
  {
    name: "Mariah BELL",
    _id: 9,
    discipline: "ladies",
    country: "USA",
    record: "Bronze medal at 2019 US Nationals",
    description:
      "Honestly, I love Mariah as a skater. Her cheery all-American girl persona really gets to shine on the ice, she has good skating skills and there's a softness to her skating that makes it very pleasant to watch. But she might not be as sweet as she lets on. At the latest World Championships she hurt her Korean rinkmate and competitor Eun-Soo Lim during practice, and there is reason to believe the attack was intentional and that she has been bullying Lim for a while.",
    sp: "Britney Spears - Work Bitch ",
    fs: "Hallelujah",
    image:
      "https://cdn.mainichi.jp/vol1/2019/02/07/20190207p2g00m0sp034000p/9.jpg?1"
  },
  {
    name: "Ting CUI",
    _id: 10,
    discipline: "ladies",
    country: "USA",
    record: "2019 Junior Worlds bronze medalist",
    description:
      "Ting is still a baby! Last season she competed mostly in junior, with only a few senior competitions. This is her first season as a full-on senior lady. I'm not too familiar with her skating, but she seems extremely promising. I just hope she gratuates high school and doesn't break down under the weight of expectations.",
    sp: "Rhapsody on a Theme of Paganini, by Rachmaninov",
    fs: "Nocturnal Animals",
    image:
      "https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/usafs.sidearmsports.com/images/2018/11/29/GettyImages_1042889136.jpg"
  },
  {
    name: "Léa SERNA",
    _id: 11,
    discipline: "ladies",
    country: "France",
    record: "2018 Junior national champion",
    description:
      "Not much to say about her. She's a host pick, so she's likely to end up at the bottom of the field here. It's fine, she's mostly here to get international experience anyway.",
    sp: "?",
    fs: "?",
    image: "https://i.ytimg.com/vi/Q2FJ9_rQsS0/maxresdefault.jpg"
  },
  {
    name: "Yuna SHIRAIWA",
    _id: 12,
    discipline: "ladies",
    country: "Japan",
    record: "Gold medalist at several Junior Grand Prix",
    description:
      "I liked her programs last season, but she's not a skater I'm very familiar with. The Japanese ladies field is PACKED with amazing skaters, so unfortunately Yuna kinda tends to fall to the sidelines. She's a ray of sunshine though, so I look forward to seeing her skate in real life.",
    sp: "Concertino Bianco for Piano",
    fs: "Amen soundtrack",
    image:
      "http://www1.pictures.zimbio.com/gi/86th+Japan+Figure+Skating+Championships+Day+rfBaoPefKnwl.jpg"
  }
];

export default ladies;

// Skater.create(ladies)
// .then (dbSkaters => {
//   console.log("skaters added:", dbSkaters);
// })
// .catch (err => {
//   console.log(err);
// });
