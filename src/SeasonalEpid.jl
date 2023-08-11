"This is a package to make epidemics similations"
module SeasonalEpid

export TimeParam

export Param, Elaborate1Strain, Elaborate2Strains, Compact1Strain, Compact2Strains, ParamSoilborneCompact1Strain, ParamAirborneElaborate1Strain
export StateParam0, StateCompact, StateElaborate

export GrowingSeason, WinterSeason

export growing, winter, yeartransition

export fill_mat, isWinter, simule, displaysim

include("structs.jl")
include("functions.jl")

end # module SeasonalEpid