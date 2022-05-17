const data = [
    {
        id: 0,
        text: [
            'Hello and welcome to Unnamed Vue RPG!',
            'To get started, enter your character name below!',
        ],
        prompt: true,
        promptType: 'charName',
        next: 1
    },
    {
        id: 1,
        text: [
            'What kind of adventurer are you?'
        ],
        options: [
            {
                class: 'Fighter',
                hp: 20,
                abilities: [
                    "Power Attack",
                    "Defensive Stance",
                    "Battle Cry"
                ],
                description: 'Clad in heavy armor, the fighter is a master of melee weapons, capable of taking and dealing damage.'
            },
            {
                class: 'Rogue',
                hp: 16,
                abilities: [
                    'Stealth',
                    'Sneak Attack',
                    'Evasion'
                ],
                description: "A trickster that keeps to the shadows, the rogue capitalizes on enemies' weaknesses and striking from cover."
            },
            {
                class: 'Monk',
                hp: 18,
                abilities: [
                    'Hundred Fists',
                    'Flurry of Blows',
                    'Meditation'
                ],
                description: "Often discounted due to their serene nature, a monk is a deadly storm of martial arts prowess."
            },
            {
                class: 'Ranger',
                hp: 16,
                abilities: [
                    "Hunter's Mark",
                    'Track Prey',
                    'Pass Without a Trace'
                ],
                description: "A hunter by trade, more at home in the wild than in the cities, the ranger is an excellent marksman with a bow."
            },
            {
                class: 'Mage',
                hp: 12,
                abilities: [
                    'Arcane Focus'
                ],
                spells: [
                    'Fire Bolt',
                    'Missile Swarm'
                ],
                description: "Harnessing the power of the elements, the mage can rain down destruction on their foes from afar. "
            },
            {
                class: 'Cleric',
                hp: 12,
                abilities: [
                    'Turn Undead'
                ],
                spells: [
                    'Lesser Heal',
                    'Smite',
                ],
                description: "A conduit for holy magic, the cleric can use the light to heal and support their allies or burn their foes in righteous fury."
            }
        ],
        next: 2
    },
    {
        id: 2,
        text: [
            `So you're ${localStorage.getItem('charName')}, eh?`,
            'Nice to meet you!'
        ],
        next: 3,
    },
    {
        id: 3,
        text: [
            `${localStorage.getItem('charName')} the ${localStorage.getItem('mcClass')}, eh?`,
            `Strange things are afoot nowadays, I hope you're prepared!`,
            `You will meet all sorts of characters and enemies on your journey in this strange land.`,
            `Are you ready to begin?`
        ],
        prompt: true,
        next: 4,
    },
    {
        id: 4,
        text: [
            `You awaken in a damp, dark place. You rub the sleep out of your eyes, and your back feels sore from sleeping in a sitting position on the stone floor. Standing up, you can see the single door to this room, though cell might be a better defining word. A window stands opposite the door.`
        ],
        next: 5,
    },
    {
        id: 5,
        text: [
            `The door is made of a heavy wood, and is supported by iron along its edges and across the center. A small square section bound in iron stands at face level.`
        ],
        next: 6,
    },
    {
        id: 6,
        text: [
            `The window, little more than a foot high and wide, is lined with metal bars. It is slightly above your eye line, making it impossible to see outside.`,
            `You can hear the sounds of waves crashing against the land. You are near a the ocean, as best as you can tell.`
        ],
        next: 7,
    },
    {
        id: 7,
        text: [
            `Inspecting the meager bedding, you find a single metal pick with a piece of parchment wrapped around it.`
        ],
        next: 8
    },
    {
        id: 8,
        text: [
            `The parchment reads:`,
            `I know you're probably confused right now, but that's to be expected. All you need to know is you need to get out of here.`,
            `Only after you finish reading the parchment do you realize it is penned in your own handwriting.`
        ],
        next: 9
    },
    {
        id: 9,
        text: [
            `You place the metal pick into a small opening in the door. It takes a moment, but you get a feel for the internal workings.`,
            `Before long, you hear a satisfying click. You have unlocked the door.`
        ],
        next: 10,
    },
    {
        id: 10,
        text: [
            `You peek out from behind the door and see a hallway to either side. The hallway is lined with doors. To the left, the hallway curves to the right. To the right, the hallway curves to the left.`
        ],
        next: 11,
    },
    {
        id: 11,
        text: [
            `You turn left down the hallway. You idly test some of the doors as you pass: they all appear to be locked. As the hallway curves, you can see a figure at the end of the hallway, clad in dark robes, fumbling at one of the doors.`
        ],
        next: 12,
    },
    {
        id: 12,
        text: [
            `The figure turns as you approach. They pull back the hood on the robe to reveal a scarred female face with a shock of red hair, braided neatly to drape down her shoulder.`,
            `"Oh, you're out already?" Guess I should've expected that. Let's get out of here!"`
        ],
        next: 13,
    },
    {
        id: 13,
        text: [
            `You don't remember me? You must've really hit your head hard back there! No matter, it's time to go!`
        ],
        next: 14
    },
    {
        id: 14,
        text: [
            `Okay, stand back from the wall there.`,
            `She chants some arcane words that you do not understand, and a glowing energy forms in her hands.She releases the energy and demolishes a section of the wall.`,
            `"Come on!", she says, and jumps out the window.`
        ],
        next: 15
    },
    {
        id: 15,
        text: [
            `You plunge out the window, and feel the wind rush past you as you begin to fall. Then you feel as if something gently cradles you, slowing your fall.`,
            `You glide slowly down onto the sand below. You turn and look back to the tower and see it must have been hundreds of feet tall.`
        ],
        next: 16
    }, 
    {
        id: 16,
        text: [
            `"Follow me!" your companion shouts as she darts across the beach into a copse of trees nearby.`
        ],
        next: 17
    },
    {
        id: 17,
        text: [
            `Once you two are out of the immediate line of sight of the tower, your companion turns and looks you up and down.`,
            `"You don't look too worse for the wear. I guess introductions are in order... again. I'm Zaakia, nice to meet you." She stretches out her hand to shake yours.`,
            `Zaakia has joined the party!`
        ],
        next: 18
    },
    {
        id: 18,
        text: [
            `"We need to stick together, it's gonna get pretty rough here in a bit. Get ready for a fight!" She says as she darts deeper into the copse of trees.`
        ],
        next: 19
    }, 
    {
        id: 19,
        text: [
            `You enter a small clearing and see a group of goblins around a campfire. They do not appear to have noticed you yet.`
        ],
        next: 20
    }
]

export default data