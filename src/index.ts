function copy<T extends string | number | function> (_:T):T {
    return _;
}
function copy<T extends object[]>(_:T) {
    
}
function copy<T extends object | null>(_:T): T {

}

function copy (source) {
    switch(typeof source) {
        case 'number':
        case 'string':
        case 'function':
        default:
            return source;
        case 'object':
            if (source === null) {
                return null;
            }
            else if (Array.isArray(source)) {
                return source.map(item => copy(item));
            }
            else if (source instanceof Date) {
                return source;
            }
            else {                
                return Object.keys(source).reduce((a, k) => {                    
                    a[k] = copy(source[k]);
                    return a;
                }, {});
            }
    }
}

function merge (target, source) {
    if (target === source) {
	    return target;
    }
    else {
        return Object.keys(source).reduce((a, k) => {
            let value = source[k];
            if(typeof a[k] === 'object' && (k in a)){
                a[k] = merge(a[k], value);
            }
            else {
               a[k] = copy(value);
            }
            return a;
        }, copy(target));
    }    
}

let langs = {};
const language = localStorage.getItem('lang') || 'ru';

function add(lang, obj) {
    langs[lang] = langs[lang] || {};
    langs[lang] = merge(langs[lang], obj);
}

function get_translation(root, path) {
    const i = path.indexOf('.');
    if (i >= 0) {
        return get_translation(root[path.substring(0, i)], path.substring(i + 1));
    }
    else {
        return root[path];
    }
}

function translate(path) {
    return get_translation(langs[language], path);
}

export {
    add,
    translate,
    language,
};