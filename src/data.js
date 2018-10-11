const priorities = {
  high:{
    id: 1,
    code:"high",
    color: "#dc3545"
  },
  medium:{
    id: 2,
    code:"medium",
    color:"#fd7e14"
  },
  low:{
    id: 3,
    code: "low",
    color:"#28a745"
  }
}

const positions = Object.freeze({
  Director: {
    id: 1,
    code: "Director"
  },
  Designer: {
    id: 2,
    code: "Designer"
  },
  Developer: {
    id:3,
    code: "Developer"
  }
})

const membersSample = [
{
  id: 1,
  name: "Sato",
  position: positions.Director,
  color: "#e26a6a",
  initials: "SA"
},
{
  id: 2,
  name: "Thomas Prost",
  position: positions.Developer,
  color: "#81cfe0",
  initials: "TP"
},{
  id: 3,
  name: "Noriko",
  position: positions.Director,
  color: "#ffffcc",
  initials: "NO"
}]

const membersSampleInitials = membersSample.map(mem => mem.initials)

const projectsSample = [
  {
    id: 1,
    name: "Graf Lantz",
    priority: priorities.medium
  },
  {
    id: 2,
    name: "Jean Paul Hévin",
    priority: priorities.high,
  },
  {
    id:3,
    name: "Cmic",
    priority: priorities.low
  }
]

const projectsIndex = 4
const membersIndex = 4

// A list of soft colors I found on http://www.flatuicolorpicker.com 
// Credits to them for it
const colors = [
  "#f1a9a0",
  "#ff9478",
  "#e26a6a",
  "#ec644b",
  "#aea8d3",
  "#bf55ec",
  "#9b59b6",
  "#81cfe0",
  "#6bb9f0",
  "#3a539b",
  "#89c4f4",
  "#7befb2",
  "#c8f7c5",
  "#ffffcc",
  "#ffec8b",
  "#f4d03f",
  "#f2784b",
  "#f4b350",
  "#f2f1ef",
  "#6c7a89",
  "#67809f"
]

const colorsLength = colors.length

export {
  priorities,
  positions,
  colors,
  colorsLength,
  membersSample,
  membersIndex,
  membersSampleInitials, 
  projectsSample,
  projectsIndex
}