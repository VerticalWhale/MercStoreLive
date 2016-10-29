
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'projects': [
      { 'name': 'shirt',
        'image': '/images/TAP_Ad_300x300.jpg',
        'id': 'project1'
      },
      { 'name': 'shirt',
        'image': '/images/TAP_Ad_300x300.jpg',
        'id': 'project2'
      },
      { 'name': 'shirt',
        'image': '/images/TAP_Ad_300x300.jpg',
        'id': 'project3'
      },
     /* { 'name': 'Dat Boi',
        'image': '/images/TAP_Ad_300x300.jpg',
        'id': 'project4'
      },
      { 'name': 'Yo pass the Aux cord', 
        'image': '/images/TAP_Ad_300x300.jpg',
        'id': 'project5'
      },
      { 'name': 'You better not play trash',
        'image': '/images/TAP_Ad_300x300.jpg',
        'id': 'project6'
      },
      { 'name': 'Pokemon go song',
        'image': '/images/TAP_Ad_300x300.jpg',
        'id': 'project7'
      },
      { 'name': 'Heavy Whip',
        'image': '/images/TAP_Ad_300x300.jpg',
        'id': 'project8'
      }*/
    ]  
  });
};