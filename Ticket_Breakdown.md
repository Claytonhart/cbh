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

### Ticket 1 (8 hours).

We will need to create a new table named AgentCustomId, with the columns `facility_id`, `agent_id` and `custom_agent_id`. This will allow each facility to assign each agent a custom id if desired.

- The `custom_agent_id` column should be an optional field, facilities do not need to provide custom ids.

### Ticket 2 (8 hours).

The frontend will need to be updated to allow custom agent ids to be assigned by facility users.

- When creating a new user, a custom agent id form input will need to be added to the UI.
- If editing a user's information, the custom agent id input field will need to be added, and will need to optionally reflect null values.
- Each request will need to be modified to include the additional custom agent id information.

### Ticket 3 (8 hours).

The backend will need to be updated to accept the new custom agent ids, with both `POST` and `PUT` endpoints. This will allow users to create custom agent ids, or edit existing ones.

### Ticket 4 (4 hours).

The `getShiftsByFacility` and `generateReport` functions will need to be updated in order to reflect the custom user agent ids, instead of the internal agent id in our database.

- If the `custom_agent_id` field is empty, we will want to display the internal id instead inside the PDF report.
