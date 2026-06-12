# MCQ Catalog

This catalog includes only questions with multiple-choice options from `Content/past_papers/`.

## 2022 Examination

Source: `Content\past_papers\exams\2022_examination.md`

`tags`: [year:2022, paper:exam, chapter:1]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 1 *(1 point)*

For programming languages that are designed for **systems programming** applications, the primary concern is efficiency. Consider the following statements, and select the one that most correctly identifies the **second most important concern** in programming languages designed for systems programming.

- [ ] Portability.
- [ ] Generality.
- [ ] Orthogonality.
- [ ] Reliability.

---

`tags`: [year:2022, paper:exam, chapter:2, topic:language-history]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 2 *(1 point)*

Pseudocode languages were interpreted rather than compiled. Consider the following statements, and select the option that most correctly identifies **why these languages were interpreted**.

- [ ] Interpretation offers the advantage of cross-platform compatibility.
- [ ] Interpretation is more reliable in terms of error detection than compilation.
- [ ] Certain operations were not supported in hardware at the time, meaning execution was slow regardless of whether interpretation was used.
- [ ] Interpretation requires less computing resources than compilation does, meaning it worked better on the limited hardware of the time.

---

`tags`: [year:2022, paper:exam, chapter:12, topic:language-history]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 3 *(1 point)*

Consider the following statements, and select the option that most correctly describes **Objective-C**.

- [ ] Object-oriented programming in Objective-C is based on C.
- [ ] Object-oriented programming in Objective-C is based on C++.
- [ ] Object-oriented programming in Objective-C is based on Smalltalk.
- [ ] Objective-C does not support object-oriented programming.

---

`tags`: [year:2022, paper:exam, chapter:15, topic:scheme, topic:binding-time, topic:data-types, topic:subprograms]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 4 *(5 points)*

Write a Scheme function named `getPositiveOddValues`, which receives one parameter: a simple list containing only numeric atoms. The function should yield (not print) a list containing only the **positive (non-zero) odd values** contained in the parameter list.

*Examples:*
```scheme
(getPositiveOddValues '())
; => ()   (no elements in the parameter list)

(getPositiveOddValues '(1 2 7 -3 4))
; => (1 7)   (1 and 7 are the only positive odd values; 2 and 4 are positive even; -3 is negative)
```

**Allowed built-in functions:**
- **Function construction:** `lambda`, `define`
- **Binding:** `let`
- **Arithmetic:** `+`, `-`, `*`, `/`, `abs`, `sqrt`, `remainder`, `modulo`, `min`, `max`
- **Boolean values:** `#t`, `#f`
- **Equality predicates:** `=`, `>`, `<`, `>=`, `<=`, `even?`, `odd?`, `zero?`, `negative?`, `eqv?`, `eq?`
- **Logical predicates:** `and`, `or`, `not`
- **List predicates:** `list?`, `null?`
- **Conditionals:** `if`, `cond`, `else`
- **Quoting:** `quote`, `'`
- **List manipulation:** `list`, `car`, `cdr`, `cons`
- **I/O:** `display`, `printf`, `newline`, `read`

Submit file `s99999999.scm` to slot **"Exam: Scheme Function"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2022, paper:exam, chapter:16, topic:prolog]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 5 *(5 points)*

Write a Prolog proposition called `stripOccurrences(X, L1, L2)`, which succeeds if the list L2 contains all the elements in the list L1, in order, with **all occurrences of X removed**.

*Examples:*
```prolog
?- stripOccurrences(a, [b, c, d], X).
% X = [b, c, d]

?- stripOccurrences(a, [a, b, a, c, a], X).
% X = [b, c]
```

**Requirements:**
- You may define additional helper propositions.
- Only use constants, variables, list manipulation, arithmetic, relational expressions, and built-in predicates from the textbook/slides. Do **not** use if-then, if-then-else, or complex system predicates.

Submit file `s99999999.pl` to slot **"Exam: Prolog Proposition"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2022, paper:exam, chapter:5, topic:scope-and-lifetime]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 6 *(1 point)*

Consider the following statements about the **scope and lifetime of static variables**, and select the one that is most correct.

- [ ] The scope of the variable is from the point of the variable declaration until the end of its scope, while the lifetime is from the start of program execution until the end of program execution.
- [ ] The scope of the variable is from the start of program execution until the end of program execution, while the lifetime is from the point of the variable declaration until the end of its scope.
- [ ] The scope and lifetime are both from the point of the variable declaration until the end of its scope.
- [ ] The scope and lifetime are both from the start of program execution until the end of program execution.

---

`tags`: [year:2022, paper:exam, chapter:6, topic:data-types]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 7 *(1 point)*

It is possible for pointers to be implicitly dereferenced by a programming language. Consider the following possible **disadvantages associated with implicitly dereferenced pointers**, and select the one that is most correct.

- [ ] Void pointers cannot be used.
- [ ] Pointer arithmetic is disallowed.
- [ ] Pointers cannot be used for indirect addressing.
- [ ] Pointers cannot be used for dynamic memory management.

---

`tags`: [year:2022, paper:exam, chapter:7, topic:operators]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 8 *(1 point)*

Consider the following statements about **operator precedence and associativity in APL**, and select the one that is most correct.

- [ ] Precedence rules in APL are more orthogonal than precedence rules in other programming languages, but associativity rules in APL are less orthogonal than associativity rules in other programming languages.
- [ ] Associativity rules in APL are more orthogonal than associativity rules in other programming languages, but precedence rules in APL are less orthogonal than precedence rules in other programming languages.
- [ ] Precedence and associativity rules in APL are both more orthogonal than precedence and associativity rules in other programming languages.
- [ ] Precedence and associativity rules in APL are both less orthogonal than precedence and associativity rules in other programming languages.

---

`tags`: [year:2022, paper:exam, chapter:15, topic:scheme, topic:operators]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 9 *(1 point)*

In Scheme, operator overloading isn't supported due to Scheme's reliance on dynamic typing. Select the reason that most correctly explains why **dynamic typing results in a lack of operator overloading in Scheme**.

- [ ] Dynamic typing means Scheme operators can receive operands of any type.
- [ ] Dynamic typing means overloaded operators would be very unreliable.
- [ ] Dynamic typing means overloaded versions of operators are automatically generated.
- [ ] Dynamic typing means operator support doesn't make sense in Scheme.

---

`tags`: [year:2022, paper:exam, chapter:7, topic:operators]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 10 *(1 point)*

Ada supports no assignment coercions. Consider the following statements, and select one that most correctly describes a **result of this lack of assignment coercions**.

- [ ] Ada is more writable.
- [ ] Ada is more orthogonal.
- [ ] Ada is more reliable.
- [ ] Ada has lower cost.

---

`tags`: [year:2022, paper:exam, chapter:7, topic:operators]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 11 *(1 point)*

Perl supports multiple assignments. Consider the following statements, and select one that most correctly describes an **advantage of this support**.

- [ ] Perl is more writable.
- [ ] Perl is more orthogonal.
- [ ] Perl has reduced cost.
- [ ] Perl is more reliable.

---

`tags`: [year:2022, paper:exam, chapter:1]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 12 *(1 point)*

Consider the following program code fragment in a hypothetical programming language:

```
int [] myArr = {3, 4, 1, 6, 2}
int index = 0
int length = 5
int threshold = 10
while ((myArr[index] == threshold) or (++index < length))
{ ... }
```

Select the option that most correctly describes a **problem** with the above program code.

- [ ] If the `or` operator is short-circuit evaluated, a side effect will not occur, which causes a problem.
- [ ] If the `or` operator is short-circuit evaluated, a side effect occurs, which causes a problem.
- [ ] If the `or` operator is not short-circuit evaluated, a side effect will not occur, which causes a problem.
- [ ] If the `or` operator is not short-circuit evaluated, a side effect occurs, which causes a problem.

---

`tags`: [year:2022, paper:exam, chapter:8, topic:language-history, topic:control-structures, topic:oop]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 13 *(2 points)*

Fortran I had a three-way selection statement. In this statement, one branch would be executed if the control variable value was above zero, a second branch would be executed if the control variable value was equal to zero, and a third branch would be executed if the control variable value was below zero. Select **only** the statements that are **properties of the three-way selection statement**. *(Incorrectly selected options will be penalised.)*

- [ ] The three-way selection statement allows flow control to be written, which cannot be written using two-way selection and pretest logical loops.
- [ ] The three-way selection statement is very efficient.
- [ ] The three-way selection statement is an example of programmer time being considered more important than execution time.
- [ ] The three-way selection statement is too closely based on the IBM 704 hardware.

---

`tags`: [year:2022, paper:exam, chapter:8, topic:control-structures]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 14 *(1 point)*

Counter-controlled loops are supported in **C and Ada**. Consider the following statements, and select the one that is most correct.

- [ ] Counter-controlled loops in C are less writable than counter-controlled loops in Ada.
- [ ] Counter-controlled loops in C are more costly than counter-controlled loops in Ada.
- [ ] Counter-controlled loops in C are less reliable than counter-controlled loops in Ada.
- [ ] Counter-controlled loops in C are more orthogonal than counter-controlled loops in Ada.

---

`tags`: [year:2022, paper:exam, chapter:8, topic:control-structures]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 15 *(1 point)*

It is possible for a conditional to be part of a break used in a loop. Consider the following drawbacks, and select the one that applies to situations in which **a conditional is part of a break**.

- [ ] Writability is reduced.
- [ ] Readability is reduced.
- [ ] Orthogonality is reduced.
- [ ] Cost is reduced.

---

`tags`: [year:2022, paper:exam, chapter:9, topic:subprograms]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 17 *(1 point)*

In Python, subprogram definitions are executable. Consider the following statements about the **implications of executable subprogram definitions**, and select the one that is most correct.

- [ ] Writability is reduced.
- [ ] Readability is reduced.
- [ ] Cost is reduced.
- [ ] There is no effect on the programming language, because all languages that support subprograms have executable subprogram definitions.

---

`tags`: [year:2022, paper:exam, chapter:1, topic:subprograms]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 18 *(1 point)*

In programming languages like C++, default parameters must appear last in the list of parameters. Consider the following solutions for **allowing default parameters to appear anywhere in the list of parameters**, and select the one that is most correct.

- [ ] Use a variable number of parameters, if the programming language supports them.
- [ ] Use positional parameters, if the programming language supports them.
- [ ] Use keyword parameters, if the programming language supports them.
- [ ] It is not possible to allow default parameters to appear anywhere in the list of parameters.

---

`tags`: [year:2022, paper:exam, chapter:9, topic:subprograms]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 19 *(1 point)*

Procedures are a specific kind of subprogram. Consider the following statements, and select the one that is most correct.

- [ ] Procedures are guaranteed to never have side effects.
- [ ] Procedures are guaranteed to always have side effects.
- [ ] Procedures have a high probability of having side effects, unless they are written carefully.
- [ ] Procedures generate side effects unpredictably.

---

`tags`: [year:2022, paper:exam, chapter:12, topic:oop]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 22 *(1 point)*

Java supports a mechanism for ensuring that clients can't depend on the implementation of ADTs. Consider the following language features, and select the one that **ensures a lack of client dependence on implementation**.

- [ ] Header files and implementation files.
- [ ] Base classes and derived classes.
- [ ] Classes implementing interfaces.
- [ ] Javadoc and bytecode.

---

`tags`: [year:2022, paper:exam, chapter:12, topic:oop]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 23 *(1 point)*

Classes are dynamic in Ruby. Consider the following statements about the **implications of dynamic classes in Ruby**, and select the one that is most correct.

- [ ] Dynamic classes increase writability.
- [ ] Dynamic classes increase readability.
- [ ] Dynamic classes decrease cost.
- [ ] Dynamic classes increase reliability.

---

`tags`: [year:2022, paper:exam, chapter:12, topic:language-history, topic:oop]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 25 *(1 point)*

Smalltalk supports object-oriented programming. Consider the following statements, and select the one that is most correct.

- [ ] Smalltalk's support for object-oriented programming is very writable.
- [ ] Smalltalk's support for object-oriented programming is quite efficient.
- [ ] Smalltalk's support for object-oriented programming is highly orthogonal.
- [ ] Smalltalk is essentially equivalent in terms of programming language evaluation criteria to other object-oriented programming languages such as C++ and Java.

---

`tags`: [year:2022, paper:exam, chapter:12, topic:oop]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 26 *(1 point)*

Assume a programming language that supports **multiple inheritance**. There is a parent class called A. Two classes, called B and C, both inherit directly from A. Finally, a class called D inherits from both B and C. Consider the following statements, and select the one that causes an **implicit problem** with the described inheritance hierarchy.

- [ ] If any class member is defined in class A.
- [ ] If any class member is defined in class B.
- [ ] If any class member is defined in class C.
- [ ] If any class member with the same name is defined in classes B and C.

---

`tags`: [year:2022, paper:exam, chapter:1]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 27 *(1 point)*

C++ provides support for **private derivation**. Consider the following statements, and select the one that describes a **valid use for private derivation**.

