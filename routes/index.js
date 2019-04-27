const adminEventController = require('../controllers').adminEvent;
const securityEventController = require('../controllers').securityEvent;

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message: 'welcome',
    }));

    app.post('/api/events/admin/newEvent',adminEventController.create);

    app.get('/api/events/admin/:eventID',adminEventController.retrieve);

    app.get('/api/events/admin/',adminEventController.retrieveAll);

    app.delete('/api/events/admin/:eventID',adminEventController.delete);

    app.delete('/api/events/admin/',adminEventController.deleteAll);



    app.post('/api/events/security/newEvent',securityEventController.create);

    app.get('/api/events/security/:eventID',securityEventController.retrieve);

    app.get('/api/events/security/',securityEventController.retrieveAll);

    app.delete('/api/events/security/:eventID',securityEventController.delete);

    app.delete('/api/events/security/',securityEventController.deleteAll);
};