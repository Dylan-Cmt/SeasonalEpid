using Parameters, StaticArrays

"""
Stock all time variables.
"""
@with_kw struct TimeParam
    T::Float64 = 365
    @assert T > 0
    @assert T <= 365 # year length
    τ::Float64 = 184
    @assert τ <= T # crop season length
    Δt::Float64 = 0.1
    @assert Δt > 0 # step
    tspang::Tuple{Float64,Float64} = (0, τ) # tspan for growing
    tspanw::Tuple{Float64,Float64} = (τ, T) # tspan for winter	
end