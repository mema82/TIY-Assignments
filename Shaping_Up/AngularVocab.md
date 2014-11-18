```
Document the following parts of the framework; include the arguments, the return value, and an example of each in use:
```

function

1. angular.module -- returns an instance of type angular.Module, which you should also document

2. angular.extends

3. angular.copy

4. angular.element

```
directive -- keep in mind that some directives can only be used on specific HTML elements!
```
1. ngApp - How the application module attaches to the page

* <html ng-app="store">

2. ngBind

3. ngClass

4. ngClick

5. ngController - Where we define our apps behavior by defining functions and values.

* <html ng-controller = StoreControl

6. ngDblclick

7. ngForm

8. ngKeyup

9. ngModel- binds the form element value to the property

* <select ng-model="review.stars">

10. ngRepeat- Repeat a section for each itmem in an array

* <li ng-repeat="productin store.products">{{product.name}}</li>

11. ngSubmit- Allows us to call a function when the form is submitted.

* ng-submit="reviewCtrl.addReview(product)"

12. ng-show/ng-hide - Displays a section based on expression

* <h1 ng-show="name">Hello, {{name}}!</h1>


```
Other helpful vocab
```
Directives- HTML annotations that trigger JS behaviors
Modules- Where our application componenets live
Controllers- Where we add application behavior
Expresions- How values get displayed within the page

Expression examples
Filters

Dates
Uppercase/Lowercase
Time
LimitTo
orderBy



