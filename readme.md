API Basejump: Timestamp microservice
User stories:
1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2) If it does, it returns both the Unix timestamp and the natural language form of that date.
3) If it does not contain a date or Unix timestamp, it returns null for those properties.

Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }

1)git clone https://github.com/sourav2029/Timestamp-Microservice.git

2)move inside the directory

3)node server.js

4)localhost:3000/December 15, 2015
