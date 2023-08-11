# A SeasonalEpid tutorial

```@contents
Pages = ["tutorial.md"]
Depth = 4
```

`SeasonalEpid` allows the user to play with epidemics models. It is based on theMadden and
van den Bosch (2002)'s model. Informally speaking, this model is formed by four systems:

$$\begin{align}
&\begin{aligned}
    &\left\{ \begin{array}{l}
        \dot{P} = - \Lambda P \\
        \dot{S} = - \Theta P S - \beta S I \\
        \dot{I} = + \Theta P S + \beta S I - \alpha I
    \end{array} \right.
\end{aligned}
&&\begin{aligned}
    &\left\{ \begin{array}{l}
        P(k T+\tau^{+}) = P(k T+\tau)+\pi I(k T+\tau) \\
        S(k T+\tau^{+}) = 0 \\
        I(k T+\tau^{+}) = 0
    \end{array} \right.
\end{aligned} \\
&\begin{aligned}
    &\left\{ \begin{array}{l}
        \dot{P} = - \mu P \\
        \dot{S} = 0 \\
        \dot{I} = 0
    \end{array} \right.
\end{aligned}
&&\begin{aligned}
    &\left\{ \begin{array}{l}
        P((k + 1)T^{+}) = P((k + 1)T) \\
        S((k + 1)T^{+}) = S_0 \\
        I((k + 1)T^{+}) = 0
    \end{array} \right.
\end{aligned}
\end{align}$$

Top left system represents the growing season equations, top right system represents recurrence equation for initial condition when the winter season is starting, bottom left system represents the winter season equations and bottom right system represents recurrence equation for initial condition when the growing season is starting.

Here is a summary of the notations:

$$\begin{array}{|l|l|}
\hline 
\text{ Label } & \text { Meaning } \\
\hline 
P & \text { Primary inoculum density } \\
S & \text { Susceptible host plant density } \\
I & \text { Infected host plant density } \\
\tau & \text { Growing season length (host plant is present) } \\
T - \tau & \text { Winter season length (host plant is absent) } \\
T & \text { Year length } \\
\beta & \text { Secondary infection rate } \\
\Theta & \text { Primary infection rate } \\
\alpha & \text { Infected host plants removal rate } \\
\pi & \text { Conversion rate from I to P (at the end of the season) } \\
\mu & \text { Winter season mortality rate of primary inoculum } \\
\Lambda & \text {Primary inoculum density independent depletion rate } \\
\Xi & \text { Primary inoculum density dependent depletion rate } \\
\hline
\end{array}$$

## Replicating an example

note à moi: pour enregistrer un plot il faut faire `savefig(plot_elab1str, "mon_plot.png")` par exemple. Puis pour affichier le plot ici comme exemple: voir sur WorldDynamics.jl

(Afficher ici un exemple de plot obtenu avec un modèle élaboré avec une souche airborne)

In order to replicate this run, you can simply execute the following code.

```
using SeasonalEpid
sp = StateElaborate()
param = ParamAirborneElaborate1Strain()
tp = TimeParam()
affiche(5, sp, param, tp=tp)
```

## Modifying parameters of the model

If you want to change parameters, just fill arguments you want to modify in the adapted type.
If you modify the number of states (like to simulate a compact model instead of an elaborate model), please make sur that you also modify types that depends on it.

For example, now we want to implement a soilborne compact model with a low conversion rate from I to P ($\Pi). So it gives:

```
using SeasonalEpid
sp = StateCompact()
param = ParamSoilborneCompact1Strain(Π=0.5)
tp = TimeParam()
affiche(5, sp, param, tp=tp)
```

## Implement your own models

A good feature of this package is that if you want to model something else, it's not complicated. Just follow this.

### Modify functions in `function.jl`

It will be useful to modify some functions if you want to change your model. Here is the things you have to re implement.

#### Model equations

- `GrowingSeason`: replace with your equations for the growing season.

- `WinterSeason` : replace with your equations for the winter season.

#### Computation of initial conditions

`winter`: replace with your initial conditions for the coming growing season.

`yeartransition`: replace with your initial conditions for the coming winter season.


### Modify parameters of your problem in `structs.jl`

#### Time parameters

`TimeParam`: Normaly there's nothing to change here. In fact, you can just enter your own time parameters when you construct the object.

#### Problem parameeters

You can modify the bioparameters here so they are in adequacy with the equations you entered above.