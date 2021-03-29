(function () {
    'use strict';

    function merge(fst, snd) {
        if (typeof fst === 'string') {
            return snd;
        }
        if (typeof snd === 'string') {
            return snd;
        }
        for (var _i = 0, _a = Object.keys(snd); _i < _a.length; _i++) {
            var k = _a[_i];
            var v = snd[k];
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
    window.addEventListener('load', function () {
        var lang = {};
        merge(lang, { menu: { map: { create: 'Create' } } });
        console.log(lang);
        merge(lang, { menu: { layer: { create: 'Create' } } });
        console.log(lang);
    });

}());
//# sourceMappingURL=main.js.map
