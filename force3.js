

var width = 6000,
    height = 2200,

canvas = d3.select('body').append('svg')
      .attr('class', 'svg-canvas');

width = canvas.attr('width')


width =  $('svg').width()
height = $('svg').height()
// width = parseInt( ($('body').attr('width') ) * 0.9)

var tree = d3.layout.tree();

var nodes = tree(AnimalTree);

var links = tree.links(nodes)


var force = d3.layout.force()
  .charge(function(d){ return -d.charge})
  .gravity(0.2)
  .linkDistance(40)
  .size([width, height]);

force
  .nodes(nodes)
  .links(links)
  .start();

var link = canvas.selectAll(".link")
  .data(links)
  .enter()
  .append('path')
  // .style('stroke', 'black')

  // .append("line")
  // .attr("class", "link")
  // .style("stroke-width", function(d) { return Math.sqrt(3); });


// nodes.enter().append('g').attr('class', 'node')









var node = canvas.selectAll(".node")
  .data(nodes).enter().append("g")
  .attr("transform", function (d) {
      return "translate(" + d.x.toString() + "," + d.y.toString() + ")";
    });

var textitos = node.append('text').text(function(d){return d.name})
  .attr("font-family", "sans-serif")
  .attr("font-size", "15px")
  .style("fill", "black")
  .attr('x', '1000').attr('y', '1000')


var circulos = node.append('circle')
  .attr("class", "node")
  .attr("r", function(d){ return d.size})
  .attr('cx', function(d){ return d.x }).attr('cy', function(d){return d.y })
  .call(force.drag);

// canvas.selectAll(".node")
//   .data(nodes).up.append('text').text(function (d) { return "shit" })
//   .style('fill', 'red')
//   .attr('x', function (d) {
//     return d.cx
//   })
//   .attr('y', function (d) {
//     return d.cy
//   })

    force.on("tick", function() {
      // link.attr("x1", function(d) { return d.source.x; })
     //    .attr("y1", function(d) { return d.source.y; })
     //    .attr("x2", function(d) { return d.target.x; })
     //    .attr("y2", function(d) { return d.target.y; });
      link.attr('d', function(d){

        pathstring = "" +

        "M " + parseInt(1 * d.source.x).toString() + " " + parseInt(1 * d.source.y).toString() +

        " T " + parseInt(1 * (d.target.x + d.source.x)/2  ).toString() + " " + parseInt(1 * (3 + d.target.y + d.source.y)/2).toString() +

        " T " + parseInt(1 * d.target.x).toString() + " " + parseInt(1 * d.target.y).toString() +

        " Z"

        return pathstring
      }).style('fill', 'black');

      circulos.attr("cx", function(d) { return d.x })
        .attr("cy", function(d) { return d.y; });
      textitos.attr("x", function(d) { return d.x })
      .attr("y", function(d) { return d.y; });




    });

    // var scaleColor = d3.scale.linear()
    //                  .domain( [d3.min( nodes, function(d){ return d.name.length}), d3.max( nodes, function(d){ return d.name.length}) ])
    //                  .range( ["white", "black"]);


    var scaleColor = d3.scale.linear()
                    .domain (
                      [0, 30
                        // d3.max (nodes, function(d) {
                        //  if (d.children){ return d.children.length} else {return 0};
                        // } )

                      ])

                    .range ("green", "purple");




    // var tooltip = d3.select("body")
    // .append("div")
    // .style("position", "absolute")
    // .style("z-index", "10")
    // .style("visibility", "hidden")
    // .style("color", "red")
    // .style("font-size", "2em")
    // .text("a simple tooltip");










//COLOR STUFF; refactor into module



var colors = {
  baseline: "rgba(10, 100, 10, 0.3)",
  // hover: "rgba(10, 10, 10, 0.7",
  conscious: "rgba(100, 10, 10, 0.4)"
}


circulos.style('fill', function(d){
  var thisColor = colors.baseline
  console.log( Object.keys(colors) )

  Object.keys(colors).forEach(function(category){

      console.log(!!d[category]   )

    if (!!d[category]){

      thisColor = colors[category]
    }
  })


  return thisColor


});

// node.style('stroke', 'white')
link.style('stroke', 'black')

node
  .on("mouseover", function(d){
      d3.select(this).style(colors.hover)
      if (d.children) {
      } else { console.log(0)};
    // tooltip.text(d.name);
    // tooltip.style("visibility", "visible");
  })
  // .on("mousemove", function(){
  //   tooltip.style("top",
  //   (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
  // })

  .on("mouseout", function(){
    d3.select(this).style('fill', function(d){
      Object.keys(colors).forEach(function(category){
        if (colors.category){
          return colors.category;
        } else {
          return colors.baseline;
        }
      })
    })
    // tooltip.style("visibility", "hidden");
  });


