* files are attached as a zip file.
* Changes are only made to the /mtpl/getmtplcalculator and /mtpl/postmtplcalculator apis  (also the corresponding changes in db setup files)
* first setup the db by loading http://localhost:4000/setupDb/All

1) to post mtplcalculator details

    * load http://localhost:4000/mtpl/postmtplCalculator
    
    body:
    
    {
		"token":"joxNTkzNzIxNDg4fQ.WhSSeOeZX8bRMj5Sy63NmJZpTBecfNf7OwDuJT4Yfkc",
        "vehicledata": {
            "registrationNumber":"TS16AB1231",
            "certificateNumber":"12345671",
            "purpose":"personal use",
            "outsideBulgarianTerritory":"yes"
        },
        "insuringpartydata":{ 
            "egn":9207088121,
            "permanentResidence":"asd,xyz street, mumbai",
            "email":"asd@gmail.com"
        },
        "policydetailsdata": { 
            "startDate":"20-6-2020",
            "policyLength":"12 months"
        },
        "installmentsdata": {
            "type":"single",
            "period":"12 months",
            "price":28500
        },
        "coversdata":[{
            "type":"None",
            "description":"insurance",
            "rate":"0",
            "additionalInfo":"true"
        },
        {
        	"coverType":"Premium",
        	"description":"insurance",
        	"rate":"25 BGN",
        	"additionalInfo":"for 12 months"	
        }]
    }
    
    output:
    
    {
    "data": {"successStatus":"true","failStatus":"false"}
    }
    
    
    
2) to get the mtplcalculator details
    * load http://localhost:4000/mtpl/getmtplCalculator
    
    body:
    
    {
	"token":"joxNTkzNzIxNDg4fQ.WhSSeOeZX8bRMj5Sy63NmJZpTBecfNf7OwDuJT4Yfkc"
    }
    
    output:
    
    {
    "data": {
        "token": "joxNTkzNzIxNDg4fQ.WhSSeOeZX8bRMj5Sy63NmJZpTBecfNf7OwDuJT4Yfkc",
        "vehicledata": {
            "registrationNumber": "TS16AB1231",
            "certificateNumber": "12345671",
            "purpose": "personal use",
            "outsideBulgarianTerritory": "yes"
        },
        "insuringpartydata": {
            "egn": 9207088121,
            "permanentResidence": "asd,xyz street, mumbai",
            "email": "asd@gmail.com"
        },
        "policydetailsdata": {
            "startDate": "20-6-2020",
            "policyLength": "12 months"
        },
        "installmentsdata": {
            "type": "single",
            "period": "12 months",
            "price": 28500
        },
        "coversdata": [
            {
                "type": "None",
                "description": "insurance",
                "rate": "0",
                "additionalInfo": "true"
            },
            {
                "coverType": "Premium",
                "description": "insurance",
                "rate": "25 BGN",
                "additionalInfo": "for 12 months"
            }
        ]
    }
}
    
    

