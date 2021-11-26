let visited = [];

function DFSIterative(e)
{

    let S = [];
    S.push(e);
    visited.splice(0);

    while (S.length !== 0)
    {
        const index = S.pop();
        const v = lab[index];


        if(v.visited !== true)
        {
            v.visited = true;
            addVisitedBox(index)

            if(v.exit)
            {
                let w = v;
                console.log('sors passe-par-tout');
                while (w.parent !== undefined)
                {
                    addPath(w.index)
                    w = w.parent;
                }
                return;
            }
            for (let w of v.neighbor) {
                if (!lab[w].visited) {
                    lab[w].parent = v
                    S.push(w)
                }
        }

    }
    }
    return undefined;
}

function DFSRecursive(v) {
    if (v.visited !== true) {
        v.visited = true;

        if (v.exit) {
            console.log('sors passe-par-tout');
            return lab.indexOf(v);
        }

        for (let w of v.neighbor) {
            if (!lab[w].visited) {

            }
        }


    }
}

DFSIterative(entrance);
//DFSRecursive();