- [ ] When a derived class wishes to only add to the public interface of its base class.
- [ ] When a derived class wishes to only modify how one part of the public interface provided by its base class works.
- [ ] When a derived class wishes to only make part of its base class interface publicly visible.
- [ ] When a derived class wishes to ensure that it is a subtype of its base class.

---

`tags`: [year:2022, paper:exam, chapter:12, topic:binding-time, topic:oop]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 28 *(1 point)*

C++ and Java both support **object-oriented message binding**. Consider the following statements, and select the one that is most correct.

- [ ] C++ support for message binding is more writable than Java's support.
- [ ] C++ support for message binding is more readable than Java's support.
- [ ] C++ support for message binding is less efficient than Java's support.
- [ ] C++ support for message binding is more reliable than Java's support.

---

`tags`: [year:2022, paper:exam, chapter:12, topic:oop]
`source`: [2022_examination.md](Content/past_papers/exams/2022_examination.md)
### Question 29 *(1 point)*

Consider the following statements about **classes and structs in C#**, and select the one that is most correct.

- [ ] C# only supports classes, and not structs.
- [ ] Classes are more writable than structs in C#.
- [ ] Structs are more writable than classes in C#.
- [ ] Classes and structs are equally writable in C#.


## 2023 Examination

Source: `Content\past_papers\exams\2023_examination.md`

`tags`: [year:2023, paper:exam, chapter:2, topic:language-history]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 1 *(1 point)*

Various factors can influence programming language design. Consider the following programming language design influences, and select the one that had its **earliest impact on the design of SIMULA 67**.

- [ ] Computer architecture.
- [ ] Programmer efficiency becoming more important than machine efficiency.
- [ ] The move from process oriented programming to data oriented programming.
- [ ] The move to object-oriented programming.

---

`tags`: [year:2023, paper:exam, chapter:1]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 2 *(2 points)*

Consider the following programming language evaluation criteria, and select **only** those that benefit from the use of a **hybrid implementation system**. *(Incorrectly selected options will be penalised.)*

- [ ] Readability.
- [ ] Writability.
- [ ] Cost.
- [ ] Portability.

---

`tags`: [year:2023, paper:exam, chapter:7, topic:language-history, topic:data-types, topic:operators]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 3 *(1 point)*

Consider only the syntax used by **Plankalkül** for an assignment using arrays and subscripts. Consider the following statements, and select the one that is the most correct.

- [ ] The syntax had poor readability.
- [ ] The syntax had poor writability.
- [ ] The syntax had poor reliability.
- [ ] The syntax had poor execution cost.

---

`tags`: [year:2023, paper:exam, chapter:2, topic:language-history]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 4 *(1 point)*

The language specification of **ALGOL 60** lacked support for I/O operations. Consider the following statements, and select the one that most correctly describes a consequence this lack of support had on a main design goal of ALGOL 60.

- [ ] The reliability of ALGOL 60 suffered.
- [ ] The execution cost of ALGOL 60 suffered.
- [ ] The execution cost of ALGOL 60 improved.
- [ ] The machine independence of ALGOL 60 suffered.

---

`tags`: [year:2023, paper:exam, chapter:1]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 5 *(1 point)*

Consider the following statements about **Lua**, and select the one that is the most correct.

- [ ] Lua uses full compilation for the sake of reduced execution cost.
- [ ] Lua requires heap allocated variables to be explicitly deallocated.
- [ ] Lua supports functional programming.
- [ ] Lua is a fully featured object-oriented programming language.

---

`tags`: [year:2023, paper:exam, chapter:15, topic:scheme, topic:binding-time, topic:data-types, topic:subprograms]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 6 *(5 points)*

Write a Scheme function named `doublePositives`, which receives one parameter: a simple list containing only numeric atoms. The function should yield (not print) a list containing the same values as the parameter list, but with **positive values doubled**. Negative and zero values remain unchanged.

*Examples:*
```scheme
(doublePositives '())
; => ()   (no elements in the parameter list)

(doublePositives '(2 -4 7 -3))
; => (4 -4 14 -3)   (2→4, 7→14; -4 and -3 are unchanged)
```

> *Note: Start your program with `#lang racket`.*

**Allowed built-in functions:**
- **Function construction:** `lambda`, `define`
- **Binding:** `let`
- **Arithmetic:** `+`, `-`, `*`, `/`, `abs`, `sqrt`, `remainder`, `modulo`, `min`, `max`
- **Boolean values:** `#t`, `#f`
- **Equality predicates:** `=`, `>`, `<`, `>=`, `<=`, `even?`, `odd?`, `zero?`, `negative?`, `eqv?`, `eq?`
- **Logical predicates:** `and`, `or`, `not`
- **List predicates:** `list?`, `null?`
- **Conditionals:** `if`, `cond`, `else`
- **Quoting:** `quote`, `'`
- **List manipulation:** `list`, `car`, `cdr`, `cons`
- **I/O:** `display`, `printf`, `newline`, `read`

Submit file `s99999999.scm` to slot **"Examination: Scheme Function"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2023, paper:exam, chapter:16, topic:prolog]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 7 *(5 points)*

Write a Prolog proposition called `doubleNonMatching(L1, X, L2)`, which succeeds if the list L2 contains the same values as the list L1, without their order being modified, but with all **values that do not match X doubled**. All values that do match X should remain unchanged.

*Examples:*
```prolog
?- doubleNonMatching([], 2, X).
% X = []

?- doubleNonMatching([3, 2, 4, 4, 2], 2, X).
% X = [6, 2, 8, 8, 2]
```

*Hint: In Prolog arithmetic, `*` represents multiplication.*

**Requirements:**
- You may define additional helper propositions.
- Only use constants, variables, list manipulation, arithmetic, relational expressions, and built-in predicates from the textbook/slides. Do **not** use if-then, if-then-else, or complex system predicates.

Submit file `s99999999.pl` to slot **"Examination: Prolog Proposition"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2023, paper:exam, chapter:1, topic:scope-and-lifetime]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 8 *(1 point)*

Consider the following program code in a hypothetical programming language:

```
void main() {
   var myVariable = "Test"
   print(myVariable)

   var anotherVariable = 5
   myVariable = anotherVariable * 2
   print(myVariable)
}
```

Select the option that most correctly describes the **category of `myVariable`** in terms of lifetime.

- [ ] Static variable.
- [ ] Stack-dynamic variable.
- [ ] Explicit heap-dynamic variable.
- [ ] Implicit heap-dynamic variable.

---

`tags`: [year:2023, paper:exam, chapter:7, topic:functional-programming]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 10 *(1 point)*

Consider the following statements about **list comprehensions in Python**, and select the one that is the most correct.

- [ ] List comprehensions increase the readability of Python.
- [ ] List comprehensions increase the writability of Python.
- [ ] List comprehensions improve the reliability of Python.
- [ ] List comprehensions reduce the execution cost of Python.

---

`tags`: [year:2023, paper:exam, chapter:6]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 11 *(1 point)*

C++ is not considered a very strongly typed programming language. Consider the following reasons, and select the one that most correctly describes a reason contributing to the **weak typing of C++**.

- [ ] The way in which C++ supports pointers.
- [ ] The fact that C++ supports only discriminated unions.
- [ ] The fact that C++ performs no parameter type checking.
- [ ] The fact that C++ does not perform index range checking in arrays.

---

`tags`: [year:2023, paper:exam, chapter:12, topic:operators, topic:oop]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 12 *(1 point)*

Both Ruby and Java are object-oriented programming languages. Consider the following statements about **arithmetic operators in Ruby and Java**, and select the one that is the most correct.

- [ ] Arithmetic operators in Ruby are less flexible than arithmetic operators in Java.
- [ ] Arithmetic operators in Ruby are always as reliable as arithmetic operators in Java.
- [ ] Arithmetic operators in Ruby are implemented in a more orthogonal way than arithmetic operators in Java.
- [ ] Arithmetic operators in Ruby have a lower execution cost than arithmetic operators in Java.

---

`tags`: [year:2023, paper:exam, chapter:1, topic:operators]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 13 *(1 point)*

Consider the following statements about the **unary `*` operator in C++**, and select the one that is the most correct.

- [ ] The unary `*` operator is poorly designed, because it is overloaded to produce very different results depending on the context in which it is used.
- [ ] The unary `*` operator is poorly designed, because C++ could have been designed to avoid its use while leaving the language's flexibility and conciseness unchanged.
- [ ] The unary `*` operator is well designed, because it is not overloaded.
- [ ] The unary `*` operator is well designed, because it cannot be confused with any non-unary operators.

---

`tags`: [year:2023, paper:exam, chapter:7]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 14 *(1 point)*

Consider the following statements about **conditional targets**, and select the one that is the most correct.

- [ ] Conditional targets improve the readability of assignments.
- [ ] Conditional targets improve the writability of assignments.
- [ ] Conditional targets improve the reliability of assignments.
- [ ] Conditional targets decrease the cost of execution of assignments.

---

`tags`: [year:2023, paper:exam, chapter:7, topic:operators]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 15 *(1 point)*

Consider the following statements about **mixed-mode assignments in Ada and C**, and select the one that is the most correct.

- [ ] Mixed-mode assignments in Ada are less readable than mixed-mode assignments in C.
- [ ] Mixed-mode assignments in Ada are less writable than mixed-mode assignments in C.
- [ ] Mixed-mode assignments in Ada are less reliable than mixed-mode assignments in C.
- [ ] Mixed-mode assignments in Ada have a higher execution cost than mixed-mode assignments in C.

---

`tags`: [year:2023, paper:exam, chapter:12]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 16 *(1 point)*

Consider the following statements about the **approaches used by Ruby and Perl to disambiguate nested selectors**, and select the one that is the most correct.

- [ ] Ruby uses a less reliable approach than Perl.
- [ ] Ruby uses a less readable approach than Perl.
- [ ] Ruby uses a less writable approach than Perl.
- [ ] Ruby uses a more writable approach than Perl.

---

`tags`: [year:2023, paper:exam, chapter:7, topic:operators]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 17 *(1 point)*

Consider the following statements about **selector expressions used in assignments**, and select the one that is the most correct.

- [ ] Readability is improved if the `else` clause is left out of a selector expression used in an assignment.
- [ ] Readability is reduced if the `else` clause is left out of a selector expression used in an assignment.
- [ ] Reliability is improved if the `else` clause is left out of a selector expression used in an assignment.
- [ ] The programming language evaluation criteria are not affected if the `else` clause is left out of a selector expression used in an assignment.

---

`tags`: [year:2023, paper:exam, chapter:8, topic:control-structures]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 18 *(1 point)*

Consider the following statements about **counter-controlled loops in Ada and C**, and select the one that is the most correct.

- [ ] Counter-controlled loops are more writable in Ada than in C.
- [ ] Counter-controlled loops are less readable in Ada than in C.
- [ ] Counter-controlled loops are more reliable in Ada than in C.
- [ ] Counter-controlled loops have a higher cost of execution in Ada than in C.

---

`tags`: [year:2023, paper:exam, chapter:9, topic:subprograms]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 20 *(1 point)*

Consider the following statements about **default values for subprogram parameters**, and select the one that is the most correct.

- [ ] There is no way for a default parameter value to appear anywhere but the beginning of a subprogram's list of parameters.
- [ ] There is no way for a default parameter value to appear anywhere but the end of a subprogram's list of parameters.
- [ ] It is possible for a default parameter to appear anywhere in a subprogram's list of parameters if positional parameters are used.
- [ ] It is possible for a default parameter to appear anywhere in a subprogram's list of parameters if keyword parameters are used.

---

`tags`: [year:2023, paper:exam, chapter:1]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 21 *(1 point)*

Consider the following statements about a **drawback associated with Lua**, and select the one that is the most correct.

- [ ] Anonymous functions in Lua cannot be used after the function's definition.
- [ ] It is easy for a programmer to unintentionally create a stack-dynamic variable in Lua.
- [ ] It is easy for a programmer to unintentionally create a global variable in Lua.
- [ ] Lua does not allow a function to receive a variable number of parameters.

---

`tags`: [year:2023, paper:exam, chapter:9, topic:subprograms]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 22 *(1 point)*

Consider the following statements about **pass-by-result subprogram parameters**, and select the one that is the most correct.

- [ ] Pass-by-result parameters can only copy a value to the caller.
- [ ] Pass-by-result parameters can only transfer an access path to the caller.
- [ ] Pass-by-result parameters can either copy a value to the caller, or transfer an access path to the caller.
- [ ] Pass-by-result can neither copy a value to the caller, nor transfer an access path to the caller.

---

`tags`: [year:2023, paper:exam, chapter:12, topic:oop]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 25 *(1 point)*

Consider the following statements about **properties in C# classes**, and select the one that is the most correct.

- [ ] Properties provide instance variables within a C# class.
- [ ] Properties provide class variables within a C# class.
- [ ] Properties provide a less writable alternative to getters and setters within a C# class, from the perspective of a user of the class.
- [ ] Properties provide a more writable alternative to getters and setters within a C# class, from the perspective of a user of the class.

