// d3.select("body").append("p").text("New paragraph!");


// File conversoin inside csv
var rowConverter= function(d){
    return {
        x: d.parseInt(d.x),
        y: d.parseInt(d.y)
    };
}

d3.csv("my_second_file.csv", rowConverter, function(data){
    console.log(data);
});