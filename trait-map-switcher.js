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