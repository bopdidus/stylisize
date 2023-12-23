# stylisize
It is a new framework CSS, which contains a lot of classes to realize simple and beautiful webapps. This project is still in development and anybody can contribute. It realizes with Sass and gulp.


## Components

### Variables

| Colors      | Code |   Colors      | Code |        
| ----------- | ----------- | ----------- | ----------- |
| primary      | `#326dee` | red   | `#e61919`  |
| secondary   | `#1ac888`  |yellow   | `#e6e619` |
| info   | `#f6c31c`  | green   | `#19e635` |
| error   | `#d32752` |orange   | `#ffa600` |
| shadow   | `#878383` |purple   | `#9900ff` |
| blue   | `#1919e6`  |gray   | `#808080` |
| aqua   | `aqua`  |black   | `black` |
| teal   | `teal`  |white   | `white` |
| indigo   | `indigo` |grey   | `grey` |
| lime   | `lime` |brown   | `brown` |

* Buttons
  *  btn-radius-color*

  * btn-color*

  * btn-radius-outlined-color*
  
  * btn-complement-color*
* Menu
  *  dropdown-menu
  *  mega-n-menu : where n is the number of columns . 2<= n <=5
*  Effect
  * parallax
* Animations
  * zoom-in
  * zoom-out
  * Flipbox
    `` <div class="flip-box">``
    `` <div class="flip-box-inner"> ``
    ``<div class="flip-box-front">``
    ``</div> <div class="flip-box-back"> ``
    ``</div> ``
    ``</div> ``
    ``</div> ``

### Grid

* Container
    . container
* Rows
  . row

* Columns
where n is the number of columns
. col-n-lg
. col-n-md
. col-n-xs




<hr />

## How to contribute to Stylisize
If you want to contribute, just follow the steps:
- Create your branch in the project
- open the project in your text editor
- If you want to add a new component, create the file in the component directory with the prefix '_'
- add the component in your stylisize.scss file

<b>Don't forget to create your own branch before any commit and push</b>

<hr />

  ## How to use it?
  You can use either stylisize.min.css which is in the build/css directory or stylisize.css which is in css directory.
  There are some parallax effects classes and animation classes like Flip Flop. The next version of Stylisize will separate Stylisize style from animation and effects in different files.

  ## Examples

  You can find in other.html some examples of components and utilities. You also find the index.html  an example of a page designed with stylisize.

  ## Guidelines
  Don't change the value or existing components or properties. (Create an issue in this case)
  Each contributor is responsible for the update of your code.
  If you find some errors or you have a better idea for some components, just create an issue. Thanks
  
