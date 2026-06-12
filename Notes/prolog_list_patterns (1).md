# Prolog List Patterns

Every list question you will ever encounter falls into one of five categories. Each category has a fixed shape and structure that you follow every time. Once you recognise which category a question belongs to, the code writes itself.

---

## The Universal Rules That Apply to All Five

Before anything else, two things are always true regardless of category:

- The base case is always the empty list `[]`, unless your recursive clause needs two elements at a time, in which case you also need a single element base case `[_]`
- The recursive clause always peels the head off and recurses on the tail — the list gets shorter every call until it hits the base case

---

## Category 1 — Building a New List

### What it looks like
The question asks you to produce a new list L2 from an existing list L1, either by filtering elements out, transforming elements, or both.

### The shape
```prolog
% base case
myProp([], []).

% skip this element — don't include in result
myProp([CurrentHead | RemainingList], RestOfResult) :-
    % some condition that means skip
    myProp(RemainingList, RestOfResult).

% include this element — optionally transform it first
myProp([CurrentHead | RemainingList], [SomeResultFromHead | RestOfResult]) :-
    % some condition that means include
    SomeResultFromHead is ...,   % transform if needed, otherwise just use CurrentHead
    myProp(RemainingList, RestOfResult).
```

### The key insight
The second parameter is where the result list gets built. When you want to include an element you write `[SomeResultFromHead | RestOfResult]` — this prepends the current element onto whatever the recursion below hands back. When you want to skip an element you just write `RestOfResult` with no prepending — the result passes through unchanged.

### The three questions to ask yourself
- What is my base case?
- Which elements do I skip?
- Which elements do I include, and do I need to transform them before including?

---

### Example 1 — getAbsNonZeros
Filter out zeros, take absolute value of everything else.

Three cases: base case, skip zeros, include non-zeros transformed.

```prolog
getAbsNonZeros([], []).

% skip zeros
getAbsNonZeros([0 | RemainingList], RestOfResult) :-
    getAbsNonZeros(RemainingList, RestOfResult).

% include non-zeros, take absolute value
getAbsNonZeros([CurrentHead | RemainingList], [AbsValue | RestOfResult]) :-
    CurrentHead \= 0,
    AbsValue is abs(CurrentHead),
    getAbsNonZeros(RemainingList, RestOfResult).
```

```prolog
?- getAbsNonZeros([1, 0, -2, 0, -3], X).
X = [1, 2, 3].
```

---

### Example 2 — evensOnly
Keep only even numbers, remove everything else.

Three cases: base case, skip odds, include evens unchanged.

```prolog
evensOnly([], []).

% skip odds
evensOnly([CurrentHead | RemainingList], RestOfResult) :-
    1 is CurrentHead mod 2,
    evensOnly(RemainingList, RestOfResult).

% include evens unchanged
evensOnly([CurrentHead | RemainingList], [CurrentHead | RestOfResult]) :-
    0 is CurrentHead mod 2,
    evensOnly(RemainingList, RestOfResult).
```

```prolog
?- evensOnly([1, 2, 3, 4, 5, 6], X).
X = [2, 4, 6].
```

---

### Example 3 — doublePositives
Double positives, remove negatives and zeros entirely.

Four cases: base case, skip zeros, skip negatives, include and double positives.

```prolog
doublePositives([], []).

% skip zeros
doublePositives([0 | RemainingList], RestOfResult) :-
    doublePositives(RemainingList, RestOfResult).

% skip negatives
doublePositives([CurrentHead | RemainingList], RestOfResult) :-
    CurrentHead < 0,
    doublePositives(RemainingList, RestOfResult).

% include positives, doubled
doublePositives([CurrentHead | RemainingList], [Doubled | RestOfResult]) :-
    CurrentHead > 0,
    Doubled is CurrentHead * 2,
    doublePositives(RemainingList, RestOfResult).
```

```prolog
?- doublePositives([3, -1, 0, 2, -4, 5], X).
X = [6, 4, 10].
```

---

### Example 4 — replaceNegatives
Replace negative numbers with 0, keep everything else unchanged.

Three cases: base case, replace negatives with 0, keep non-negatives as is.

