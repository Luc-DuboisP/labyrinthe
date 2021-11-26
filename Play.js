let visited = [];

function DFSIterative(e)
{

    let S = [];
    S.push(e);
    visited.splice(0);

    while (S.length !== 0)
    {
        const v = lab[S.pop()];

        if(v.visited !== true)
        {
            v.visited = true;
            for (let w of v.neighbor) {
                if (!lab[w].visited) {
                    lab[w].parent = v
                    S.push(w)
                }
        }

        if(v.exit)
        {
            console.log('sors passe-par-tout');
            return S;
        }
    }
    }
    return undefined;
}

// function DFSRecursive(v)
// {
//     if(v.visited !== true) {
//         v.visited = true;
//     }
// }

DFSIterative(entrance);
//DFSRecursive();

