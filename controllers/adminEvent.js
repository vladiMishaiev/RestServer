const AdminEvent = require('../models').AdminEvent;
module.exports = {
    create(req,res){
        console.log(req.body.toString());
        return AdminEvent
          .create({
              id: req.body.ID,
              subType: req.body.subType,
              source: req.body.source,
              description: req.body.description
              })
          .then(adminEvent => res.status(201).send(adminEvent))
          .catch(error => res.status(400).send(error));
    },
    retrieve(req,res){
      return AdminEvent
          .findOne({
                  id: req.params.eventID
              })
          .then(adminEvent => res.status(201).send(adminEvent))
          .catch(error => res.status(400).send(error));
    },
    retrieveAll(req,res){
        return AdminEvent
            .findAll()
            .then(adminEvent => res.status(201).send(adminEvent))
            .catch(error => res.status(400).send(error));
    },
    delete(req,res){
        return AdminEvent
            .destroy({
                where:{id : req.params.eventID}
            })
            .then(adminEvent => res.status(201).send(adminEvent))
            .catch(error => res.status(400).send(error));
    },
    deleteAll(req,res){
        return AdminEvent
            .destroy({
                where:{}
            })
            .then(adminEvent => res.status(201).send(adminEvent))
            .catch(error => res.status(400).send(error));
    }

};