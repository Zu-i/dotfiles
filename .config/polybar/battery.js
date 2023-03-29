const fs = require("fs");
const status = fs.readFileSync("/sys/class/power_supply/BAT0/status", "utf8").trim();
const charge = Math.round(Number(fs.readFileSync("/sys/class/power_supply/BAT0/capacity", "utf8").trim()) / 10) * 10;
let emoji = "- error -"
let color = "#FF3333"

const emojis = { // 0 - 11
    c: ["󱃍", "󱟡", "󰢜", "󰂆", "󰂇", "󰂈", "󰢝", "󰂉", "󰢞", "󰂊", "󰂋", "󰂅"],
    d: ["󱃍", "󱃍", "󰁺", "󰁻", "󰁼", "󰁽", "󰁾", "󰁿", "󰂀", "󰂁", "󰂂", "󰁹"]
}

if(false){ console.log(Math.random()>0.5 ? emojis.c.join("  ") : emojis.d.join("  ")) } // for debug

if(charge === 0) color = "#FFCCCC";
if(charge === 10) color = "#FFD9CC";
if(charge === 20) color = "#FFE6CC";
if(charge === 30) color = "#FFF2CC";
if(charge === 40) color = "#FFFFCC";
if(charge === 50) color = "#E6FFCC";
if(charge === 60) color = "#CCFFCC";
if(charge === 70) color = "#CCFFE6";
if(charge === 80) color = "#CCFFF2";
if(charge === 90) color = "#CCFFFF";
if(charge === 100) color = "#CCE6FF";

if(status === "Charging"){
    if(charge === 0) emoji = emojis.c[0];
    if(charge === 10) emoji = emojis.c[1];
    if(charge === 20) emoji = emojis.c[2];
    if(charge === 30) emoji = emojis.c[3];
    if(charge === 40) emoji = emojis.c[4];
    if(charge === 50) emoji = emojis.c[5];
    if(charge === 60) emoji = emojis.c[6];
    if(charge === 70) emoji = emojis.c[7];
    if(charge === 80) emoji = emojis.c[8];
    if(charge === 90) emoji = emojis.c[9];
    if(charge === 100) emoji = emojis.c[10];
} else if(status === "Discharging" || status === "Not charging"){
    if(charge === 0) emoji = emojis.d[0];
    if(charge === 10) emoji = emojis.d[1];
    if(charge === 20) emoji = emojis.d[2];
    if(charge === 30) emoji = emojis.d[3];
    if(charge === 40) emoji = emojis.d[4];
    if(charge === 50) emoji = emojis.d[5];
    if(charge === 60) emoji = emojis.d[6];
    if(charge === 70) emoji = emojis.d[7];
    if(charge === 80) emoji = emojis.d[8];
    if(charge === 90) emoji = emojis.d[9];
    if(charge === 100) emoji = emojis.d[10];
}

console.log(`%\{F${color}\}${emoji}%{F-}`);