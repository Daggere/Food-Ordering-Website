 function partyController(req, res) { 
    return {
        inde(req, res) {
           return res.render('customers/party');
        },
        host(req,res){
            return res.render('customers/hostparty');
        }
    }
}

module.exports = partyController;