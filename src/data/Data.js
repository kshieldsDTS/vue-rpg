const data = [
    {
        id: 0,
        text: 'Hello and welcome to Unnamed Vue RPG!',
        text2: 'To get started, enter your character name below!',
        prompt: true,
        promptType: 'charName'
    },
    {
        id: 1,
        text: 'What kind of adventurer are you?',
        options: [
            {
                class: 'Fighter',
                hp: 20,
                description: 'Clad in heavy armor, the fighter is a master of melee weapons, capable of taking and dealing damage.'
            },
            {
                class: 'Rogue',
                hp: 16,
                description: "A trickster that keeps to the shadows, the rogue capitalizes on enemies' weaknesses and striking from cover."
            },
            {
                class: 'Monk',
                hp: 18,
                description: "Often discounted due to their serene nature, a monk is a deadly storm of martial arts prowess."
            },
            {
                class: 'Ranger',
                hp: 16,
                description: "A hunter by trade, more at home in the wild than in the cities, the ranger is an excellent marksman with a bow."
            },
            {
                class: 'Mage',
                hp: 12,
                description: "Harnessing the power of the elements, the mage can rain down destruction on their foes from afar. "
            },
            {
                class: 'Cleric',
                hp: 12,
                description: "A conduit for holy magic, the cleric can use the light to heal and support their allies or burn their foes in righteous fury."
            }
        ]
    }
]

export default data