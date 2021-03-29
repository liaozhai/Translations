type Hash = string | {[key: string]: Hash};

let n = <number>'123';

function merge (fst: Hash, snd: Hash): Hash {
    if(typeof fst === 'string') {
        return snd;
    }
    if (typeof snd === 'string') {
        return snd;
    }
    for (let k of Object.keys(snd)) {
        let v = snd[k];
        if (fst[k]) {
            if (typeof v === 'string') {
                fst[k] = v;
            }
            else if (typeof fst[k] === 'string') {
                fst[k] = v;
            }
            else {
                fst[k] = merge(fst[k], v);
            }            
        }
        else {
            fst[k] = v;
        }
    }
    return fst;
}

window.addEventListener('load', () => {

    let lang = {};    

    merge (lang, {menu: {map: {create: 'Create'}}});
    console.log(lang);

    merge (lang, {menu: {layer: {create: 'Create'}}});
    console.log(lang);
    
});