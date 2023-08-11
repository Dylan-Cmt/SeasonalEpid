using Documenter
using SeasonalEpid

makedocs(
    sitename = "SeasonalEpid",
    format = Documenter.HTML(
        prettyurls = get(ENV, "CI", nothing) == "true"),
    modules = [SeasonalEpid]
)

deploydocs(
    repo = "github.com/Dylan-Cmt/SeasonalEpid.jl.git",
)
