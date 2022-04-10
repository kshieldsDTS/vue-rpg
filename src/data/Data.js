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
]

export default data