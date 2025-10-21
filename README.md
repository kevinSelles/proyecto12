# 🃏 Juego de Cartas

Proyecto frontend desarrollado con **React** y **Vite** que simula un sistema de creación de mazos de cartas.  
El usuario puede visualizar una colección completa, seleccionar hasta seis cartas para formar su mazo y ver ambas secciones organizadas dinámicamente en pantalla.  
La interfaz es completamente **responsive**, adaptándose tanto a pantallas grandes como a dispositivos móviles.

---

## 🟢 Características principales

- **Gestión de mazo**: permite añadir o eliminar cartas hasta un máximo de seis.
- **I.A. básica**: La CPU dispone de unos parámetros básicos, pero efectivos, para dificultar las partidas. 
- **Vista dividida**: el mazo se muestra a la izquierda y la colección a la derecha (o en vertical en móviles).
- **Diseño responsive**: reorganiza el grid y los contenedores según el tamaño de la pantalla.
- **Renderizado dinámico** de las cartas y paginación para recorrer la colección.
- **Efectos visuales** con hover, sombras, y colores de selección personalizados.
- **Sistema modular en React**, con componentes reutilizables (`Card`, `Cards`, `Pagination`, `DeckContext`, etc.).

---

## ⚙️ Tecnologías utilizadas

El proyecto está construido íntegramente en **frontend** con las siguientes librerías:

| Librería | Versión | Descripción |
|-----------|----------|-------------|
| **react** | ^19.1.1 | Librería principal. |
| **react-dom** | ^19.1.1 | Renderizado de componentes. |
| **react-router-dom** | ^7.9.3 | Para navegación entre páginas. |
| **lucide-react** | ^0.545.0 | Iconos SVG ligeros y personalizables para React. (No requerido para el proyecto. Usado para practicar con librerías nuevas)|

> 💡 *No se utiliza ningún backend ni servidor de datos: toda la información (cartas, estados del mazo, etc.) se gestiona en el frontend mediante contexto y JSON local
> además de alojar la imagen de cada carta en Cloudinary.*
