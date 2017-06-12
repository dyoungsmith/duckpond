-- Query 1
SELECT UrlText 
FROM Domain;

-- Query 2
SELECT AddressText, Name 
FROM EmailAddress 
JOIN Person 
WHERE Person.id = PersonId;

-- Query 3
SELECT COUNT(SELECT * FROM Participant WHERE )
SELECT COUNT(*) FROM Participant WHERE ParticipantTypeId <> 1;


/* PSEUDOCODE:
select UrlText, count(UrlText) from Participant where ParticipantTypeId <> 1
	join EmailAddress where EmailAddressId = EmailAddress.Id
	join Domain where EmailAddress.DomainId = Domain.Id
		GROUP BY Domain.Id
*/