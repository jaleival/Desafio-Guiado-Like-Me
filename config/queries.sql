CREATE TABLE POSTS (
	id SERIAL PRIMARY KEY, 
	usuario VARCHAR(25),
	url VARCHAR(1000),
	descripcion VARCHAR(255),
	likes INT DEFAULT 0 CHECK (LIKES >= 0)
);

INSERT INTO POSTS (usuario, url, descripcion) VALUES 
('Perro', 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U', 'Descripción 1'),
('Paisaje', 'https://fastly.picsum.photos/id/914/200/300.jpg?grayscale&hmac=rhD2oizDK6xG1O1i4MpFK5d1S-pBnpPTFyreJaR6Eh4', 'Descripción 2'),
('Faro', 'https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs', 'Descripción 3');

SELECT * FROM POSTS;