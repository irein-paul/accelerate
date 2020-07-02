const db = require ('../../models/index')

const operations = {}

const provinces = [
    {
        "pname": "Blagoevgrad"
    },
    {
        "pname": "Burgas"
    },
    {
        "pname": "Dobrich"
    },
    {
        "pname": "Gabrovo"
    },
    {
        "pname": "Haskovo"
    },
    {
        "pname": "Kardzhali"
    },
    {
        "pname": "Kyustendil"
    },
    {
        "pname": "Lovech"
    },
    {
        "pname": "Montana"
    },
    {
        "pname": "Pazardzhik"
    },
    {
        "pname": "Pernik"
    },
    {
        "pname": "Pleven"
    },
    {
        "pname": "Plovdiv"
    },
    {
        "pname": "Razgrad"
    },
    {
        "pname": "Ruse"
    },
    {
        "pname": "Shumen"
    },
    {
        "pname": "Silistra"
    },
    {
        "pname": "Sliven"
    },
    {
        "pname": "Smolyan"
    },
    {
        "pname": "Sofia-grad"
    },
    {
        "pname": "Sofia (province)"
    },
    {
        "pname": "Stara Zagora"
    },
    {
        "pname": "Targovishte"
    },
    {
        "pname": "Varna"
    },
    {
        "pname": "Veliko Tarnovo"
    },
    {
        "pname": "Vidin"
    },
    {
        "pname": "Vratsa"
    },
    {
        "pname": "Yambol"
    }
]

operations.setupdb = () =>{
    return db.mtplCalculator().then((mtpdetails)=>{
        return mtpdetails.deleteMany().then(()=>{
            return db.users().then((userdetails)=>{
                return userdetails.deleteMany().then(()=>{
                    return db.purchasePolicy().then((purchasedetails)=>{
                        return purchasedetails.deleteMany().then(()=>{
                            return db.provinces().then((details)=>{
                                return details.deleteMany().then(()=>{
                                    return details.insertMany(provinces).then((data)=>{
                                    if(data){
                                        console.log(data)
                                        return "DB setup Succcessful"
                                    }
                                    else{
                                        let err=new Error("DB setup Failed");
                                        err.status=400;
                                        throw err;
                                    }
                                })})
                            })

                        })                    })
                })
            })
        })
   

})
}

module.exports = operations;