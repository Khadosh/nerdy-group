## Aqui vamos a ir poniendo todas las clases :happy

## Configuración inicial de GIT
- [x] `git config --global user.email jon@doe.com`: que sirve para configurar el email del usuario con el que los commits se van a mostrar
- [x] `git config --global user.name "Juan Pindonga"`: Lo mismo que lo anterior, pero con el nombre
- [x] Vimos como agregar un ssh-key: https://jdblischak.github.io/2014-09-18-chicago/novice/git/05-sshkeys.html
## Comandos básicos de git
- [x] `git status`: se usa para ver el estado de nuestros archivos
- [x] `git clone <direccion ssh>`: se usa para traer un repositorio remoto y poder usarlo localmente
- [x] `git add .`: se usa agregar archivos y prepararlos para ser commiteados
- [x] `git commit -m "mensaje simpatico"`: se usa para generar un commit (preparar archivos para subirlos)
- [x] `git push origin HEAD`: empuja los cambios que tenemos localmente a nuestro repositorio remoto (cuenta de github)
- [x] `git pull origin <nombre_del_branch>`: trae cambios que están en la nube, pero que no están en mi compu
- [x] `git log`: que sirve para ver la lista de commits ordenadas por fecha, el más reciente arriba

## Comandos no tan básicos de git
- [x] `git commit --amend -m "nuevo mensajito"`: se usa xa modificar el mensaje de commit si lo hicimos mal previamente

## Branches
- [x] `git branch"`: nos lista los branches asociados a este repositorio
- [x] `git branch <nombre_branch>"`: crea un nuevo branch con el nombre indicado
- [x] `git checkout <nombre_branch>"`: me muevo de un branch al otro con el nombre indicado