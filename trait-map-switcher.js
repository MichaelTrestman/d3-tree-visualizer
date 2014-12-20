  // $("#" + origHyp).click(function(){
  //   DiscreteTraitDistribution.mapTraits({"conscious": null}, ['Animals'])
  //   DiscreteTraitDistribution.mapTraits({"conscious": 'dolphinately'}, OriginHypotheses[origHyp])
  //   console.log('yo: ' + origHyp)
  //   styleDat();



Object.keys(OriginHypotheses).forEach(function(origHyp){

  $("#" + origHyp).click(function(){
    DiscreteTraitDistribution.mapTraits({"conscious": null}, ['Animals'])
    DiscreteTraitDistribution.mapTraits({"conscious": 'dolphinately'}, OriginHypotheses[origHyp])
    console.log('yo: ' + origHyp)
    styleDat();

  })

})


//display shit on info panel

$('.node').click(function(d){
  clade = d.target.__data__
  var panel = $('.info-panel')
  var url;
  if (clade['species-diversity-source'] === 'unknown') {
    url = "https://www.google.com/search?q=" + clade.name;
  } else if (clade['species-diversity-source']) {
    url = clade['species-diversity-source']
  };;

  panel.empty();
  panel.append("<p>"+ clade.name +"</p>")
  panel.append("<p> species count:"+ clade['species-diversity'] +"</p>")
  panel.append("<p><a target='_blank' href='"+ url + " '>  website: "+ url +"</a></p>")


})