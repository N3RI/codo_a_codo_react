SELECT EM.nombre
FROM Empleado EM JOIN
Trabaja T ON EM.nro T.nro_emp JOIN
Area A ON A.cod_area = T.cod_area
WHERE A.descripcion = 'Area 1'
AND EM.sueldo > 5000;

INSERT INTO Empleados (nro, nombre, sueldo, f_ingreso,  cod_esp)
VALUES (5, 'Héctor', 5000, '2020-01-01', 2);
