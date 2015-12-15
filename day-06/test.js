var Matrix = function (rows, columns)  {
    this.rows = rows
    this.columns = columns
    this.myarray = new Array(this.rows)
    for (var i=0; i < this.columns; i +=1) {
        this.myarray[i]=new Array(this.rows)
    }
    return this.myarray
}

var m = new Matrix(2,2);

var m2 = new Matrix(3,3);

console.log(m, m2)