Notice here there is no skip case — every element ends up in the result, just some are transformed. Both non-base clauses use `[SomeResult | RestOfResult]`.

```prolog
replaceNegatives([], []).

% negative — replace with 0
replaceNegatives([CurrentHead | RemainingList], [0 | RestOfResult]) :-
    CurrentHead < 0,
    replaceNegatives(RemainingList, RestOfResult).

% non-negative — keep unchanged
replaceNegatives([CurrentHead | RemainingList], [CurrentHead | RestOfResult]) :-
    CurrentHead >= 0,
    replaceNegatives(RemainingList, RestOfResult).
```

```prolog
?- replaceNegatives([3, -1, -2, 4, -5], X).
X = [3, 0, 0, 4, 0].
```

---

### Example 5 — capAtHundred
If an element is over 100 replace it with 100, otherwise keep it unchanged.

Three cases: base case, cap elements over 100, keep elements 100 or under.

```prolog
capAtHundred([], []).

% over 100 — cap it
capAtHundred([CurrentHead | RemainingList], [100 | RestOfResult]) :-
    CurrentHead > 100,
    capAtHundred(RemainingList, RestOfResult).

% 100 or under — keep unchanged
capAtHundred([CurrentHead | RemainingList], [CurrentHead | RestOfResult]) :-
    CurrentHead =< 100,
    capAtHundred(RemainingList, RestOfResult).
```

```prolog
?- capAtHundred([50, 150, 200, 75, 100], X).
X = [50, 100, 100, 75, 100].
```

---

## Category 2 — Counting or Accumulating a Single Value

### What it looks like
The question asks you to produce one single value from a list — a count, a sum, a length. The result is one number, not a new list.

### The shape
```prolog
% base case — empty list gives the trivial value, usually 0
myProp([], 0).

% this element counts — add its contribution
myProp([CurrentHead | RemainingList], Result) :-
    % some condition that means count this element
    myProp(RemainingList, ResultSoFar),
    Result is ResultSoFar + 1.   % or + CurrentHead for sum, etc.

% this element doesn't count — skip it, result unchanged
myProp([CurrentHead | RemainingList], Result) :-
    % some condition that means skip this element
    myProp(RemainingList, Result).
```

### The key insight
Instead of building a list on the way back up, you are doing arithmetic. `ResultSoFar` is what came back from the recursion below. `Result` is what you hand back up after adding the current element's contribution. The base case seeds the chain with 0 and every matching element adds to it on the way back out.

### The three questions to ask yourself
- What is my base case value? Almost always 0.
- Which elements contribute to the result?
- What do they contribute — always 1 for counting, or the element itself for summing?

---

### Example 1 — countNonMatching
Count elements that do not match a target element.

Three cases: base case, head matches so skip, head does not match so count.

```prolog
countNonMatching(_, [], 0).

% head matches target — skip, count unchanged
countNonMatching(TargetElement, [TargetElement | RemainingList], Count) :-
    countNonMatching(TargetElement, RemainingList, Count).

% head does not match — count it, add 1
countNonMatching(TargetElement, [CurrentHead | RemainingList], Count) :-
    not(CurrentHead = TargetElement),
    countNonMatching(TargetElement, RemainingList, CountSoFar),
    Count is CountSoFar + 1.
```

```prolog
?- countNonMatching(a, [a, b, a, c, d], X).
X = 3.
```

---

### Example 2 — sumList
Sum all elements in a numeric list.

Two cases: base case, add head to sum of tail. No skip case because every element contributes.

```prolog
sumList([], 0).

% add every element
sumList([CurrentHead | RemainingList], Sum) :-
    sumList(RemainingList, SumSoFar),
    Sum is SumSoFar + CurrentHead.
```

```prolog
?- sumList([1, 2, 3, 4, 5], X).
X = 15.
```

---

### Example 3 — sumPositives
Sum only the positive numbers, ignore negatives and zeros.

Three cases: base case, skip non-positives, add positives.

