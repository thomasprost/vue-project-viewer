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

export {
  priorities,
  positions
}