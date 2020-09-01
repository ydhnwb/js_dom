let obj = {
    name: 'Carrot',
    "for": "Max",
    details: {
        color: "orange",
        size: 12
    }
}


console.log(obj["for"]);
console.log(obj.details.color);
console.log(obj["details"]["size"]);


let supermanObj = {
    id: "1a2b3c",
    name: "Superman",
    age: 200,
    favorites: [
        "coding",
        "reading",
        {
            sports: ["parkour", "hill climbing"]
        }
    ],
    address: {
        street: "Planet Krypton",
        zipcode: 54321
    }
}

console.log(supermanObj.favorites[2])
