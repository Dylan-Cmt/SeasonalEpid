# SeasonalEpid

[![](https://img.shields.io/badge/docs-dev-blue.svg)](https://Dylan-Cmt.github.io/SeasonalEpid/dev/)

This is a package to do seasonal plants epidemics simulations.

## Installation

From the Julia REPL, install the package with 
```jl
]add https://github.com/Dylan-Cmt/SeasonalEpid
```

And that it, now you can now use the package.

## Replicating an example

![image](docs/src/img/elab1str.png)

In order to replicate this run, you can simply execute the following code.

```
using SeasonalEpid
sp = StateElaborate()
param = ParamAirborneElaborate1Strain()
tp = TimeParam()
displaysim(5, sp, param, tp=tp)
```
