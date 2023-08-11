# Source code documentation

## Contents

```@contents
Pages = ["source.md"]
Depth = 3
```

## SeasonalEpid structs

> **_NOTE:_**  If you want to know more about what a struct contains, type `fieldnames(structname)`.

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

## Reproducing figures

Maybe we can show here few examples.