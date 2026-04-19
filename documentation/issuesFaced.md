1. ERROR - While connecting the backend application to MongoDB Atlas, the server failed to establish a database connection using the default connection string format:
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/chatDB

The terminal displayed the following error:
DNSException: querySrv ETIMEOUT _mongodb._tcp.cluster0.djd1n1k.mongodb.net
and Can't find cluster0.djd1n1k.mongodb.net: No answer

This indicated that the system could not resolve the DNS SRV record required for cluster node discovery.

FIX - The issue was resolved by replacing the SRV connection string with the standard MongoDB connection string. This version explicitly specifies cluster node addresses and does not require DNS SRV resolution.
Switching to the standard connection string bypassed DNS SRV lookup and allowed successful connection to MongoDB Atlas.

2. Issues faced with deployment:
ERROR- Used a deprecated vercel version
FIX - Removed runtime entry and allowed automatic runtime detection

ERROR- Encountered server runtime execution failure
FIX - Added MONGO_URI and GROQ_API to environment variables

3. MAJOR DEPLOYMENT ISSUE FACED:
Response given by postman when tested the vercel deployed backend - FUNCTION_INVOCATION_FAILED

Couldn't FIX this.