---

`tags`: [year:2023, paper:exam, chapter:12, topic:oop]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 26 *(1 point)*

Consider the following statements about the **approach used by Java to hide the representation of ADT objects** from the users of these objects, and select the one that is the most correct.

- [ ] The ADT interface is provided in a header file, which the user is allowed to see. The ADT implementation is compiled into a class file, and only the class file is provided to the user.
- [ ] The ADT interface is not provided to the user. The ADT implementation is compiled into a class file, and only the class file is provided to the user.
- [ ] The ADT interface is automatically generated as documentation, which the user is allowed to see. The ADT implementation is compiled into a class file, and only the class file is provided to the user.
- [ ] Java does not hide the representation of ADT objects from the users of these objects.

---

`tags`: [year:2023, paper:exam, chapter:12, topic:oop]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 28 *(1 point)*

Consider a hypothetical programming language that supports object-oriented programming with **multiple inheritance**. Four classes A, B, C, and D are defined. Classes B and C both inherit only from class A. Class D inherits from both B and C. An **implicit name collision** is possible. Select **only** the implementation details that together result in an implicit name collision (not explicit). *(Incorrectly selected options will be penalised.)*

- [ ] Defining a method named `myMethod` in class A.
- [ ] Defining a method named `myMethod` in class B.
- [ ] Defining a method named `myMethod` in class C.
- [ ] Defining a method named `myMethod` in class D.

---

`tags`: [year:2023, paper:exam, chapter:12, topic:cost, topic:language-history]
`source`: [2023_examination.md](Content/past_papers/exams/2023_examination.md)
### Question 29 *(2 points)*

C++ has a lower cost of execution than Smalltalk. Select **only** the factors that contribute to the **lower cost of execution in C++**. *(Incorrectly selected options will be penalised.)*

- [ ] The approach C++ uses in relation to the exclusivity of classes.
- [ ] The approach C++ uses to perform message binding.
- [ ] The fact that C++ supports heap allocated objects.
- [ ] The fact that subclasses are not necessarily subtypes in C++.


## 2024 Examination

Source: `Content\past_papers\exams\2024_examination.md`

`tags`: [year:2024, paper:exam, chapter:1, topic:readability]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 1 *(1 point)*

There are often trade-offs between the programming language evaluation criteria. Select the statement that most correctly describes a likely **trade-off when readability improves**.

- [ ] The cost of execution becomes worse.
- [ ] The cost of maintenance becomes worse.
- [ ] The cost of implementation becomes worse.
- [ ] Reliability becomes worse.

---

`tags`: [year:2024, paper:exam, chapter:1, topic:generality]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 2 *(1 point)*

An additional evaluation criterion not heavily focused on in this course is **generality**. Select the programming language that has the **best generality**.

- [ ] Fortran I
- [ ] ALGOL 60
- [ ] SIMULA 67
- [ ] PL/I

---

`tags`: [year:2024, paper:exam, chapter:1]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 3 *(1 point)*

Consider the following statements about **Pascal and C**, and select the most correct.

- [ ] Pascal is more readable than C.
- [ ] Pascal is more writable than C.
- [ ] Pascal is less reliable than C.
- [ ] Pascal has a higher cost of maintenance than C.

---

`tags`: [year:2024, paper:exam, chapter:1, topic:portability]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 4 *(1 point)*

An additional evaluation criterion not heavily focused on in this course is **portability**. Select the programming language that is the **most portable**.

- [ ] Fortran 90
- [ ] C++
- [ ] PL/I
- [ ] JavaScript

---

`tags`: [year:2024, paper:exam, chapter:15, topic:scheme, topic:binding-time, topic:data-types, topic:subprograms]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 5 *(5 points)*

Write a Scheme function named `removePositiveOddValues`, which receives one parameter: a simple list containing only numeric atoms. The function should yield (not print) a list containing the values in the parameter list, in their original order, with all **positive odd values removed**.

*Examples:*
```scheme
(removePositiveOddValues '(3 9))
; => ()   (all values are positive odd)

(removePositiveOddValues '(-5 3 0 5 9))
; => (-5 0)   (3, 5, 9 are positive odd and are removed)
```

**Allowed built-in functions:**
- **Function construction:** `lambda`, `define`
- **Binding:** `let`
- **Arithmetic:** `+`, `-`, `*`, `/`, `abs`, `sqrt`, `remainder`, `modulo`, `min`, `max`
- **Boolean values:** `#t`, `#f`
- **Equality predicates:** `=`, `>`, `<`, `>=`, `<=`, `even?`, `odd?`, `zero?`, `negative?`, `eqv?`, `eq?`
- **Logical predicates:** `and`, `or`, `not`
- **List predicates:** `list?`, `null?`
- **Conditionals:** `if`, `cond`, `else`
- **Quoting:** `quote`, `'`
- **List manipulation:** `list`, `car`, `cdr`, `cons`
- **I/O:** `display`, `printf`, `newline`, `read`

Submit file `s99999999.scm` to slot **"Examination: Scheme Function"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2024, paper:exam, chapter:16, topic:prolog, topic:operators]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 6 *(5 points)*

Write a Prolog proposition called `doublePositives(L1, L2)`, which succeeds if L2 is a list containing all the elements in L1 in their original order, with every **positive value doubled** and every **non-positive value unchanged**.

*Examples:*
```prolog
?- doublePositives([-4, -9], X).
% X = [-4, -9]

?- doublePositives([-3, 6, 7, -1, -5], X).
% X = [-3, 12, 14, -1, -5]
```

*Hint: Comparison operators (`<`, `=<`, `>`, `>=`) can be used as terms in Prolog. Multiplication is represented by `*`.*

**Requirements:**
- You may define additional helper propositions.
- Only use constants, variables, list manipulation, arithmetic, relational expressions, and built-in predicates from the textbook/slides and hints. Do **not** use if-then, if-then-else, or complex system predicates.

Submit file `s99999999.pl` to slot **"Examination: Prolog Proposition"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2024, paper:exam, chapter:5, topic:binding-time]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 7 *(1 point)*

Binding can occur at different times. Select the option that most correctly describes the **binding time** of a standard 32-bit signed integer type in a statically typed language to either a sign-and-magnitude or two's complement representation.

- [ ] Language design time
- [ ] Language implementation time
- [ ] Compile time
- [ ] Load time
- [ ] Runtime

---

`tags`: [year:2024, paper:exam, chapter:12, topic:data-types]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 8 *(1 point)*

Consider the following program code in C# (line numbers for reference):

```csharp
1. {
2.    int y;
3.    {
4.       int x = 5;
5.    }
6.    int x = 2;
7. }
```

Select the most correct statement.

- [ ] The provided program code does not compile because the variable `y` is not initialised.
- [ ] The provided program code does not compile because the variable `x` on line 4 hides the variable `x` on line 6.
- [ ] The provided program code does not compile because the variable `x` on line 6 hides the variable `x` on line 4.
- [ ] The provided program code compiles and runs successfully.

---

`tags`: [year:2024, paper:exam, chapter:6, topic:data-types]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 9 *(1 point)*

Consider the following statements about **character string types** in programming languages, and select the most correct.

- [ ] In programming languages that represent character strings using only classes, character strings are always mutable.
- [ ] In programming languages that represent character strings using only classes, character strings are always immutable.
- [ ] Limited dynamic length strings have a higher overall hardware resource cost than static length strings, and a lower overall hardware resource cost than dynamic length strings.
- [ ] C supports character strings as a primitive type.

---

`tags`: [year:2024, paper:exam, chapter:6, topic:data-types]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 10 *(1 point)*

Consider the following statements about **unions**, and select the most correct.

- [ ] Unions are closely related to classes in object-oriented programming, but are more limited in terms of functionality.
- [ ] Discriminated unions are more memory efficient than free unions.
- [ ] Unions can be used as a mechanism for returning multiple values from a subprogram.
- [ ] Unions are used when memory cost is of great concern.

---

`tags`: [year:2024, paper:exam, chapter:15, topic:scheme]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 11 *(1 point)*

Consider the following statements about **arithmetic operations in Scheme**, and select the most correct.

- [ ] The order in which arithmetic operations are evaluated in Scheme is unambiguously determined based on clear precedence levels and associativity rules.
- [ ] The order in which arithmetic operations are evaluated in Scheme is unambiguously determined based on function and parameter evaluation.
- [ ] The order in which arithmetic operations are evaluated in Scheme is unambiguously determined because all operators have the same precedence level and associate from left to right.
- [ ] The order in which arithmetic operations are evaluated in Scheme is ambiguous because function parameters are evaluated in no particular order.

---

`tags`: [year:2024, paper:exam, chapter:7]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 12 *(1 point)*

Consider the following statements about **expressions in Ada**, and select the most correct.

- [ ] The lack of coercions in Ada makes the language more readable.
- [ ] The lack of coercions in Ada makes the language less reliable.
- [ ] The common use of coercions in Ada makes the language more writable.
- [ ] The common use of coercions in Ada makes the language less reliable.

---

`tags`: [year:2024, paper:exam, chapter:7, topic:data-types, topic:operators]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 13 *(1 point)*

Consider the following program code in a hypothetical programming language:

```
int count = 5
double result = 0.0

while ((count > 0) and (result = (10.0 / count))) {
   print result
   count = count - 1
}
```

Assume C-like syntax, assignment as an expression, `and` for logical AND, and integers are interpreted as Boolean values like in C. Select the most correct statement.

- [ ] The provided program code produces an error regardless of whether the logical `and` is short-circuit evaluated or not.
- [ ] The provided program code produces an error if the logical `and` is short-circuit evaluated.
- [ ] The provided program code produces an error if the logical `and` is **not** short-circuit evaluated.
- [ ] The provided program code produces no error regardless of whether the logical `and` is short-circuit evaluated or not.

---

`tags`: [year:2024, paper:exam, chapter:7, topic:operators]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 14 *(1 point)*

Consider the following statements about **unary assignment operators**, and select the most correct.

- [ ] Unary assignment operators reduce readability, if they are overloaded to provide prefix and postfix versions.
- [ ] Unary assignment operators reduce writability, if they are overloaded to provide prefix and postfix versions.
- [ ] Unary assignment operators reduce the execution cost of a programming language.
- [ ] Unary assignment operators are essential within a programming language.

---

`tags`: [year:2024, paper:exam, chapter:8, topic:control-structures]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 15 *(2 points)*

Select **only** the statements that are true about **counter-controlled loops**. *(Incorrectly selected options will be penalised.)*

- [ ] Counter-controlled loops are required in order to implement any flowchart-represented algorithm.
- [ ] Counter-controlled loops in Python are more reliable than counter-controlled loops in C.
- [ ] Counter-controlled loops in C are more readable than counter-controlled loops in Java.
- [ ] Counter-controlled loops are not directly supported in purely functional programming languages.

---

`tags`: [year:2024, paper:exam, chapter:8, topic:control-structures]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 16 *(2 points)*

Select **only** the correct statements about **disambiguating nested selection statements**. *(Incorrectly selected options will be penalised.)*

- [ ] Python's approach to disambiguating nested selection statements is less readable than Java's approach.
- [ ] Python's approach to disambiguating nested selection statements is less reliable than Java's approach.
- [ ] Ruby and Perl use very similar approaches to disambiguating nested selection statements, but Perl's approach is more writable than Ruby's approach.
- [ ] Python and Ruby use very similar approaches to disambiguating nested selection statements, but Python's approach is more writable than Ruby's approach.

---

`tags`: [year:2024, paper:exam, chapter:12, topic:subprograms, topic:oop]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 18 *(1 point)*

Consider the following statements about **subprograms defined outside a class definition**, and select the most correct.

- [ ] Ruby subprograms defined outside a class definition are more writable than C++ subprograms defined outside a class definition.
- [ ] Ruby subprograms defined outside a class definition are less writable than C++ subprograms defined outside a class definition.
- [ ] Ruby subprograms defined outside a class definition are more orthogonal than C++ subprograms defined outside a class definition.
- [ ] Ruby subprograms defined outside a class definition behave in exactly the same way as C++ subprograms defined outside a class definition.

---

`tags`: [year:2024, paper:exam, chapter:9]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 19 *(1 point)*

Consider the following statements about **procedures and functions**, and select the most correct.

- [ ] A procedure can produce a result if all its parameters use pass-by-value semantics.
- [ ] A procedure is guaranteed to produce no side effect if it produces a result.
- [ ] A function is guaranteed to produce a side effect if it produces a result.
- [ ] A procedure can more easily produce multiple results than a function can.

---

`tags`: [year:2024, paper:exam, chapter:12]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 22 *(1 point)*

Consider the following program code in C#:

```csharp
public static void doSomething<T>(T p1, T p2) {
   Console.WriteLine(p1 + " " + p2);
}
```

Assume the following calls are made:

```csharp
Program.doSomething(5, 2);
Program.doSomething(false, true);
```

