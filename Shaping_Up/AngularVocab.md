##Document the following parts of the framework; include the arguments, the return value, and an example of each in use:

```
function

1. angular.module -- returns an instance of type angular.Module, which you should also document

2. angular.extends- Extends the destination object dst by copying own enumerable properties from the src object(s) to destination

3. angular.copy- Creates a deep copy of source, which should be an object or an array.

4. angular.element- Wraps a raw DOM element or HTML string as a jQuery element.

```


##directive -- keep in mind that some directives can only be used on specific HTML elements!

```
1. ngApp - How the application module attaches to the page

* <html ng-app="store"

2. ngBind - This attr tells Angular to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes.

* <div ng-controller="ExampleController">
  Enter name: <input type="text" ng-model="name"><br>
  Hello <span ng-bind="name"></span>!
</div>

3. ngClass - This directive allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

* <p ng-class="{strike: deleted, bold: important, red: error}">Map Syntax Example</p>

4. ngClick- The ngClick directive allows you to specify custom behavior when an element is clicked.

* <button ng-click="count = count + 1" ng-init="count=0">
  Increment

5. ngController - Where we define our apps behavior by defining functions and values.

* <html ng-controller = StoreControl

6. ngDblclick- An event listener that allows you to specify custom behavior

* <button ng-dblclick="count = count + 1" ng-init="count=0">

7. ngForm- Used to group controls not to used to REPLACE <form within all of its capabilities.

* <ng-form [name=""]>...</ng-form>

8. ngKeyup- Event Lister for when key is pressed and let go

* <input ng-keyup="taskli.addTask($event, task)">

9. ngModel- binds the form element value to the property

* <select ng-model="review.stars"

10. ngRepeat- Repeat a section for each itmem in an array

* <li ng-repeat="productin store.products">{{product.name}}</li>

11. ngSubmit- Allows us to call a function when the form is submitted.

* ng-submit="reviewCtrl.addReview(product)"

12. ng-show/ng-hide - Displays a section based on expression

* <h1 ng-show="name">Hello, name in {{ }}!

13. form- represents an instance of a controller

14. input(all variants)- HTML input element control. When used together with ngModel, it provides data-binding, input state control, and validation. 

15.textarea- HTML textarea element control with angular data-binding. The data-binding and validation properties of this element are exactly the same as those of the input elements.

* <textarea
  ng-model=""
  [name=""]
  [required=""]
  [ng-required=""]
</textarea>

16. ngBlur- Allows custom behavior on blur event. Fires when an element has lost focus.

* <window, input, select, textarea, a
  ng-blur="">

17. ngChange- Evaluate the given expression when the user changes the input.

* <div ng-controller="ExampleController">
  <input type="checkbox" ng-model="confirmed" ng-change="change()" id="ng-change-example1" />
</div>

18. ngChecked- Solve prblem of requiring browsers to preserve the value of boolean attributes. provides a permanent reliable place to store the binding information.

* <input type="checkbox" ng-checked="testModel.child_1

19. ngFocus- Specifies custom behavior on focus event.

* ng-focus="focus=true;blur=false;

```
##Services
```
  * $controller- service is responsible for instantiating controllers.

  * $http- facilitates communication with the remote HTTP servers via the browser's XMLHttpReuest object or JSONP.

  * $interpolate- Compiles a string with markup into an interpolation func. Used by the HTML $compile service for data binding.
```

##Other helpful vocab

```
Directives-Why?Allows you to write HTML that expresses that behavior of your application.

* HTML annotations that trigger JS behaviors
* Modules- Where our application componenets live
* Controllers- Where we add application behavior
* Expresions- How values get displayed within the page

Template-expanding Directives (simplest):

* Define a custom tag or attr that is expanded or replaced.
* Ccan include Controller logic,if needed

Custom Directives can also be used for:

* Expressing comlex UI
*Calling events and registering event handlers
* Reusing common componenets 

Element Directives- Use for UI widgets

* <product-titl  </product-title>


Attribute Directive- Use for mixin behaviors...like a tooltip.

* h3 product-title> /h3>
```

#Expression examples

```
	Filters

Dates
Uppercase/Lowercase
Time
LimitTo
orderBy
```


