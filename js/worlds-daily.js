window.LOGIKON_WORLDS = [
  {"id":1,"name":"Warm-up","blurb":"Everyday clues from kitchens, courts, gardens and queues.","icon":"✦"},
  {"id":2,"name":"Deduction","blurb":"Cafés, orchestras, harbours — assign each clue to its owner.","icon":"◈"},
  {"id":3,"name":"Patterns","blurb":"Trains, tides, quilts and codes that keep a hidden rule.","icon":"△"},
  {"id":4,"name":"Truth and lies","blurb":"Islands, labels, judges and rumours. Who can be believed?","icon":"◇"},
  {"id":5,"name":"Relations","blurb":"Races, floors, families, ferries and who sits where.","icon":"⬡"},
  {"id":6,"name":"Numbers","blurb":"Bakeries, fares, ages, remainders and quiet arithmetic.","icon":"▣"},
  {"id":7,"name":"Space","blurb":"Scales, clocks, cubes, maps, fences and folds.","icon":"⬢"},
  {"id":8,"name":"Mastery","blurb":"Hats, bulbs, maps and arguments that bite back.","icon":"★"}
];
window.LOGIKON_DAILY = [
  {"id":"d1","title":"Harbor remainders","prompt":"Smallest positive integer that leaves remainder 2 when divided by 3, remainder 3 when divided by 4, and remainder 2 when divided by 5?","type":"choice","options":["23","38","47","53"],"answer":"47","explain":"n ≡ 2 (mod 15). Among 17, 32, 47… only 47 ≡ 3 (mod 4)."},
  {"id":"d2","title":"Attic bulb","prompt":"Three switches downstairs, one bulb in the attic. One lights it, one heats it, one does nothing. One trip upstairs. How do you label all three?","type":"choice","options":["Flip one and go up immediately","Leave A on a minute then off; leave B on; glowing=B, warm=A, cold=dead","Turn all three on","Impossible with one trip"],"answer":"Leave A on a minute then off; leave B on; glowing=B, warm=A, cold=dead","explain":"Heat remembers A; light names B; cold is dead."},
  {"id":"d3","title":"Market consecutive","prompt":"Three consecutive stall numbers add to 48. What is the middle number?","type":"choice","options":["15","16","17","18"],"answer":"16","explain":"3n=48 → n=16."},
  {"id":"d4","title":"Platform wait","prompt":"A tram leaves every 10 minutes. You arrive at random. Probability you wait at most 3 minutes?","type":"choice","options":["10%","30%","50%","70%"],"answer":"30%","explain":"3/10=30%."},
  {"id":"d5","title":"Swapped fare","prompt":"A two-digit fare is 27 greater than the fare with digits swapped. Digits add to 9. What is the fare?","type":"choice","options":["41","52","63","74"],"answer":"63","explain":"9(a−b)=27 → a−b=3 and a+b=9 → 63."},
  {"id":"d6","title":"Youngest hiker","prompt":"Jack is older than Olek. Olek is younger than Pola. Pola is younger than Jack. Who is the youngest?","type":"choice","options":["Jack","Olek","Pola","cannot tell"],"answer":"Olek","explain":"Jack > Pola > Olek."},
  {"id":"d7","title":"Square plot","prompt":"A positive number. Its square is 12 greater than four times the number. Which number?","type":"choice","options":["2","4","6","8"],"answer":"6","explain":"x²−4x−12=0 → x=6."}
];