Select the most correct statement about the use of the `doSomething` method.

- [ ] One version of the `doSomething` method is created at compile time, and is used with `int` and `bool` parameters.
- [ ] Two versions of the `doSomething` method are created at compile time. One is used with `int` parameters, while the other is used with `bool` parameters.
- [ ] One version of the `doSomething` method is created at runtime, and is used with `Object` parameters.
- [ ] Two versions of the `doSomething` method are created at runtime. One is used with `int` parameters, while the other is used with `bool` parameters.

---

`tags`: [year:2024, paper:exam, chapter:12, topic:oop]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 24 *(2 points)*

Abstract data types (ADTs) aim to hide the representations of ADT objects from clients. Select **only** the correct C++ features that **detract from the effectiveness of ADT representation hiding**. *(Incorrectly selected options will be penalised.)*

- [ ] The existence of friend functions and friend classes.
- [ ] The fact that C++ supports stand-alone functions that are not part of a class.
- [ ] The fact that C++ requires that classes and member function definitions must appear in the same file.
- [ ] The fact that all class data members must appear in header files.

---

`tags`: [year:2024, paper:exam, chapter:12, topic:oop]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 25 *(1 point)*

Consider the following statements about **ADTs in Ruby**, and select the most correct.

- [ ] Instance and class variable names are more readable in Ruby than they are in Java.
- [ ] Ruby supports multiple constructors, each of which can be implicitly called when `new` is used with the appropriate class name and parameters.
- [ ] It is impossible to implement the functionality of multiple constructors in Ruby.
- [ ] The interface of a Ruby ADT is very reliable.

---

`tags`: [year:2024, paper:exam, chapter:12, topic:oop]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 26 *(1 point)*

Imagine a hypothetical programming language in which a subclass can inherit a public method from a parent class and **change its access control to private or protected**. Select the most correct statement.

- [ ] In the hypothetical programming language, dynamic binding is less efficient.
- [ ] In the hypothetical programming language, dynamic binding is impossible.
- [ ] In the hypothetical programming language, subclasses are subtypes.
- [ ] In the hypothetical programming language, subclasses are not subtypes.

---

`tags`: [year:2024, paper:exam, chapter:12, topic:orthogonality, topic:language-history]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 27 *(2 points)*

Select **only** the approaches that make **Smalltalk more orthogonal than Java**. *(Incorrectly selected options will be penalised.)*

- [ ] The difference in approach to the exclusivity of objects in Smalltalk and Java.
- [ ] The difference in approach to dynamic and static binding in Smalltalk and Java.
- [ ] The difference in approach to subclasses and subtypes in Smalltalk and Java.
- [ ] The difference in approach to object deallocation in Smalltalk and Java.

---

`tags`: [year:2024, paper:exam, chapter:12, topic:oop]
`source`: [2024_examination.md](Content/past_papers/exams/2024_examination.md)
### Question 28 *(1 point)*

Consider the following statements about **object-oriented programming in C++ and C#**, and select the most correct.

- [ ] C++ provides worse support for multiple inheritance than C# does.
- [ ] C++ provides less writability in terms of nested classes than C# does.
- [ ] C++ uses a more orthogonal approach to object-oriented programming than C# does.
- [ ] C++ provides a more readable approach to dynamic message binding than C# does.


## 2025 Examination

Source: `Content\past_papers\exams\2025_examination.md`

`tags`: [year:2025, paper:exam, chapter:1]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 1 *(1 point)*

Consider the following types of cost that can be associated with a programming language, and select the one that is **most relevant to consider in a modern computing context**.

- [ ] Cost of compiling programs
- [ ] Cost of executing programs
- [ ] Cost of reliability
- [ ] Cost of the language implementation system

---

`tags`: [year:2025, paper:exam, chapter:1, topic:portability]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 2 *(1 point)*

Consider the following programming languages, and select the one that has the **highest level of portability**.

- [ ] Fortran I
- [ ] PL/I
- [ ] Swift
- [ ] Java

---

`tags`: [year:2025, paper:exam, chapter:1, topic:readability]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 3 *(1 point)*

Consider the following programming languages, and select the one that had the **highest overall readability**.

- [ ] C++
- [ ] BASIC
- [ ] Ada
- [ ] C#

---

`tags`: [year:2025, paper:exam, chapter:1, topic:well-definedness]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 4 *(1 point)*

Consider the following programming languages, and select the one that **focused the most on the well-definedness** of the original language design.

- [ ] Fortran I
- [ ] ALGOL 68
- [ ] C
- [ ] C++

---

`tags`: [year:2025, paper:exam, chapter:15, topic:scheme, topic:binding-time, topic:data-types, topic:subprograms]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 5 *(5 points)*

Write a Scheme function named `getZerosDoublePositives`, which is applied to one parameter: a simple numeric list `lst`. The function should yield (not print) a list containing the values in `lst`, in their original order, where **zero values remain unchanged**, **positive values are doubled**, and **negative values are omitted**.

*Examples:*
```scheme
(getZerosDoublePositives '())
; => ()

(getZerosDoublePositives '(-5))
; => ()   (negative values are omitted)

(getZerosDoublePositives '(-1 4 0 -3 12))
; => (8 0 24)   (-1 and -3 omitted; 4→8, 12→24; 0 unchanged)
```

**Allowed built-in functions:**
- **Function construction:** `lambda`, `define`
- **Binding:** `let` (complex forms like `let*` and named `let` are **not** allowed)
- **Arithmetic:** `+`, `-`, `*`, `/`, `abs`, `sqrt`, `remainder`, `modulo`, `min`, `max`
- **Boolean values:** `#t`, `#f`
- **Equality predicates:** `=`, `>`, `<`, `>=`, `<=`, `even?`, `odd?`, `zero?`, `negative?`, `eqv?`, `eq?`
- **Logical predicates:** `and`, `or`, `not`
- **List predicates:** `list?`, `null?`
- **Conditionals:** `if`, `cond`, `else`
- **Quoting:** `quote`, `'`
- **List manipulation:** `list`, `car`, `cdr`, `cons`
- **I/O:** `display`, `printf`, `newline`, `read`

Submit file `u99999999.scm` to slot **"Examination: Scheme Function"**.

**Did you submit?**
- [ ] True
- [ ] False

---

`tags`: [year:2025, paper:exam, chapter:16, topic:prolog, topic:operators]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 6 *(5 points)*

Write a Prolog proposition called `getNegativesNegatePositives(L1, L2)`, where L1 and L2 are both simple numeric lists. The proposition succeeds if L2 contains the values in L1 in their original order, where **negative values remain unchanged**, **positive values are negated**, and **zero values are omitted**.

*Examples:*
```prolog
?- getNegativesNegatePositives([0], X).
% X = []   (zero values are omitted)

?- getNegativesNegatePositives([1, 0, -2, 0], X).
% X = [-1, -2]   (1 negated to -1; -2 unchanged; zeros omitted)
```

**Requirements:**
- You may define additional helper propositions.
- Only use constants, variables, list manipulation, arithmetic, relational expressions, the `is` operator, cuts, and the built-in `not` proposition. Do **not** use if-then, if-then-else, the semicolon (`;`) or pipe (`|`) operator outside of a list, or complex system predicates (including built-in `member`, `append`, `reverse`).

Submit file `u99999999.pl` to slot **"Examination: Prolog Proposition"**.

**Did you submit?**
- [ ] True
- [ ] False

---

`tags`: [year:2025, paper:exam, chapter:5]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 8 *(1 point)*

Consider the following statements about **accessing and modifying global variables in PHP, Python, and C**, and select the most correct.

- [ ] PHP's approach to accessing and modifying global variables is less writable than both Python and C.
- [ ] PHP's approach to accessing and modifying global variables is less reliable than both Python and C.
- [ ] PHP's approach to accessing and modifying global variables is less readable than both Python and C.
- [ ] PHP's approach to accessing and modifying global variables has a lower cost of execution than both Python and C.

---

`tags`: [year:2025, paper:exam, chapter:1, topic:language-history, topic:data-types]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 9 *(1 point)*

Fortran supports **elemental array operations**, which are not supported in most other high-level languages. Select the reason that describes a **strong justification** for their inclusion in Fortran.

- [ ] Elemental array operations improve the orthogonality of Fortran.
- [ ] Elemental array operations make sense because their purpose is unambiguous.
- [ ] Elemental array operations make sense for the implementation method that Fortran uses.
- [ ] Elemental array operations make sense in the programming domain for which Fortran was designed.

---

`tags`: [year:2025, paper:exam, chapter:7, topic:functional-programming]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 10 *(1 point)*

Consider the following statements about **list comprehensions in Python**, and select the most correct.

- [ ] List comprehensions improve the readability of list operations in Python.
- [ ] List comprehensions improve the writability of list operations in Python.
- [ ] List comprehensions improve the reliability of list operations in Python.
- [ ] List comprehensions improve the cost of training programmers in Python.

---

`tags`: [year:2025, paper:exam, chapter:7, topic:operators]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 11 *(1 point)*

Consider the following statements about **operator precedence and associativity in APL**, and select the most correct.

- [ ] Operator precedence and associativity in APL is highly orthogonal.
- [ ] Operator precedence and associativity in APL is very complex due to the large number of operators.
- [ ] Operator precedence and associativity in APL introduces a high cost of execution.
- [ ] Operator precedence and associativity in APL is unreliable.

---

`tags`: [year:2025, paper:exam, chapter:12, topic:operators]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 12 *(1 point)*

Consider the following statements about **operators in Ruby**, and select the most correct.

- [ ] Operators in Ruby are implemented in a way that is not very orthogonal.
- [ ] Operators in Ruby are not very writable.
- [ ] Operators in Ruby have a high cost of execution.
- [ ] Operators in Ruby are very reliable.

---

`tags`: [year:2025, paper:exam, chapter:7]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 13 *(1 point)*

Consider the following statements about **mixed mode arithmetic expressions in F# and C++**, and select the most correct.

- [ ] Mixed mode arithmetic expressions in F# are less readable than in C++.
- [ ] Mixed mode arithmetic expressions in F# are more writable than in C++.
- [ ] Mixed mode arithmetic expressions in F# have a higher execution cost than in C++.
- [ ] Mixed mode arithmetic expressions in F# are more reliable than in C++.

---

`tags`: [year:2025, paper:exam, chapter:7, topic:operators]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 14 *(1 point)*

Consider the following program code in a hypothetical programming language:

```
main() {
   int input
   int total = 0

   while ((total <= 100) or ((input = read()) != EOF)) {
      total = total + input
   }
   write(total)
}
```

The program reads a file of numbers, adding values to a total until either the total exceeds 100 or the end of file is reached. Assume C-like syntax, assignment is an expression, `or` is a logical or, and `EOF` indicates end of file. Select the statement that most correctly describes a **problem** with this program.

- [ ] If the `or` operator is short-circuit evaluated a side effect will occur, which causes a problem.
- [ ] If the `or` operator is short-circuit evaluated a side effect will **not** occur, which causes a problem.
- [ ] If the `or` operator is **not** short-circuit evaluated a side effect will occur, which causes a problem.
- [ ] If the `or` operator is **not** short-circuit evaluated a side effect will not occur, which causes a problem.

---

`tags`: [year:2025, paper:exam, chapter:7]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 15 *(1 point)*

Consider the following statements about **conditional targets**, and select the most correct.

- [ ] Conditional targets reduce the writability of assignments.
- [ ] Conditional targets increase the readability of assignments.
- [ ] Conditional targets increase the cost of execution of assignments.
- [ ] Conditional targets reduce the reliability of assignments.

---

`tags`: [year:2025, paper:exam, chapter:12, topic:operators]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 16 *(1 point)*

Consider the following statements about **multiple-target multiple-source assignments in Ruby**, and select the most correct.

- [ ] Multiple-target multiple-source assignments make Ruby more writable.
- [ ] Multiple-target multiple-source assignments make Ruby more readable.
- [ ] Multiple-target multiple-source assignments make Ruby more reliable.
- [ ] Multiple-target multiple-source assignments decrease the cost of execution of Ruby.

---

`tags`: [year:2025, paper:exam, chapter:1]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 17 *(1 point)*

Consider the following statements about the method that **Python and Perl** use to **disambiguate nested selectors**, and select the most correct.

- [ ] Python's approach is less writable than Perl's approach.
- [ ] Python's approach is less readable than Perl's approach.
- [ ] Python's approach can be less reliable than Perl's approach.
- [ ] Python's approach has a higher cost of execution than Perl's approach.

---

`tags`: [year:2025, paper:exam, chapter:8, topic:writability, topic:control-structures]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 18 *(1 point)*

Consider a situation where you have two variables `first` and `second`. You wish to assign different values to `second` depending on the value of `first`, using a **multiple-way selection** where the control expression is `first`. Select the programming language that allows you to achieve this in the **most writable** way.

- [ ] C++
- [ ] JavaScript
- [ ] C#
- [ ] Ruby

---

