
/*
	ok so what needs to happen is that:
		in the database, taxa are stored with all of the information needed to generate the visualization:

			something to scale with--species diversity? that sounds good. maybe age? ideally you can tweak these for the visualization.

			whatever additional trait data to display (optional really)
				-publication mentions,
				-hypotheses about consciousness...

			then just hierarchy of relations i guess.

			so then you need to write a script to generate a json to power the d3 visualization based on info from the db. not too hard.

				so maybe it shows the supertaxon and sisters and children of the target taxon, that's all; clicking on a taxon will recenter the display on that taxon, with the info about publications and shit off in a separate display tab on the right.


*/

var AnimalTree = {
  "name": "Animals",
  "species-diversity": "unknown",
  "species-diversity-source": "unknown",
  "taxon-age": "unknown",
  "taxon-age-source": "unknown",
  "children": [
  	{
  	  "name": "Radiata",
  	  "species-diversity": "unknown",
  	  "species-diversity-source": "unknown",
  	  "taxon-age": "unknown",
  	  "taxon-age-source": "unknown",
  	  "children": [
        {
          "name": "Ctenaphora",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        },
        {
          "name": "Cnidaria",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        }
      ],
  	},
  	{
  	  "name": "Bilateria",
  	  "species-diversity": "unknown",
  	  "species-diversity-source": "unknown",
  	  "taxon-age": "unknown",
  	  "taxon-age-source": "unknown",
  	  "children": [
  	  	{
  	  	  "name": "Arthropods",
  	  	  "species-diversity": "unknown",
  	  	  "species-diversity-source": "unknown",
  	  	  "taxon-age": "unknown",
  	  	  "taxon-age-source": "unknown",
  	  	  "children": [
  	  	  	{
  	  	  	  "name": "Spiders",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Insects",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Crustaceans",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	}



  	  	  ],
  	  	},
  	  	{
  	  	  "name": "Molluscs",
  	  	  "species-diversity": "unknown",
  	  	  "species-diversity-source": "unknown",
  	  	  "taxon-age": "unknown",
  	  	  "taxon-age-source": "unknown",
  	  	  "children": [
  	  	  	{
  	  	  	  "name": "Cephalopods",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Gastropods",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Bivalves",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	}


  	  	  ],
  	  	},
  	  	{
  	  	  "name": "Vertebrates",
  	  	  "species-diversity": "unknown",
  	  	  "species-diversity-source": "unknown",
  	  	  "taxon-age": "unknown",
  	  	  "taxon-age-source": "unknown",
  	  	  "children": [
  	  	  	{
  	  	  	  "name": "Tetrapods",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [
  	  	  	  	{
  	  	  	  	  "name": "Amphibians",
  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  "children": [],
  	  	  	  	},
  	  	  	  	{
  	  	  	  	  "name": "Amniotes",
  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  "children": [
  	  	  	  	  	{
  	  	  	  	  	  "name": "Mammals",
  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  "children": [
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Elephants",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Primates",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Carnivora",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Rodents",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	}

  	  	  	  	  	  ],
  	  	  	  	  	},

  	  	  	  	  	{
  	  	  	  	  	  "name": "Reptiles",
  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  "children": [
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Lizards",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Turtles",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},

  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Dinosaurs",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [
  	  	  	  	  	  	  	{
  	  	  	  	  	  	  	  "name": "Birds",
  	  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	  	}

  	  	  	  	  	  	  ],
  	  	  	  	  	  	}

  	  	  	  	  	  ],
  	  	  	  	  	}

  	  	  	  	  ],
  	  	  	  	}



  	  	  	  ],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Teleosts",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Chondrichthyes",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},

  	  	  ],
  	  	}
  	  ],
  	}
  ],
}

var addSize = function(rootOfTree, size){
	rootOfTree.size = size;
	rootOfTree.children.forEach(function(child){
		addSize(child, 0.8*size)
	})
}
var addCharge = function(rootOfTree, charge){
	rootOfTree.charge = charge;
	rootOfTree.children.forEach(function(child){
		addCharge(child, 0.8*charge)
	})
}
addSize(AnimalTree, 50)
addCharge(AnimalTree, 1400	)







