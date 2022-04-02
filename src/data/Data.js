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
        text: `${localStorage.getItem("charName")}, eh?`
    }
]

export default data