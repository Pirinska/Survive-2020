const script = document.getElementById('script')
const optionsButton = document.getElementById('options')

// keep track of what the user will do
let state = {}


function start() {
    state = {}
    showScript(1)
}

function showScript(index) {

    const scriptArray = ScriptArrays.find(scriptArray => scriptArray.id === index)
    script.innerText = scriptArray.text

    //remove all options
    while (optionsButton.firstChild) {
        optionsButton.removeChild(optionsButton.firstChild)
    }
    scriptArray.options.forEach(option => {
        if (showOption(option)) {

            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('option')
            button.addEventListener('click', () => chooseOption(option))
            optionsButton.appendChild(button)

        }
    })


}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function chooseOption(option) {
    const nextTexdId = option.nextText
    state = Object.assign(state, option.setState)
    showScript(nextTexdId)
}

const ScriptArrays = [
    {
        id: 1,
        text: 'You just entered a journey that you will never forget. We promise you that the “Survive 2020” game will have the most engaging gameplay that will keep you on the edge of your seat until the end. You will travel the world, jump in journeys that you have never thought of and fearlessly save people you have never met before. What are you waiting for? Just press the “Start” button and choose your adventures.',
        options: [
            {
                text: 'Start',
                setState: { start: true },
                nextText: 2

            }
        ]
    },
    {
        id: 2,
        text: 'The time is December of 2019. You are a recent graduate student that has just finished its “Nursing” course at Edinburgh Napier University, Scotland. You have decided to devote the coming year to broadening your horizons by travelling, reaching new cultures and helping people through volunteering. You only need to put your nickname and choose an assistant. But what is an assistant? The assistant will support you with advice and facts based on your current journey. We offer you to choose from two highly educated professionals. Both of them will help you and make you feel as you are on a world adventure with a friend. ',
        options: [
            {
                text: 'Tom',
                requiredState: (currentState) => currentState.start,
                setState: { start: false, January: true },
                nextText: 3

            },
            {
                text: 'Angelica ',
                requiredState: (currentState) => currentState.start,
                setState: { start: false, January: true },
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'It is the morning of the 31st of December. You are writing your New Year Resolutions in your notebook. You are browsing through the Internet to find out some inspiration on how to start the following year. While surfing the Net, you bump into some articles that announce concerning news. The first one states that Australian Bushfires are spreading beyond five million acres. Ten people have died since September. Tens of thousands of farm animals, mainly sheep, were also killed in the fire on Kangaroo Island. You see all those images and videos on the articles and become speechless of how disastrous impact can make a fire and how emergent is the situation. You continue browsing and see that the World Health Organisation informs that China has confirmed people with viral pneumonia of unknown aetiology (unknown cause) detected in Wuhan City, Hubei Province of China. You find this extremely interesting and you are curious about what is this new disease that spreads in Wuhan. Your first journey knocks on the door. Consider where you want to be and what you want to do throughout January of 2021? What will you choose?  ',
        options: [
            {
                text: 'Volunteer at Australian Bushfires',
                requiredState: (currentState) => currentState.January,
                setState: { January: false, Australia: true },
                nextText: 4

            },
            {
                text: 'Explore China, especially Wuhan ',
                requiredState: (currentState) => currentState.January,
                setState: { January: false, China: true },
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: 'You buy a ticket with all money you have, heading directly to Sydney, Australia. The flight continues for 35 hours long, it has three stops but you have no doubt that you could help there and you don’t give up. After reaching Sydney, you take a bus and go directly to Blackheath - a village where the fires have spread and caused a disastrous impact on people’s homes. You find the people you have to work with and they show you where you are going to sleep and when you are going to eat. Your shifts are going to take 12 hours and you need to put a special consume that will enable you to breathe fresh air. When the head firefighter finds out you are a graduate nurse, he offers you a choice. I heard you have a degree in Nursing. Do you prefer helping here in the bushfires or sending you to the hospital? We need help at both places so it’s all your choice.',
        options: [
            {
                text: 'Hospital',
                requiredState: (currentState) => currentState.Australia,
                setState: { Australia: false, hospital: true },
                nextText: 6
            },
            {
                text: 'Bushfires',
                requiredState: (currentState) => currentState.Australia,
                setState: { Australia: false, bushfires: true },
                nextText: 7
            }
        ]
    },
    {
        id: 5,
        text: 'You are going to China for the first time. You are interested in their culture but also curious about what this strange pneumonia virus is doing to people. You get to Wuhan and find the hospital where the first case was confirmed. Doctors say that they do not need volunteers but you somehow manage to make them agree on letting you observe the patients and their symptoms as you want to write your dissertation on your virus. You take notes on the most common symptoms – tiredness, dry cough and fever. However, in some cases, the virus spreads to patients’ lungs and cause difficulty in breathing, chest pain and even loss of speech or movement. On the 8th of January South Korea announce their first case coming from China. On the next day, China states their first death of the unknown virus – a 61-year-old man who had significant medical conditions and died because of the serious condition of his pneumonia. You have helped many people and learned a lot about the virus and its potential treatment. While being Wuhan, you have travelled a bit and fell in love with their culture, people and cuisine.',
        options: [
            {
                text: 'February Journey',
                requiredState: (currentState) => currentState.China,
                setState: { China: false, february_journey: true },
                nextText: 8
            }
        ]
    },
    {
        id: 6,
        text: 'You are heading to the hospital. You see many people crying and feeling awful. Most of them have lost their homes. You spend the next weeks taking care of children and women that have burns and bruises.',
        options: [
            {
                text: 'February journey',
                requiredState: (currentState) => currentState.hospital,
                setState: { hospital: false, february_journey: true },
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: 'The firefighters are giving you orders on how to take care of yourself and not put you and the team in danger. You cannot believe how fast the fires are spreading. The next days you spend are on working day and night to ensure stopping the fire.',
        options: [
            {
                text: 'February journey',
                requiredState: (currentState) => currentState.bushfires,
                setState: { bushfires: false, february_journey: true },
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: 'It’s the last week of January and you have learned a lot and grown a lot. You have made many friends and saved many lives. However, you do not feel both mentally and physically well and decide to go on vacation. You quickly search through some inspiring possibilities. While searching on the laptop, your phone buzzes. You look at it and see that one of your closest friends has sent you a message. Vanya: "Can you please help me with the documentation for the pre-settled status? I completely forgot that I need to send my documents! In exchange, I am offering you a 7-days-holiday on the Cruise Ship “Diamond Princess” or a 14-days-expedition to Antarctica. My parents had offered me these two options as a gift for my twenty-first birthday and since Bryan is not available, my next choice is you. What do you think? You choose, it does not matter for me.” Vanya is one of those friends that has never left you whatever you have been going through. However, you are a bit annoyed that she has always left things to the last minute. But her offer of vacation is coming to the right minute as you need a rest but you also do not have the money to go anywhere as you have volunteered all month and the money you have will get you only back to Edinburgh.',
        options: [
            {
                text: 'Cruise Ship',
                requiredState: (currentState) => currentState.february_journey,
                setState: { february_journey: false, cruise_ship: true },
                nextText: 9
            },
            {
                text: 'Antarctica expedition',
                requiredState: (currentState) => currentState.february_journey,
                setState: { february_journey: false, antarctica: true },
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: 'You and Vanya agreed on meeting on the 28th of January in Hong Kong where the ship will have a stop for new passengers. The flight was again exhausting. Vanya convince you to visit some interesting monuments like the Po Lin Monastery and the Garden of Stars. You are amazed by their culture and beautiful nature. However, the time of getting on board is coming and you head to the cruise ship. Many people are getting on the board. You are amazed at how luxurious and maleficent is the shop looking on the outside. There is a guide that takes you and the whole new group getting on the ship to the main halls. You see the restaurant, the entertainment rooms, the ballroom and the outdoor space. The guide tells you more information about the ship and you cannot believe how you got there. This is Japan’s top cruise ship which amazes you and Vanya. Both of you spent the next couple of days meeting new people, relaxing and having fun. Unfortunately, on the 3rd of February, your last day before leaving the ship, the captain and the crew display an emergency message on the TV screens in each room. “Good morning, my fellow passenger. I and the crew are going to tell you something that should not concern you but you need to take it seriously and follow our orders. On the 1st of February we a passenger from “Diamond Princess” had disembarked the ship on our stop in Hong Kong. Unfortunately, this person has been tested positive for the new COVID-19 virus that started spreading out of China. We are going to quarantine all passengers and crew on board for the safety of the nation. Wait in your rooms until a board member comes and tell you in details what to do. Thank you for your time and do not panic. Everything is under control.” Immediately after the message finishes, Vanya gets a panic attack. You explain your experience and how this virus affects mostly old people. She is feeling better and give you an idea of helping as a nurse on the ship. You know that the least you could do so you tell Vanya to be brave and head out to find the medicine crew. The next couple of days went by testing people and the number of infected got bigger and bigger. The approximate number of passengers was around 3 700 and by the 19th of February, a total number of 712 people have confirmed cases of COVID-19. Passengers with negative tests disembarked and by the end of the month, all passengers and crew members left the ship. Your journey finished on Subaru Island where you had a 14 days’ quarantine as all members of the crew.',
        options: [
            {
                text: 'March Journey',
                requiredState: (currentState) => currentState.cruise_ship,
                setState: { cruise_ship: false, March_journey: true },
                nextText: 11
            }
        ]
    },
    {
        id: 10,
        text: 'Excellent choice! Vanya sends you a link with detailed information on the expedition. You see that the expedition starts in Buenos Aires and then you fly to Ushuaia also known as “the end of the world”. You are super excited and immediately buy a ticket. You agree to meet with Vanya in Buenos Aires and have a day to explore this beautiful capital city. On the 2nd of February, you are on the ship with Vanya crossing the Drake Passage and waiting to see wandering albatross or rare species of dolphins. Both of you prepare for the journey as none of you has experience in an expedition. Anyway, the DSLR camera is taken and you are ready to create memories that will never be forgotten. The next day is filled with various activities like hiking at penguin colonies, photographing wildlife and learning interesting facts for the continent from the experts that have devoted their lives to this place. The most interesting thing is that this day is marked as the hottest day in the last five years – 18.3C. You learn a lot about how dangerous is the glaciers melting connected to sea level rise and open your mind to the upcoming issues that society will face because of this.At the end of the expedition, you feel spiritually enriched. You have balanced your mental and physical health and you are ready to help people again. Antarctica is something that you will never forget and always recall when there are hard moments of your life. The memories of the journey will always remember you how beautiful is life and that there is always something you should fight for.',
        options: [
            {
                text: 'March Journey',
                requiredState: (currentState) => currentState.antarctica,
                setState: { antarctica: false, March_journey: true },
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: ' Now you should decide where to go next. It is only the end of February and you have already learned and seen so much. But what is the next step? There are two options. One is finding a job in the USA because you have always wanted to live there for some months and the other is going to Italy where the situation with the virus is really bad and they need nurses emergently.',
        options: [
            {
                text: 'Italy',
                requiredState: (currentState) => currentState.March_journey,
                setState: { March_journey: false, italy: true },
                nextText: 12
            },
            {
                text: 'USA',
                requiredState: (currentState) => currentState.March_journey,
                setState: { March_journey: false, usa: true },
                nextText: 14
            }
        ]
    },
    {
        id: 12,
        text: ' Great! It is really good that you want to help people! You are going to work in the hospital of Bergamo, which is the hardest-hit hospital in Italy. You are going un the hearth of the Covid-19 crisis. Watch the video to see the current situation and prepare mentally for what is waiting for you there. You see how bad is the situation there. Immediately after stepping into the hospital, the head nurse called Alice notices you and asks what she can help you with. You tell her your story and that you want to work there as a nurse and help as many people as you can. She is extremely happy and grateful. Alice makes a brief overview of the building, your room and tells you that you should sign a contract for at least 2 months working there. Do you agree or not? If you do not agree, you will be directed to the flight to USA which was your plan B.',
        options: [
            {
                text: 'Agree',
                requiredState: (currentState) => currentState.italy,
                setState: { italy: false, agree: true },
                nextText: 13
            },
            {
                text: 'No not agree',
                requiredState: (currentState) => currentState.italy,
                setState: { italy: false, usa: true },
                nextText: 14
            }
        ]
    },
    {
        id: 13,
        text: ' You start working there on the same day. The shifts are lasting for 12 hours and sometimes more. Many people have a serious illness. Fortunately, you use the learned from your experience with Covid-19 and implement it in the hospital. There are many lives that you save but also you see how many people go through this virus and give up fighting for their lives. Working under pressure is giving you a lot of knowledge and you feel as doing the right thing by contributing to society and helping people fight.',

        options: [
            {
                text: 'Italy in April',
                requiredState: (currentState) => currentState.agree,
                setState: { agree: false, april_journey_italy: true },
                nextText: 19
            }
        ]
    },
    {
        id: 14,
        text: 'Good, so you are now searching for a job in the USA. You find a job as a nurse at a hospital in Nashville, Tennessee. You sent your CV and candidate for the visa. After a week your position and visa are approved. You buy tickets and quickly pack your clothes. You reach Nashville on the 1st of March. Then, you find your accommodation and get ready for the first shift that will start in the early morning. On the next day, you head to the hospital but before entering you see something in the sky. At the same time, you hear people screaming and running from something. They are screaming “Hide into the building! Hurry up! A tornado is coming!”. Yes, a tornado. What you will do?',
        options: [
            {
                text: 'Panic and hide',
                requiredState: (currentState) => currentState.usa,
                setState: { usa: false, tornado: true },
                nextText: 15
            },
            {
                text: 'Help people',
                requiredState: (currentState) => currentState.usa,
                setState: { usa: false, tornado: true },
                nextText: 15
            }
        ]
    },
    {
        id: 15,
        text: ' After 10 minutes all people are at a same place. But the tornado is coming and you do not know anybody and haven’t undergone such kind of disaster so you are not sure if you are going to survive. You start searching for doctors and luckily find the doctor that you had to be an assistant to. Dr Smith is kind and instructs you on how to calm people down and where to tell them to hide. You did not think that your first day will go exactly like that, right? The tornado is gone and people are alive which is the most important thing. After seeing the drone footage video, you cannot believe that you have survived. The tornado has somehow not reached the hospital which saved all your lives. Everyone’s phones start ringing and you remember that you should also tell your family you are okay. For the next couple of weeks, you get the grips with working in the hospital and find new friends. You like the culture of America and see how different is from Europe and the United Kingdom.',

        options: [
            {
                text: 'Usa in April',
                requiredState: (currentState) => currentState.tornado,
                setState: { tornado: false, april_journey_usa: true },
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: ' It is the middle of April. You are already working for a month in the Nashville hospital and feel super grateful for meeting these people and going to America. You are always checking if the patients have taken their pills and you got a message on the pager from your boss. “Hi, come to my office if you are free. I need to talk with you.” You finish with your patients and go to his room. Dr Flint starts explaining that the hospital is not doing well financially which is the reason why you should be redundant as the other colleagues have more experience and knowledge. How do you react? ',

        options: [
            {
                text: 'Normal reaction, pack your things and go home',
                requiredState: (currentState) => currentState.april_journey_usa,
                setState: { april_journey_usa: false, may_journey_usa: true },
                nextText: 17
            },
            {
                text: 'Start a scandal, it is not fair',
                requiredState: (currentState) => currentState.april_journey_usa,
                setState: { april_journey_usa: false, may_journey_usa: true },
                nextText: 17
            }
        ]
    },
    {
        id: 17,
        text: ' It’s the 25th of May and you are making your lunch. You are still searching for a job. You have been living on your final salary and the money you have saved. You are turning on the TV and find out that a 46-year-old man, was killed in Minnesota while being arrested for allegedly using a counterfeit bill. There was even a video that they were showing off how the man is screaming “I can’t breathe.” This is shocking and you are terrified by what a person can do here. You hope that the policeman gets to jail for this inhuman murder.',

        options: [
            {
                text: 'June Journey',
                requiredState: (currentState) => currentState.may_journey_usa,
                setState: { may_journey_usa: false, june_journey: true },
                nextText: 18
            }

        ]
    },
    {
        id: 18,
        text: ' It is that time of the year when your journey should continue. You need to decide whether you want to explore Russia or return to the UK to see your close friends and relatives.',

        options: [
            {
                text: 'Return to the UK',
                requiredState: (currentState) => currentState.june_journey,
                setState: { june_journey: false, uk: true },
                nextText: 21
            },
            {
                text: 'Visit Russia',
                requiredState: (currentState) => currentState.june_journey,
                setState: { june_journey: false, russia: true },
                nextText: 22
            }
        ]
    },
    {
        id: 19,
        text: 'It’s April now and the situation in the hospital is getting better. You decide to celebrate life in the hospital’s common room. You see that on the 18th of April the World Health Organization will broadcast a “Together at home” concert with famous singers. You decide that this will be a special day. You make order food and surprise Dr Smith and other colleagues on the dinner break. They are all super happy and grateful for making them smile and thinking about their mental health.',

        options: [
            {
                text: 'Continue working',
                requiredState: (currentState) => currentState.april_journey_italy,
                setState: { april_journey_italy: false, may_journey_italy: true },
                nextText: 20
            }
        ]
    },
    {
        id: 20,
        text: 'It’s the early morning of the 19th of May and you are listening to the news. You hear that the world carbon emissions have dropped by 17% because of the isolation due to COVID-19. At least there is something good, right?',

        options: [
            {
                text: 'June journey',
                requiredState: (currentState) => currentState.may_journey_italy,
                setState: { may_journey_italy: false, june_journey: true },
                nextText: 18
            }
        ]
    },
    {
        id: 21,
        text: ' Finally, you are at home. You can see all your closest people and tell them what you have gone through in the first part of this year. You take your luggage and go to surprise your family. They are so happy to see you and start preparing a special dinner for you. However, your friends are chatting in a mutual group that they are going to the “Black Lives Matter” protests this night. Are you staying at home at night or go with your friends to support this cause?',

        options: [
            {
                text: 'Stay at home',
                requiredState: (currentState) => currentState.uk,
                setState: { uk: false, home: true },
                nextText: 23
            },
            {
                text: 'Go to protests',
                requiredState: (currentState) => currentState.uk,
                setState: { uk: false, protests: true },
                nextText: 24
            }
        ]
    },
    {
        id: 23,
        text: ' You stay at home and spend quality time with your family for the rest of the day.',

        options: [
            {
                text: 'July news',
                requiredState: (currentState) => currentState.home,
                setState: { home: false, july_journey_uk: true },
                nextText: 25
            }
        ]
    },
    {
        id: 24,
        text: 'You and your friends join the protests. There are many people and you feel part of something big. You are happy that so many people are united to make a difference.',

        options: [
            {
                text: 'July news',
                requiredState: (currentState) => currentState.protests,
                setState: { protests: false, july_journey_uk: true },
                nextText: 25
            }
        ]
    },
    {
        id: 25,
        text: 'Exciting news!!! BBC News announces that the Oxford vaccine triggers an immune response. More than 1000 people have been involved in the trial and the findings are promising but it is too early to know if it causes enough protection. The vaccine is made from a genetically engineered virus. The findings had some minimal side effects – 17% had a fever and 10% had a headache. The study will continue with its next stage that is going to try the vaccine on 10 000 people from the United Kingdom. Will you volunteer as a patient for the vaccine?',

        options: [
            {
                text: 'Yes',
                requiredState: (currentState) => currentState.july_journey_uk,
                setState: { july_journey_uk: false, august_journey: true },
                nextText: 26
            },
            {
                text: 'No',
                requiredState: (currentState) => currentState.july_journey_uk,
                setState: { july_journey_uk: false, august_journey: true },
                nextText: 26
            }
        ]
    },
    {
        id: 26,
        text: 'It’s the end of July. You still want to travel the world and meet more cultures. Your next stop depends on you. There are some cheap flights to Lebanon and Greece. Which destination would you choose?',

        options: [
            {
                text: 'Lebanon',
                requiredState: (currentState) => currentState.august_journey,
                setState: { august_journey: false, lebanon: true },
                nextText: 27
            },
            {
                text: 'Greece',
                requiredState: (currentState) => currentState.august_journey,
                setState: { august_journey: false, greece: true },
                nextText: 28
            }
        ]
    },
    {
        id: 22,
        text: ' You decided to explore Russia. But what is Russia without your best friend Vanya? Russia is her home country. She will show you everything worth seeing in Moscow and make your stay at their home. You and Vanya take a flight to Moscow, Russia on the first of June. You are amazed by Russian buildings and tell Vanya that she should take you to all monuments in the town. After two days of journeys, while eating dinner, Vanya’s father gets a call. His boss is telling him that there is an emergency and he should quickly pack his luggage and go to the main office. More details he will have when he goes there. Vanya and her mother get scared of what is going on. Vanya’s father is the head office of the Marine Rescue Service. On the next morning, you turn the TV on and see an announcement of President Putin that orders a state of emergency in the Siberian city – Norilsk. 20 000 tons of fuel has been spilt in the Ambarnaya river. Therefore, Vanya understood where her father has been sent to.',

        options: [
            {
                text: 'What will happen in July?',
                requiredState: (currentState) => currentState.russia,
                setState: { russia: false, putin: true },
                nextText: 29
            }
        ]
    },
    {
        id: 29,
        text: ' It’s already July and you are still in Russia. On the third of July Putin has nearly 78% of votes on a referendum that could keep him in power until 2036. Vanya and her family are really happy because they like their president.',

        options: [
            {
                text: 'Need of change?',
                requiredState: (currentState) => currentState.putin,
                setState: { putin: false, august_journey: true },
                nextText: 26
            }
        ]
    },
    {
        id: 27,
        text: 'Wow, Lebanon. Lebanon is a beautiful country with rich history and cultural diversity. Beirut is the capital and of Lebanon. The city has more than 2 million people population and it’s one of the oldest cities in the world.This country is maleficent, right? You buy a ticket and on the first of August, you find yourself in the heart of Beirut. There are so many monuments you can see and so much to do. You find a friend from the excursion group and start chatting about the culture and their lifestyle. The journey has just started and you are super happy that you take this decision. After a couple of days, on the fourth of August, you and your friends are going to the sea when you hear a strange noise. One of your friends starts creaming “Look, there!” Your eyes stop on a building you were just heading to that had just exploded. As soon as you see it the explosion reaches your car and the windows broke.You understand that something serious has happened. The car is still functioning so you directly head to the hospital. Many people have injuries and you start helping them. The world is a journey and you are grateful that you have survived. You will probably work in Beirut untill the end of September.',

        options: [
            {
                text: 'October journey',
                requiredState: (currentState) => currentState.lebanon,
                setState: { lebanon: false, october_journey: true },
                nextText: 31
            }
        ]
    },
    {
        id: 28,
        text: 'You have always wanted to visit a country from Southeast Europe. Greece has an approximate population of 10 million people and it is considered the heart of Western civilization, considering democracy, philosophy, science and drama. One of your old friends from university is from Athens and he agrees to walk you around the town.Days after you get to Athens the prime minister orders a full lockdown and an SMS authorization for movement. You feel as you are trapped there but the video conversations with your family and friends are making your mood better.',

        options: [
            {
                text: 'Greece lockdown in September',
                requiredState: (currentState) => currentState.greece,
                setState: { greece: false, refugee_camp: true },
                nextText: 30
            }
        ]
    },
    {
        id: 30,
        text: 'It is September and you are still in Athens. You have found work in a volunteer society that is giving you food and accommodation. On the 9th of September fire destroys the Greek camp “Moria” and leaves 13 000 people without shelter. Early in the morning, you are called to be sent as a nurse volunteer that will help people with injuries. You immediately respond with confirmation and pack the most important things for the travel. When you go there you in what miserable conditions had people been living there. You help people being housed in tents and check if their health condition is fine.',

        options: [
            {
                text: 'New journey is coming',
                requiredState: (currentState) => currentState.refugee_camp,
                setState: { refugee_camp: false, october_journey: true },
                nextText: 31
            }
        ]
    },
    {
        id: 31,
        text: 'Vietnam is searching for volunteers to help people in the floods. People are staying on the roofs of their home and do not have food. Choose your adventure. Are you staying where you are or going to help people in Vietnam?',

        options: [
            {
                text: 'Staying',
                requiredState: (currentState) => currentState.october_journey,
                setState: { october_journey: false, november: true },
                nextText: 32
            },
            {
                text: 'Going',
                requiredState: (currentState) => currentState.october_journey,
                setState: { october_journey: false, november: true },
                nextText: 32
            }
        ]
    },
    {
        id: 32,
        text: 'Almost the end of the year (November) and you realize that you love your job and have grown up for such a short time, travelled so many places and met so many people with different cultures. You get some notifications on the phone. Biden defeats Trump for White House, says “time to heal, Slovakia has tested 2/3 of its population and found out that there is only 1% positive ',

        options: [
            {
                text: 'Staying',
                requiredState: (currentState) => currentState.november,
                setState: { november: false, december: true },
                nextText: 33
            }
        ]
    },
    {
        id: 33,
        text: 'After all months of working and volunteering you are exhausted. Do you plan to go home for Christmas or continue volunteering and travelling around the world? ',

        options: [
            {
                text: 'Go home',
                requiredState: (currentState) => currentState.december,
                setState: { december: false, final: true },
                nextText: 34
            },
            {
                text: 'Continue travelling',
                requiredState: (currentState) => currentState.december,
                setState: { december: false, final: true },
                nextText: 34
            }

        ]
    },
    {
        id: 34,
        text: 'Congratulations! You survived 2020! What a year, right? 2020 was full of emotions. What did you learn? How would you describe this experience? The purpose of the game was to make you relive 2020 by choosing your adventures. One of the goals was to focus attention on the medical workers and how important is their role in our society. Moreover, by reaching the end of the game you should have broadened your horizons in aspects of culture, lifestyle and education. The world is full of unexplored opportunities and you grasp each one of them with excitement and hope that each day you will become a better version of yourself. ',

    }


]

start()