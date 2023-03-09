How can you produce a list of the start times for bookings for tennis courts for the date '2012-09-21'? Return a list of start time and facility name pairings, ordered by the time.
select a.starttime as start, b.name
from cd.bookings a inner join cd.facilities b on b.facid = a.facid
where DATE(a.starttime) = TO_DATE('2012-09-21', 'YYYY-MM-DD') and b.name like 'Tennis%'
order by a.starttime

How can you output a list of all members who have recommended another member? Ensure that there are no duplicates in the list, and that results are ordered by (surname, firstname).
select a.firstname, a.surname
from cd.members a
where a.memid IN (select recommendedby from cd.members)
order by a.surname, a.firstname