`tags`: [year:2025, paper:exam, chapter:8, topic:control-structures]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 19 *(1 point)*

Consider the following statements about **counter-controlled loops in C++**, and select the most correct.

- [ ] Counter-controlled loops in C++ are reliable because the loop body always executes a fixed number of times, which is clear from the three control expressions at the start of the loop.
- [ ] Counter-controlled loops in C++ are reliable because it is possible to include the definition of the loop variable in the first control expression at the start of the loop.
- [ ] Counter-controlled loops in C++ are unreliable because it is possible to branch into the loop body.
- [ ] Counter-controlled loops in C++ are unreliable because it is not possible to modify how many times the loop body executes once execution has entered the loop.

---

`tags`: [year:2025, paper:exam, chapter:8, topic:control-structures]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 20 *(1 point)*

Consider the following statements about **user-located loop control mechanisms in Java and C++**, and select the most correct.

- [ ] Java has more writable user-located loop control mechanisms than C++ does.
- [ ] Java has less writable user-located loop control mechanisms than C++ does.
- [ ] User-located loop control mechanisms are equally writable in Java and C++.
- [ ] Java has less reliable user-located loop control mechanisms than C++ does.

---

`tags`: [year:2025, paper:exam, chapter:9, topic:subprograms]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 22 *(1 point)*

Some programming languages allow **default values** to be given to a formal parameter when an actual parameter is left out. Select the option that most correctly describes a mechanism that allows **any** actual parameter to be left out of a subprogram call, regardless of the order in which the formal parameters are listed.

- [ ] By using positional parameters.
- [ ] By using keyword parameters.
- [ ] It is impossible to allow any actual parameter to be left out of a subprogram call, regardless of the order in which the formal parameters are listed.
- [ ] Subprograms always allow any actual parameter to be left out of a subprogram call, regardless of the order in which the formal parameters are listed.

---

`tags`: [year:2025, paper:exam, chapter:12, topic:subprograms]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 23 *(1 point)*

Consider the following statements about **subprograms in Ruby**, and select the most correct.

- [ ] Ruby does not allow a subprogram to have a variable number of parameters.
- [ ] Ruby allows subprograms to have a variable number of parameters, but all the parameters must have the same type because the parameters are stored in an array of a fixed type.
- [ ] Ruby allows subprograms to have a variable number of parameters of any type because the parameters are stored in an array of objects.
- [ ] Ruby allows subprograms to have a variable number of parameters of any type because the parameters are stored in an array, and are all dynamically typed.

---

`tags`: [year:2025, paper:exam, chapter:1]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 24 *(1 point)*

The following C++ program code is not legal:

```cpp
int doSomething(int val) {
   return val + 2;
}

float doSomething(int val) {
   return val + 1.0;
}
```

Select the option that most correctly describes the **underlying reason** for this being illegal.

- [ ] The fact that C++ does not support overloaded subprograms.
- [ ] The fact that variables of different types cannot be added.
- [ ] The fact that C++ performs a large number of coercions.
- [ ] The fact that C++ performs no coercions.

---

`tags`: [year:2025, paper:exam, chapter:1]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 25 *(1 point)*

Consider the following JavaScript program code:

```javascript
function doSomething(a, b) {
   return function(y) {return (a + b) - y;}
}

var thing = doSomething(10, 20);
```

Select the option that most correctly describes what `thing` is.

- [ ] The function `function(y) {return (a + b) - y;}`
- [ ] The function `function(y) {return (10 + 20) - y;}`
- [ ] A reference to the `doSomething` function.
- [ ] An invalid function, because a value for `y` cannot be specified.

---

`tags`: [year:2025, paper:exam, chapter:9, topic:subprograms]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 26 *(1 point)*

Consider the following statements about **pass-by-result parameters**, and select the most correct.

- [ ] Pass-by-result parameters can be passed using a physical copy or an access path.
- [ ] Pass-by-result parameters can be passed using only a physical copy because using an access path would create a functional side effect.
- [ ] Pass-by-result parameters can be passed using only a physical copy because the formal parameter is deallocated once the function terminates.
- [ ] Pass-by-result parameters can be passed using only an access path because a physical copy would take up additional memory and processing time.
- [ ] Pass-by-result parameters can be passed using only an access path because a physical copy would cause the calling function to work with an out-of-date copy of the formal parameter.

---

`tags`: [year:2025, paper:exam, chapter:12, topic:data-types, topic:subprograms]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 27 *(1 point)*

Consider the following statements about **multidimensional arrays as subprogram parameters in C and C#**, and select the most correct.

- [ ] The approach to passing multidimensional arrays in C is more writable than the approach used in C#.
- [ ] The approach to passing multidimensional arrays in C is more readable than the approach used in C#.
- [ ] The approach to passing multidimensional arrays in C is more reliable than the approach used in C#.
- [ ] The approach to passing multidimensional arrays in C is less orthogonal than the approach used in C#.

---

`tags`: [year:2025, paper:exam, chapter:12, topic:oop]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 28 *(2 points)*

Consider a hypothetical programming language that supports **multiple inheritance**. Four classes A, B, C, and D are defined. Classes B and C both inherit only from A. Class D inherits from both B and C. An **implicit name collision** is possible. Select **only** the implementation details that together result in an implicit name collision (not explicit). *(Incorrectly selected options will be penalised.)*

- [ ] Defining a method named `myMethod` in class A.
- [ ] Defining a method named `myMethod` in class B.
- [ ] Defining a method named `myMethod` in class C.
- [ ] Defining a method named `myMethod` in class D.

---

`tags`: [year:2025, paper:exam, chapter:1]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 29 *(2 points)*

You wish to implement a linked list and its nodes. Select **only** the programming language constructs that can be used to implement the **linked list nodes**. *(Incorrectly selected options will be penalised.)*

- [ ] A `struct` in C#
- [ ] A `struct` in C++
- [ ] A `class` in C++
- [ ] A `union` in C++

---

`tags`: [year:2025, paper:exam, chapter:12]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 30 *(1 point)*

Consider the following statements about **Ruby**, and select the most correct.

- [ ] Ruby has highly efficient primitive types.
- [ ] Ruby has support for a programmer to explicitly allocate and deallocate heap memory for objects.
- [ ] Ruby allows the programmer to choose between dynamic and static message binding.
- [ ] Ruby classes have very unreliable message interfaces.

---

`tags`: [year:2025, paper:exam, chapter:1]
`source`: [2025_examination.md](Content/past_papers/exams/2025_examination.md)
### Question 31 *(1 point)*

Consider the following statements about **Java and C++**, and select the most correct.

- [ ] Java uses objects less exclusively than C++.
- [ ] Java supports some of the benefits of multiple inheritance, while preventing name collisions.
- [ ] Java supports some of the benefits of multiple inheritance, but does not prevent name collisions.
- [ ] Java exclusively supports dynamic message binding, while C++ allows the programmer to choose between dynamic and static message binding.


## 2024 Semester Test 1

Source: `Content\past_papers\ST1\2024_semester_test_1.md`

`tags`: [year:2024, paper:st1, chapter:1, topic:data-types]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 2 *(1 point)*

Assume two hypothetical programming languages, A and B, both supporting primitive numeric values. Language A supports single-dimensional arrays and two-dimensional arrays as two separate data types. Language B supports only single-dimensional arrays, which can store primitive numeric values as well as other single-dimensional arrays. Select the most correct statement.

- [ ] Programming language A is more orthogonal than B, primarily because A allows two-dimensional arrays to be represented while B does not.
- [ ] Programming language A is more orthogonal than B, primarily because more combinations of constructs are legal in A.
- [ ] Programming language B is more orthogonal than A, primarily because more combinations of constructs are legal in B.
- [ ] Programming language B is more orthogonal than A, primarily because B has fewer constructs than A.

---

`tags`: [year:2024, paper:st1, chapter:6, topic:data-types]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 3 *(1 point)*

Consider a hypothetical programming language that does **not** have a separate Boolean data type. Select the most correct statement.

- [ ] This language has reduced readability because a Boolean value cannot be represented.
- [ ] This language has reduced readability because a Boolean value needs to be represented in a less natural way.
- [ ] This language has reduced writability because a Boolean value cannot be represented.
- [ ] This language has reduced writability because a Boolean value needs to be represented in a less natural way.

---

`tags`: [year:2024, paper:st1, chapter:12, topic:oop]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 4 *(1 point)*

Compare imperative programming languages that **support** object-oriented programming with those that **do not**. Select the most correct statement.

- [ ] Imperative languages that support OOP can be considered less readable than those that do not.
- [ ] Imperative languages that support OOP can be considered more readable than those that do not.
- [ ] Imperative languages that support OOP can be considered less writable than those that do not.
- [ ] Imperative languages that support OOP can be considered exactly as writable as those that do not.

---

`tags`: [year:2024, paper:st1, chapter:6, topic:data-types]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 5 *(1 point)*

Many modern languages have good support for type checking, while some older languages did not. Generally, better type checking is considered beneficial. Consider the following statements about **potential disadvantages** of better type checking, and select the most correct.

- [ ] Good support for type checking will negatively impact the readability of a programming language.
- [ ] Good support for type checking will negatively impact the reliability of a programming language.
- [ ] Good support for type checking will negatively impact the cost of maintenance of a programming language.
- [ ] Good support for type checking will negatively impact the execution cost of a programming language.

---

`tags`: [year:2024, paper:st1, chapter:1, topic:cost]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 6 *(1 point)*

Consider the following contributing factors to the cost of a programming language, and select the **most important one in a modern context**.

- [ ] Cost of training programmers to use the language
- [ ] Cost of reliability
- [ ] Cost of compiling programs
- [ ] Cost of executing programs

---

`tags`: [year:2024, paper:st1, chapter:1, topic:well-definedness]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 7 *(1 point)*

An additional evaluation criterion not heavily focused on in this course is **well-definedness**. Consider the following programming domains, and select the one that **benefits the most** from improved well-definedness.

- [ ] Business applications
- [ ] Artificial intelligence
- [ ] Systems programming
- [ ] Web software

---

`tags`: [year:2024, paper:st1, chapter:2]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 8 *(1 point)*

Various factors can influence programming language design. Select the influence that had the **greatest impact** on the design of the earliest programming languages for scientific applications.

- [ ] Computer architecture
- [ ] Programmer efficiency becoming more important than machine efficiency
- [ ] The move from process-oriented programming to data-oriented programming
- [ ] The move to object-oriented programming

---

`tags`: [year:2024, paper:st1, chapter:2, topic:portability]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 9 *(2 points)*

Consider programming languages in which **portability** is very important, and select **only** the implementation methods that are well suited for these types of languages. *(Incorrectly selected options will be penalised.)*

- [ ] Compilation
- [ ] Pure interpretation
- [ ] Hybrid implementation systems
- [ ] No current implementation system is well suited for portability

---

`tags`: [year:2024, paper:st1, chapter:2]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 10 *(1 point)*

Consider the following statements about the **NetBeans and UNIX** programming environments, and select the most correct.

- [ ] The NetBeans programming environment is less integrated than the UNIX programming environment.
- [ ] The NetBeans programming environment is less user friendly for most programmers than the UNIX programming environment.
- [ ] The NetBeans programming environment is less time consuming for most programmers to use than the UNIX programming environment.
- [ ] The NetBeans programming environment is less visual than the UNIX programming environment.

---

`tags`: [year:2024, paper:st1, chapter:2, topic:language-history]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 11 *(1 point)*

Compare **Plankalkül and Fortran I**. Select the most correct statement.

- [ ] Plankalkül was more writable than Fortran I.
- [ ] Plankalkül was less readable than Fortran I.
- [ ] Plankalkül had better support for data structures than Fortran I.
- [ ] Plankalkül was more widely used than Fortran I.

---

`tags`: [year:2024, paper:st1, chapter:2, topic:language-history]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 12 *(2 points)*

Pseudocode languages were quickly replaced by high-level languages like Fortran and COBOL. Select **only** the factors that contributed to this replacement. *(Incorrectly selected options will be penalised.)*

- [ ] Some pseudocode languages were far less writable than high-level programming languages.
- [ ] Some pseudocode language programs were expanded into machine code.
- [ ] The computers that all pseudocode languages were designed to run on did not have hardware support for floating point calculations.
- [ ] No pseudocode languages had any support for indexing arrays.

---

`tags`: [year:2024, paper:st1, chapter:2, topic:language-history]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 13 *(2 points)*

Fortran 90 was the first version of Fortran to move away from the most important programming language design concern focused on by earlier versions. Select **only** the statements that contributed to this change of focus in Fortran 90. *(Incorrectly selected options will be penalised.)*

- [ ] Fortran 90 relaxed the fixed code format requirements of earlier versions.
- [ ] Fortran 90 added support for a CASE statement.
- [ ] Fortran 90 added support for recursion.
- [ ] Fortran 90 added support for dynamic arrays.

---

`tags`: [year:2024, paper:st1, chapter:2, topic:language-history]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 14 *(2 points)*

