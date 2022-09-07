/*

MEMBERS

C - POST, /members
R - GET, /members/:member_id, GET, /members/new (creation form)
U - PUT, /members/:member_id
D - DELETE, /members/:member_id

BOOKS

C - POST, /books
R - GET, /books (index), GET /books/:book_id (specific book/ SHOW route), GET /books/:member_id (Books by member) GET, /books/:genre_id OR /booksgenres/:genre_id
U - PUT, /books/:book_id, PUT, /books/:member_id
D - DELETE, /books/:book_id

GENRES

C - POST, /genres
R - GET, /genres, GET, genres/:genre_id GET, /genres/new (creation form)
U - PUT, /genres/:genre_id
D - DELETE, /genres/:genre_id


*/