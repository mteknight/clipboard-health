# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
### TICKET 1: Add CustomId to an Agent (Backend)
Facilities would like to be able to add/update a custom id to an Agent they work with.
The new CustomId field should be added to the following:
- Agent domain object
- Agent model/DTO
- Agent database table

Acceptance Criteria:
1. Agent domain object has a nullable field string CustomId (assuming we don't know what is the id type, otherwise we could be more specific)
2. Agent Database table has a nullable string (or similar type depending on db) field 
3. Agent model/DTO has a nullable field string CustomId
4. When adding a new Agent, the CustomId is also persisted to the database
5. When updating an Agent, the CustomId is also persisted to the database
6. When updating an Agent with an empty CustomId value, a NULL value should be persisted to the database (the previous values is expected to be replaced)

### TICKET 2: Use the new Agent CustomId in the report (Frontend)
Facilities would like generate the Shifts report with the new custom ids instead of the internal ones.
The report UI should be changed to use the new Agent CustomId returned by the API instead of the internal id. 

Acceptance Criteria:
1. When calling the `getShiftsByFacility` function, the CustomId field is returned in the json response
2. When calling the `generateReport` function, the Id field displays the value of the CustomId field
3. When calling the `generateReport` function, the CustomId field is not be displayed


