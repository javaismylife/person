'use strict';

module.exports = function(app) {
    app.dataSources.personds.automigrate('Person', function(err) {
      if (err) throw err;
  
      app.models.Person.create([{
        firstName: 'Phani',
        lastName: 'Chitturi'
      }, {
        firstName: 'Uma',
        lastName: 'Chitturi'
      }], function(err, persons) {
        if (err) throw err;
  
        console.log('Models created: \n', persons);
      });
    });
  };