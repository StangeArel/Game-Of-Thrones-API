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
}
