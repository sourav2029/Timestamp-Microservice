## API Basejump: Timestamp microservice
User stories:
1) Pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2) If it does, it returns both the Unix timestamp and the natural language form of that date.
3) If it does not contain a date or Unix timestamp, it returns null for those properties.

Sample output:
{ "unix": 1450137600, "natural": "December 15, 2015" }

## Local Setup Instructions:  
1)git clone https://github.com/sourav2029/Timestamp-Microservice.git  
2)move inside the directory  
3)node server.js  

Example url to test: 
http://localhost:3000/"December 19,2014"  
http://localhost:3000/1419013800000  

Heroku app hosted urls:  
1)https://tstamp-miniservice.herokuapp.com/"December 19,2014"  
2)https://tstamp-miniservice.herokuapp.com/1419013800000  
