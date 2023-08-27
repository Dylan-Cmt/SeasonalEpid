var documenterSearchIndex = {"docs":
[{"location":"source/#Source-code-documentation","page":"Source code documentation","title":"Source code documentation","text":"","category":"section"},{"location":"source/#Contents","page":"Source code documentation","title":"Contents","text":"","category":"section"},{"location":"source/","page":"Source code documentation","title":"Source code documentation","text":"Pages = [\"source.md\"]\nDepth = 3","category":"page"},{"location":"source/#SeasonalEpid-structs","page":"Source code documentation","title":"SeasonalEpid structs","text":"","category":"section"},{"location":"source/","page":"Source code documentation","title":"Source code documentation","text":"NOTE:  If you want to know more about what a struct contains, type fieldnames(structname).","category":"page"},{"location":"source/#Time-parameters","page":"Source code documentation","title":"Time parameters","text":"","category":"section"},{"location":"source/","page":"Source code documentation","title":"Source code documentation","text":"TimeParam","category":"page"},{"location":"source/#SeasonalEpid.TimeParam","page":"Source code documentation","title":"SeasonalEpid.TimeParam","text":"Stock all time variables.\n\n\n\n\n\n","category":"type"},{"location":"source/#Biological-parameters","page":"Source code documentation","title":"Biological parameters","text":"","category":"section"},{"location":"source/","page":"Source code documentation","title":"Source code documentation","text":"These structs can be called biological parameters but note that they contain also some informations about the model, like if it is elaborate, and the number of states.","category":"page"},{"location":"source/","page":"Source code documentation","title":"Source code documentation","text":"Param\nElaborate1Strain\nElaborate2Strains\nCompact1Strain\nCompact2Strains\nParamSoilborneCompact1Strain\nParamAirborneElaborate1Strain","category":"page"},{"location":"source/#SeasonalEpid.Param","page":"Source code documentation","title":"SeasonalEpid.Param","text":"This is the most global param. Subtypes of Param are also abstract type.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid.Elaborate1Strain","page":"Source code documentation","title":"SeasonalEpid.Elaborate1Strain","text":"This param is also a global param but it is only for elaborate 1 strain models.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid.Elaborate2Strains","page":"Source code documentation","title":"SeasonalEpid.Elaborate2Strains","text":"This param is also a global param but it is only for elaborate 2 strain2 models.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid.Compact1Strain","page":"Source code documentation","title":"SeasonalEpid.Compact1Strain","text":"This param is also a global param but it is only for compact 1 strain models.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid.Compact2Strains","page":"Source code documentation","title":"SeasonalEpid.Compact2Strains","text":"This param is also a global param but it is only for compact 2 strains models.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid.ParamSoilborneCompact1Strain","page":"Source code documentation","title":"SeasonalEpid.ParamSoilborneCompact1Strain","text":"This param is very specific and it is built to construct  soilborne compact 1 strain models.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid.ParamAirborneElaborate1Strain","page":"Source code documentation","title":"SeasonalEpid.ParamAirborneElaborate1Strain","text":"This param is very specific and it is built to construct  airborne elaborate 1 strain models.\n\n\n\n\n\n","category":"type"},{"location":"source/#States","page":"Source code documentation","title":"States","text":"","category":"section"},{"location":"source/","page":"Source code documentation","title":"Source code documentation","text":"StateParam0\nStateCompact\nStateElaborate","category":"page"},{"location":"source/#SeasonalEpid.StateParam0","page":"Source code documentation","title":"SeasonalEpid.StateParam0","text":"This is the most global Stateparam. Subtypes of StateParam0 are also abstract type.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid.StateCompact","page":"Source code documentation","title":"SeasonalEpid.StateCompact","text":"This stateparam is very specific to compact 1 strain models and it stocks model's states at the beginning of a season.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid.StateElaborate","page":"Source code documentation","title":"SeasonalEpid.StateElaborate","text":"This stateparam is very specific to elaborate 1 strain models and it stocks model's states at the beginning of a season.\n\n\n\n\n\n","category":"type"},{"location":"source/#SeasonalEpid-functions","page":"Source code documentation","title":"SeasonalEpid functions","text":"","category":"section"},{"location":"source/#Functions-in-functions.jl","page":"Source code documentation","title":"Functions in functions.jl","text":"","category":"section"},{"location":"source/","page":"Source code documentation","title":"Source code documentation","text":"Modules = [SeasonalEpid]\nOrder   = [:function]\nPages   = [\"functions.jl\"]","category":"page"},{"location":"source/#SeasonalEpid.GrowingSeason-Tuple{StaticArraysCore.SVector{S, T} where {S, T}, Compact1Strain, Real}","page":"Source code documentation","title":"SeasonalEpid.GrowingSeason","text":"GrowingSeason(State0::SVector, param::Compact1Strain, t::Real)\n\nThis is the function to enter in ODEProblem from DifferentialEquations.jl. \n\nFor a compact model, it returns the ODE associated to the growing season.\n\nSee also WinterSeason, growing.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.GrowingSeason-Tuple{StaticArraysCore.SVector{S, T} where {S, T}, ParamAirborneElaborate1Strain, Real}","page":"Source code documentation","title":"SeasonalEpid.GrowingSeason","text":"GrowingSeason(State0::SVector, param::ParamAirborneElaborate1Strain, t::Real)\n\nThis is the function to enter in ODEProblem from DifferentialEquations.jl. \n\nFor an elaborate model, it returns the ODE associated to the growing season.\n\nSee also WinterSeason, growing.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.WinterSeason-Tuple{StaticArraysCore.SVector{S, T} where {S, T}, Elaborate1Strain, Real}","page":"Source code documentation","title":"SeasonalEpid.WinterSeason","text":"WinterSeason(State0::SVector, param::Elaborate1Strain, t::Real)\n\nThis is the function to enter in ODEProblem from DifferentialEquations.jl. \n\nIt only exists for elaborate models, and it returns the ODE associated to the winter season.\n\nSee also GrowingSeason, winter.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.displaysim-Tuple{Int64, StateParam0, Param}","page":"Source code documentation","title":"SeasonalEpid.displaysim","text":"displaysim(nyears::Int64, sp::StateParam0, param::Param; tp::TimeParam=TimeParam())\n\nMake a simulation of n years for any model. Plot the solutions of this simulation.\n\nSee also simule.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.fill_mat-Tuple{Int64, StateParam0, Param}","page":"Source code documentation","title":"SeasonalEpid.fill_mat","text":"fill_mat(nyears::Int64,\tsp::StateParam0, param::Param; tp::TimeParam=TimeParam())\n\nConstruct an empty named matrix to stock nyears of simulation.\n\nLabels are filled automatically.\n\nSee also simule.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.growing-Tuple{StateParam0, Param}","page":"Source code documentation","title":"SeasonalEpid.growing","text":"growing(sp::StateParam0, param::Param; tp::TimeParam=TimeParam())\n\nSimulates the growing season for any model, using ODEProblem from DifferentialEquations.jl.\n\nIt returns a vector of vectors that contains the simulation for a season, and also the last values of the simulation.\n\nSee also GrowingSeason, winter, simule.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.isWinter-Tuple{Any, Any}","page":"Source code documentation","title":"SeasonalEpid.isWinter","text":"isWinter(t,tp)\n\nFrom a time vector, returns a new vector of 0 and 1 to identify growing and winter seasons.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.simule-Tuple{Int64, StateParam0, Param}","page":"Source code documentation","title":"SeasonalEpid.simule","text":"simule(nyears::Int64, sp::StateParam0, param::Param; tp::TimeParam=TimeParam())\n\nSimulate n years for any model.\n\nIt returns a named matrix that contains n years of simulation.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.simule-Tuple{StateParam0, Param}","page":"Source code documentation","title":"SeasonalEpid.simule","text":"simule(sp::StateParam0,\tparam::Param; tp::TimeParam=TimeParam())\n\nSimulate a year for any model.\n\nIt returns a vector of vectors that contains one year of simulation, and also the last values of the simulation.\n\nSee also growing, winter, yeartransition, fill_mat, displaysim.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.winter-Tuple{Any, Elaborate1Strain}","page":"Source code documentation","title":"SeasonalEpid.winter","text":"winter(res_end,\tparam::Elaborate1Strain; tp::TimeParam=TimeParam())\n\nCompute new initial conditions from the last values of the previous growing season. Then it simulates the winter season for elaborate 1 strain models, using ODEProblem from DifferentialEquations.jl.\n\nIt returns a vector of vectors that contains the simulation, and the last values of the simulation.\n\nSee also WinterSeason, winter, simule.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.yeartransition-Tuple{Any, ParamAirborneElaborate1Strain}","page":"Source code documentation","title":"SeasonalEpid.yeartransition","text":"yeartransition(res_end,\tparam::ParamAirborneElaborate1Strain; tp::TimeParam=TimeParam())\n\nCompute new initial conditions from the last values of winter season simulation.\n\nIt returns a StateElaborate object.\n\nSee also simule.\n\n\n\n\n\n","category":"method"},{"location":"source/#SeasonalEpid.yeartransition-Tuple{Any, ParamSoilborneCompact1Strain}","page":"Source code documentation","title":"SeasonalEpid.yeartransition","text":"yeartransition(res_end,\tparam::ParamSoilborneCompact1Strain; tp::TimeParam=TimeParam())\n\nCompute new initial conditions from the last values of growing season simulation.\n\nIt returns a StateCompact object.\n\nSee also simule.\n\n\n\n\n\n","category":"method"},{"location":"source/#Reproducing-figures","page":"Source code documentation","title":"Reproducing figures","text":"","category":"section"},{"location":"source/","page":"Source code documentation","title":"Source code documentation","text":"Maybe we can show here few examples.","category":"page"},{"location":"othermodels/#Implement-your-own-models","page":"Implement your own models","title":"Implement your own models","text":"","category":"section"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"A good feature of this package is that if you want to model something else, it's not complicated. ","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"Here is an example about Allee Effects and the Evolution of Polymorphism in Cyclic Parthenogens, by Magda Castel, Ludovic Mailleret, Didier Andrivon, Virginie Ravigné, and Frédéric M. Hamelin (2014). We have the following compact model:","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"beginalign*\ndotI = beta (N - I) I  \nI(N+1)T = chi I(N * T + tau)^2\nendalign*","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"Where:","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"I is the infected host density\nN is the total host density\nβ is secondary infection rate\nT is the length of one cycle\nτ is the time during which the host is present","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"So we use SeasonalEpid.jl:","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"using SeasonalEpid","category":"page"},{"location":"othermodels/#Modify-and-create-parameters-of-your-problem-in-structs.jl","page":"Implement your own models","title":"Modify and create parameters of your problem in structs.jl","text":"","category":"section"},{"location":"othermodels/#Time-parameters","page":"Implement your own models","title":"Time parameters","text":"","category":"section"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"TimeParam: Normaly there's nothing to change here. In fact, you can just enter your own time parameters when you construct the object.","category":"page"},{"location":"othermodels/#Problem-parameters","page":"Implement your own models","title":"Problem parameters","text":"","category":"section"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"You can construct new types. Just make sure your new type inherits from the correct type. Also make sure the arguments of your functions are the right ones.","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"@with_kw struct ParamCompact1Strain{T<:Float64} <: Compact1Strain\n    #  total host density\n    N::T = 1.0 ; @assert N > 0\n    # secondary infection rate\n    β::T = 1.0 ; @assert β > 0\n    χ::T = 1.0 ; @assert χ > 0\n\n    # type of model and state number \n    isElaborate = false\n    statelength = 1\nend","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"@with_kw struct StateCompact2 <: StateParam0\n    I0::Float64 = 0.01\n    @assert I0 >= 0\n    State0 = @SVector [I0]\nend","category":"page"},{"location":"othermodels/#Modify-functions-in-functions.jl","page":"Implement your own models","title":"Modify functions in functions.jl","text":"","category":"section"},{"location":"othermodels/#Model-equations","page":"Implement your own models","title":"Model equations","text":"","category":"section"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"GrowingSeason: replace with your equations.","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"function GrowingSeason(State0::SVector,\n\t\t\t\t\t\tparam::ParamCompact1Strain,\n\t\t\t\t\t\tt::Real)\n\n\tI = State0\n\t@unpack β, N = param\n\t\n\tdI = + β * (N-I) * I \n\t@SVector [dI]\nend ","category":"page"},{"location":"othermodels/#Computation-of-initial-conditions","page":"Implement your own models","title":"Computation of initial conditions","text":"","category":"section"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"yeartransition: replace with your initial conditions for the coming winter season.","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"function yeartransition(res_end,\n\t\t\t\t\t\tparam::ParamCompact1Strain;\n\t\t\t\t\t\ttp::TimeParam=TimeParam())\n\tIend = res_end\n\t@unpack χ = param\n\n\tInew = χ * Iend^2\n\n\treturn StateCompact2(I0=Inew)\nend ","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"If need, you can also do multiple dispatch on displaysim. This can also be used to add customisation.","category":"page"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"function displaysim(nyears::Int64,\n    sp::StateParam0,\n    param::ParamCompact1Strain;\n    tp::TimeParam=TimeParam())\n    # simulate\n    mat = simule(nyears, sp, param)\n    simuleTime = 0:tp.Δt/tp.T:nyears\n\n    # plot I(t)\n    ## Custom plot for I with the first year\n    p1 = plot(mat[1, 1] ./ 365, mat[1, :I0], label=\"I(t)\", c=:black, linestyle=:solid)\n    ## Then plot other years\n    p1 = plot!(mat[2:end, 1] ./ 365, mat[2:end, :I0], label=false, c=:black, linestyle=:solid)\n    ## add stripes\n    p1 = plot!(simuleTime, isWinter(simuleTime, tp), fillrange=0, fillcolor=:lightgray, fillalpha=0.65, lw=0, label=\"winter\")\nend","category":"page"},{"location":"othermodels/#Make-your-simulation","page":"Implement your own models","title":"Make your simulation","text":"","category":"section"},{"location":"othermodels/","page":"Implement your own models","title":"Implement your own models","text":"sp = StateCompact2()\nparam = ParamCompact1Strain()\ntp = TimeParam()\ndisplaysim(5, sp, param, tp=tp)","category":"page"},{"location":"#Table-of-contents","page":"Home","title":"Table of contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"tutorial.md\", \"othermodels.md\", \"source.md\"]\nDepth = 2","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The package has been created and developed by Dylan Cormet, Ludovic Mailleret and Frédéric Grognard.","category":"page"},{"location":"#SeasonalEpid.jl","page":"Home","title":"SeasonalEpid.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"An open-source package written in Julia for seasonal plant epidemic modeling and simulations.","category":"page"},{"location":"#The-SeasonalEpid-Project","page":"Home","title":"The SeasonalEpid Project","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The SeasonalEpid Project aims to provide a modern framework to investigate epidemic models. I developped this Julia library to allow scientists to easily use and adapt different epidemics models.","category":"page"},{"location":"tutorial/#A-SeasonalEpid-tutorial","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"","category":"section"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"Pages = [\"tutorial.md\"]\nDepth = 4","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"SeasonalEpid allows the user to play with epidemics models. It is based on the Madden and van den Bosch (2002)'s model. Here is an elaborate model formed by four systems:","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"beginalign\nbeginaligned\n    left beginarrayl\n        dotP = - Lambda P \n        dotS = - Theta P S - beta S I \n        dotI = + Theta P S + beta S I - alpha I\n    endarray right\nendaligned\nbeginaligned\n    left beginarrayl\n        P(k T+tau^+) = P(k T+tau)+pi I(k T+tau) \n        S(k T+tau^+) = 0 \n        I(k T+tau^+) = 0\n    endarray right\nendaligned \nbeginaligned\n    left beginarrayl\n        dotP = - mu P \n        dotS = 0 \n        dotI = 0\n    endarray right\nendaligned\nbeginaligned\n    left beginarrayl\n        P((k + 1)T^+) = P((k + 1)T) \n        S((k + 1)T^+) = S_0 \n        I((k + 1)T^+) = 0\n    endarray right\nendaligned\nendalign","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"Top left system represents the growing season equations, top right system represents recurrence equation for initial condition when the winter season is starting, bottom left system represents the winter season equations and bottom right system represents recurrence equation for initial condition when the growing season is starting.","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"Here is a summary of the notations:","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"beginarrayll\nhline \ntext Label   text  Meaning  \nhline \nP  text  Primary inoculum density  \nS  text  Susceptible host plant density  \nI  text  Infected host plant density  \ntau  text  Growing season length (host plant is present)  \nT - tau  text  Winter season length (host plant is absent)  \nT  text  Year length  \nbeta  text  Secondary infection rate  \nTheta  text  Primary infection rate  \nalpha  text  Infected host plants removal rate  \npi  text  Conversion rate from I to P (at the end of the season)  \nmu  text  Winter season mortality rate of primary inoculum  \nLambda  text Primary inoculum density independent depletion rate  \nXi  text  Primary inoculum density dependent depletion rate  \nhline\nendarray","category":"page"},{"location":"tutorial/#Replicating-an-example","page":"A SeasonalEpid tutorial","title":"Replicating an example","text":"","category":"section"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"(Image: image)","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"In order to replicate this run, you can simply execute the following code.","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"using SeasonalEpid\nsp = StateElaborate()\nparam = ParamAirborneElaborate1Strain()\ntp = TimeParam()\ndisplaysim(5, sp, param, tp=tp)","category":"page"},{"location":"tutorial/#Modifying-parameters-of-the-model","page":"A SeasonalEpid tutorial","title":"Modifying parameters of the model","text":"","category":"section"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"If you want to change parameters, just fill arguments you want to modify in the adapted type. If you modify the number of states (like to simulate a compact model instead of an elaborate model), please make sur that you also modify types that depends on it.","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"For example, now we want to implement a soilborne compact model with a low conversion rate from I to P (denoted Pi). Here is the result:","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"(Image: image)","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"And the code to get it:","category":"page"},{"location":"tutorial/","page":"A SeasonalEpid tutorial","title":"A SeasonalEpid tutorial","text":"using SeasonalEpid\nsp = StateCompact()\nparam = ParamSoilborneCompact1Strain(Π=0.5)\ntp = TimeParam()\ndisplaysim(5, sp, param, tp=tp)","category":"page"}]
}
