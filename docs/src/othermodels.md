# Implement your own models

A good feature of this package is that if you want to model something else, it's not complicated. 

Here is an example about Allee Effects and the Evolution of Polymorphism in Cyclic Parthenogens, by Magda Castel, Ludovic Mailleret, Didier Andrivon, Virginie Ravigné, and Frédéric M. Hamelin ([2014]( http://www.jstor.org/stable/10.1086/674828)). We have the following compact model:

$$\begin{align*}
\dot{I} &= \beta (N - I) I \
I[(N+1)T] &= \chi I(N * T + \tau)^2
\end{align*}$$

Where:
- I is the infected host density
- N is the total host density
- β is secondary infection rate
- T is the length of one cycle
- τ is the time during which the host is present


So we use SeasonalEpid.jl:

```
using SeasonalEpid
```

## Modify and create parameters of your problem in `structs.jl`

### Time parameters

`TimeParam`: Normaly there's nothing to change here. In fact, you can just enter your own time parameters when you construct the object.

### Problem parameters

You can construct new types. Just make sure your new type inherits from the correct type. Also make sure the arguments of your functions are the right ones.

```
@with_kw struct ParamCompact1Strain{T<:Float64} <: Compact1Strain
    #  total host density
    N::T = 1.0 ; @assert N > 0
    # secondary infection rate
    β::T = 1.0 ; @assert β > 0
    χ::T = 1.0 ; @assert χ > 0

    # type of model and state number 
    isElaborate = false
    statelength = 1
end
```

```
@with_kw struct StateCompact2 <: StateParam0
    I0::Float64 = 0.01
    @assert I0 >= 0
    State0 = @SVector [I0]
end
```

## Modify functions in `functions.jl`

### Model equations

```
function GrowingSeason(State0::SVector,
						param::ParamCompact1Strain,
						t::Real)

	I = State0
	@unpack β, N = param
	
	dI = + β * (N-I) * I 
	@SVector [dI]
end 
```

### Computation of initial conditions

`yeartransition`: replace with your initial conditions for the coming winter season.

```
function yeartransition(res_end,
						param::ParamCompact1Strain;
						tp::TimeParam=TimeParam())
	Iend = res_end
	@unpack χ = param

	Inew = χ * Iend^2

	return StateCompact2(I0=Inew)
end 
```

## Make your simulation

```
sp = StateCompact2()
param = ParamCompact1Strain()
tp = TimeParam()
displaysim(5, sp, param, tp=tp)
```