```prolog
sumPositives([], 0).

% non-positive — skip, sum unchanged
sumPositives([CurrentHead | RemainingList], Sum) :-
    CurrentHead =< 0,
    sumPositives(RemainingList, Sum).

% positive — add to sum
sumPositives([CurrentHead | RemainingList], Sum) :-
    CurrentHead > 0,
    sumPositives(RemainingList, SumSoFar),
    Sum is SumSoFar + CurrentHead.
```

```prolog
?- sumPositives([3, -1, 0, 2, -4, 5], X).
X = 10.
```

---

### Example 4 — countInRange
Count how many elements fall between a low and high value inclusive.

Three cases: base case, element in range so count it, element out of range so skip.

```prolog
countInRange(_, _, [], 0).

% in range — count it
countInRange(Low, High, [CurrentHead | RemainingList], Count) :-
    CurrentHead >= Low,
    CurrentHead =< High,
    countInRange(Low, High, RemainingList, CountSoFar),
    Count is CountSoFar + 1.

% out of range — skip
countInRange(Low, High, [CurrentHead | RemainingList], Count) :-
    not(CurrentHead >= Low),
    countInRange(Low, High, RemainingList, Count).

countInRange(Low, High, [CurrentHead | RemainingList], Count) :-
    not(CurrentHead =< High),
    countInRange(Low, High, RemainingList, Count).
```

```prolog
?- countInRange(2, 5, [1, 2, 3, 6, 4, 8, 5], X).
X = 4.
```

---

### Example 5 — listLength
Count how many elements are in the list regardless of value.

Two cases: base case, count every element. The head is `_` because the actual value never matters.

```prolog
listLength([], 0).

% count every element regardless of value
listLength([_ | RemainingList], Length) :-
    listLength(RemainingList, LengthSoFar),
    Length is LengthSoFar + 1.
```

```prolog
?- listLength([a, b, c, d], X).
X = 4.
```

---

## Category 3 — Checking a Property

### What it looks like
The question asks you to verify that every element in a list satisfies some condition. There is no result — the proposition just succeeds or fails.

### The shape
```prolog
% base case — empty list trivially satisfies the property
myProp([]).

% head must satisfy condition, then recurse on tail
myProp([CurrentHead | RemainingList]) :-
    % condition on CurrentHead
    myProp(RemainingList).
```

### The key insight
There is no result parameter at all. The proposition just walks the list and checks the condition at every element. If any single element fails the condition, the whole thing fails immediately and propagates back up. If every element passes and you eventually reach the empty list base case, it succeeds.

### The three questions to ask yourself
- Does my condition need one element or two elements at a time?
- If two, do I need a single element base case as well?
- Does the condition need to hold for every element, or just that one exists?

---

### Example 1 — allPositive
Succeed if every element is greater than zero.

Two cases: base case, check head is positive then recurse.

```prolog
allPositive([]).

allPositive([CurrentHead | RemainingList]) :-
    CurrentHead > 0,
    allPositive(RemainingList).
```

```prolog
?- allPositive([1, 2, 3]).
true.

?- allPositive([1, -2, 3]).
false.
```

---

### Example 2 — allSame
Succeed if every element in the list is identical.

Three cases: empty list base case, single element base case, compare adjacent elements.

Needs two base cases because the recursive clause looks at two elements at a time — without the single element base case, a list like `[a, a]` would recurse down to `[a]` and find nothing to match.

```prolog
allSame([]).
allSame([_]).

% compare first two, recurse keeping second as new head
allSame([First, Second | Rest]) :-
    First = Second,
    allSame([Second | Rest]).
```

```prolog
?- allSame([a, a, a]).
true.

?- allSame([a, a, b]).
false.
```

---

### Example 3 — noneNegative
Succeed if no element in the list is negative. Zero is allowed.

Two cases: base case, check head is not negative then recurse.

```prolog
noneNegative([]).

noneNegative([CurrentHead | RemainingList]) :-
    CurrentHead >= 0,
    noneNegative(RemainingList).
```

```prolog
?- noneNegative([0, 1, 2, 3]).
true.

?- noneNegative([0, 1, -1, 3]).
false.
```

---

### Example 4 — isSorted
Succeed if the list is sorted in ascending order.

Three cases: empty list base case, single element base case, compare adjacent elements.

Same structure as allSame — needs two elements to compare so needs two base cases.

