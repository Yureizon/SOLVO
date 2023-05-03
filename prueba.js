const nameList=[
    {
        name: "Violet",
        lastname: "Cannon"
    },
    {
        name: "Nancy",
        lastname: "Rice"
    },
    {
        name: "Mcneil",
        lastname: "Mcgee"
    },
    {
        name: "Greta",
        lastname: "Mccall"
    },
    {
        name: "Loretta",
        lastname: "Dotson"
    }
    ];
    
const fullname=[];

for (let i = 0; i<nameList.length; i++){
    fullname.push(nameList[i].name + " " + nameList[i].lastname);
}

console.log(fullname);
