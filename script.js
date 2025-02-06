const gameOTApiUrl = "https://thronesapi.com/api/v2/Characters";
const gameOTApiLimit = 10;
const gameOTOffset = 0;
let gameOTDataList = [];
const gameOTList = document.getElementById("conteinerForEverything");

async function fetchGOTCharactersList() {
    const response = await fetch(gameOTApiUrl);
    if (!response.ok) {
        return console.error("API error");
    }
    const responseJson = await response.json();
    const data = responseJson.slice(gameOTOffset, gameOTOffset + gameOTApiLimit);
    gameOTDataList = [];
    await fetchGOTCharactersDetails(data);
    renderGOTCharacters();
}

async function fetchGOTCharactersDetails(characterList) {
    for (let i = 0; i < characterList.length; i++) {
        let oneCharacter = characterList[i];
        gameOTDataList.push({
            name: oneCharacter.fullName,
            role: oneCharacter.title,
            imgUrl: oneCharacter.imageUrl
        });
    }
}

function renderGOTCharacters() {
    let gotListRef = gameOTList;
    gotListRef.innerHTML = "";
    for (let i = 0; i < gameOTDataList.length; i++) {
        const oneCharacter = gameOTDataList[i];
        let template = generateTemplatesForRenderGOT(oneCharacter);
        gotListRef.innerHTML += template;
    }
}
