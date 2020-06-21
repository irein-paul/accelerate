*********  Steps   ***********


1) Run the MongoDB server :

	- by running the command "mongod" in the command prompt

2) Run the codes in VSCode Editor :

	- by executing "node app.js" command

	- The server will be running at port number 3000.

3) To setup the DB :

	- Load http://localhost:3000/setupDb

4) To make a post request :

	- In Postman Client, populate the body with the below sample details :


	   { 
	   "vehicleInfo": {
	      "registrationNumber": "QS16CD9864",
	      "certificateNumber": 59543962,
	      "purpose": "personal use",
	      "outsideBulgarianTerritory": "no"
	    },
	    "insuringParty": {
	      "egn": 5545688987,
	      "permanentResidence": "mnb,lkj street, mumbai",
	      "email": "mnb@gmail.com"
	    },
	    "policy": { "startDate": "2019-05-30T00:00:00.000Z", "policyLength": "12 months" },
	    "installment": { "type": "four", "period": "12 months", "price": 26455 },
	    "additionalCover": { "type": "VIP", "price": 5960 }
	    }
    

	- make request to http://localhost:3000/mtpCalculator

	- On successful addition of details, it gives the success message as :
		
		{
		"message": "details added successfully!!"
		}


5) To make a get request :

	- to retreive details based on the registration number.

	- make request to http://localhost:3000/getdetails/QS16CD9864

	   (* "QS16CD9864" is the registration no.)

	


	

	 


	 

	


