// var AnimalTree = require('./treeData').AnimalTree

var DiscreteTraitDistribution = (function  (){

  var _tree = null;

  var recursivelyMapTraitsToClade = function(traits, node){
    console.log('yeah buddy')
    Object.keys(traits).forEach(function(trait){
      node[trait] = traits[trait]
      console.log('set ' + node[trait] + "equal to" + traits[trait])
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

DiscreteTraitDistribution.mapTraits({gassy: 'dolphinately'}, ['Vertebrates'])

console.log( DiscreteTraitDistribution.outputTree() )