```prolog
isSorted([]).
isSorted([_]).

% first must be less than or equal to second, recurse keeping second
isSorted([First, Second | Rest]) :-
    First =< Second,
    isSorted([Second | Rest]).
```

```prolog
?- isSorted([1, 2, 3, 4]).
true.

?- isSorted([1, 3, 2, 4]).
false.
```

---

### Example 5 — memberOf
Succeed if a given element exists anywhere in the list.

Two cases: element matches the head so succeed immediately, element does not match head so recurse on tail.

Notice there is no empty list base case written explicitly — if the list empties without finding the element, nothing matches and it fails automatically.

```prolog
% head matches — found it, succeed immediately
memberOf(Element, [Element | _]).

% head does not match — keep looking in tail
memberOf(Element, [_ | RemainingList]) :-
    memberOf(Element, RemainingList).
```

```prolog
?- memberOf(b, [a, b, c]).
true.

?- memberOf(d, [a, b, c]).
false.
```

---

## Category 4 — Finding a Specific Element

### What it looks like
The question asks you to find a particular element in a list — the maximum, minimum, element at position N, or first element matching some condition.

### The shape
```prolog
% base case — single element list, that element is the answer by default
myProp([OnlyElement], OnlyElement).

% compare head against best result from tail, keep whichever wins
myProp([CurrentHead | RemainingList], Result) :-
    myProp(RemainingList, BestOfRest),
    % decide whether CurrentHead or BestOfRest wins
```

### The key insight
This category usually needs a single element base case rather than an empty list base case, because you need at least one element to produce a meaningful answer. You recurse down to the last element, that becomes your starting answer, then on the way back up you compare each head against the current best and keep whichever wins.

### The three questions to ask yourself
- What is the base case — single element or empty list?
- What am I comparing the head against?
- Which wins — the head or the result from the tail?

---

### Example 1 — maxElement
Find the largest element in a list.

Three cases: single element base case, head is larger so head wins, tail's best is larger so tail wins.

```prolog
% base case — single element is the max by default
maxElement([OnlyElement], OnlyElement).

% head is larger — head wins
maxElement([CurrentHead | RemainingList], CurrentHead) :-
    maxElement(RemainingList, BestOfRest),
    CurrentHead >= BestOfRest.

% tail's best is larger — tail wins
maxElement([CurrentHead | RemainingList], BestOfRest) :-
    maxElement(RemainingList, BestOfRest),
    BestOfRest > CurrentHead.
```

```prolog
?- maxElement([3, 1, 4, 1, 5, 9, 2], X).
X = 9.
```

---

### Example 2 — minElement
Find the smallest element in a list.

Three cases: single element base case, head is smaller so head wins, tail's best is smaller so tail wins.

```prolog
minElement([OnlyElement], OnlyElement).

% head is smaller — head wins
minElement([CurrentHead | RemainingList], CurrentHead) :-
    minElement(RemainingList, BestOfRest),
    CurrentHead =< BestOfRest.

% tail's best is smaller — tail wins
minElement([CurrentHead | RemainingList], BestOfRest) :-
    minElement(RemainingList, BestOfRest),
    BestOfRest < CurrentHead.
```

```prolog
?- minElement([3, 1, 4, 1, 5, 9, 2], X).
X = 1.
```

---

### Example 3 — firstPositive
Find the first positive element in the list, ignoring everything before it.

Two cases: head is positive so return it immediately, head is not positive so keep looking in the tail.

Notice there is no empty list base case — if you reach an empty list without finding a positive element the proposition simply fails.

```prolog
% head is positive — return it, stop looking
firstPositive([CurrentHead | _], CurrentHead) :-
    CurrentHead > 0.

% head is not positive — keep looking in tail
firstPositive([CurrentHead | RemainingList], Result) :-
    CurrentHead =< 0,
    firstPositive(RemainingList, Result).
```

```prolog
?- firstPositive([-1, -2, 3, 4, 5], X).
X = 3.
```

---

### Example 4 — elementAt
Find the element at position N in the list, where position 1 is the first element.

Two cases: N is 1 so the head is the answer, N is greater than 1 so recurse with N-1 on the tail.

