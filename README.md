El código original muestra una lista de jsons llamada “namelist” que en cada índice contiene un json con las variables de tipo string “name” y “lastname”, luego crea otra lista llamada “fullname” y una constante llamada “size” que almacena el tamaño de la lista “namelista”.
En un ciclo for crea una variable que va cambiar en cada iteración del ciclo llamada “element” que almacenara ‘${namelist[i].name}  ${namelist[i].lastname}’, luego a la lista “fullname” agrega lo que tiene la variable “element”.
Por último, muestra todos los elementos de la lista “fullname”.

Explicación de la solución diferente planteada:
En esta solución se elimina la constante “size” y dentro de los parámetros del for pongo directamente “namelist.length”, también elimino la variable “element” y dentro de lo que recibe método push coloco:  namelist[i].name + “ “ + namelist.[i].lastname
Con esto voy llenado la lista “fullname” al mismo tiempo que recorro la lista “namelist”. 
