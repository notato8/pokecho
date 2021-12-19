import fs from "fs";
import path from "path";

export default function fetchGames() {
    const gamesDirectory = path.join(process.cwd(), "public/games");
    const fileNames = fs.readdirSync(gamesDirectory);

    let allGameData = {}
    fileNames.forEach(fileName => {
        const fullPath = path.join(gamesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const jsonResult = JSON.parse(fileContents);
        const id = fileName.replace(/\.json$/, "");

        allGameData[id] = {
            id,
            ...jsonResult
        };
    })
    return allGameData;
}