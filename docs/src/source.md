# Source code documentation

## Contents

```@contents
Pages = ["source.md"]
Depth = 3
```

## SeasonalEpid structs

> **_NOTE:_**  If you want to know more about what a struct contains, type `fieldnames(structname)`.

Although there are structures to describe all characteristics of the different models, not all models have been implemented. In fact, only the Soilborne Compact 1 Strain and Airborne Elaborate 1 Strain models have been implemented. However, if required, it is easy to add other models, such as those that include competition. 


### Time parameters

```@docs
TimeParam
```

### Biological parameters

These structs can be called biological parameters but note that they contain also some informations about the model, like if it is elaborate, and the number of states.

```@docs
Param
Elaborate1Strain
Elaborate2Strains
Compact1Strain
Compact2Strains
ParamSoilborneCompact1Strain
ParamAirborneElaborate1Strain
```

### States

```@docs
StateParam0
StateCompact
StateElaborate
```

## SeasonalEpid functions

### Functions in `functions.jl`

```@autodocs
Modules = [SeasonalEpid]
Order   = [:function]
Pages   = ["functions.jl"]
```