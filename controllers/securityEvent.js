const SecurityEvent = require('../models').SecurityEvent;
module.exports = {
    create(req,res){
        return SecurityEvent
            .create({
                id: req.body.ID,
                pattern: req.body.pattern,
                tunnelName: req.body.tunnelName,
                tunnelID : req.body.tunnelID,
                URI: req.body.URI,
                srcIP: req.body.srcIP,
                srcPort: req.body.srcPort,
                source: req.body.source,
                description: req.body.description,
            })
            .then(securityEvent => res.status(201).send(securityEvent))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req,res){
        return SecurityEvent
            .findOne({
                id: req.params.eventID
            })
            .then(securityEvent => res.status(201).send(securityEvent))
            .catch(error => res.status(400).send(error));
    },
    retrieveAll(req,res){
        return SecurityEvent
            .findAll()
            .then(securityEvent => res.status(201).send(securityEvent))
            .catch(error => res.status(400).send(error));
    },
    delete(req,res){
        return SecurityEvent
            .destroy({
                where:{id : req.params.eventID}
            })
            .then(securityEvent => res.status(201).send(securityEvent))
            .catch(error => res.status(400).send(error));
    },
    deleteAll(req,res){
        return SecurityEvent
            .destroy({
                where:{}
            })
            .then(securityEvent => res.status(201).send(securityEvent))
            .catch(error => res.status(400).send(error));
    }

};