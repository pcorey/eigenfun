var math = require('mathjs');

var c = [0,0];

function M2x2(value) {
    if (value.constructor == Array) {
        if (value[0].constructor != Array) {
            this.buildFromComplex(value);
        }
        else {
            this.value = value;
        }
    }
}

M2x2.prototype.buildFromComplex = function(complex) {
    this.value = [
        [complex[0], -complex[1]],
        [complex[1],  complex[0]]
    ];
};

M2x2.prototype.tr = function() {
    return this.value[0][0] + this.value[1][1];
};

M2x2.prototype.det = function() {
    var a = this.value[0][0];
    var b = this.value[0][1];
    var c = this.value[1][0];
    var d = this.value[1][1];
    return (a * d) - (c * b);
};

M2x2.prototype.toString = function() {
    return '[' + this.value.map(function(row) {
        return '['+row+']';
    }).join(',') + ']';
};

M2x2.prototype.eigenvalues = function() {
    var tr = this.tr();
    var det = this.det();
    var sqrt = math.chain(tr)
                   .multiply(tr)
                   .subtract(4*det)
                   .sqrt()
                   .done();
    return [
        math.chain(tr).add(sqrt).divide(2).done(),
        math.chain(tr).subtract(sqrt).divide(2).done()
    ];
};

//var m = new M2x2([1,2]);
var m = new M2x2([1,2]);
console.log(m+'');
console.log(m.eigenvalues());