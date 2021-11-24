export const lab = data[0]["3"]["ex-0"];
let root = document.getElementById("lab");

export function createLab()
{


    for (let i = 0; i < lab.length; i++)
    {
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
            div.classList.add("entrance");
        }

        if (lab[i].exit === true)
        {
            div.classList.add("exit");
        }

        root.appendChild(div);
    }
}
createLab()