var treeData =

	{
		'name': 'supertaxon of target taxon',
		'children': [
			{
				'name': 'target taxon',
				'children': [
					{
						'name': 'subtaxon 1 of target taxon'
					},
					{
						'name': 'subtaxon 2 of target taxon'
					},
					{
						'name': 'subtaxon 3 of target taxon'
					},
				]
			},
			{
				'name': 'sister taxon 1 of target taxon'
			},
			{
				'name': 'sister taxon 2 of target taxon'
			},
			{
				'name': 'sister taxon 3 of target taxon'
			}
		]
	}

























var otherthing = {'name': 'amniotes',
'value': 100,
'children': [

	{'name': 'sauropsids',
	'value': 100,
	'children': [

		{'name': 'diapsids',
		'value': 100,
		'children': [

			{'name': 'petrolacosaurus',
			'value': 100,
			'children': []},

			{'name': 'sauria',
			'value': 100,
			'children': [


				{'name': 'lepidosauria',
				'value': 100,
				'children': [

					{'name': 'lizards',
					'value': 100,
					'children': []},

					{'name': 'snakes',
					'value': 100,
					'children': []},

					{'name': 'turtles?',
					'value': 100,
					'children': []},

				]},

				{'name': 'archosauromorpha',
				'value': 100,
				'children': [

					{'name': 'archosauriformes',
					'value': 100,
					'children': [

						{'name': 'euparkeria',
						'value': 100,
						'children': []},

						{'name': 'archosauria',
						'value': 100,
						'children': [


							{'name': 'nil',
							'value': 100,
							'children': [
								{'name': 'phytosaurs',
								'value': 100,
								'children': []},

								{'name': 'nil',
								'value': 100,
								'children': [

									{'name': 'crocodilians',
									'value': 100,
									'children': []},

									{'name': 'rauisuchians',
									'value': 100,
									'children': []},
									{'name': 'ornithosuchians',
									'value': 100,
									'children': []},
									{'name': 'aetosaurs',
									'value': 100,
									'children': []},


								]},

							]},

							{'name': 'ornithodirans',
							'value': 100,
							'children': [

								{'name': 'pterosaurs',
								'value': 100,
								'children': []},

								{'name': 'nil',
								'value': 100,
								'children': [

									{'name': 'dinosauromorphs',
									'value': 100,
									'children': []},

									{'name': 'dinosaurs',
									'value': 100,
									'children': [

										{'name': 'ornithischians',
										'value': 100,
										'children': []},

										{'name': 'nil',
										'value': 100,
										'children': [

											{'name': 'sauropodomorphs',
											'value': 100,
											'children': []},

											{'name': 'nil',
											'value': 100,
											'children': [

												{'name': 'therapods',
												'value': 100,
												'children': []},

												{'name': 'birds',
												'value': 100,
												'children': []},
											]},
										]},
									]},
								]},



							]},


							{'name': 'nil',
							'value': 100,
							'children': []},





						]}





					]},

					{'name': 'euryapsida',
					'value': 100,
					'children': [

						{'name': 'ichthyosauria',
						'value': 100,
						'children': []},

						{'name': 'sauroptyrigia',
						'value': 100,
						'children': [

							{'name': 'placodontia',
							'value': 100,
							'children': []},
							{'name': 'pleisiosauria',
							'value': 100,
							'children': []}
						]}
					]},
				]},


			]}


		]},

	]},



	{'name': 'synapsids... mammals',
	'value': 100,
	'children': [

		{'name': 'carnivora',
		'value': 100,
		'children': [

			{'name': 'canids',
			'value': 100,
			'children': [

				{'name': 'dogs',
				'value': 100,
				'children': []},

				{'name': 'foxes',
				'value': 100,
				'children': []}

			]},

		{'name': 'kitties',
				'value': 100,
				'children': [

				{'name': 'lions',
				'value': 100,
				'children': []},

				{'name': 'tigers',
				'value': 100,
				'children': []},

				{'name': 'ocelots',
				'value': 100,
				'children': []},

				{'name': 'housecats?',
				'value': 100,
				'children': []},

				]},

			{'name': 'pinnipeds',
			'value': 100,
			'children': [

				{'name': 'sea lions',
				'value': 100,
				'children': []},

				{'name': 'seals',
				'value': 100,
				'children': [

					{'name': 'fur seal',
					'value': 100,
					'children': []},

					{'name': 'cute little baby seal',
					'value': 100,
					'children': []},

				]},

			]}


		]},

		{'name': 'cetaceans',
		'value': 100,
		'children': [

			{'name': 'odontocetes',
			'value': 100,
			'children': [

				{'name': 'dolphins',
					'value': 100,
					'children': []},

				{'name': 'orcas',
				'value': 100,
				'children': []},

				{'name': 'pilot whales',
					'value': 100,
					'children': []},


			]},


			{'name': 'other whales?',
			'value': 100,
			'children': [

				{'name': 'humpbacks',
					'value': 100,
					'children': []},

				{'name': 'blue whales',
				'value': 100,
				'children': []},

			]}


		]},


		{'name': 'bats!',
				'value': 100,
				'children': [

				{'name': 'micro ones',
				'value': 100,
				'children': [

					{'name': 'ugly bats',
					'value': 100,
					'children': []},

					{'name': 'cute bats',
					'value': 100,
					'children': []},
				]},

				{'name': 'macro ones?',
				'value': 100,
				'children': [

					{'name': 'flying foxes',
					'value': 100,
					'children': []},

					{'name': 'probably fruit bats?',
					'value': 100,
					'children': [

						{'name': 'apple bats',
						'value': 100,
						'children': []},

						{'name': 'orange bats',
						'value': 100,
						'children': [

							{'name': 'tangerine bats',
						'value': 100,
						'children': []},

						{'name': 'blood orange bats',
						'value': 100,
						'children': [

						{'name': 'type 0- blood orange bats',
						'value': 100,
						'children': []},

						{'name': 'type AB+ blood orange bats',
						'value': 100,
						'children': []},

						]},


						]},

						{'name': 'banana bats',
						'value': 100,
						'children': []},

					]},

				]},

			]},


		{'name': 'elephants',
		'value': 100,
		'children': [

			{'name': 'regular elephants',
				'value': 100,
				'children': []},

			{'name': 'mammoths',
			'value': 100,
			'children': [


				{'name': 'woolly',
				'value': 100,
				'children': []},

				{'name': 'silky',
				'value': 100,
				'children': []},

			]},


		]},



		{'name': 'primates',
		'value': 100,
		'children': [

			{'name': 'humans',
			'value': 100,
			'children': []},

			{'name': 'chimps',
			'value': 100,
			'children': [

				{'name': 'bonobos',
				'value': 100,
				'children': []},

				{'name': 'pan troglodyes',
				'value': 100,
				'children': []}
			]},

			{'name': 'gorrillas',
			'value': 100,
			'children': []},

			{'name': 'orangs',
			'value': 100,
			'children': []}


		]},

		{'name': 'ungulates',
			'value': 100,
			'children': [

				{'name': 'llamas',
				'value': 100,
				'children': [

					{'name': 'big llamas',
					'value': 100,
					'children': []},

					{'name': 'little llamas',
					'value': 100,
					'children': []},
				]},

			{'name': 'unicorns',
			'value': 100,
			'children': []},

			{'name': 'rhinos',
			'value': 100,
			'children': [
				{'name': 'wooly rhinos',
				'value': 100,
				'children': []},
				{'name': 'black rhinos',
				'value': 100,
				'children': []},
				{'name': 'white rhinos',
				'value': 100,
				'children': []},
			]},

		]},


	]}

]}

// exports.AnimalTree = AnimalTree;