import{dirname as t,resolve as e}from"path";import{fileURLToPath as o}from"url";import{readFile as r}from"fs/promises";const i=o(import.meta.url),m=t(i);var f=new Set([{path:"/",name:"FUNDING.yml",workflow:async()=>new Set([(await r(e(`${m}/../../src/templates/.github/FUNDING.yml`),"utf-8")).toString()])}]);export{f as default};
