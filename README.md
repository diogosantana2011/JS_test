[![Continuous integration status](https://github.com/diogosantana2011/JS_test/actions/workflows/jasmine.test.yml/badge.svg)](https://github.com/diogosantana2011/JS_test/actions/workflows/jasmine.test.yml)

# JS_test
Repository created for some scripts and for playing around with Javascript during testing.

# To Do
Issue: 

As of last commit for dbRemoveMany(), db state convoluted. On specs finish, different DB state differs.

Add initial insert and final remove, to keep state consistent. Currently, with random state on spec finishing, restarting tests pass regardless.

*NOTE*

Mongo tests are using Jasmine, and spec tests are using Jest. Yeah, I should not have done that. 🤷‍♂️

With JEST, after installing all dependencies only some assertions fail as per being Jasmine specific but majority pass.