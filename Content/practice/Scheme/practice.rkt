#lang racket

(define( getZerosDoublePositives lst)
  (cond
    ((null? lst) '())
    ((zero? (car lst)) ;now we give the output of what to do when its zero
     (cons 0 (getZerosDoublePositives (cdr lst))))
    ((> (car lst) 0) ;give the output of when its positive, ie double the current
     (cons (* 2 (car lst)) (getZerosDoublePositives (cdr lst))))
     (else (getZerosDoublePositives (cdr lst)))))


(getZerosDoublePositives '(3 0 -2 1 -5 0))


(define (removePositiveOddValues lst)
  (cond
    ((null? lst) '()) ;base case for when its null
    ((and (> (car lst) 0) (odd? (car lst))) (removePositiveOddValues (cdr lst))) ;check if number is positive and odd
    (else (cons (car lst)(removePositiveOddValues (cdr lst)))))) ;everything else


(removePositiveOddValues '(0 2 -3 5 2))


(define ( oddsBecome0 lst)
  (cond
    ((null? lst) '());base case return empty
    ((odd? (car lst)) (cons 0 (oddsBecome0 (cdr lst))));if odd cons 0
    (else (cons (car lst) (oddsBecome0 (cdr lst))));anything else
    ))

(oddsBecome0 '(1 3 2 4 -3 2))

(define (duplicateOddsSquareEvensRemoveNeg lst)
  (cond
    ((null? lst) '()) ;base case return '()
    ((< (car lst) 0) (duplicateOddsSquareEvensRemoveNeg (cdr lst))) ;remove negatives
    ((and (odd? (car lst)) (> (car lst) 0)) (cons (car lst)(cons (car lst) (duplicateOddsSquareEvensRemoveNeg (cdr lst))))) ;duplicate odds
    ((and (even? (car lst)) (> (car lst) 0)) (cons (*(car lst) (car lst)) (duplicateOddsSquareEvensRemoveNeg (cdr lst)))) ;Square evens
    (else (duplicateOddsSquareEvensRemoveNeg (cdr lst))) ;everything else
    ))
(duplicateOddsSquareEvensRemoveNeg '(1 2 -3 4 5 -6))


(define (duplicateNonMatching lst val)
  (cond
    ((null? lst) '()) ;base case return '()
    ((not(equal? (car lst) val)) (cons (car lst) (cons (car lst) (duplicateNonMatching (cdr lst) val)))) ;duplicate
    (else(cons (car lst) (duplicateNonMatching (cdr lst) val))))) ;everything that does match

(duplicateNonMatching '(2 3 4 5 6) 3)
    