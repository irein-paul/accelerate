
Run an MongoDb instance (by executing mongod command in the command prompt)

Run the server.js file in VS Code 

Run the following API's 

************************************************************************
GET 
http://localhost:4000/setupDb/All

output:- 

"DB setup Succcessful"
*************************************************************************
POST
http://localhost:4000/mtpl/postmtplCalculator

body:-
{
		"id":1,
        "vehicleInfo": {
            "registrationNumber":"TS16AB1231",
            "certificateNumber":"12345671",
            "purpose":"personal use",
            "outsideBulgarianTerritory":"yes"
        },
        "insuringParty":{ 
            "egn":9207088121,
            "permanentResidence":"asd,xyz street, mumbai",
            "email":"asd@gmail.com"
        },
        "policy": { 
            "startDate":"20-6-2020",
            "policyLength":"12 months"
        },
        "installment": {
            "type":"single",
            "period":"12 months",
            "price":28500
        },
        "additionalCover": {
            "type":"None",
            "price":12300
        }
    }
	
output:-

{
    "data": "data uploaded"
}

****************************************************************************
POST
http://localhost:4000/mtpl/getmtplCalculator

body:-
{
	"id":1
}

output:-

{
    "data": {
        "vehicleInfo": {
            "registrationNumber": "TS16AB1231",
            "certificateNumber": 12345671,
            "purpose": "personal use",
            "outsideBulgarianTerritory": "yes"
        },
        "insuringParty": {
            "egn": 9207088121,
            "permanentResidence": "asd,xyz street, mumbai",
            "email": "asd@gmail.com"
        },
        "policy": {
            "startDate": "20-6-2020",
            "policyLength": "12 months"
        },
        "installment": {
            "type": "single",
            "period": "12 months",
            "price": 28500
        },
        "additionalCover": {
            "type": "None",
            "price": 12300
        },
        "_id": "5efdb0e87c38ec06ace07b4d",
        "id": 1,
        "__v": 0
    }
}

***************************************************************************
POST
http://localhost:4000/mtpl/postPurchasePolicy

body:-
{
	"id":1,
    "contactInformation" : {
        "a":"y"
    },
    "deliveryInformation":{
        "e":"u"
    },
    "personalInformation" : {
        "c":"i"
    },
    "vehicleOwnerInformation":{
        "q":"o"
    }
}

output:-
{
    "data": "Data uploaded"
}

*******************************************************************************
POST
http://localhost:4000/mtpl/getPurchasePolicy

body:-
{
	"id":1
}

output:-
{
    "data": {
        "contactInformation": {
            "a": "y"
        },
        "deliveryInformation": {
            "e": "u"
        },
        "personalInformation": {
            "c": "i"
        },
        "vehicleOwnerInformation": {
            "q": "o"
        },
        "_id": "5efdb2437c38ec06ace07b4e",
        "id": "1",
        "__v": 0
    }
}

*****************************************************************************
GET
http://localhost:4000/mtpl/getInstallmentOptions

output:-
[
    {
        "title": "Single Payment",
        "subtitle": "Best value",
        "amount": 4039999,
        "saving": 60497,
        "installmentsCount": 1,
        "discounts": [],
        "installments": []
    },
    {
        "title": "Two Payments",
        "subtitle": "Every 6 months",
        "amount": 4060098,
        "saving": 40398,
        "installmentsCount": 2,
        "discounts": 0,
        "installments": [
            2030049,
            2030049
        ]
    },
    {
        "title": "Four Payments",
        "subtitle": "Every 3 months",
        "amount": 4100496,
        "saving": 0,
        "installmentsCount": 4,
        "discounts": 0,
        "installments": [
            1025124,
            1025124,
            1025124,
            1025124
        ]
    }
]

*******************************************************************************
GET
http://localhost:4000/provinces/getProvincesList

output:-
[
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

