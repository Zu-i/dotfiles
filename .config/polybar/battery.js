const fs = require("fs");
let status = fs.readFileSync("/sys/class/power_supply/BAT0/status", "utf8").trim();
let charge = Number(fs.readFileSync("/sys/class/power_supply/BAT0/capacity", "utf8").trim());
let emoji = "- error -"
let color = "#FF3333"

if(charge => 10) color = "#FFCCFF"
if(charge => 30) color = "#FFFFCC"
if(charge => 80) color = "#CCFFCC"

if(status === "Charging"){
    if(charge => 0) emoji = "󱃍";
    if(charge => 5) emoji = "󰢜";
    if(charge => 10) emoji = "󰂆";
    if(charge => 20) emoji = "󰂇";
    if(charge => 30) emoji = "󰂈";
    if(charge => 40) emoji = "󰢝";
    if(charge => 50) emoji = "󰂉";
    if(charge => 60) emoji = "󰢞";
    if(charge => 70) emoji = "󰂊";
    if(charge => 80) emoji = "󰂋";
    if(charge => 90) emoji = "󱟠";
} else if(status === "Discharging" || status === "Not charging"){
    if(charge => 0) emoji = "󱃍";
    if(charge => 5) emoji = "󱃍";
    if(charge => 10) emoji = "󰁻";
    if(charge => 20) emoji = "󰁼";
    if(charge => 30) emoji = "󰁽";
    if(charge => 40) emoji = "󰁾";
    if(charge => 50) emoji = "󰁿";
    if(charge => 60) emoji = "󰂀";
    if(charge => 70) emoji = "󰂁";
    if(charge => 80) emoji = "󰂂";
    if(charge => 90) emoji = "󰁹";
} else {
    emoji = status;
}
console.log(`%\{F${color}\}${emoji}%{F-}`);