LISP was originally designed for artificial intelligence programming. Select **only** the factors that most directly contribute to the usefulness of LISP in this domain. *(Incorrectly selected options will be penalised.)*

- [ ] LISP supports symbolic values.
- [ ] LISP does not support variables.
- [ ] LISP is based on lambda calculus.
- [ ] LISP supports the representation and processing of lists.

---

`tags`: [year:2024, paper:st1, chapter:2, topic:language-history]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 15 *(1 point)*

ALGOL 60 made several contributions to the field of programming languages. Select the statement that most correctly describes a contribution made by ALGOL 60.

- [ ] ALGOL 60 had well-defined I/O operations.
- [ ] ALGOL 60 demonstrated that a programming language could be designed well for a specific hardware platform.
- [ ] ALGOL 60 was very well suited to describing and communicating algorithms.
- [ ] ALGOL 60 was translatable to machine code.

---

`tags`: [year:2024, paper:st1, chapter:2, topic:generality, topic:language-history]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 16 *(1 point)*

Both PL/I and ALGOL 68 aimed to support a variety of general-purpose data structures, but ALGOL 68 used a better approach. Select the factor that most contributed to ALGOL 68's superiority.

- [ ] ALGOL 68 combined many more data structure-related constructs than PL/I.
- [ ] ALGOL 68 was more orthogonal than PL/I.
- [ ] ALGOL 68 had data structures with a lower execution cost than those provided by PL/I.
- [ ] ALGOL 68 supported data abstraction, while PL/I did not.

---

`tags`: [year:2024, paper:st1, chapter:1]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 17 *(1 point)*

Consider the following statements about **Pascal and C**, and select the most correct.

- [ ] Pascal is more readable than C.
- [ ] Pascal is more writable than C.
- [ ] Pascal is more reliable than C.
- [ ] Pascal has a lower cost of writing programs than C.

---

`tags`: [year:2024, paper:st1, chapter:1]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 18 *(1 point)*

Consider the following statements about **Java and C++**, and select the most correct.

- [ ] Java is less reliable than C++.
- [ ] Java is less readable than C++.
- [ ] Java uses the concepts of object-oriented programming more consistently than C++.
- [ ] Java is less portable than C++.

---

`tags`: [year:2024, paper:st1, chapter:15, topic:scheme, topic:subprograms]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 19 *(1 point)*

Imagine you apply a function to a parameter in Scheme:

```scheme
(doSomething aValue)
```

You want the `doSomething` function to **change the value of `aValue`**. Select the most correct statement.

- [ ] You can achieve this by using a `let` within the definition of `doSomething`.
- [ ] You can achieve this by using a `define` within the definition of `doSomething`.
- [ ] You can achieve this by performing an arithmetic operation on `aValue` within `doSomething`.
- [ ] It is impossible to achieve this in Scheme.

---

`tags`: [year:2024, paper:st1, chapter:15, topic:scheme]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 20 *(1 point)*

Consider the following statements about the **addition operation in Scheme**, and select the most correct.

- [ ] The addition operation is always implemented as an operator in Scheme.
- [ ] The addition operation is always implemented as a function in Scheme.
- [ ] The addition operation is implemented as either an operator or a function in Scheme, depending on the interpreter or compiler being used.
- [ ] The addition operation is implemented as a predicate in Scheme.

---

`tags`: [year:2024, paper:st1, chapter:15, topic:scheme, topic:subprograms]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 21 *(1 point)*

Imagine you apply a function to a list parameter in Scheme:

```scheme
(doSomething '(* 3 4))
```

You wish to **perform the multiplication** described in the list parameter. Select the most correct statement.

- [ ] The multiplication is automatically performed before the list is passed to `doSomething`.
- [ ] You can achieve this by providing the name of the list parameter in parentheses within the definition of `doSomething`.
- [ ] You can achieve this by applying the `eval` function to the list parameter within the definition of `doSomething`.
- [ ] It is impossible to achieve this in Scheme.

---

`tags`: [year:2024, paper:st1, chapter:15, topic:scheme, topic:binding-time, topic:data-types, topic:subprograms]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 22 *(5 points)*

Write a Scheme function named `coneVolume`, which receives two numeric parameters: the **radius** of the circular base and the **height** of the cone. The function should yield (not print) the volume of the cone:

```
volume = (1/3) * pi * r^2 * h
```

The function should yield `0` if either the radius or height is negative. Use a `let` (not `define`) to bind `1/3` to the name `third` and `22/7` to the name `pi`.

*Example:* `(coneVolume 2.8 1.7)` should yield approximately `13.962666666666665`.

**Allowed built-in functions:**
- **Function construction:** `lambda`, `define`
- **Binding:** `let`
- **Arithmetic:** `+`, `-`, `*`, `/`, `abs`, `sqrt`, `remainder`, `modulo`, `min`, `max`
- **Boolean values:** `#t`, `#f`
- **Equality predicates:** `=`, `>`, `<`, `>=`, `<=`, `even?`, `odd?`, `zero?`, `negative?`, `eqv?`, `eq?`
- **Logical predicates:** `and`, `or`, `not`
- **List predicates:** `list?`, `null?`
- **Conditionals:** `if`, `cond`, `else`
- **Quoting:** `quote`, `'`
- **List manipulation:** `list`, `car`, `cdr`, `cons`
- **I/O:** `display`, `printf`, `newline`, `read`

Submit file `s99999999.scm` to slot **"Semester Test 1: Arithmetic Scheme Function"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2024, paper:st1, chapter:15, topic:scheme, topic:subprograms]
`source`: [2024_semester_test_1.md](Content/past_papers/ST1/2024_semester_test_1.md)
### Question 23 *(5 points)*

Write a Scheme function named `duplicateNonMatchingValues`, which receives two parameters: a **simple list of atoms** and an **atom**. The function should yield (not print) a list containing all values from the parameter list, in their original order, with all values that **do not match** the second parameter **duplicated**.

*Examples:*
```scheme
(duplicateNonMatchingValues '() 'A)
; => ()

(duplicateNonMatchingValues '(A D A C B) 'A)
; => (A D D A C C B B)
```

**Allowed built-in functions:** *(same as Question 22)*

Submit file `s99999999.scm` to slot **"Semester Test 1: List Processing Scheme Function"**.

**Did you submit?**
- [ ] Yes
- [ ] No


## 2025 Semester Test 1

Source: `Content\past_papers\ST1\2025_semester_test_1.md`

`tags`: [year:2025, paper:st1, chapter:1]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 2 *(1 point)*

Assume two hypothetical programming languages, A and B, both supporting primitive numeric types and functions. Language A allows functions to return only numeric types. Language B allows functions to return numeric types and functions. Select the most correct statement.

- [ ] Programming language A is more orthogonal than B because A supports a smaller set of constructs than B.
- [ ] Programming language A is more orthogonal than B because returning functions makes no sense.
- [ ] Programming language B is more orthogonal than A because B supports a larger set of constructs than A.
- [ ] Programming language B is more orthogonal than A because B allows more legal return values than A.

---

`tags`: [year:2025, paper:st1, chapter:8]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 3 *(1 point)*

Some programming languages use special words to mark the start and end of a compound statement (block). Select the option that most correctly describes a **consequence** of using special words to mark compound statements.

- [ ] Readability is decreased.
- [ ] Writability is improved.
- [ ] Writability is decreased.
- [ ] Reliability is improved.

---

`tags`: [year:2025, paper:st1, chapter:5]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 4 *(1 point)*

Many programming languages support some kind of **aliasing**. Select the option that most correctly describes a **consequence** of including support for aliasing.

- [ ] Readability is improved.
- [ ] Writability is improved.
- [ ] Reliability is increased.
- [ ] The overall cost of the programming language decreases.

---

`tags`: [year:2025, paper:st1, chapter:6, topic:reliability, topic:data-types]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 5 *(1 point)*

Type checking is generally considered beneficial to reliability. Select the most correct statement about **type checking**.

- [ ] Type checking increases the cost of execution for a programming language.
- [ ] Type checking increases the cost of reliability for a programming language.
- [ ] Type checking increases the writability of a programming language, because it gives the programmer more flexibility.
- [ ] Type checking has no impact on any of the programming language evaluation criteria.

---

`tags`: [year:2025, paper:st1, chapter:1]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 6 *(1 point)*

Consider the following programming domains, and select the one that a **hybrid implementation system** is most suitable for.

- [ ] Scientific applications
- [ ] Business applications
- [ ] Systems programming
- [ ] Web software

---

`tags`: [year:2025, paper:st1, chapter:15, topic:scheme]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 7 *(2 points)*

Scheme has **poor execution performance**. Select **only** the factors that contribute to this poor performance. *(Incorrectly selected options will be penalised.)*

- [ ] The implementation method that is most often used for Scheme.
- [ ] The programming domain that Scheme was designed for.
- [ ] The programming methodology that is most often used with Scheme.
- [ ] Modern computer architecture.

---

`tags`: [year:2025, paper:st1, chapter:12, topic:language-history]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 8 *(1 point)*

Various factors can influence programming language design. Select the programming language design influence that had its **earliest impact** on the design of **Smalltalk**.

- [ ] Computer architecture
- [ ] Programmer efficiency becoming more important than machine efficiency
- [ ] The move from process-oriented programming to data-oriented programming
- [ ] The move to object-oriented programming

---

`tags`: [year:2025, paper:st1, chapter:2, topic:language-history]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 9 *(1 point)*

Consider the following statements about **Fortran 90**, and select the most correct.

- [ ] Fortran 90 was only focused on the execution speed of compiled program code.
- [ ] Fortran 90 introduced language features that improved writability at the expense of the execution speed of compiled program code.
- [ ] Fortran 90 introduced language features that reduced writability in order to improve the execution speed of compiled program code.
- [ ] Fortran 90 required code to be structured in a way that facilitated code execution from punch cards.

---

`tags`: [year:2025, paper:st1, chapter:2, topic:language-history]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 10 *(1 point)*

Consider the following statements about the **successes of ALGOL 60**, and select the most correct.

- [ ] ALGOL 60 was successful as a programming language that was applicable to many different programming domains.
- [ ] ALGOL 60 was completely successful as a machine-independent programming language.
- [ ] ALGOL 60 served as a very readable standard for documenting algorithms.
- [ ] ALGOL 60 had a formal syntax description that was widely accepted at the time ALGOL 60 was created.

---

`tags`: [year:2025, paper:st1, chapter:2, topic:language-history]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 11 *(1 point)*

Consider the following statements about **PL/I**, and select the most correct.

- [ ] PL/I was intended for scientific applications.
- [ ] PL/I aimed to be more well-defined than programming languages developed in previous years.
- [ ] PL/I aimed to have better generality than programming languages developed in previous years.
- [ ] PL/I aimed to have better portability than programming languages developed in previous years.

---

`tags`: [year:2025, paper:st1, chapter:1]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 12 *(1 point)*

Consider the following statements about **APL**, and select the most correct.

- [ ] APL demonstrates that there is not necessarily a tradeoff between readability and writability, because it has both good readability and good writability.
- [ ] APL demonstrates that there is often a tradeoff between readability and writability, because APL has good readability and poor writability.
- [ ] APL demonstrates that there is often a tradeoff between readability and writability, because APL has poor readability and good writability.
- [ ] APL demonstrates that there is not necessarily a tradeoff between readability and writability, because it has both poor readability and poor writability.

---

`tags`: [year:2025, paper:st1, chapter:2, topic:language-history]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 13 *(2 points)*

Select **only** the language features that were **pioneered by Simula 67**. *(Incorrectly selected options will be penalised.)*

- [ ] Systems programming support
- [ ] Coroutines
- [ ] Classes and objects
- [ ] Inheritance and polymorphism

---

`tags`: [year:2025, paper:st1, chapter:2, topic:language-history]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 14 *(1 point)*

Consider the following statements about **Delphi**, and select the most correct.

- [ ] Delphi is an imperative programming language that was extended with support for object-oriented programming.
- [ ] Delphi is a purely object-oriented programming language.
- [ ] Delphi has no support for object-oriented programming.
- [ ] Delphi is less reliable than C++.

---

`tags`: [year:2025, paper:st1, chapter:12]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 15 *(1 point)*

Consider the following statements about **Ruby**, and select the most correct.

- [ ] Ruby is a compiled programming language.
- [ ] Ruby is primarily an imperative programming language with optional support for object-oriented programming.
- [ ] Ruby supports classes and objects, but does not support inheritance and polymorphism.
- [ ] Ruby is unreliable because its classes and objects can have different structures at different times.

---

`tags`: [year:2025, paper:st1, chapter:15, topic:orthogonality, topic:scheme]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 16 *(2 points)*

Select **only** the programming language features that improve the **orthogonality of Scheme**. *(Incorrectly selected options will be penalised.)*

- [ ] The fact that only symbolic and numeric atoms are supported.
- [ ] The fact that functions and lists are represented the same way.
- [ ] The fact that functions can be used as parameters.
- [ ] The fact that functional side effects are not allowed.

---

