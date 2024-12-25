#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function createDirectoryStructure(baseDir, structure) {
  structure.forEach((item) => {
    const itemPath = path.join(baseDir, item.path);
    if (item.type === "dir") {
      fs.mkdirSync(itemPath, { recursive: true });
    } else if (item.type === "file") {
      fs.writeFileSync(itemPath, item.content || "");
    }
  });
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error("Usage: generate-project <project_name>");
    process.exit(1);
  }

  const projectName = args[0];
  const structure = [
    { path: "data/raw", type: "dir" },
    { path: "data/processed", type: "dir" },
    { path: "data/logs", type: "dir" },
    { path: "configs", type: "dir" },
    { path: "scraper", type: "dir" },
    { path: "database", type: "dir" },
    { path: "tests", type: "dir" },
    { path: "configs/settings.js", type: "file", content: "// Configuration settings\n" },
    { path: "scraper/base_scraper.js", type: "file", content: "// Base scraper logic\n" },
    { path: "README.md", type: "file", content: "# Project Name\n" },
  ];

  createDirectoryStructure(projectName, structure);
  console.log(`Project structure created at ${projectName}`);
}

main();
