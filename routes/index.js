
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'projects': [
      { 'name': 'LMAO DEM JUKES',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'YEEEEEEEEEEEEEEEEEEEEEEEEEEEET',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Wow guy',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Dat Boi',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'Yo pass the Aux cord', 
        'image': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      },
      { 'name': 'You better not play trash',
        'image': 'lorempixel.people.2.jpeg',
        'id': 'project6'
      },
      { 'name': 'Pokemon go song',
        'image': 'lorempixel.technics.2.jpeg',
        'id': 'project7'
      },
      { 'name': 'Heavy Whip',
        'image': 'lorempixel.city.2.jpeg',
        'id': 'project8'
      }
    ]  
  });
};