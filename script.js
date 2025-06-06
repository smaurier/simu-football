// generatePlayersIndex.js
const fs = require("fs");
const path = require("path");

const playersDir = path.resolve(__dirname, "players");
const outputFile = path.join(playersDir, "index.ts");

function toVariableName(filename) {
  // transforme "john-doe.ts" en "johnDoe"
  return filename
    .replace(/\.ts$/, "")
    .replace(/-([a-z])/g, (m, c) => c.toUpperCase());
}

function generate() {
  const files = fs
    .readdirSync(playersDir)
    .filter(
      (f) => f.endsWith(".ts") && f !== "index.ts" && !f.endsWith(".d.ts")
    )
    .sort();

  const imports = [];
  const exports = [];

  for (const file of files) {
    const varName = toVariableName(file);
    imports.push(`import ${varName} from "./${file.replace(".ts", "")}";`);
    exports.push(varName);
  }

  const content =
    `// Ce fichier est généré automatiquement, ne pas modifier à la main\n\n` +
    imports.join("\n") +
    `\n\nexport const allPlayers = [\n  ${exports.join(",\n  ")}\n];\n`;

  fs.writeFileSync(outputFile, content, "utf8");
  console.log(`Fichier index.ts généré avec ${files.length} joueurs.`);
}

generate();
