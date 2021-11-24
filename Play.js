import * as script from './Script.js'


function DFSInteractive(e)
{
    let visited = [];
    let S = [];
    S.push(e);

    while (!S.length)
    {
        e = script.lab[S.pop()];

        if(e.visited !== 0)
        {
            e.visited = true;
            visited.push(script.lab.indexOf(e))
        }

        if(e.exit)
        {
            console.log('dehors');
            return S;
        }

        for (let w of v)
        {

        }
    }
    return undefined;
}

