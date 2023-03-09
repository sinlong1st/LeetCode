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

How can you output a list of all members, including the individual who recommended them (if any)? Ensure that results are ordered by (surname, firstname).
select a.firstname, a.surname, b.firstname, b.surname
from cd.members a 
left outer join cd.members b on b.memid = a.recommendedby
order by a.surname, a.firstname

How can you produce a list of all members who have used a tennis court? Include in your output the name of the court, and the name of the member formatted as a single column. Ensure no duplicate data, and order by the member name followed by the facility name.
select distinct on (a.firstname||' '||a.surname, c.name)
			a.firstname||' '||a.surname as member,c.name as facility
from cd.bookings b join cd.members a  on a.memid = b.memid 
join cd.facilities c on b.facid = c.facid
where c.name like 'Tennis%'
order by member, c.name