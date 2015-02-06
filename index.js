var math = require('mathjs');

function trace(m) {
    var sum = 0;
    for (var i = 0; i < m._data[0].length; i++) {
        sum += m._data[i][i];
    }
    return sum;
}

function eigenvalues(m) {
    var tr = trace(m);
    var det = math.det(m);
    var sqrt = math.chain(tr)
                   .multiply(tr)
                   .subtract(4*det)
                   .sqrt()
                   .done();
    return [
        math.chain(tr).add(sqrt).divide(2).done(),
        math.chain(tr).subtract(sqrt).divide(2).done()
    ];
}

function eigenvectors(m, eigenvalues) {
    //http://rosettacode.org/wiki/Reduced_row_echelon_form#JavaScript
};

var c = math.complex(1,2);
var m = math.matrix([[c.re, -c.im],
                     [c.im,  c.re]]);

console.log(eigenvalues(m));
