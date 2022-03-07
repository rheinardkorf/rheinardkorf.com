---
title: Design Patterns
date: 2022-03-07T03:49:04.027Z
hidden: true
---

Eventually, everyone lands here. That realization that you need to revisit the past and rediscover the core principles that inform most of what [you think] you know.  

The original GOF [Gang of Four] Design Patterns book was one of my prescribed texts when I studied computer science. For a long time after my studies it sat on a shelf, migrated continents with me only to collect more dust. It was filled with scribbles I took in my youth and in 2019 I had a big clean up and unfortunately the book suffered an ill fate. A moment I now deeply regret. But I digress!  

Fortunately, the GOF book is freely available in Digital Form (though, the paperback was so nice). My biggest criticism with the book is that it focuses on the Object-Oriented Programming paradigm, which I am thankful for that the patterns book exists! I have since worked on many projects and often found myself working more with data transfer objects than concrete objects. But! In order to understand my craft better, in 2022 I am revisiting design patterns. Not just the GOF book, but also other books.  This note is not meant to teach design patterns, but it is here as my reference for design patterns.  

Lets go!  

Key:  
* GOF - "Gang of Four" Design Patterns
* HFDP - Head First Design Patterns
* MPHPDP - Mastering PHP Design Patterns
* PHP8OPM - PHP 8 Objects, Patterns and Practice

## Creational Patterns  

| Pattern  | GOF | HFDP | MPHPDP | PHP8OPP |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Abstract Factory  | Ch. 3 | - | Ch. 4 | Ch. 9 
| Builder | Ch. 3 | Ch. 17 | Ch. 4 | -
| Simple Factory | - | - | Ch. 4 | -
| Factory Method | Ch. 3 | Ch. 4 | Ch. 4 | Ch. 9
| Prototype | Ch. 3 | Ch. 17 | Ch. 4 | Ch. 9
| Singleton | Ch. 3 | Ch. 5 | Ch. 4 | Ch. 9
| Lazy Initialization | - | - | Ch. 4 | -

> GOF Chapter 3.  
> Mastering PHP Design Patterns Chapter 4

## Structural Patterns  

| Pattern  | GOF | HFDP | MPHPDP | PHP8OPP |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Adapter  | Ch. 4 | Ch. 7 | Ch. 4 | -
| Bridge  | Ch. 4 | Ch. 17 | Ch. 4 | -
| Composite  | Ch. 4 | Ch. 9 | Ch. 4 | Ch. 10
| Decorator  | Ch. 4 | Ch. 3 | Ch. 4 | Ch. 10
| Facade  | Ch. 4 | Ch. 7 | Ch. 4 | Ch. 10
| Flyweight  | Ch. 4 | Ch. 7 | Ch. 4 | Ch. 10
| Proxy  | Ch. 4 | Ch. 11 | Ch. 4 | -

## Behavioural Patterns  

| Pattern  | GOF | HFDP | MPHPDP | PHP8OPP |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Chain of Responsibility  | Ch. 5 | Ch. 17 | Ch. 5 | -
| Command  | Ch. 5 | Ch. 6 | Ch. 5 | Ch. 11
| Interpreter  | Ch. 5 | Ch. 17 | Ch. 5 | Ch. 11
| Iterator  | Ch. 5 | Ch. 9 | Ch. 5 | -
| Mediator  | Ch. 5 | Ch. 17 | Ch. 5 | -
| Memento  | Ch. 5 | Ch. 17 | Ch. 5 | -
| State  | Ch. 5 | Ch. 10 | Ch. 5 | -
| Strategy  | Ch. 5 | Ch. 10 | Ch. 5 | Ch. 11
| Template Method  | Ch. 5 | Ch. 8 | Ch. 5 | -
| Visitor  | Ch. 5 | Ch. 17 | Ch. 5 | Ch. 11
| Null Object | - | - | - | Ch. 11
| Generator | - | - | Ch. 5 | - 
| Specification | - | - | Ch. 5 | - 
| Scheduled Task | - | - | Ch. 5 | - 

## "Architectural Patterns"

| Pattern  | GOF | HFDP | MPHPDP | PHP8OPP |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Model-View-Controller  | - | Ch. 12 | Ch. 6 | -
| MV*  | - | - | - | -
| MVVC  | - | - | - | -
| Service-Oriented  | - | - | Ch. 6 | -
| Microservices  | - | - | Ch. 6 | -
| Asynchronous Queuing  | - | - | Ch. 6 | -
| Message Queue  | - | - | Ch. 6 | -
| Serverless  | - | - | - | -
| Ledger  | - | - | - | -
| Blockchain  | - | - | - | -

Other Resources:
* [https://chercher.tech/rust/introduction-rust]