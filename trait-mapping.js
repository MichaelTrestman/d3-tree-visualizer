// var AnimalTree = require('./treeData').AnimalTree

var DiscreteTraitDistribution = (function  (){

  var _tree = null;

  var recursivelyMapTraitsToClade = function(traits, node){
    Object.keys(traits).forEach(function(trait){
      node[trait] = traits[trait]
    });

    node.children.forEach(function(child){
      recursivelyMapTraitsToClade(traits, child)
    })

  }
  var recursivelySearchForOriginTaxaToMapFrom = function(node, originTaxa, traits){
    if (originTaxa.some(function(taxon){ return taxon === node.name }) ){
      recursivelyMapTraitsToClade(traits, node)
    } else {
      node.children.forEach(function(child){recursivelySearchForOriginTaxaToMapFrom(child, originTaxa, traits)
      })
    }
  }

  return {

    setTree:function (tree) {
      _tree = tree;
    },
    outputTree: function(){
      return _tree;
    },
    treeName: function(){
      return _tree.name;
    },
    mapTraits: function(traits, originTaxa){
      recursivelySearchForOriginTaxaToMapFrom(_tree, originTaxa, traits)
    }
  }

}());

DiscreteTraitDistribution.setTree(AnimalTree)


OriginHypotheses = {
  humans: ['Humans'],
  greatApes: ['Hominidae'],
  mammals: ['Mammals'],
  bigThree: ['Vertebrates', 'Arthropods', 'Molluscs'],
  bilateria: ['Bilateria']

}


DiscreteTraitDistribution.mapTraits({"conscious": 'dolphinately'}, OriginHypotheses.bigThree)

// console.log( DiscreteTraitDistribution.outputTree() )