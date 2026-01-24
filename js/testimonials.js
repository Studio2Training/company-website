// Static testimonial data (fallback when Google Sheets unavailable)
let testimonials = [
  {
    name: "Durgalakshmi",
    rating: 4,
    short: "I began my fitness journey with Deepika on October 21, 2024.\nIn just one month, I saw incredible improvements...",
    full: "I began my fitness journey with Deepika on October 21, 2024. In just one month of working with her, I have seen incredible improvements. Deepika's expertise in Crossfit, stretching, movements, strengthening training is been invaluable, and she customizes each session to suit my individual goals. Her guidance on form and technique is so helpful, and I appreciate how supportive she is throughout my workouts. I am already feeling stronger and more flexible. I highly recommend her to anyone looking to improve their fitness, it's been a fantastic experience!"
  },
  {
    name: "Umadevi",
    rating: 5,
    short: "Deepika is an excellent coach. I had the opportunity to see\nher help my mother in her weight loss journey...",
    full: "Deepika is excellent coach. I had the opportunity to see her help my mother in her weight loss journey. She tailored the sessions to suit her needs, age and appreciate her personalised approach. She follows up daily, encouraging her to be consistent in her work outs, which led to significant weight loss. I highly recommend Deepika to anyone starting the fitness journey. Wishing her continued success!"
  },
  {
    name: "Dharini",
    rating: 4,
    short: "I had the opportunity to take a few strength and flexibility\nclasses with Deepika. I was impressed at how quickly she assessed my capabilities and areas for improvement and focused...",
    full: "I had the opportunity to take a few strength and flexibility classes with Deepika. I was impressed at how quickly she assessed my capabilities and areas for improvement and focused on the specific needs in the short time I was in town. I am continuing the exercises she suggested and am seeing improvements in those areas. She is a great personal trainer for those who would like 1-1 attention to better health and strength."
  },
  {
    name: "Latha",
    rating: 5,
    short: "When I suffered because of body pain be it knee, elbow or back I knew that going for an ordinary physiotherapy is not the solution... a trainer who knows which muscle works...",
    full: "When I suffered because of body pain be it knee, elbow or back I knew that going for an ordinary physiotherapy is not the solution... a trainer who knows which muscle works and how to stretch effectively, there lies the solution and there comes Deepika the thorough professional with her enormous knowledge of the physique... she would point out even a small minor error in a stretch or the posture. I had done stretches which were complicated and she taught with a lot of ease.\n\nHer contagious enthusiasm and optimistic motivating attitude does rub on her clients too.\n\nIt's just one month and a few days and I am seeing visible changes and my strength improving and pain subsiding... I can't wait to see how I look and feel after 6 months which I'd love to share.\n\nThanks Deepika you are a rare find who works magic on her clients."
  },
  {
    name: "Roshini",
    rating: 5,
    short: "Starting my fitness journey was very nerve racking, however having Deepika as my trainer helped eased the process and build my confidence in working out and pushing...",
    full: "Starting my fitness journey was very nerve racking, however having Deepika as my trainer helped eased the process and build my confidence in working out and pushing my body further each time. She goes beyond in every session and offers invaluable advice. In just 6 months she has assisted deeply with reaching my goals and am forever grateful. She teaches with great compassion and motivation and everything I have learnt from her I will carry close. Fitness is now a part of my lifestyle that I enjoy and prioritise, and I thank Deepika greatly for helping start this journey for me."
  },
  {
    name: "Divya",
    rating: 5,
    short: "Hello! I would say Deepika mam is such a best find for me at the right time. I was looking for a weightloss routine for the weight I gained post pregnancy...",
    full: "Hello! I would say Deepika mam is such a best find for me at the right time. I was looking for a weightloss routine for the weight I gained post pregnancy and mam was the right person to help me out. Mam understands the physical as well as the inner/emotional side and the right requirement for my body. My weight loss journey with mam for the past one month does not only focus on short term weight loss but also on the sustainability for long term, which is something everyone wants. Im happy to have met mam for my weight management needs and im happy about my results so far.\n\nThank you mam 😊"
  },
  {
    name: "Preethi",
    rating: 5,
    short: "After just over 1 week of exercise I feel more energetic throughout the day. My muscles get proper stretch during session and my range of motion has increased...",
    full: "After just over 1 week of exercise I feel more energetic throughout the day. My muscles get proper stretch during session and my range of motion has increased. Also, Deepika always keeps our session lively so even though I feel tire during exercise, she immediately encourages me that boost my confidence to do remaining workout energetically.\n\nI haven't seen any weight loss yet but I would say my stamina has increased to do workout as well as household chores."
  },
  {
    name: "Priya",
    rating: 5,
    short: "A good mentor, very professional. She helps a lot not just in the physical transformation but also in the overall well being.",
    full: "A good mentor, very professional. She helps a lot not just in the physical transformation but also in the overall well being."
  },
  {
    name: "Ramya",
    rating: 5,
    short: "It has been a great experience being trained by Deepika. She is knowledgeable, considerate and supportive. The workout is personalised and I look forward eagerly to the sessions...",
    full: "It has been a great experience being trained by Deepika. She is knowledgeable, considerate and supportive. The workout is personalised and I look forward eagerly to the sessions.\n\nI had been hesitant about personal training in the past (given my health conditions), but training with Deepika has been an extremely positive experience.\n\nThe workouts are indoors with no special equipment which is interesting and convenient as well."
  },
  {
    name: "Harini Viswanathan",
    rating: 5,
    short: "At beginning when I was a novice, I was passionate and interested to learn many fitness steps from the trainer. My trainer was kind and taught me each and every steps with her full dedication...",
    full: "At beginning when I was a novice, I was passionate and interested to learn many fitness steps from the trainer. My trainer was kind and taught me each and every steps with her full dedication in which this positive vibe of her encourages me to learn more and more by which I am confident in being in tone. She did her role not only as a trainer but she saw me as her child. She always ensures if I am following a proper diet or not. She helped me to solve one of my biggest problem in my life; and that was my periods. I had my irregular periods even after her class. but after joining her class within a month my periods got regularized.\n\nShe used to inform me a day before if she was unable to conduct a class and as a trainer she instructed me to do the necessary exercises at my home which was very useful for me to continue my routine. learning so much from my trainer and hence I told myself to implement all those teachings of hers in my everyday life."
  },
  {
    name: "Priyanka prakash",
    rating: 5,
    short: "One month ago I started exercising with Deepika as my trainer. She is professional yet kind, patient and understanding. Her encouragement has driven me the confidence that I needed to start this program...",
    full: "One month ago I started exercising with Deepika as my trainer. She is professional yet kind, patient and understanding. Her encouragement has driven me the confidence that I needed to start this program. After even short month I am able to see my progress and feel more energetic, positive. She is a good motivator for life."
  },
  {
    name: "Janani",
    rating: 5,
    short: "Deepika is one such perfect trainer who understands your actual problem and trains accordingly. I have been with her since last 6 months, it should say these were my non lazy days in life...",
    full: "Deepika is one such perfect trainer who understands your actual problem and trains accordingly. I have been with her since last 6 months, it should say these were my non lazy days in life. More than a trainer she's a great motivator. May you be a mentor to many such women out there Deepika. 💪"
  },
  {
    name: "sujatha srinivasan",
    rating: 5,
    short: "The trainer is too cool and friendly and makes the workout sessions full of positivity and knows the best way to give personalised workouts for individuals.",
    full: "The trainer is too cool and friendly and makes the workout sessions full of positivity and knows the best way to give personalised workouts for individuals."
  },
  {
    name: "Dhevi dhurga s",
    rating: 5,
    short: "Ms. Deepika not only focuses on physical fitness, but also on mental health. She is a really good trainer and I would give her a 10/ 10 rating.",
    full: "Ms. Deepika not only focuses on physical fitness, but also on mental health. She is a really good trainer and I would give her a 10/ 10 rating."
  },
  {
    name: "Vedhanayaki Rajesh",
    rating: 5,
    short: "This is a new experience for me. I have not exercised for years and never had loss but never had such a wholesome experience. Just after the first session, where I discussed my desires and issues...",
    full: "This is a new experience for me. I have not exercised for years and never had loss but never had such a wholesome experience. Just after the first session, where I discussed my desires and issues - I realised that I am in good hands. Deepika mam gave a new meaning to physical trainer. She literally covered A to Z of what my body needs. So her patient listening gave me hope that in long run I will achieve what I wanted and will have a sustainable result. I hope soon I will write in this column my success story of wt loss."
  },
  {
    name: "Kanmani",
    rating: 5,
    short: "If you want to lose weight will find a way to make it happen...and I found a way that's my favorite trainer DEEPIKA...she boosted up my confidence to achieve my goal...",
    full: "If you want to lose weight will find a way to make it happen...and I found a way that's my favorite trainer DEEPIKA...she boosted up my confidence to achieve my goal...she is truly an amazing trainer who take care of her trainees very well. Highly would recommend her to anyone who is looking forward to become fit.\n\nLove from kanmani ❤️"
  },
  {
    name: "Lakshmi",
    rating: 5,
    short: "Very best trainer. Workout for whole Body, Personal Attention given. Helps to stretch after work out session. On the whole i am very comfortable after working workout. Excellent Motivator.",
    full: "Very best trainer. Workout for whole Body, Personal Attention given. Helps to stretch after work out session. On the whole i am very comfortable after working workout. Excellent Motivator."
  },
  {
    name: "Kamakshi Madan",
    rating: 5,
    short: "I am lucky to have met deepika as my fitness coach. She has given me a refreshing experience on fitness. This has helped me move forward in terms of fitness and life as a whole.",
    full: "I am lucky to have met deepika as my fitness coach. She has given me a refreshing experience on fitness. This has helped me move forward in terms of fitness and life as a whole."
  },
  {
    name: "Jannath",
    rating: 5,
    short: "Ever I could so fitness. More than a trainer you gave me more confidence on of me. I would like to mention you one more thing that I really inspired seeing you on writing...",
    full: "Ever I could so fitness. More than a trainer you gave me more confidence on of me. I would like to mention you one more thing that I really inspired seeing you on writing. I am very thankful for this opportunity. Thanks for the support from your side. I would strongly recommend my friends."
  },
  {
    name: "Vaishnavi",
    rating: 5,
    short: "One amazing person I have met... Deepika is not only a trainer to me...She has always been my well wisher motivator...",
    full: "One amazing person I have met... Deepika is not only a trainer to me...She has always been my well wisher motivator. She knows how to deal with her trainees with aid most importantly she gives me that constant push that I personally need in my weight loss program Looking forward to many more amazing sessions with her. Definitely recommend her to those u guys who are struggling in your weight loss journey."
  },
  {
    name: "Srivalshali Mahendran",
    rating: 5,
    short: "Deepika mam is punctual in her works. I am training with her for one and half months. I am recognising the difference. For anyone who wants the outcome, I would prefer Deepika mam.",
    full: "Deepika mam is punctual in her works. I am training with her for one and half months. I am recognising the difference. For anyone who wants the outcome, I would prefer Deepika mam."
  },
  {
    name: "Mohamed Meeran",
    rating: 5,
    short: "She is super cool to work with... She knows our strength and weakness, will bring she make sure to change our weakness into strength... I am happier to work with her...",
    full: "She is super cool to work with... She knows our strength and weakness, will bring she make sure to change our weakness into strength... I am happier to work with her..."
  },
  {
    name: "Nirmala",
    rating: 5,
    short: "She is good, professional and persistent. Would highly recommend her transformational wise decisional happy to have her a good friend 😊",
    full: "She is good, professional and persistent. Would highly recommend her transformational wise decisional happy to have her a good friend 😊"
  },
  {
    name: "Ramya",
    rating: 5,
    short: "More than a physical trainer what we all need is a person who motivates us for the transformational wise decisional happy to have her a good friend 😊",
    full: "More than a physical trainer what we all need is a person who motivates us for the transformational wise decisional happy to have her a good friend 😊"
  },
  {
    name: "Jayapriya Ramas",
    rating: 5,
    short: "Mrs. Deepika is a nice person to train with. She is friendly, compassionate and at the same time assertive and pushes you beyond your limits, when I benefited...",
    full: "Mrs. Deepika is a nice person to train with. She is friendly, compassionate and at the same time assertive and pushes you beyond your limits, when I benefited. I had lot of problems with my back and calfs, she tailored exercises accordingly for my problems which helped me so much without bad exacerbations. More than just physical exercise, she motivates you by her positive outlook. In the past 5 months I have lost my inhibitions and fear of exercise in relation to my back ache, I feel more confident about myself. A special mention to her passion for maintaining her own physical fitness which perches into the workouts and makes it fun filled. I found a good friend in her and I strongly recommend her for anyone looking for a lady trainer at home."
  },
  {
    name: "Jeya Venkatesh",
    rating: 5,
    short: "Deepika is very motivating and brings in a lot lot of stuff confidence...I had wonderful changes in with her for the past 5weeks...",
    full: "Deepika is very motivating and brings in a lot lot of stuff confidence...I had wonderful changes in with her for the past 5weeks... she changes us both mentally and physically... kudoos 2 her..."
  },
  {
    name: "Sridevi",
    rating: 5,
    short: "I met Deepika on UrbanClap. It is really a life transforming event. She is methodic and understands my weight loss goals. Having lost a lot of weight herself, she knows what I go through...",
    full: "I met Deepika on UrbanClap. It is really a life transforming event. She is methodic and understands my weight loss goals. Having lost a lot of weight herself, she knows what I go through. She builds intrinsic and mental courage. I confided through her that weight loss is a long-term journey with many pitfalls. The form and posture taught by her ensure that we are injury free. Not only have I lost about 4kg under her guidance, but also I am living a healthier life. I been confiding in her for some of my personal and professional problems also. She is truly one of kind. A great Coach..."
  },
  {
    name: "Shankari",
    rating: 5,
    short: "She is very motivating. Shedding weight is secondarily.she prepares you mentally to get that discipline in you.At last fat loss programme is a mind game and for sure she will help you out to transform.",
    full: "She is very motivating. Shedding weight is secondarily.she prepares you mentally to get that discipline in you.At last fat loss programme is a mind game and for sure she will help you out to transform."
  },
  {
    name: "Balamani",
    rating: 5,
    short: "Good coacher. Gives good training. I am seeing changes in my daughter physical fitness. She is far better now after her coaching. Lots and lots of improvement.",
    full: "Good coacher. Gives good training. I am seeing changes in my daughter physical fitness. She is far better now after her coaching. Lots and lots of improvement."
  },
  {
    name: "Rinku",
    rating: 5,
    short: "I've been training with Deepika for almost 8 weeks now, and believe she is Experienced and Committed trainers around. Deepika is focused on helping me achieve my goals, and makes every session challenging...",
    full: "I've been training with Deepika for almost 8 weeks now, and believe she is Experienced and Committed trainers around. Deepika is focused on helping me achieve my goals, and makes every session challenging (and somehow fun). My fitness has increased noticeably and I've seen improvements in my ability to complete more sit ups / core exercises and even walk / run for longer throughout each session. I actually look forward to my workouts. Importantly - She ensures that my technique is always correct to avoid any injuries. - She is extremely reliable & punctual - always set up & ready to start training ahead of time, with no cancellations. - I particularly like that she enjoy working out in the outdoor / indoor environment, and would recommend Deepika to anyone looking to improve their fitness."
  },
  {
    name: "Hamithra",
    rating: 5,
    short: "She gives us confidence and motivates us...",
    full: "She gives us confidence and motivates us..."
  },
  {
    name: "Arathi Chhabria",
    rating: 5,
    short: "Deepika is a very good trainer ....who is absolutely dedicated to her job. ...she inspires, motivates and helps you in your journey to get fit.",
    full: "Deepika is a very good trainer ....who is absolutely dedicated to her job. ...she inspires, motivates and helps you in your journey to get fit."
  },
  {
    name: "Vidya",
    rating: 5,
    short: "I am so very confident being trained by Deepika. Even on days when my energy levels are low, she really encourages me with my workout and helps me achieve my targets. Very positive person.",
    full: "I am so very confident being trained by Deepika. Even on days when my energy levels are low, she really encourages me with my workout and helps me achieve my targets. Very positive person."
  },
  {
    name: "Deepti",
    rating: 5,
    short: "An extremely nurturing person to train with I Her reach extends far beyond commercial realm! As, the saying goes... sometimes all we need is a nudge in the right here to give you that, and propel you to your highest capacity!...",
    full: "An extremely nurturing person to train with I Her reach extends far beyond commercial realm! As, the saying goes... sometimes all we need is a nudge in the right here to give you that, and propel you to your highest capacity! You're a coach to me has ,as a matter of fact I would say-open up with her \"en's closet\" !!"
  },
  {
    name: "Deepthi",
    rating: 5,
    short: "Deepika has been teaching my kids kick boxing and I'd say she's an excellent trainer. She's hands on with them. Teaches them with a great discipline and touch. I would totally vouch for her.",
    full: "Deepika has been teaching my kids kick boxing and I'd say she's an excellent trainer. She's hands on with them. Teaches them with a great discipline and touch. I would totally vouch for her."
  },
  {
    name: "M. Swathi",
    rating: 5,
    short: "Its been a month I have undergone training under her and I can't tell very happy to have found the right person. Would call her professionalism and never compromising person...",
    full: "Its been a month I have undergone training under her and I can't tell very happy to have found the right person. Would call her professionalism and never compromising person. She understands the body nature of her trainees and provides the schedule accordingly. Just surrender to her and she takes care of the rest."
  },
  {
    name: "Saranya Krishnan",
    rating: 5,
    short: "Deepika has been training me for past 15 months and I am very impressed with the way she is committed to every minute of the session. I had knee pain and back pain but I feel strong and enjoying my session...",
    full: "Deepika has been training me for past 15 months and I am very impressed with the way she is committed to every minute of the session. I had knee pain and back pain but I feel strong and enjoying my session. The classes are so effective and she provides excellent tips & suggestions to ensure we avoid injury. Best trainer."
  },
  {
    name: "Mrs Priyadarshini Menon",
    rating: 5,
    short: "Deepika is an excellent instructor who really motivates you to do your best and help you lose weight.",
    full: "Deepika is an excellent instructor who really motivates you to do your best and help you lose weight."
  },
  {
    name: "Srivalshali Mahendran",
    rating: 5,
    short: "I have been training with Deepika mam for almost one and half months. I am able recognize the changes. For anyone who want to become fit, I would recommend Deepika mam.",
    full: "I have been training with Deepika mam for almost one and half months. I am able recognize the changes. For anyone who want to become fit, I would recommend Deepika mam."
  },
  {
    name: "Audhya Rangarajan",
    rating: 5,
    short: "Good trainer.Will make you do intense training and has lot of confidence.",
    full: "Good trainer.Will make you do intense training and has lot of confidence."
  },
  {
    name: "Preethika",
    rating: 5,
    short: "Will make you do intense fresh workouts, not the usual boring routine, changes the pattern constantly, and the best part is she makes sure that you turn into a fitness lover!",
    full: "Will make you do intense fresh workouts, not the usual boring routine, changes the pattern constantly, and the best part is she makes sure that you turn into a fitness lover!"
  },
  {
    name: "Prema Lakshmi.A",
    rating: 5,
    short: "She is excellent trainer, she for sure explained every out clearly and encouraged me when I fell down and gave me hope she is perfect trainer.",
    full: "She is excellent trainer, she for sure explained every out clearly and encouraged me when I fell down and gave me hope she is perfect trainer."
  },
  {
    name: "Niranjana",
    rating: 5,
    short: "Deepika's sessions are effective , structured and have a great impact. Sincere and fun. Overall an enjoyable session.",
    full: "Deepika's sessions are effective , structured and have a great impact. Sincere and fun. Overall an enjoyable session."
  },
  {
    name: "Sivakami",
    rating: 5,
    short: "Yeah she is full of energy. Attends student personally.",
    full: "Yeah she is full of energy. Attends student personally."
  },
  {
    name: "Pooja",
    rating: 5,
    short: "Deepika really did a good job I loved her training session alot it was worth it 👍",
    full: "Deepika really did a good job I loved her training session alot it was worth it 👍"
  },
  {
    name: "Sushmita",
    rating: 5,
    short: "Great motivator. Very focused. Great company!",
    full: "Great motivator. Very focused. Great company!"
  }
];