`tags`: [year:2025, paper:st1, chapter:15, topic:scheme]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 17 *(2 points)*

Consider the following Scheme code:

```scheme
(doSomething thing)
```

Select **only** the options that describe what `thing` can be. *(Incorrectly selected options will be penalised.)*

- [ ] A symbolic atom.
- [ ] A name to which a value has been bound, and for which the binding can change at a later time.
- [ ] A name to which a value has been bound, and for which the binding cannot change.
- [ ] The name of a function.

---

`tags`: [year:2025, paper:st1, chapter:15, topic:control-structures, topic:functional-programming]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 18 *(2 points)*

One way referential transparency can break down is through **functional side effects**. Select **only** the options that describe a **different way** in which referential transparency could break down (i.e. not a functional side effect). *(Incorrectly selected options will be penalised.)*

- [ ] When a variable is used in a function.
- [ ] When a function returns no value.
- [ ] When a function returns a random value.
- [ ] When a function reads a user input, and returns this value.

---

`tags`: [year:2025, paper:st1, chapter:15, topic:scheme]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 19 *(1 point)*

Consider the following Scheme code:

```scheme
(eval '(+ 2 3))
```

Select the option that most correctly explains what happens when this code is executed.

- [ ] The code fails to execute because the `eval` function is undefined.
- [ ] The Scheme interpreter evaluates the list `(+ 2 3)` as if it is a function application, producing the result `5`.
- [ ] The function application `(+ 2 3)` is evaluated, producing the result `5`. The function `eval` prints out this result.
- [ ] The function application `(+ 2 3)` is evaluated, producing the result `5`. The result is converted into the list `(5)`. The function `eval` prints out the content of this list, which is the value `5`.

---

`tags`: [year:2025, paper:st1, chapter:15, topic:scheme, topic:binding-time, topic:data-types, topic:subprograms]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 20 *(5 points)*

Write a Scheme function named `coneArea`, which receives two numeric parameters: the **radius** of the circular base and the **slant height** of the cone. The function should yield (not print) the area of the cone:

```
area = pi * r^2 + pi * r * l
```

The function should yield `0` if either the radius or slant height is negative. Use a `let` (not `define`) to bind `22/7` to the name `pi` and the result of `r^2` to the name `rSquared`.

*Example:* `(display (coneArea 1.2 2.1))` should yield approximately `12.445714285714285`.

**Allowed built-in functions:**
- **Function construction:** `lambda`, `define`
- **Binding:** `let`
- **Arithmetic:** `+`, `-`, `*`, `/`, `abs`, `sqrt`, `remainder`, `modulo`, `min`, `max`
- **Boolean values:** `#t`, `#f`
- **Equality predicates:** `=`, `>`, `<`, `>=`, `<=`, `even?`, `odd?`, `zero?`, `negative?`, `eqv?`, `eq?`
- **Logical predicates:** `and`, `or`, `not`
- **List predicates:** `list?`, `null?`
- **Conditionals:** `if`, `cond`, `else`
- **Quoting:** `quote`, `'`
- **List manipulation:** `list`, `car`, `cdr`, `cons`
- **I/O:** `display`, `printf`, `newline`, `read`

Submit file `u99999999.scm` to slot **"Semester Test 1: Arithmetic Scheme Function"**.

**Did you submit?**
- [ ] True
- [ ] False

---

`tags`: [year:2025, paper:st1, chapter:15, topic:scheme, topic:subprograms]
`source`: [2025_semester_test_1.md](Content/past_papers/ST1/2025_semester_test_1.md)
### Question 21 *(5 points)*

Write a Scheme function named `countDivisors`, which is applied to two parameters: a numeric atom `atm` and a simple numeric list `lst`. The function should yield (not print) the **number of divisors of `atm`** contained in `lst`. A divisor of `a` is a value that divides perfectly into `a`.

*Examples:*
```scheme
(countDivisors 6 '())
; => 0   (empty list contains no divisors)

(countDivisors 6 '(4 12))
; => 0   (4 and 12 are not divisors of 6)

(countDivisors 6 '(1 4 3 12))
; => 2   (only 1 and 3 are divisors of 6)
```

**Allowed built-in functions:** *(same as Question 20)*

Submit file `u99999999.scm` to slot **"Semester Test 1: List Processing Scheme Function"**.

**Did you submit?**
- [ ] True
- [ ] False


## 2024 Semester Test 2

Source: `Content\past_papers\ST2\2024_semester_test_2.md`

`tags`: [year:2024, paper:st2, chapter:16, topic:prolog]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 2 *(2 points)*

Assume that you have a Prolog program with three kinds of facts: `cat(X)` (X is a cat), `dog(X)` (X is a dog), and `pet(X, Y)` (X is a pet owned by Y). You wish to write a query that determines whether `peter` owns a pet that is a cat. Select the query that **most efficiently** determines an instantiation for the pet of peter.

- [ ] `?- cat(X), pet(X, peter).`
- [ ] `?- pet(X, peter), cat(X).`
- [ ] `?- cat(X).` then `?- pet(X, peter).`
- [ ] `?- pet(X, peter).` then `?- cat(X).`

---

`tags`: [year:2024, paper:st2, chapter:16, topic:prolog]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 3 *(5 points)*

Assume that you have Prolog facts describing tenants and addresses:

```prolog
tenant(alice, tony).
tenant(tom, jane).
tenant(joe, tony).
tenant(mary, jane).
address(alice, pineStreet12).
address(tom, shillingLane15).
address(joe, duncanRoad6).
address(mary, shillingLane15).
address(jonathan, pineStreet12).
```

`tenant(X, Y)` means X rents from Y. `address(X, Y)` means X lives at Y.

Write a Prolog proposition called `ownsSharedProperty(X)`, which succeeds if atom X owns a property rented by two individuals who share the same address. In the above example, only `jane` satisfies this (tom and mary are both her tenants and both live at `shillingLane15`).

**Requirements:**
- You may **not** define any additional facts other than `tenant` and `address`.
- You may define additional helper propositions.
- Only use constants, variables, list manipulation, arithmetic, relational expressions, and built-in predicates from the textbook/slides. Do **not** use if-then, if-then-else, or complex system predicates.

Submit file `s99999999.pl` to slot **"Semester Test 2: Simple Prolog Proposition"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2024, paper:st2, chapter:16, topic:prolog]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 4 *(5 points)*

Write a Prolog proposition called `countNonMatching(E, L, C)`, which succeeds if C is the number of elements in list L that **do not match** atom E. For example:

```prolog
?- countNonMatching(a, [a, a], X).
% X = 0

?- countNonMatching(a, [a, b, a, c, d], X).
% X = 3
```

**Requirements:**
- You may define additional helper propositions.
- Only use constants, variables, list manipulation, arithmetic, relational expressions, and built-in predicates from the textbook/slides. Do **not** use if-then, if-then-else, or complex system predicates.

Submit file `s99999999.pl` to slot **"Semester Test 2: List Processing Prolog Proposition"**.

**Did you submit?**
- [ ] Yes
- [ ] No

---

`tags`: [year:2024, paper:st2, chapter:5, topic:writability]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 5 *(1 point)*

Consider the following programming languages, and select the one that is the **most writable** in terms of name length, in a real-world context.

- [ ] Fortran 95
- [ ] C99
- [ ] C++
- [ ] Ada

---

`tags`: [year:2024, paper:st2, chapter:1, topic:binding-time]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 7 *(1 point)*

Consider the following program code in a hypothetical programming language:

```
1. myVariable = [1, 2, 3]
2. myVariable = 14
```

Assume the above code results in a **compilation error on line 2**. Select the kind of type binding most likely used for `myVariable`.

- [ ] Explicit type declaration
- [ ] Implicit type declaration without type inferencing
- [ ] Implicit type declaration with type inferencing
- [ ] Dynamic type binding

---

`tags`: [year:2024, paper:st2, chapter:1]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 8 *(1 point)*

Consider the following categories of variables, and select the one that **has no name** associated with it.

- [ ] Static variables
- [ ] Stack-dynamic variables
- [ ] Explicit heap-dynamic variables
- [ ] Implicit heap-dynamic variables

---

`tags`: [year:2024, paper:st2, chapter:6, topic:data-types]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 11 *(1 point)*

Some programming languages support complex numbers as a primitive data type. Select the statement that **most accurately describes an implication** of such support.

- [ ] Computations using complex number types have a somewhat high cost of execution, because these computations are not directly supported by most hardware.
- [ ] Computations using complex number types have a very low cost of execution, because these computations are directly supported by most hardware.
- [ ] Support for complex number types greatly increases the readability of a programming language.
- [ ] Support for complex number types greatly decreases the writability of a programming language.

---

`tags`: [year:2024, paper:st2, chapter:6, topic:data-types]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 12 *(1 point)*

Select the statement that most accurately describes a potential **drawback associated with Boolean data types**.

- [ ] Operations on Boolean data types have a high execution cost.
- [ ] Boolean data types are inefficient in terms of memory space.
- [ ] Boolean data types have low readability in most modern programming languages.
- [ ] Boolean data types are never considered to be ordinal.

---

`tags`: [year:2024, paper:st2, chapter:7, topic:data-types, topic:operators]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 13 *(1 point)*

Consider the following enumeration type definition:

```
enumeration month {jan, feb, mar}
```

Assume that other types can be coerced into enumeration types. Select the snippet that correctly represents an **error** that could occur due to this coercion.

- [ ] `month firstMonth = feb` / `month secondMonth = mar` / `print(firstMonth + secondMonth)`
- [ ] `month myMonth = 1`
- [ ] `month myMonth = 4`
- [ ] `print(jan)`

---

`tags`: [year:2024, paper:st2, chapter:6, topic:data-types]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 14 *(1 point)*

Consider the following statements about **index range checking** for arrays in Ada and Java, and select the most correct.

- [ ] Ada's index range checking is always less reliable than Java's range checking.
- [ ] Ada's index range checking can be more reliable than Java's range checking.
- [ ] Ada's index range checking is much less writable than Java's range checking.
- [ ] Ada's index range checking is much more writable than Java's range checking.

---

`tags`: [year:2024, paper:st2, chapter:1, topic:data-types]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 15 *(1 point)*

Consider the following program code:

```
void f() {
   integer myVar = 3
   integer myArray[myVar]
   myArray[0] = 5
   myArray[1] = 2
   myArray[2] = 4
   print(myArray[1])
}
```

Select the statement that most correctly describes the **category of `myArray`**.

- [ ] Static
- [ ] Fixed stack-dynamic
- [ ] Stack-dynamic
- [ ] Fixed heap-dynamic
- [ ] Heap-dynamic

---

`tags`: [year:2024, paper:st2, chapter:6, topic:language-history, topic:data-types]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 16 *(2 points)*

Assume you wish to simulate a **heterogeneous array** in a language that does not directly support them. Select **only** the approaches that will correctly simulate this functionality. *(Incorrectly selected options will be penalised.)*

- [ ] Using a normal array in a statically typed language which stores values of different primitive data types.
- [ ] Using a normal array in a statically typed language which stores instances of an `Object` class, where all other classes inherit from `Object`.
- [ ] Using two normal arrays in a statically typed language, where one stores keys and the other stores corresponding values.
- [ ] Using a normal array in a dynamically typed programming language.

---

`tags`: [year:2024, paper:st2, chapter:6, topic:data-types]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 17 *(1 point)*

Matrices in C do not support array slices. Select the statement that most correctly describes the **reason** for this.

- [ ] C implements matrices using arrays containing other arrays. Arrays in C have built-in slice operations, meaning the matrix itself does not require support for slice operations.
- [ ] C implements matrices using arrays containing other arrays. It is therefore easy to retrieve part of the matrix using standard array operations.
- [ ] C implements matrices using rectangular arrays. Rectangular arrays cannot support slice operations.
- [ ] C implements matrices using rectangular arrays. Rectangular arrays cannot represent matrices.

---

`tags`: [year:2024, paper:st2, chapter:6]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 18 *(1 point)*

Select the statement about the **MOVE CORRESPONDING** operation in COBOL that is the most correct.

- [ ] The MOVE CORRESPONDING operation in COBOL is equivalent to an assignment between records in most modern imperative programming languages.
- [ ] The MOVE CORRESPONDING operation in COBOL is useful because it concatenates two records, which is a common operation in COBOL's programming domain.
- [ ] The MOVE CORRESPONDING operation in COBOL is useful because it extracts sub-records within another record, which is a common operation in COBOL's programming domain.
- [ ] The MOVE CORRESPONDING operation in COBOL is useful because it copies only relevant data between two records, which is a common operation in COBOL's programming domain.

---

`tags`: [year:2024, paper:st2, chapter:7, topic:functional-programming]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 19 *(1 point)*

Select the statement about **list comprehensions** that is the most correct.

- [ ] Support for list comprehensions greatly increases the writability of lists and list operations.
- [ ] Support for list comprehensions greatly increases the readability of lists and list operations.
- [ ] Support for list comprehensions greatly increases the orthogonality of lists and list operations.
- [ ] Support for list comprehensions greatly decreases the amount of memory space occupied by lists.

