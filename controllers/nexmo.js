var Nexmo = require('nexmo');

var nexmo = new Nexmo({
    apiKey: process.env.NEXMO_KEY,
    apiSecret: process.env.NEXMO_SECRET
  });

class Verification {
  static reqVer(req,res){
    console.log(req.body);
    nexmo.verify.request(
      {number:req.body.phone,brand:'Miranews'},(err, response) => {
        if (err) {
          res.status(400)
          .json({
            error:err
          })
        } else {
          res.status(200)
          .json({
            msg: 'Verification request sent',
            data: response
          })
        }
      });
  }

  static verCheck(req,res){
    nexmo.verify.check(
      {request_id:req.body.request_id,code:req.body.code},(err, response) => {
        if (err) {
          res.status(400)
          .json({
            error:err
          })
        } else {
          res.status(200)
          .json({
            msg: 'Validated',
            data: response
          })
        }
      });

  }
}

module.exports = Verification;
