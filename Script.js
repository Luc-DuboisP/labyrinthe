const size = 8;
const lab = data[0][size]["ex-0"];
let root = document.getElementById("lab");
let entrance;
let exit;

 function createLab()
{

    for (let i = 0; i < lab.length; i++)
    {
        //let path = document.setAttribute("path").getElementById("lab");
        let div = document.createElement("div");
        div.classList.add("case");
        div.classList.add("background");

        if (lab[i].walls[0] === true)
        {
            div.classList.add("wallTop");
        }

        if (lab[i].walls[1] === true)
        {
            div.classList.add("wallRight");
        }

        if (lab[i].walls[2] === true)
        {
            div.classList.add("wallBottom");
        }

        if (lab[i].walls[3] === true)
        {
            div.classList.add("wallLeft");
        }

        if (lab[i].entrance === true)
        {
            entrance = i;
            div.classList.add("entrance");
        }

        if (lab[i].exit === true)
        {
            exit = i;
            div.classList.add("exit");
        }

        root.appendChild(div);
    }
}

function createNeighbor() {
    for (let i = 0; i < lab.length; i++) {
        lab[i].neighbor = [];

        if (!lab[i].walls[0]) {
            lab[i].neighbor.push(i - size);
        }

        if (!lab[i].walls[1]) {
            lab[i].neighbor.push(i + 1)
        }

        if (!lab[i].walls[2]) {
            lab[i].neighbor.push(i + size)
        }

        if (!lab[i].walls[3]) {
            lab[i].neighbor.push(i - 1)
        }
    }
 }

createNeighbor();
createLab();

