using Documenter
using SeasonalEpid

makedocs(
    sitename = "SeasonalEpid",
    format = Documenter.HTML(
        prettyurls = get(ENV, "CI", nothing) == "true"),
    modules = [SeasonalEpid],
    pages=[
                "Home" => "index.md",
                "A SeasonalEpid tutorial" => "tutorial.md",
                "Source code documentation" => "source.md"
               ]
)

deploydocs(
    repo = "github.com/Dylan-Cmt/SeasonalEpid.jl.git",
)