```prolog
% position 1 — head is the answer
elementAt([CurrentHead | _], 1, CurrentHead).

% position greater than 1 — recurse on tail with N-1
elementAt([_ | RemainingList], N, Result) :-
    N > 1,
    N1 is N - 1,
    elementAt(RemainingList, N1, Result).
```

```prolog
?- elementAt([a, b, c, d], 3, X).
X = c.
```

---

## Category 5 — Combining Two Lists

### What it looks like
The question involves two input lists and asks you to combine, merge, or compare them in some way to produce a result.

### The shape
```prolog
% base case — first list is empty
myProp([], List2, List2).

% peel head from first list, recurse, rebuild result
myProp([CurrentHead | RemainingList], List2, [CurrentHead | Result]) :-
    myProp(RemainingList, List2, Result).
```

### The key insight
You peel from one or both lists simultaneously. The base case handles when the driving list runs out. The result is built the same way as Category 1 — prepending elements onto the front on the way back up.

### The three questions to ask yourself
- Which list drives the recursion — the first, second, or both?
- What is the base case when that list runs out?
- How do elements from each list end up in the result?

---

### Example 1 — append
Concatenate two lists into one.

Two cases: base case when first list is empty, prepend head of first list and recurse.

```prolog
append([], List2, List2).

append([CurrentHead | RemainingList], List2, [CurrentHead | Result]) :-
    append(RemainingList, List2, Result).
```

```prolog
?- append([1, 2], [3, 4], X).
X = [1, 2, 3, 4].
```

---

### Example 2 — zipLists
Combine two lists element by element into pairs.

Two cases: both lists empty base case, pair up heads and recurse on both tails simultaneously.

```prolog
zipLists([], [], []).

% pair up one head from each list, recurse on both tails
zipLists([Head1 | Tail1], [Head2 | Tail2], [[Head1, Head2] | RestOfResult]) :-
    zipLists(Tail1, Tail2, RestOfResult).
```

```prolog
?- zipLists([a, b, c], [1, 2, 3], X).
X = [[a, 1], [b, 2], [c, 3]].
```

---

### Example 3 — addLists
Add two numeric lists element by element to produce a third list of sums.

Two cases: both lists empty base case, add heads together and recurse on both tails.

```prolog
addLists([], [], []).

% add heads together, recurse on both tails
addLists([Head1 | Tail1], [Head2 | Tail2], [Sum | RestOfResult]) :-
    Sum is Head1 + Head2,
    addLists(Tail1, Tail2, RestOfResult).
```

```prolog
?- addLists([1, 2, 3], [4, 5, 6], X).
X = [5, 7, 9].
```

---

### Example 4 — commonElements
Find elements that appear in both lists.

Three cases: base case when first list is empty, head is in second list so include it, head is not in second list so skip it.

Uses memberOf as a helper.

```prolog
% helper
memberOf(Element, [Element | _]).
memberOf(Element, [_ | RemainingList]) :-
    memberOf(Element, RemainingList).

% base case
commonElements([], _, []).

% head is in second list — include it
commonElements([CurrentHead | RemainingList], List2, [CurrentHead | RestOfResult]) :-
    memberOf(CurrentHead, List2),
    commonElements(RemainingList, List2, RestOfResult).

% head is not in second list — skip it
commonElements([CurrentHead | RemainingList], List2, RestOfResult) :-
    not(memberOf(CurrentHead, List2)),
    commonElements(RemainingList, List2, RestOfResult).
```

```prolog
?- commonElements([1, 2, 3, 4], [2, 4, 6], X).
X = [2, 4].
```

---

## Quick Reference

| Category | Result type | Base case value | Built on the way back up using |
|----------|-------------|-----------------|-------------------------------|
| 1. Building a list | New list | `[]` | `[SomeResult \| RestOfResult]` |
| 2. Counting / accumulating | Single number | `0` | `Result is ResultSoFar + N` |
| 3. Checking a property | Nothing — true/false | Succeeds trivially | Nothing — just succeeds or fails |
| 4. Finding an element | Single element | Last element in list | Comparison between head and best so far |
| 5. Combining two lists | New list | Empty first list | `[CurrentHead \| Result]` |
