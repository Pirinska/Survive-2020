const script = document.getElementById('script')
const optionsButton = document.getElementById('options')

// keep track of what the user will do
let state = {}


function start() {
state = {}
showScript(1)
}

function showScript(index) {

    const scriptArray = ScriptArrays.find( scriptArray => scriptArray.id === index)
    script.innerText = scriptArray.text

    //remove all options
    while (optionsButton.firstChild) {
        optionsButton.removeChild(optionsButton.firstChild)
    }
    scriptArray.options.forEach(option =>  {
        if (showOption(option)) {

            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('option')
            button.addEventListener('click', () => chooseOption(option) )
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
        id:1,
        text: 'You just entered a journey that you will never forget. We promise you that the “Survive 2020” game will have the most engaging gameplay that will keep you on the edge of your seat until the end. You will travel the world, jump in journeys that you have never thought of and fearlessly save people you have never met before. What are you waiting for? Just press the “Start” button and choose your adventures.',
        options: [
            {
                text: 'Start',
                setState: {start: true},
                nextText: 2
            
            }
        ]
    },
    {
    id:2,
    text: 'The time is December of 2019. You are a recent graduate student that has just finished its “Nursing” course at Edinburgh Napier University, Scotland. You have decided to devote the coming year to broadening your horizons by travelling, reaching new cultures and helping people through volunteering. You only need to put your nickname and choose an assistant. But what is an assistant? The assistant will support you with advice and facts based on your current journey. We offer you to choose from two highly educated professionals. Both of them will help you and make you feel as you are on a world adventure with a friend. ',
    options: [
        {
            text: 'Tom', 
            requiredState: (currentState) => currentState.start,
            setState: {start: false, January: true},
            nextText: 3
            
        },
        {
        text: 'Angelica ',
        requiredState: (currentState) => currentState.start,
        setState: {start:false, January: true},
        nextText: 3
        }
    ]
},
{
    id:3,
    text: 'It is the morning of the 31st of December. You are writing your New Year Resolutions in your notebook. You are browsing through the Internet to find out some inspiration on how to start the following year. While surfing the Net, you bump into some articles that announce concerning news. The first one states that Australian Bushfires are spreading beyond five million acres. Ten people have died since September. Tens of thousands of farm animals, mainly sheep, were also killed in the fire on Kangaroo Island. You see all those images and videos on the articles and become speechless of how disastrous impact can make a fire and how emergent is the situation. You continue browsing and see that the World Health Organisation informs that China has confirmed people with viral pneumonia of unknown aetiology (unknown cause) detected in Wuhan City, Hubei Province of China. You find this extremely interesting and you are curious about what is this new disease that spreads in Wuhan. Your first journey knocks on the door. Consider where you want to be and what you want to do throughout January of 2021? What will you choose?  ',
    options: [
        {
            text: 'Volunteer at Australian Bushfires',
            requiredState: (currentState) => currentState.January,
            setState: { January:false, Australia: true},
            nextText: 4
            
        },
        {
        text: 'Explore China, especially Wuhan ',
        requiredState: (currentState) => currentState.January,
        setState: { January: false, China: true},
        nextText: 5
        }
    ]
},
{
    id:4,
    text: 'You buy a ticket with all money you have, heading directly to Sydney, Australia. The flight continues for 35 hours long, it has three stops but you have no doubt that you could help there and you don’t give up. After reaching Sydney, you take a bus and go directly to Blackheath - a village where the fires have spread and caused a disastrous impact on people’s homes. You find the people you have to work with and they show you where you are going to sleep and when you are going to eat. Your shifts are going to take 12 hours and you need to put a special consume that will enable you to breathe fresh air. When the head firefighter finds out you are a graduate nurse, he offers you a choice. I heard you have a degree in Nursing. Do you prefer helping here in the bushfires or sending you to the hospital? We need help at both places so it’s all your choice.',
    options: [
        {          
        text: 'Hospital',
        requiredState: (currentState) => currentState.Australia,
        setState: { Australia: false, hospital: true },
        nextText:6
        },
        {          
            text: 'Bushfires',
            requiredState: (currentState) => currentState.Australia,
            setState: { Australia: false, bushfires: true },
            nextText:7
            }
    ]
},
{
    id:5,
    text: 'You are going to China for the first time. You are interested in their culture but also curious about what this strange pneumonia virus is doing to people. You get to Wuhan and find the hospital where the first case was confirmed. Doctors say that they do not need volunteers but you somehow manage to make them agree on letting you observe the patients and their symptoms as you want to write your dissertation on your virus. You take notes on the most common symptoms – tiredness, dry cough and fever. However, in some cases, the virus spreads to patients’ lungs and cause difficulty in breathing, chest pain and even loss of speech or movement. On the 8th of January South Korea announce their first case coming from China. On the next day, China states their first death of the unknown virus – a 61-year-old man who had significant medical conditions and died because of the serious condition of his pneumonia. You have helped many people and learned a lot about the virus and its potential treatment. While being Wuhan, you have travelled a bit and fell in love with their culture, people and cuisine.',
    options: [
        {          
        text: 'February Journey',
        requiredState: (currentState) => currentState. China,
        setState: { China: false, february_journey: true },
        nextText:8
        }
    ]
},
{
id:6,
text: 'You are heading to the hospital. You see many people crying and feeling awful. Most of them have lost their homes. You spend the next weeks taking care of children and women that have burns and bruises.',
options: [
    {          
    text: 'February journey',
    requiredState: (currentState) => currentState.hospital,
    setState: { hospital: false, february_journey: true },
    nextText:8
    }
]
},
{
        id:7,
        text: 'The firefighters are giving you orders on how to take care of yourself and not put you and the team in danger. You cannot believe how fast the fires are spreading. The next days you spend are on working day and night to ensure stopping the fire.',
        options: [
            {          
            text: 'February journey',
            requiredState: (currentState) => currentState.bushfires,
            setState: { bushfires: false, february_journey: true },
            nextText:8
            }
        ]
    },
    {
        id:8,
        text: 'It’s the last week of January and you have learned a lot and grown a lot. You have made many friends and saved many lives. However, you do not feel both mentally and physically well and decide to go on vacation. You quickly search through some inspiring possibilities. While searching on the laptop, your phone buzzes. You look at it and see that one of your closest friends has sent you a message. Vanya: "Can you please help me with the documentation for the pre-settled status? I completely forgot that I need to send my documents! In exchange, I am offering you a 7-days-holiday on the Cruise Ship “Diamond Princess” or a 14-days-expedition to Antarctica. My parents had offered me these two options as a gift for my twenty-first birthday and since Bryan is not available, my next choice is you. What do you think? You choose, it does not matter for me.” Vanya is one of those friends that has never left you whatever you have been going through. However, you are a bit annoyed that she has always left things to the last minute. But her offer of vacation is coming to the right minute as you need a rest but you also do not have the money to go anywhere as you have volunteered all month and the money you have will get you only back to Edinburgh.',
        options: [
            {          
            text: 'Cruise Ship',
            requiredState: (currentState) => currentState.february_journey,
            setState: { february_journey: false, cruise_ship: true },
            nextText:9
            },
            {          
                text: 'Antarctica expedition',
                requiredState: (currentState) => currentState.february_journey,
                setState: { february_journey: false, antarctica: true },
                nextText:10
                }
        ]
    }
]

start();