---

`tags`: [year:2024, paper:st2, chapter:6, topic:data-types]
`source`: [2024_semester_test_2.md](Content/past_papers/ST2/2024_semester_test_2.md)
### Question 20 *(1 point)*

Some programming languages implicitly dereference all pointers. Select the statement that is the most correct.

- [ ] Implicitly dereferenced pointers are more reliable than explicitly dereferenced pointers.
- [ ] Implicitly dereferenced pointers prevent pointers from being used for indirect addressing.
- [ ] Implicitly dereferenced pointers prevent pointers from being used for dynamic storage management.
- [ ] Implicitly dereferenced pointers disallow pointer arithmetic.


## 2025 Semester Test 2

Source: `Content\past_papers\ST2\2025_semester_test_2.md`

`tags`: [year:2025, paper:st2, chapter:16, topic:prolog, topic:subprograms]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 1 *(1 point)*

Consider the following Prolog proposition implementation:

```prolog
tail([], []).
tail([H|T], T).
```

The `tail` proposition succeeds if the second parameter is the tail of the first parameter (the tail of an empty list is an empty list). This implementation causes a Prolog interpreter to raise a warning. Select the statement that is most correct.

- [ ] The warning can be avoided by replacing `H` with `_`, although the `tail` proposition will not work correctly for certain queries.
- [ ] The warning can be avoided by replacing `H` with `_`, although the `tail` proposition will be less efficient than the original implementation.
- [ ] The warning can be avoided by replacing `H` with `_`, although the `tail` proposition will be less reliable than the original implementation.
- [ ] The warning can be avoided without changing how the `tail` proposition works by replacing `H` with `_`.

---

`tags`: [year:2025, paper:st2, chapter:16, topic:prolog]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 2 *(1 point)*

Consider the following Prolog proposition implementation:

```prolog
primeGreaterThanOneMillion(X) :- prime(X), X > 1000000.
```

Assume `prime(X)` succeeds if X is a prime number. Select the statement that is most correct.

- [ ] The `primeGreaterThanOneMillion` proposition will execute **more** efficiently if rewritten as: `primeGreaterThanOneMillion(X) :- X > 1000000, prime(X).`
- [ ] The `primeGreaterThanOneMillion` proposition will execute **less** efficiently if rewritten as: `primeGreaterThanOneMillion(X) :- X > 1000000, prime(X).`
- [ ] The `primeGreaterThanOneMillion` proposition will **not work correctly** unless rewritten as: `primeGreaterThanOneMillion(X) :- X > 1000000, prime(X).`
- [ ] The `primeGreaterThanOneMillion` proposition cannot be successfully implemented, due to a deficiency of Prolog.

---

`tags`: [year:2025, paper:st2, chapter:16, topic:prolog]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 3 *(1 point)*

Assume you wish to write a Prolog proposition that ensures two variables X and Y do not represent the same thing. Select the statement that describes the **most rigorous and correct** way to achieve this.

- [ ] X and Y are always different because X and Y represent two distinct atoms.
- [ ] X and Y are always different because X and Y represent two distinct variables.
- [ ] By defining a proposition called `unequal(X, Y)` for every pair of atoms that are not the same.
- [ ] By using the proposition `not(X = Y)`.

---

`tags`: [year:2025, paper:st2, chapter:16, topic:prolog, topic:operators]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 4 *(5 points)*

Assume you have Prolog facts describing family relationships:

```prolog
father(bill, jake).
father(bill, shelley).
father(jake, ted).
father(ron, liz).

mother(mary, jake).
mother(mary, shelley).
mother(janet, ted).
mother(shelley, liz).
```

`father(X, Y)` means X is the father of Y. `mother(X, Y)` means X is the mother of Y.

Write a Prolog proposition called `nephewNiece(X, Y)`, which succeeds if person X is the **nephew or niece** of person Y. A person's nephew/niece is the son/daughter of that person's brother or sister. Two people are siblings if they share at least one parent.

*Example: `shelley` is the sister of `jake` (they share `bill` or `mary`). Therefore `ted` is the nephew of `shelley`, and `liz` is the niece of `jake`.*

**Requirements:**
- You may **not** define any additional facts other than `father` and `mother`.
- You may define additional helper propositions.
- Only use constants, variables, list manipulation, arithmetic, relational expressions, the `is` operator, cuts, and the built-in `not` proposition. Do **not** use if-then, if-then-else, the semicolon (`;`) operator, or complex system predicates (including built-in `member`, `append`, `reverse`).

Submit file `u99999999.pl` to slot **"Semester Test 2: Simple Prolog Proposition"**.

**Did you submit?**
- [ ] True
- [ ] False

---

`tags`: [year:2025, paper:st2, chapter:16, topic:prolog, topic:operators]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 5 *(5 points)*

Write a Prolog proposition called `getAbsNonZeros(L1, L2)`, where L1 and L2 are both simple numeric lists. The proposition succeeds if L2 contains the **absolute values of only the non-zero elements** of L1, in their original order. For example:

```prolog
?- getAbsNonZeros([0], X).
% X = []

?- getAbsNonZeros([1, 0, -2, 0], X).
% X = [1, 2]
```

**Requirements:**
- You may define additional helper propositions.
- Only use constants, variables, list manipulation, arithmetic, relational expressions, the `is` operator, cuts, and the built-in `not` proposition. Do **not** use if-then, if-then-else, the semicolon (`;`) operator, or complex system predicates (including built-in `member`, `append`, `reverse`).

Submit file `u99999999.pl` to slot **"Semester Test 2: List Processing Prolog Proposition"**.

**Did you submit?**
- [ ] True
- [ ] False

---

`tags`: [year:2025, paper:st2, chapter:5, topic:reliability]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 6 *(1 point)*

Consider the following programming languages, and select the one that is the **least reliable** in terms of name length.

- [ ] Fortran
- [ ] C99
- [ ] C++
- [ ] C#

---

`tags`: [year:2025, paper:st2, chapter:1]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 7 *(1 point)*

Consider the following statements about variable names in **Perl and Java**, and select the most correct.

- [ ] Variable names in Perl have a higher cost of maintenance than variable names in Java.
- [ ] Variable names in Perl are more writable than variable names in Java.
- [ ] Variable names in Perl are more readable than variable names in Java.
- [ ] Variable names in Perl are less reliable than variable names in Java.

---

`tags`: [year:2025, paper:st2, chapter:5]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 8 *(1 point)*

Select the time at which a name is bound to a **stack-dynamic variable**.

- [ ] Language design time
- [ ] Language implementation time
- [ ] Compile time
- [ ] Load time
- [ ] Runtime

---

`tags`: [year:2025, paper:st2, chapter:2, topic:language-history, topic:binding-time]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 9 *(1 point)*

In Fortran I, a variable whose name starts with I, J, K, L, M, or N is automatically an integer variable. Select the option that most correctly describes the kind of **type binding** that takes place.

- [ ] Explicit type declaration
- [ ] Implicit type declaration without type inferencing
- [ ] Implicit type declaration with type inferencing
- [ ] Dynamic type binding

---

`tags`: [year:2025, paper:st2, chapter:1, topic:scope-and-lifetime]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 10 *(1 point)*

Consider the following program code:

```
f() {
   myValue = 10
   print(myValue)
   myValue = myValue + 5
}

main() {
   f()
   f()
   f()
}
```

Assume execution starts with `main` and the output of the program is:

```
10 15 20
```

Select the option that correctly describes the **category of `myValue`** according to lifetime.

- [ ] Static variable
- [ ] Stack-dynamic variable
- [ ] Explicit heap-dynamic variable
- [ ] Implicit heap-dynamic variable

---

`tags`: [year:2025, paper:st2, chapter:5, topic:scope-and-lifetime, topic:binding-time]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 11 *(1 point)*

Assume a hypothetical programming language uses **dynamic type binding**. Select the option that most correctly describes the category of the variables in this language, according to lifetime.

- [ ] Static variables
- [ ] Stack-dynamic variables
- [ ] Explicit heap-dynamic variables
- [ ] Implicit heap-dynamic variables

---

`tags`: [year:2025, paper:st2, chapter:6, topic:data-types]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 15 *(1 point)*

Some programming languages support a primitive data type that represents a **complex number**. Select the statement that is most correct.

- [ ] Support for a primitive complex number type improves the **writability** of a programming language.
- [ ] Support for a primitive complex number type improves the **readability** of a programming language.
- [ ] Support for a primitive complex number type improves the **execution cost** of a programming language.
- [ ] Support for a primitive complex number type improves the **reliability** of a programming language.

---

`tags`: [year:2025, paper:st2, chapter:6, topic:data-types, topic:oop]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 16 *(1 point)*

Consider the following statements about the **`String` and `StringBuffer` classes** in Java, and select the most correct.

- [ ] A `String` object is less readable than a `StringBuffer` object.
- [ ] A `String` object is less writable than a `StringBuffer` object.
- [ ] A `String` object is less reliable than a `StringBuffer` object.
- [ ] A `String` object has a lower cost of execution than a `StringBuffer` object.

---

`tags`: [year:2025, paper:st2, chapter:1, topic:data-types]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 17 *(2 points)*

Consider the following program code:

```
main() {
   constant integer LENGTH = 3
   integer myArray[LENGTH]
   myArray[0] = 6
   myArray[1] = 2
   myArray[2] = 5
   print(myArray[2])
}
```

Assume the length of `myArray` cannot be changed after it has been set. Select **only** the options that could possibly correctly describe the **category of `myArray`**. *(Incorrectly selected options will be penalised.)*

- [ ] Static
- [ ] Fixed stack-dynamic
- [ ] Stack-dynamic
- [ ] Fixed heap-dynamic
- [ ] Heap-dynamic

---

`tags`: [year:2025, paper:st2, chapter:6, topic:language-history, topic:data-types]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 18 *(1 point)*

Assume you wish to simulate the functionality of an **associative array** in a language that does not directly support them. Select the one option that will correctly simulate this functionality.

- [ ] Using a normal array in a statically typed language which stores values of different primitive data types.
- [ ] Using a normal array in a statically typed language which stores instances of an `Object` class, where all other classes inherit from `Object`.
- [ ] Using a normal array in a statically typed language, where the array stores a key and a value at each subscript.
- [ ] Using two normal arrays in a statically typed language, where one stores keys and the other stores corresponding values.

---

`tags`: [year:2025, paper:st2, chapter:6, topic:data-types]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 19 *(1 point)*

Consider the following statements about **records in COBOL and Ada**, and select the most correct.

- [ ] References to record fields in COBOL are less writable than references to record fields in Ada.
- [ ] Records in COBOL have a lower cost of maintenance than records in Ada.
- [ ] Records in COBOL are less orthogonal than records in Ada.
- [ ] Records in COBOL are more orthogonal than records in Ada.

---

`tags`: [year:2025, paper:st2, chapter:6, topic:data-types]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 20 *(1 point)*

Consider the following statements about **unions**, and select the most correct.

- [ ] Free unions have a lower cost of maintenance than discriminated unions.
- [ ] Free unions are more orthogonal than discriminated unions.
- [ ] Free unions are less writable than discriminated unions.
- [ ] Free unions are more effective at saving memory than discriminated unions.

---

`tags`: [year:2025, paper:st2, chapter:12, topic:data-types]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 21 *(1 point)*

Consider the following statements about **pointers and references in C++, Java, and C#**, and select the most correct.

- [ ] Pointers and references have the most reliable support in Java.
- [ ] Pointers and references have the most reliable support in C#.
- [ ] Pointers and references have the least writable support in C#.
- [ ] Pointers and references have the least writable support in C++.

---

`tags`: [year:2025, paper:st2, chapter:6]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 22 *(2 points)*

C++ is not considered to be a strongly typed programming language. Select **only** the language features that contribute to C++ not being strongly typed. *(Incorrectly selected options will be penalised.)*

- [ ] Explicit type declarations
- [ ] Void pointers
- [ ] Casting a base class pointer to a derived class pointer
- [ ] Casting a derived class pointer to a base class pointer

---

`tags`: [year:2025, paper:st2, chapter:6]
`source`: [2025_semester_test_2.md](Content/past_papers/ST2/2025_semester_test_2.md)
### Question 23 *(1 point)*

Consider the following statements about **name type equivalence and structure type equivalence**, and select the most correct.

- [ ] Name type equivalence has a lower cost of execution than structure type equivalence.
- [ ] Name type equivalence is more writable than structure type equivalence.
- [ ] Name type equivalence is less readable than structure type equivalence.
- [ ] Name type equivalence is less reliable than structure type equivalence.


## Totals

- Total MCQs: 180
- Chapter 1: 37
- Chapter 2: 18
- Chapter 5: 8
- Chapter 6: 21
- Chapter 7: 18
- Chapter 8: 10
- Chapter 9: 7
- Chapter 12: 31
- Chapter 15: 18
- Chapter 16: 12
