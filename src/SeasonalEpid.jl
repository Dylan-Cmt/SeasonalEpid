"This is a dummy module to illustrate documentation creation"
module SeasonalEpid

export TimeParam

export Param, Elaborate1Strain, Elaborate2Strains, Compact1Strain, Compact2Strains, ParamSoilborneCompact1Strain, ParamAirborneElaborate1Strain
export StateParam0, StateCompact, StateElaborate

export greet
include("structs.jl")
include("functions.jl")

end # module SeasonalEpid