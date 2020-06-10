const nano = require('nano')('http://irein:irein@localhost:5984');
let empdb = nano.use('employeesdb')
const empcollection = require('./model')

operations = {}

operations.getallcustomers = (details) => {
    return empcollection.getallemployees().then(customers=>{
        return customers
    })
}

operations.addcustomer = (details) => {
    empdb.insert(details).then(body => {
        console.log("doccument inserted successfully..")
        return body
    })
}

operations.deletecustomer = (id) => {
    let revid;
    let tid;
    return empcollection.getallemployees().then(customers=>{
        for (i=0;i<customers.length;i++) {
            if (customers[i].empid === id) {
                revid =customers[i]._rev
                tid = customers[i]._id
                empdb.destroy(tid,revid).then(res => {
                    console.log("doccument deleted successfully..");
                    return res;
                })
            }
        } 
    })
}

operations.updatecustomer=(obj)=>{
    let revid;
    let tid;
    return empcollection.getallemployees().then(customers=>{
        for (i=0;i<customers.length;i++) {
            if (customers[i].empid === obj.empid) {
                revid =customers[i]._rev
                tid=customers[i]._id
                empdb.insert({...obj,"_rev":revid,"_id":tid}).then(res => {
                    console.log("doccument updated successfully...");
                    console.log(res);
                    return res;
                })
            }
        }
    })
}


module.exports = operations;