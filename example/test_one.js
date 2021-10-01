// File conversoin inside csv
var rowConverter= function (d){
	return{
		x: parseInt(d.x),
		y: parseInt(d.y)
	};
}

// GLobal var to store the DATA
var dataset;

d3.csv("file.csv", rowConverter, function(e, data){
    dataset= data

    //catch and throw error
    if (e){
        console.log(e)
    }
    //if no error data loads sucessfully
    else{
        console.log(data);
    }

// We add other function here to CALL for visualization
});

var my_data= [4,5,6,7,8,9]


// Assoicating the dataset to HTML element
// d3.select("bdoy").selectAll("p")
// .data(my_data)
// .enter()
// .append("p")
// .text(function(d){
//     return d;
// });